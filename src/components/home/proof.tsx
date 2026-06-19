import Reveal from '@/components/reveal';

import { Quote, Star, Trophy } from 'lucide-react';

const AWARDS = [
    'Green Stamp Award',
    'Landscape Ontario',
    'Award-Winning Shoreline Contractor',
    'Dynascape Certified'
];

/**
 * Social proof — a standout client testimonial paired with a recognition strip.
 * Builds trust right before the FAQ addresses any remaining hesitation.
 */
const Proof = () => {
    return (
        <section className='mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32'>
            <div className='mx-auto max-w-4xl text-center'>
                <Reveal className='flex items-center justify-center gap-2.5 text-xs font-medium tracking-[0.22em] uppercase'>
                    <span className='text-muted-foreground'>Recognition</span>
                </Reveal>

                <Reveal variant='scale' delay={100}>
                    <Quote className='text-primary/30 mx-auto mt-8 size-10' />
                </Reveal>

                <Reveal variant='blur' delay={160}>
                    <blockquote className='font-display text-foreground mt-6 text-3xl leading-[1.22] font-light tracking-tight sm:text-4xl lg:text-[2.75rem]'>
                        “They didn’t just build a shoreline — they gave us back our connection to the water.
                        Every stone feels intentional. <span className='text-primary italic'>Truly a distinctively different approach.</span>”
                    </blockquote>
                </Reveal>

                <Reveal delay={260} className='mt-8 flex items-center justify-center gap-4'>
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
                <div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-16'>
                    {AWARDS.map((award) => (
                        <span
                            key={award}
                            className='text-muted-foreground flex items-center gap-2 text-sm font-medium tracking-[0.12em] uppercase'>
                            <Trophy className='text-primary size-4' />
                            {award}
                        </span>
                    ))}
                </div>
            </Reveal>
        </section>
    );
};

export default Proof;
