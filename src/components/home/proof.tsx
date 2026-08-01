import Reveal from '@/components/reveal';
import ShellPattern from '@/components/shell-pattern';

import { Star } from 'lucide-react';

const AWARDS = ['Green Stamp Award', 'Landscape Ontario', 'Award-Winning Shoreline Contractor', 'Dynascape Certified'];

/**
 * Social proof: a client testimonial set in oversized type on the site's
 * editorial left margin, with the recognition strip beneath it.
 */
const Proof = () => {
    return (
        <section className='relative'>
            <ShellPattern />
            <div className='relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32'>
                <div className='grid gap-10 lg:grid-cols-12 lg:gap-8'>
                    <Reveal variant='blur' className='lg:col-span-9'>
                        <blockquote className='font-editorial text-foreground text-2xl leading-[1.22] tracking-tight sm:text-3xl lg:text-5xl'>
                            They didn’t just build a shoreline, they gave us back our connection to the water. Every
                            stone feels intentional.{' '}
                            <span className='font-display text-primary font-light italic'>
                                Truly a distinctively different approach.
                            </span>
                        </blockquote>
                    </Reveal>

                    <Reveal delay={200} className='lg:col-span-3 lg:self-end'>
                        <div className='text-primary flex gap-0.5'>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className='size-4 fill-current' />
                            ))}
                        </div>
                        <p className='text-foreground mt-4 font-medium'>The Hawthorne Residence</p>
                        <p className='text-muted-foreground text-sm'>Georgian Bay, ON</p>
                    </Reveal>
                </div>

                <Reveal delay={120} className='border-border/60 mt-20 border-t pt-10'>
                    <div className='flex flex-wrap items-center gap-3'>
                        {AWARDS.map((award) => (
                            <span
                                key={award}
                                className='border-border text-foreground/75 hover:border-primary/50 hover:text-foreground border px-4 py-2 text-sm transition-colors duration-500'>
                                {award}
                            </span>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Proof;
