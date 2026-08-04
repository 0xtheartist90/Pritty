'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { DesignIcon, LandscapesIcon, ShorelinesIcon } from '@/components/home/service-icons';
import Reveal from '@/components/reveal';

import { ArrowUpRight } from 'lucide-react';

const COLS = 5;
const EASE = 'cubic-bezier(0.17, 0.84, 0.44, 1)';

const SERVICES = [
    {
        icon: LandscapesIcon,
        title: 'Landscapes',
        accent: 'rooted in place',
        body: 'Beauty and sustainability, held to an award-winning standard. Gardens, stonework and outdoor rooms that feel like they have always belonged to the land.',
        image: '/gallery/card-landscapes.webp',
        alt: 'Natural stone patio surrounded by gardens'
    },
    {
        icon: DesignIcon,
        title: 'Design',
        accent: 'from first sketch',
        body: 'Naturally refined landscape architecture. We carry the design, permits and planning of your project from the first drawing to the final stone.',
        image: '/gallery/card-design.webp',
        alt: 'Aerial view of a landscaped waterfront garden'
    },
    {
        icon: ShorelinesIcon,
        title: 'Shorelines',
        accent: 'built for water',
        body: "Southern Ontario's only award-winning shoreline contractor. Armour stone, breakwalls and living edges that hold their ground against ice and wave.",
        image: '/gallery/card-shorelines.webp',
        alt: 'Granite steps leading down to a waterfront dock'
    }
];

/** The text layer of one panel, shared by both the pinned and flowing variants. */
const PanelContent = ({
    service,
    active
}: {
    service: (typeof SERVICES)[number];
    active: boolean;
}) => {
    const { icon: Icon, title, accent, body } = service;

    return (
        <div className='relative z-10 flex h-full w-full flex-col justify-between px-5 pt-28 pb-9 sm:px-8 sm:pt-32 lg:px-10'>
            <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-14'>
                <h3 className='font-editorial text-[13.5vw] leading-[0.85] text-white sm:text-6xl lg:text-[4.5vw]'>
                    {/* Each line rises out of its own mask once the panel has landed. */}
                    {[title, accent].map((line, j) => (
                        <span key={line} className='-mb-[0.18em] block overflow-hidden pb-[0.18em]'>
                            {/* Parked lines sit well past the mask's descender padding
                                (and at opacity 0) so no sliver ever peeks through. */}
                            <span
                                className={`block ${j === 1 ? 'font-display' : ''} ${active ? 'translate-y-0 opacity-100' : 'translate-y-[135%] opacity-0'}`}
                                style={{
                                    transition: `transform 900ms ${EASE} ${active ? 250 + j * 90 : 0}ms, opacity 350ms ease ${active ? 250 + j * 90 : 0}ms`
                                }}>
                                {line}
                            </span>
                        </span>
                    ))}
                </h3>
                <div
                    className={`max-w-xs lg:pt-3 ${active ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                    style={{ transition: `transform 900ms ${EASE} 380ms, opacity 600ms ease 380ms` }}>
                    <Icon className='size-12 text-white/85 sm:size-14' />
                    <p className='mt-6 text-sm leading-relaxed text-white/80'>{body}</p>
                    <Link href='/portfolio' className='group mt-6 inline-flex items-center gap-2 text-sm text-white'>
                        <span className='link-line'>Explore {title.toLowerCase()}</span>
                        <ArrowUpRight className='size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const PanelImage = ({ service, priority }: { service: (typeof SERVICES)[number]; priority?: boolean }) => (
    <>
        <Image src={service.image} alt={service.alt} fill sizes='100vw' className='object-cover' priority={priority} />
        <div className='absolute inset-0 bg-[#0e1a13]/15' />
        <div className='absolute inset-0 bg-gradient-to-b from-[#0e1a13]/60 via-[#0e1a13]/5 to-[#0e1a13]/25' />
    </>
);

/**
 * The services as one pinned scene: each incoming panel builds over the
 * previous one in five vertical blocks — the reveal language of the project
 * grid, driven by scroll instead of a whole section sliding up. On smaller
 * screens the panels flow as calm full-screen frames instead.
 */
const ApproachPanels = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const activeRef = useRef(0);
    const [active, setActive] = useState(0);

    useEffect(() => {
        let raf = 0;
        const tick = () => {
            raf = requestAnimationFrame(tick);
            const section = sectionRef.current;
            if (!section) return;
            const rect = section.getBoundingClientRect();
            const progress = Math.min(1, Math.max(0, -rect.top / (rect.height - window.innerHeight)));
            const next = Math.min(SERVICES.length - 1, Math.floor(progress * SERVICES.length));
            if (next !== activeRef.current) {
                activeRef.current = next;
                setActive(next);
            }
        };
        raf = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <>
            {/* Pinned block-reveal scene (desktop). */}
            <section ref={sectionRef} className='relative hidden h-[350vh] lg:block'>
                <div className='sticky top-0 h-screen overflow-hidden bg-[#0e1a13]'>
                    {SERVICES.map((service, i) => {
                        const revealed = active >= i;

                        return (
                            <div key={service.title} className='absolute inset-0'>
                                {i === 0 ? (
                                    <PanelImage service={service} priority />
                                ) : (
                                    // The image arrives as five column slices, each clipped
                                    // strip sliding open with its own stagger.
                                    Array.from({ length: COLS }).map((_, j) => (
                                        <div
                                            key={j}
                                            className='absolute inset-0'
                                            style={{
                                                clipPath: revealed
                                                    ? `inset(0% ${100 - ((j + 1) * 100) / COLS}% 0% ${(j * 100) / COLS}%)`
                                                    : `inset(100% ${100 - ((j + 1) * 100) / COLS}% 0% ${(j * 100) / COLS}%)`,
                                                transition: `clip-path 1000ms ${EASE} ${revealed ? j * 90 : (COLS - 1 - j) * 60}ms`
                                            }}>
                                            <PanelImage service={service} />
                                        </div>
                                    ))
                                )}
                                <PanelContent service={service} active={active === i} />
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Flowing full-screen frames (mobile / tablet). */}
            <div className='lg:hidden'>
                {SERVICES.map((service, i) => (
                    <div key={service.title} className='relative flex min-h-[100svh] overflow-hidden'>
                        <PanelImage service={service} priority={i === 0} />
                        <Reveal className='w-full'>
                            <PanelContent service={service} active />
                        </Reveal>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ApproachPanels;
