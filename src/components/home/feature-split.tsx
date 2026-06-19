import type { ComponentType } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Parallax from '@/components/parallax';
import Reveal from '@/components/reveal';
import { cn } from '@/lib/utils';

import { ArrowUpRight } from 'lucide-react';

type FeatureSplitProps = {
    index: string;
    eyebrow: string;
    eyebrowIcon: ComponentType<{ className?: string }>;
    title: string;
    titleAccent: string;
    paragraphs: string[];
    image: { src: string; alt: string };
    /** Floating caption chip on the image. */
    tag?: string;
    href?: string;
    cta?: string;
    reverse?: boolean;
};

/**
 * Editorial image + text feature block. Asymmetric grid, oversized outlined
 * index, parallax image and a floating caption — built to feel bespoke.
 */
const FeatureSplit = ({
    index,
    eyebrow,
    eyebrowIcon: EyebrowIcon,
    title,
    titleAccent,
    paragraphs,
    image,
    tag,
    href = '/portfolio',
    cta = 'Explore More',
    reverse = false
}: FeatureSplitProps) => {
    return (
        <section className='mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28'>
            <div className='grid items-center gap-x-12 gap-y-10 lg:grid-cols-12 lg:gap-x-20'>
                {/* Image */}
                <Reveal
                    variant='media'
                    className={cn(
                        'relative aspect-[4/5] overflow-hidden rounded-[1.25rem] lg:col-span-7',
                        reverse ? 'lg:order-2 lg:col-start-6' : 'lg:col-start-1'
                    )}>
                    <Parallax strength={46} className='absolute inset-x-0 -top-[12%] h-[124%]'>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes='(max-width: 1024px) 100vw, 58vw'
                            className='object-cover'
                        />
                    </Parallax>
                    {tag && (
                        <div className='absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-[#0e1a13]/55 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-sm'>
                            <span className='bg-primary size-1.5 rounded-full' />
                            {tag}
                        </div>
                    )}
                </Reveal>

                {/* Text */}
                <div className={cn('lg:col-span-5', reverse ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-8')}>
                    <Reveal variant='left' className='flex items-center gap-4'>
                        <span
                            className='font-display text-5xl leading-none text-transparent sm:text-6xl'
                            style={{ WebkitTextStroke: '1px var(--color-primary)' }}>
                            {index}
                        </span>
                        <span className='bg-border h-px flex-1' />
                        <span className='text-muted-foreground flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase'>
                            <EyebrowIcon className='text-primary size-4' />
                            {eyebrow}
                        </span>
                    </Reveal>

                    <Reveal variant='blur' delay={80}>
                        <h2 className='font-display text-foreground mt-7 text-4xl leading-[1.06] font-light tracking-tight sm:text-5xl'>
                            {title} <span className='text-primary italic'>{titleAccent}</span>
                        </h2>
                    </Reveal>

                    <div className='mt-6 space-y-4'>
                        {paragraphs.map((p, i) => (
                            <Reveal key={i} variant='up' delay={160 + i * 90}>
                                <p className='text-muted-foreground leading-relaxed'>{p}</p>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal variant='scale' delay={160 + paragraphs.length * 90} className='mt-8 flex items-center gap-5'>
                        <Link
                            href={href}
                            className='group text-foreground inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase'>
                            <span className='border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground flex size-11 items-center justify-center rounded-full border transition-colors'>
                                <ArrowUpRight className='size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                            </span>
                            {cta}
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default FeatureSplit;
