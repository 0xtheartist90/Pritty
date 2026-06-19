'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';

const PROJECTS = [
    {
        index: '01',
        location: 'Georgian Bay, ON',
        title: 'Cedar Point',
        accent: 'Restoration',
        scope: 'Shoreline Protection · Armour Stone',
        image: { src: '/gallery/shoreline.webp', alt: 'Aerial view of a restored Georgian Bay shoreline' },
        body: 'A weathered, eroding shoreline rebuilt with hand-placed armour stone and native plantings — restoring both structural stability and a natural water’s edge that withstands ice, wave uprush and rising water levels.'
    },
    {
        index: '02',
        location: 'Muskoka, ON',
        title: 'Stillwater Estate',
        accent: 'Landscape',
        scope: 'Landscape Architecture · Stonework',
        image: { src: '/gallery/design-patio.webp', alt: 'Lakeside stone patio with gardens at golden hour' },
        body: 'A sweeping lakeside terrace of natural stone, layered gardens and quiet gathering spaces — designed to draw the eye toward the water at every turn, with sustainable, permeable materials throughout.'
    },
    {
        index: '03',
        location: 'Collingwood, ON',
        title: 'The Bluffs',
        accent: 'Design & Build',
        scope: 'Design · 3D Rendering · Build',
        image: { src: '/gallery/waterfall.webp', alt: 'Custom water feature set amongst ferns and forest' },
        body: 'From hand-drawn concept to Dynascape 3D rendering to finished build — a bespoke water feature and woodland garden delivered end to end, planned to feel effortless and entirely at home in its surroundings.'
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
                    <div>
                        <Reveal
                            variant='left'
                            className='text-muted-foreground flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase'>
                            <span className='bg-primary h-px w-8' />
                            Selected Work
                        </Reveal>
                        <Reveal variant='blur' delay={80}>
                            <h2 className='font-display text-foreground mt-5 text-4xl leading-[1.04] font-light tracking-tight sm:text-5xl lg:text-6xl'>
                                Recent Waterfront <span className='text-primary italic'>Transformations</span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal variant='scale' delay={160}>
                        <Link
                            href='/portfolio'
                            className='group text-foreground inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase'>
                            View All Projects
                            <ArrowUpRight className='size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                        </Link>
                    </Reveal>
                </div>

                {/* Showcase */}
                <div className='mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-16'>
                    {/* Image stack (cross-fade) */}
                    <Reveal variant='media' className='relative aspect-[16/11] overflow-hidden lg:col-span-7'>
                        {PROJECTS.map((p, i) => (
                            <Image
                                key={p.index}
                                src={p.image.src}
                                alt={p.image.alt}
                                fill
                                sizes='(max-width: 1024px) 100vw, 58vw'
                                className={cn(
                                    'object-cover transition-all duration-[1.1s] ease-out',
                                    i === active ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                                )}
                            />
                        ))}
                        <div className='absolute bottom-5 left-5 flex items-center gap-2 bg-[#0e1a13]/55 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-sm'>
                            <span className='bg-primary size-1.5 rounded-full' />
                            {project.scope}
                        </div>
                    </Reveal>

                    {/* Details (re-keyed for a soft transition per project) */}
                    <div className='lg:col-span-5'>
                        <div key={active} className='project-detail'>
                            <div className='text-muted-foreground flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase'>
                                <MapPin className='text-primary size-4' />
                                {project.location}
                            </div>
                            <h3 className='font-display text-foreground mt-5 text-4xl leading-[1.04] font-light tracking-tight sm:text-5xl'>
                                {project.title} <span className='text-primary italic'>{project.accent}</span>
                            </h3>
                            <p className='text-muted-foreground mt-6 leading-relaxed'>{project.body}</p>
                            <Button asChild variant='link' className='text-foreground mt-6 h-auto p-0 text-sm tracking-wide uppercase'>
                                <Link href='/portfolio'>
                                    View Project <ArrowUpRight className='size-4' />
                                </Link>
                            </Button>
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
