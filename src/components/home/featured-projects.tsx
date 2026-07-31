'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal';
import { cn } from '@/lib/utils';

import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
    {
        index: '01',
        location: 'Georgian Bay, ON',
        title: 'Cedar Point',
        accent: 'Restoration',
        scope: 'Shoreline Protection · Armour Stone',
        image: { src: '/gallery/shoreline.webp', alt: 'Aerial view of a restored Georgian Bay shoreline' },
        body: 'A weathered, eroding shoreline rebuilt with hand-placed armour stone and native plantings, restoring both structural stability and a natural water’s edge that stands up to ice, wave uprush and rising water.'
    },
    {
        index: '02',
        location: 'Muskoka, ON',
        title: 'Stillwater Estate',
        accent: 'Landscape',
        scope: 'Landscape Architecture · Stonework',
        image: { src: '/gallery/design-patio.webp', alt: 'Lakeside stone patio with gardens at golden hour' },
        body: 'A sweeping lakeside terrace of natural stone, layered gardens and quiet gathering spaces, designed to draw the eye toward the water at every turn, with sustainable, permeable materials throughout.'
    },
    {
        index: '03',
        location: 'Collingwood, ON',
        title: 'The Bluffs',
        accent: 'Design & Build',
        scope: 'Design · 3D Rendering · Build',
        image: { src: '/gallery/waterfall.webp', alt: 'Custom water feature set amongst ferns and forest' },
        body: 'From hand-drawn concept to Dynascape 3D rendering to finished build. A bespoke water feature and woodland garden delivered end to end, planned to feel effortless and entirely at home in its surroundings.'
    }
];

const DURATION = 7000;

/**
 * Featured Projects — a single-viewport portfolio teaser. One section that
 * cross-fades between projects with tab + arrow navigation and gentle autoplay.
 */
const FeaturedProjects = () => {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const go = (i: number) => setActive((i + PROJECTS.length) % PROJECTS.length);

    useEffect(() => {
        if (paused) return;
        const id = window.setTimeout(() => setActive((i) => (i + 1) % PROJECTS.length), DURATION);

        return () => window.clearTimeout(id);
    }, [active, paused]);

    const project = PROJECTS[active];

    return (
        <section
            className='relative flex min-h-[100svh] flex-col justify-center py-24 sm:py-28'
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}>
            <div className='mx-auto w-full max-w-7xl px-5 sm:px-8'>
                {/* Header */}
                <div className='flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
                    <Reveal variant='blur'>
                        <h2 className='font-display text-foreground text-4xl leading-[1.04] font-light tracking-tight sm:text-5xl lg:text-6xl'>
                            Selected <span className='text-primary italic'>work</span>
                        </h2>
                    </Reveal>
                    <Reveal variant='up' delay={160}>
                        <Link href='/portfolio' className='group text-foreground inline-flex items-center gap-2 text-sm'>
                            <span className='link-line'>View all projects</span>
                            <ArrowUpRight className='size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                        </Link>
                    </Reveal>
                </div>

                {/* Showcase — image bleeds wide, details panel overlaps it */}
                <div className='mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-0'>
                    {/* Image stack (cross-fade) */}
                    <Reveal
                        variant='media'
                        className='relative aspect-[16/11] overflow-hidden lg:col-start-1 lg:col-end-9 lg:row-start-1'>
                        {PROJECTS.map((p, i) => (
                            <Image
                                key={p.index}
                                src={p.image.src}
                                alt={p.image.alt}
                                fill
                                sizes='(max-width: 1024px) 100vw, 66vw'
                                className={cn(
                                    'object-cover transition-all duration-[1.1s] ease-out',
                                    i === active ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                                )}
                            />
                        ))}
                    </Reveal>

                    {/* Details (re-keyed for a soft transition per project) */}
                    <div className='relative z-10 lg:col-start-8 lg:col-end-13 lg:row-start-1'>
                        <div key={active} className='project-detail bg-background relative lg:p-10'>
                            <span
                                aria-hidden
                                className='font-display text-primary/10 pointer-events-none absolute -top-4 right-0 text-8xl leading-none font-light select-none lg:top-4 lg:right-6'>
                                {project.index}
                            </span>
                            <p className='font-display text-muted-foreground text-lg italic'>{project.location}</p>
                            <h3 className='font-display text-foreground mt-3 text-4xl leading-[1.04] font-light tracking-tight sm:text-5xl'>
                                {project.title} <span className='text-primary italic'>{project.accent}</span>
                            </h3>
                            <p className='text-muted-foreground/80 mt-4 font-mono text-xs tracking-wide'>
                                {project.scope}
                            </p>
                            <p className='text-muted-foreground mt-5 leading-relaxed'>{project.body}</p>
                            <Link
                                href='/portfolio'
                                className='group text-foreground mt-6 inline-flex items-center gap-2 text-sm'>
                                <span className='link-line'>View project</span>
                                <ArrowUpRight className='size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className='border-border/60 mt-12 flex items-center justify-between border-t pt-6'>
                    <div className='flex items-center gap-6 sm:gap-10'>
                        {PROJECTS.map((p, i) => (
                            <button
                                key={p.index}
                                onClick={() => go(i)}
                                className='group flex items-center gap-3 text-left'
                                aria-label={`View ${p.title}`}>
                                <span
                                    className={cn(
                                        'font-mono text-xs tracking-widest transition-colors',
                                        i === active ? 'text-primary' : 'text-muted-foreground/50 group-hover:text-foreground'
                                    )}>
                                    {p.index}
                                </span>
                                <span className='relative hidden h-px w-10 overflow-hidden bg-border sm:block'>
                                    {i === active && (
                                        <span
                                            key={`${active}-${paused}`}
                                            className='bg-primary absolute inset-0 origin-left'
                                            style={{
                                                animation: paused ? 'none' : `progressBar ${DURATION}ms linear forwards`
                                            }}
                                        />
                                    )}
                                </span>
                                <span
                                    className={cn(
                                        'hidden text-sm transition-colors md:inline',
                                        i === active ? 'text-foreground' : 'text-muted-foreground/60 group-hover:text-foreground'
                                    )}>
                                    {p.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className='flex items-center gap-3'>
                        <span className='text-muted-foreground font-mono text-xs tracking-widest'>
                            {project.index} <span className='text-muted-foreground/40'>/ 0{PROJECTS.length}</span>
                        </span>
                        <button
                            onClick={() => go(active - 1)}
                            aria-label='Previous project'
                            className='border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary flex size-10 items-center justify-center border transition-colors'>
                            <ArrowLeft className='size-4' />
                        </button>
                        <button
                            onClick={() => go(active + 1)}
                            aria-label='Next project'
                            className='border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary flex size-10 items-center justify-center border transition-colors'>
                            <ArrowRight className='size-4' />
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .project-detail { animation: detailIn 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
                @keyframes detailIn {
                    from { opacity: 0; transform: translateY(14px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes progressBar {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .project-detail { animation: none; }
                }
            `}</style>
        </section>
    );
};

export default FeaturedProjects;
