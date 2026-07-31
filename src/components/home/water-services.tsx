import Link from 'next/link';

import BgVideo from '@/components/bg-video';
import Reveal from '@/components/reveal';

import { ArrowUpRight } from 'lucide-react';

const ITEMS = [
    {
        title: 'Dredging',
        body: 'Restore depth and clarity to your pond or lakefront with precision dredging.'
    },
    {
        title: 'Barging',
        body: 'Reliable barging and marine logistics for your water-access property.'
    },
    {
        title: 'Building',
        body: 'Construction for your waterfront shoreline, built to last a lifetime.'
    }
];

/**
 * Fullscreen "Inspired by Water" band: video backdrop with the marine services
 * as a quiet index list of serif rows rather than cards.
 */
const WaterServices = () => {
    return (
        <section className='relative flex min-h-[100svh] items-center overflow-hidden py-24'>
            <BgVideo videoId='wgoDINcFZ9g' poster='/gallery/water.webp' posterAlt='Waterfront landscape' />
            <div className='absolute inset-0 bg-[#0e1a13]/65' />
            <div className='from-[#0e1a13]/85 absolute inset-0 bg-gradient-to-t via-[#0e1a13]/35 to-[#0e1a13]/70' />

            <div className='relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8'>
                <div className='max-w-2xl'>
                    <Reveal variant='blur'>
                        <h2 className='font-display text-4xl leading-[1.04] font-light tracking-tight text-white sm:text-6xl'>
                            Inspired by <span className='italic'>water</span>
                        </h2>
                    </Reveal>
                    <Reveal variant='up' delay={160}>
                        <p className='mt-6 max-w-xl leading-relaxed text-white/80'>
                            Years of working on and around the water have given us a rare set of skills. Robust
                            knowledge, purpose-built equipment and a sustainable practice recognized with the Green
                            Stamp Award.
                        </p>
                    </Reveal>
                </div>

                <div className='mt-16 border-b border-white/15'>
                    {ITEMS.map(({ title, body }, i) => (
                        <Reveal key={title} variant='up' delay={i * 110}>
                            <Link
                                href='/contact'
                                className='group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-t border-white/15 py-7 transition-colors duration-500 hover:bg-white/5 sm:grid-cols-[4rem_1fr_auto] sm:gap-8 sm:py-9'>
                                <span className='font-mono text-xs text-white/40'>0{i + 1}</span>
                                <span className='flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-10'>
                                    <span className='font-display w-44 shrink-0 text-3xl font-light text-white transition-colors sm:text-4xl'>
                                        {title}
                                    </span>
                                    <span className='max-w-md text-sm leading-relaxed text-white/60 transition-colors group-hover:text-white/80'>
                                        {body}
                                    </span>
                                </span>
                                <ArrowUpRight className='size-5 text-white/40 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white' />
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WaterServices;
