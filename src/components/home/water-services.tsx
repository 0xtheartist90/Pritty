import Link from 'next/link';

import Reveal from '@/components/reveal';

import { ArrowUpRight } from 'lucide-react';

const ITEMS = [
    {
        title: 'Dredging',
        meta: 'Ponds & lakefronts',
        body: 'Restore depth and clarity with precision dredging.'
    },
    {
        title: 'Barging',
        meta: 'Water-access properties',
        body: 'Reliable barging and marine logistics on your schedule.'
    },
    {
        title: 'Building',
        meta: 'Shorelines & structures',
        body: 'Waterfront construction, built to last a lifetime.'
    }
];

/**
 * "Inspired by Water": marine capabilities as an index of hairline rows — name,
 * territory and description in quiet columns, a row-level invert on hover. The
 * water video lives in its own full-width banner right below (video-banner.tsx).
 */
const WaterServices = () => {
    return (
        <section className='bg-[#0e1a13] py-24 sm:py-32 lg:pt-28 lg:pb-10'>
            <div className='mx-auto w-full max-w-7xl px-5 sm:px-8'>
                {/* Compact header: the label and reading text sit beside the
                    headline so the wheel below can rise sooner. */}
                <div className='grid gap-10 lg:grid-cols-12 lg:items-start'>
                    <Reveal variant='blur' className='lg:col-span-8'>
                        <h2 className='font-editorial max-w-3xl text-4xl leading-[0.95] text-white [text-indent:2.2em] sm:text-5xl lg:text-6xl'>
                            Inspired by water, shaped by years of working on it.
                        </h2>
                    </Reveal>
                    <Reveal variant='up' delay={140} className='lg:col-span-4'>
                        <p className='font-display text-white/60'>On the water</p>
                        <p className='mt-5 max-w-xs text-sm leading-relaxed text-white/60'>
                            Robust knowledge, purpose-built equipment and a sustainable practice recognized with the
                            Green Stamp Award.
                        </p>
                    </Reveal>
                </div>

                <div className='mt-16 lg:mt-0'>
                    {/* On desktop the wheel section below carries the services;
                        this index only shows where the wheel is hidden. */}
                    <Reveal delay={140} className='lg:hidden'>
                        <div>
                            {/* Hairlines live on the wrapper so they hold the content grid,
                                while the hover surface bleeds past the text on every side. */}
                            {ITEMS.map(({ title, meta, body }) => (
                                <div key={title} className='border-t border-white/15 last:border-b'>
                                    <Link
                                        href='/contact'
                                        className='group relative -mx-4 grid grid-cols-2 items-baseline gap-x-5 gap-y-1 px-4 py-7 pr-16 text-white transition-colors duration-300 hover:bg-white hover:text-[#0e1a13] sm:grid-cols-[1.1fr_1fr_1.4fr]'>
                                        <h3 className='row-span-2 self-start sm:row-span-1'>{title}</h3>
                                        <p className='text-sm text-white/50 group-hover:text-[#0e1a13]/60'>{meta}</p>
                                        <p className='text-sm text-white/50 group-hover:text-[#0e1a13]/60'>{body}</p>
                                        <ArrowUpRight className='absolute top-1/2 right-6 size-4 -translate-y-1/2 opacity-60 transition-opacity group-hover:opacity-100' />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default WaterServices;
