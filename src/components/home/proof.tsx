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
                        <span aria-hidden className='font-display text-primary/25 block text-7xl leading-[0.5] select-none'>
                            “
                        </span>
                    </Reveal>

                    <Reveal variant='blur' delay={120}>
                        <blockquote className='font-editorial text-foreground mt-8 text-2xl leading-[1.22] tracking-tight sm:text-3xl lg:text-5xl'>
                            They didn’t just build a shoreline, they gave us back our connection to the water. Every
                            stone feels intentional.{' '}
                            <span className='font-display text-primary font-light italic'>
                                Truly a distinctively different approach.
                            </span>
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
                    <div className='flex flex-wrap items-center justify-center gap-3'>
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
