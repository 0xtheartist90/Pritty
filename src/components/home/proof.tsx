import Reveal from '@/components/reveal';
import ShellPattern from '@/components/shell-pattern';

import { Star } from 'lucide-react';

const AWARDS = [
    'Green Stamp Award',
    'Landscape Ontario',
    'Award-Winning Shoreline Contractor',
    'Dynascape Certified'
];

/**
 * Social proof: a standout client testimonial set in oversized serif type,
 * followed by a quiet recognition strip.
 */
const Proof = () => {
    return (
        <section className='relative'>
            <ShellPattern />
            <div className='relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32'>
                <div className='mx-auto max-w-4xl text-center'>
                    <Reveal variant='scale'>
                        <span aria-hidden className='font-display text-primary/25 block text-8xl leading-[0.5] select-none'>
                            “
                        </span>
                    </Reveal>

                    <Reveal variant='blur' delay={120}>
                        <blockquote className='font-display text-foreground mt-8 text-3xl leading-[1.22] font-light tracking-tight sm:text-4xl lg:text-[2.75rem]'>
                            They didn’t just build a shoreline, they gave us back our connection to the water. Every
                            stone feels intentional.{' '}
                            <span className='text-primary italic'>Truly a distinctively different approach.</span>
                        </blockquote>
                    </Reveal>

                    <Reveal delay={260} className='mt-9 flex items-center justify-center gap-4'>
                        <div className='text-left'>
                            <p className='text-foreground font-medium'>The Hawthorne Residence</p>
                            <p className='text-muted-foreground text-sm'>Georgian Bay, ON</p>
                        </div>
                        <span className='bg-border h-8 w-px' />
                        <div className='text-primary flex gap-0.5'>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className='size-4 fill-current' />
                            ))}
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={120} className='border-border/60 mt-20 border-t pt-10'>
                    <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10'>
                        {AWARDS.map((award, i) => (
                            <span key={award} className='flex items-center gap-x-6 sm:gap-x-10'>
                                <span className='font-display text-muted-foreground text-lg font-light italic'>
                                    {award}
                                </span>
                                {i < AWARDS.length - 1 && <span className='bg-primary/40 size-1.5 rotate-45' />}
                            </span>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Proof;
