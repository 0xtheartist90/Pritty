import Link from 'next/link';

import Reveal from '@/components/reveal';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowUpRight, MapPin } from 'lucide-react';

const AREAS = ['Blue Mountain', 'Collingwood', 'Georgian Bay', 'Markham', 'Muskoka', 'Thornbury', 'Toronto'];

/**
 * "Where We Work" — surfaces the service regions on the homepage and points to
 * the full Service Areas page.
 */
const ServiceAreasSection = () => {
    return (
        <section className='bg-secondary/40 border-border/60 border-y'>
            <div className='mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-20'>
                <div className='lg:col-span-5'>
                    <Reveal variant='left' className='text-muted-foreground flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase'>
                        <span className='bg-primary h-px w-8' />
                        Where We Work
                    </Reveal>
                    <Reveal variant='blur' delay={80}>
                        <h2 className='font-display text-foreground mt-5 text-4xl leading-[1.04] font-light tracking-tight sm:text-5xl'>
                            Serving Southern Ontario’s <span className='text-primary italic'>finest waterfronts</span>
                        </h2>
                    </Reveal>
                    <Reveal variant='up' delay={160}>
                        <p className='text-muted-foreground mt-6 leading-relaxed'>
                            From the shores of Georgian Bay to the heart of the Greater Toronto Area, we bring naturally
                            refined landscapes and award-winning shoreline protection to the places our clients call
                            home.
                        </p>
                    </Reveal>
                    <Reveal variant='scale' delay={240}>
                        <Button asChild className='mt-8'>
                            <Link href='/service-areas'>
                                Explore Service Areas <ArrowUpRight className='size-4' />
                            </Link>
                        </Button>
                    </Reveal>
                </div>

                <div className='lg:col-span-7'>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        {AREAS.map((area, i) => (
                            <Reveal key={area} variant='up' delay={i * 70}>
                                <Link
                                    href='/service-areas'
                                    className='group border-border/60 hover:bg-background flex items-center justify-between border-b py-5 transition-colors'>
                                    <span className='flex items-center gap-4'>
                                        <span className='text-muted-foreground/60 font-mono text-xs tracking-widest'>
                                            0{i + 1}
                                        </span>
                                        <span className='font-display text-foreground text-2xl font-normal'>
                                            {area}
                                        </span>
                                    </span>
                                    <MapPin className='text-muted-foreground/40 group-hover:text-primary size-4 transition-colors' />
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceAreasSection;
