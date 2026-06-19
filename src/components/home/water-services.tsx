import Link from 'next/link';

import Reveal from '@/components/reveal';

import { Anchor, ArrowUpRight, Hammer, Ship } from 'lucide-react';

const ITEMS = [
    {
        icon: Ship,
        title: 'Dredging',
        body: 'Restore depth and clarity to your pond or lakefront with precision dredging.'
    },
    {
        icon: Anchor,
        title: 'Barging',
        body: 'Reliable barging and marine logistics for your water-access property.'
    },
    {
        icon: Hammer,
        title: 'Building',
        body: 'Construction services for your waterfront shoreline, built to last a lifetime.'
    }
];

/**
 * Fullscreen "Inspired by Water" band — fixed-attachment parallax background
 * with the marine services presented as glass cards.
 */
const WaterServices = () => {
    return (
        <section
            className='relative flex min-h-[100svh] items-center overflow-hidden bg-fixed bg-cover bg-center py-24'
            style={{ backgroundImage: "url('/gallery/water.webp')" }}>
            <div className='absolute inset-0 bg-[#0e1a13]/65' />
            <div className='from-[#0e1a13]/85 absolute inset-0 bg-gradient-to-t via-[#0e1a13]/35 to-[#0e1a13]/70' />

            <div className='relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8'>
                <div className='max-w-2xl'>
                    <Reveal variant='left' className='flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-white/70 uppercase'>
                        <span className='h-px w-10 bg-white/40' />
                        Inspired by Water
                    </Reveal>
                    <Reveal variant='blur' delay={120}>
                        <h2 className='font-display mt-6 text-4xl leading-[1.04] font-light tracking-tight text-white sm:text-6xl'>
                            Crafted to <span className='italic'>Meet Your Needs</span>
                        </h2>
                    </Reveal>
                    <Reveal variant='up' delay={240}>
                        <p className='mt-6 max-w-xl leading-relaxed text-white/80'>
                            Our extensive experience working with water gives us an exclusive set of skills. We combine
                            robust knowledge with state-of-the-art equipment to create sustainable outdoor living spaces
                            — recognized with the Green Stamp Award for sustainable practice.
                        </p>
                    </Reveal>
                </div>

                <div className='mt-14 grid gap-5 md:grid-cols-3'>
                    {ITEMS.map(({ icon: Icon, title, body }, i) => (
                        <Reveal key={title} variant='scale' delay={i * 140}>
                            <Link
                                href='/contact'
                                className='group flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-md transition-colors duration-500 hover:border-white/35 hover:bg-white/10'>
                                <div className='flex size-12 items-center justify-center rounded-full border border-white/20 text-white'>
                                    <Icon className='size-5' />
                                </div>
                                <h3 className='font-display mt-6 text-2xl font-normal text-white'>{title}</h3>
                                <p className='mt-3 flex-1 text-sm leading-relaxed text-white/70'>{body}</p>
                                <span className='mt-6 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-white/85 uppercase'>
                                    Book Now
                                    <ArrowUpRight className='size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WaterServices;
