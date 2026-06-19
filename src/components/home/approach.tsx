import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal';

import { ArrowUpRight, Compass, Trees, Waves } from 'lucide-react';

const SERVICES = [
    {
        index: '01',
        icon: Trees,
        title: 'Landscapes',
        body: 'We prioritize beauty and sustainability to achieve award-winning results. Find new inspiration today.',
        image: '/gallery/card-landscapes.webp',
        alt: 'Natural stone patio surrounded by gardens'
    },
    {
        index: '02',
        icon: Compass,
        title: 'Design',
        body: 'Naturally refined landscape architecture. We handle the design, permits, and planning of your dream project.',
        image: '/gallery/card-design.webp',
        alt: 'Aerial view of a landscaped waterfront garden'
    },
    {
        index: '03',
        icon: Waves,
        title: 'Shorelines',
        body: "Discover why we are Southern Ontario's only award-winning shoreline contractor. A distinctively different approach.",
        image: '/gallery/card-shorelines.webp',
        alt: 'Granite steps leading down to a waterfront dock'
    }
];

const Approach = () => {
    return (
        <section className='bg-secondary/40 border-border/60 border-y'>
            <div className='mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32'>
                {/* Editorial header */}
                <div className='grid items-end gap-8 lg:grid-cols-12'>
                    <div className='lg:col-span-7'>
                        <Reveal variant='left' className='text-muted-foreground flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase'>
                            <span className='bg-primary h-px w-8' />
                            What We Offer
                        </Reveal>
                        <Reveal variant='blur' delay={80}>
                            <h2 className='font-display text-foreground mt-5 text-4xl leading-[1.04] font-light tracking-tight sm:text-5xl lg:text-6xl'>
                                A Distinctively <span className='text-primary italic'>Different</span> Approach
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal variant='right' delay={160} className='lg:col-span-5 lg:pb-2'>
                        <p className='text-muted-foreground leading-relaxed'>
                            Multi-disciplinary architectural design, landscaping, and shoreline contracting — crafted
                            with your specific needs in mind. We blend natural elements with organic materials to create
                            sustainable outdoor living spaces inspired by water.
                        </p>
                    </Reveal>
                </div>

                {/* Cards */}
                <div className='mt-16 grid gap-6 md:grid-cols-3'>
                    {SERVICES.map(({ index, icon: Icon, title, body, image, alt }, i) => (
                        <Reveal key={title} variant='scale' delay={i * 140}>
                            <Link href='/portfolio' className='group block'>
                                {/* Image with overlaid index + title */}
                                <div className='relative aspect-[4/5] overflow-hidden'>
                                    <Image
                                        src={image}
                                        alt={alt}
                                        fill
                                        sizes='(max-width: 768px) 100vw, 33vw'
                                        className='object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-105'
                                    />
                                    <div className='from-foreground/85 absolute inset-0 bg-gradient-to-t via-transparent to-transparent' />
                                    <span className='absolute top-5 left-5 font-mono text-xs tracking-[0.2em] text-white/70'>
                                        / {index}
                                    </span>
                                    <div className='absolute right-5 bottom-5 left-5 flex items-end justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <Icon className='size-6 text-white' />
                                            <h3 className='font-display text-3xl font-normal text-white'>{title}</h3>
                                        </div>
                                        <span className='flex size-10 items-center justify-center border border-white/30 text-white transition-colors duration-500 group-hover:bg-white group-hover:text-[#16241b]'>
                                            <ArrowUpRight className='size-4' />
                                        </span>
                                    </div>
                                </div>
                                {/* Body */}
                                <div className='border-border/60 border-t pt-5'>
                                    <p className='text-muted-foreground text-sm leading-relaxed'>{body}</p>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Approach;
