'use client';

import { useEffect, useRef, useState } from 'react';

import { BargingIcon, BuildingIcon, DredgingIcon } from '@/components/home/service-icons';

const RAY_COUNT = 8;
const SEGMENTS = 16;
const R = 456.5;

/** Radius of the icon orbit, as a fraction of the wheel size. */
const ORBIT_RADIUS = 0.45;

/** Icons sit halfway between rays (rays fall every 45°) so they never cover a line. */
const ORBIT_OFFSET = 22.5;

/** Total wheel rotation across the full scroll — one full circle per chapter. */
const TOTAL_ROTATION = 1080;

/** Beats within a chapter's circle: title at the start, then the subtitle,
    then the reading text — each earned with its own stretch of scroll. */
const SERIF_AT = 0.4;
const BODY_AT = 0.72;

const PHASES = [
    {
        icon: DredgingIcon,
        title: 'Dredging',
        serif: 'Ponds & lakefronts',
        body: 'Restore depth and clarity with precision dredging.'
    },
    {
        icon: BargingIcon,
        title: 'Barging',
        serif: 'Water-access properties',
        body: 'Reliable barging and marine logistics on your schedule.'
    },
    {
        icon: BuildingIcon,
        title: 'Building',
        serif: 'Shorelines & structures',
        body: 'Waterfront construction, built to last a lifetime.'
    }
] as const;

const EASE = 'cubic-bezier(0.17, 0.84, 0.44, 1)';

/**
 * Scroll instrument: a long pinned scene that steps through the marine
 * services. A compass of rays rotates with scroll and bends into a spiral
 * while you move; the service icons orbit between the rays. Each chapter
 * lands in two beats — icon and title first, the subtitle and reading text
 * only well past the midpoint. Desktop only — the services index in the
 * section above carries the content on smaller screens.
 */
const WaterWheel = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const wheelRef = useRef<HTMLDivElement>(null);
    const rayRefs = useRef<(SVGPathElement | null)[]>([]);
    const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const stateRef = useRef({ phase: 0, showSerif: false, showBody: false });
    const [{ phase, showSerif, showBody }, setDisplay] = useState(stateRef.current);

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let rotation = 0;
        let raf = 0;

        const tick = () => {
            raf = requestAnimationFrame(tick);
            const section = sectionRef.current;
            if (!section) return;
            const rect = section.getBoundingClientRect();
            const progress = Math.min(1, Math.max(0, -rect.top / (rect.height - window.innerHeight)));

            // The hub follows scroll on a soft spring; the gap between target and
            // hub is what bends the rays.
            const target = progress * TOTAL_ROTATION;
            rotation = reduced ? target : rotation + (target - rotation) * 0.06;
            const lag = Math.max(-50, Math.min(50, target - rotation));

            if (wheelRef.current) {
                wheelRef.current.style.transform = `rotate(${rotation}deg)`;
            }

            // Redraw each ray as a polyline whose outer points trail the hub
            // quadratically — a spiral under motion, straight at rest.
            const lagRad = (lag * Math.PI) / 180;
            rayRefs.current.forEach((path, i) => {
                if (!path) return;
                const base = (i * 2 * Math.PI) / RAY_COUNT;
                let d = `M${R},${R}`;
                for (let j = 1; j <= SEGMENTS; j++) {
                    const t = j / SEGMENTS;
                    const angle = base - lagRad * t * t;
                    d += ` L${(R + R * t * Math.sin(angle)).toFixed(1)},${(R - R * t * Math.cos(angle)).toFixed(1)}`;
                }
                path.setAttribute('d', d);
            });

            // Icons ride the same spiral near its outer edge, kept upright.
            iconRefs.current.forEach((el, i) => {
                if (!el) return;
                const angle = ORBIT_OFFSET + i * (360 / PHASES.length) + rotation - lag * 0.8;
                el.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-${ORBIT_RADIUS * 80}vh) rotate(${-angle}deg)`;
            });

            // Each chapter lands in three beats across its circle: icon and title
            // first, then the subtitle, then the reading text.
            const next = Math.min(PHASES.length - 1, Math.floor(progress * PHASES.length));
            const chapterProgress = progress * PHASES.length - next;
            const nextShowSerif = chapterProgress > SERIF_AT;
            const nextShowBody = chapterProgress > BODY_AT;
            if (
                next !== stateRef.current.phase ||
                nextShowSerif !== stateRef.current.showSerif ||
                nextShowBody !== stateRef.current.showBody
            ) {
                stateRef.current = { phase: next, showSerif: nextShowSerif, showBody: nextShowBody };
                setDisplay(stateRef.current);
            }
        };
        raf = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <section ref={sectionRef} className='relative hidden h-[900vh] bg-[#0e1a13] lg:block'>
            <div className='sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden'>
                {/* Compass rays, fading out towards the centre so the type stays clear. */}
                <div
                    ref={wheelRef}
                    aria-hidden
                    className='pointer-events-none absolute top-1/2 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 will-change-transform'>
                    <svg viewBox='0 0 913 913' fill='none' className='h-full w-full'>
                        <defs>
                            <radialGradient id='wheel-fade' cx={R} cy={R} r={R} gradientUnits='userSpaceOnUse'>
                                <stop offset='0.16' stopColor='white' stopOpacity='0' />
                                <stop offset='1' stopColor='white' stopOpacity='1' />
                            </radialGradient>
                            <mask id='wheel-mask' maskUnits='userSpaceOnUse' x='0' y='0' width='913' height='913'>
                                <rect width='913' height='913' fill='url(#wheel-fade)' />
                            </mask>
                        </defs>
                        <g mask='url(#wheel-mask)' stroke='white' strokeWidth='0.94' opacity='0.28'>
                            {Array.from({ length: RAY_COUNT }).map((_, i) => {
                                const a = (i * 2 * Math.PI) / RAY_COUNT;

                                return (
                                    <path
                                        key={i}
                                        ref={(el) => {
                                            rayRefs.current[i] = el;
                                        }}
                                        fill='none'
                                        d={`M${R},${R} L${R + R * Math.sin(a)},${R - R * Math.cos(a)}`}
                                    />
                                );
                            })}
                        </g>
                    </svg>
                </div>

                {/* Orbiting service icons, set between the rays; the active
                    chapter's icon brightens. */}
                <div aria-hidden className='pointer-events-none absolute top-1/2 left-1/2'>
                    {PHASES.map(({ icon: Icon }, i) => (
                        <span
                            key={i}
                            ref={(el) => {
                                iconRefs.current[i] = el;
                            }}
                            className='absolute'
                            style={{
                                transform: `translate(-50%, -50%) rotate(${ORBIT_OFFSET + i * 120}deg) translateY(-${ORBIT_RADIUS * 80}vh) rotate(${-(ORBIT_OFFSET + i * 120)}deg)`
                            }}>
                            <Icon
                                className={`size-9 transition-colors duration-700 ${phase === i ? 'text-white' : 'text-white/35'}`}
                            />
                        </span>
                    ))}
                </div>

                {/* Chapter stack: the icon leads, the title swaps through a line mask
                    (with descender headroom), and the serif subtitle + reading text
                    follow on the second beat. Outgoing lines fade fast so a skipped
                    chapter never ghosts through the centre. */}
                {PHASES.map(({ icon: Icon, title, serif, body }, i) => {
                    const parked = Math.abs(phase - i) > 1;
                    const leave = i < phase;

                    return (
                        <div
                            key={i}
                            className='pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center'
                            aria-hidden={phase !== i}>
                            <Icon
                                className={`size-10 text-white/85 ${
                                    phase === i ? 'translate-y-0 opacity-100' : leave ? '-translate-y-4 opacity-0' : 'translate-y-4 opacity-0'
                                }`}
                                style={{
                                    transition: parked ? 'none' : `transform 700ms ${EASE}, opacity 350ms ease`
                                }}
                            />
                            <h2 className='font-editorial mt-5 w-full text-[4.2vw] leading-[0.9] text-white'>
                                {/* Padding + negative margin give descenders room inside the clip. */}
                                <span className='-mb-[0.18em] block overflow-hidden pb-[0.18em]'>
                                    <span
                                        className={`block ${
                                            phase === i
                                                ? 'translate-y-0 opacity-100'
                                                : leave
                                                  ? '-translate-y-[135%] opacity-0'
                                                  : 'translate-y-[135%] opacity-0'
                                        }`}
                                        style={{
                                            transition: parked
                                                ? 'none'
                                                : `transform 700ms ${EASE} 60ms, opacity 350ms ease ${phase === i ? '210ms' : '0ms'}`
                                        }}>
                                        {title}
                                    </span>
                                </span>
                            </h2>
                            <p
                                className={`font-display mt-6 text-xl text-white/70 lg:text-2xl ${
                                    phase === i && showSerif ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                }`}
                                style={{ transition: `transform 800ms ${EASE}, opacity 500ms ease` }}>
                                {serif}
                            </p>
                            <p
                                className={`mx-auto mt-5 max-w-sm text-sm leading-relaxed text-white/60 ${
                                    phase === i && showBody ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                }`}
                                style={{ transition: `transform 800ms ${EASE}, opacity 500ms ease` }}>
                                {body}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WaterWheel;
