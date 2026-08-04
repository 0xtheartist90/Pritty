import Link from 'next/link';

import Reveal from '@/components/reveal';

import { ArrowUpRight } from 'lucide-react';

const AREAS = ['Blue Mountain', 'Collingwood', 'Georgian Bay', 'Markham', 'Muskoka', 'Thornbury', 'Toronto'];

/**
 * Where we work, as a full-width wall of oversized serif place names rather
 * than a utilitarian link list.
 */
const ServiceAreasSection = () => {
    return (
        <section className='bg-secondary/40 border-border/60 relative border-y'>
            <div className='relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32'>
                <div className='grid gap-8 lg:grid-cols-12 lg:items-end'>
                    <div className='lg:col-span-7'>
                        <Reveal variant='blur'>
                            <h2 className='font-editorial text-foreground text-3xl leading-[0.95] tracking-tight sm:text-4xl lg:text-6xl'>
                                Serving Southern Ontario’s{' '}
                                <span className='font-display text-primary font-light'>finest waterfronts</span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal variant='up' delay={140} className='lg:col-span-5'>
                        <p className='text-muted-foreground leading-relaxed'>
                            From the shores of Georgian Bay to the heart of the Greater Toronto Area, we bring naturally
                            refined landscapes and shoreline protection to the places our clients call home.
                        </p>
                    </Reveal>
                </div>

                <div className='border-border/60 mt-16 border-y py-12 sm:py-16'>
                    <div className='flex flex-wrap items-baseline gap-x-10 gap-y-8 sm:gap-x-14'>
                        {AREAS.map((area, i) => (
                            <Reveal key={area} variant='up' delay={i * 70}>
                                <Link href='/service-areas' className='group inline-block'>
                                    <span className='link-line font-editorial text-foreground/60 group-hover:text-primary text-3xl leading-none tracking-tight transition-colors duration-500 sm:text-4xl lg:text-6xl'>
                                        {area}
                                    </span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal variant='up' delay={140}>
                    <Link
                        href='/service-areas'
                        className='group text-foreground mt-10 inline-flex items-center gap-2 text-sm'>
                        <span className='link-line'>See every region we serve</span>
                        <ArrowUpRight className='size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

export default ServiceAreasSection;
