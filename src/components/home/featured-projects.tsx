import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal';

import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
    {
        title: 'Cedar Point Restoration',
        tags: ['Georgian Bay', 'Shoreline Protection', 'Armour Stone'],
        image: { src: '/gallery/shoreline.webp', alt: 'Aerial view of a restored Georgian Bay shoreline' }
    },
    {
        title: 'Stillwater Estate',
        tags: ['Muskoka', 'Landscape Architecture', 'Stonework'],
        image: { src: '/gallery/design-patio.webp', alt: 'Lakeside stone patio with gardens at golden hour' }
    },
    {
        title: 'The Bluffs',
        tags: ['Collingwood', 'Design', '3D Rendering', 'Build'],
        image: { src: '/gallery/waterfall.webp', alt: 'Custom water feature set amongst ferns and forest' }
    }
];

/**
 * Selected work as a hairline-divided card row: image, uppercase title, tag
 * pills and a view-project link per cell.
 */
const FeaturedProjects = () => {
    return (
        <section className='py-24 sm:py-32'>
            <div className='mx-auto w-full max-w-7xl px-5 sm:px-8'>
                <div className='flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
                    <Reveal variant='blur'>
                        <h2 className='font-editorial text-foreground text-3xl leading-[1.04] tracking-tight sm:text-4xl lg:text-6xl'>
                            Selected <span className='font-display text-primary font-light italic'>work</span>
                        </h2>
                    </Reveal>
                    <Reveal variant='up' delay={160}>
                        <Link href='/portfolio' className='group text-foreground inline-flex items-center gap-2 text-sm'>
                            <span className='link-line'>View all projects</span>
                            <ArrowUpRight className='size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                        </Link>
                    </Reveal>
                </div>

                <Reveal delay={120}>
                    <div className='border-border/70 divide-border/70 mt-14 grid divide-y border-y lg:grid-cols-3 lg:divide-x lg:divide-y-0'>
                        {PROJECTS.map(({ title, tags, image }, i) => (
                            <Link
                                key={title}
                                href='/portfolio'
                                className='group hover:bg-secondary/40 flex h-full flex-col py-8 transition-colors duration-500 lg:p-8'>
                                <Reveal
                                    variant='media'
                                    delay={i * 120}
                                    className='relative aspect-[4/3] overflow-hidden'>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes='(max-width: 1024px) 100vw, 33vw'
                                        className='object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]'
                                    />
                                </Reveal>
                                <h3 className='text-foreground mt-7 text-sm font-medium tracking-[0.08em] uppercase'>
                                    {title}
                                </h3>
                                <div className='mt-4 flex flex-wrap gap-2'>
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className='border-border text-muted-foreground border px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className='text-foreground mt-auto inline-flex items-center gap-1.5 pt-7 font-mono text-xs tracking-wider uppercase'>
                                    View Project
                                    <ArrowUpRight className='size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                                </span>
                            </Link>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default FeaturedProjects;
