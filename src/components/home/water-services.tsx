import Link from 'next/link';

import { BargingIcon, BuildingIcon, DredgingIcon } from '@/components/home/service-icons';
import Reveal from '@/components/reveal';

import { ArrowUpRight } from 'lucide-react';

const ITEMS = [
    {
        icon: DredgingIcon,
        title: 'Dredging',
        body: 'Restore depth and clarity to your pond or lakefront with precision dredging.'
    },
    {
        icon: BargingIcon,
        title: 'Barging',
        body: 'Reliable barging and marine logistics for your water-access property.'
    },
    {
        icon: BuildingIcon,
        title: 'Building',
        body: 'Construction for your waterfront shoreline, built to last a lifetime.'
    }
];

/**
 * "Inspired by Water": the marine services as hairline-divided cells on a dark
 * ground, icon top and content anchored to the bottom. The water video lives in
 * its own full-width banner section right below (video-banner.tsx).
 */
const WaterServices = () => {
    return (
        <section className='bg-[#0e1a13] py-24 sm:py-32'>
            <div className='mx-auto w-full max-w-7xl px-5 sm:px-8'>
                <div className='grid gap-8 lg:grid-cols-12 lg:items-end'>
                    <div className='lg:col-span-7'>
                        <Reveal variant='blur'>
                            <h2 className='font-editorial text-3xl leading-[1.04] tracking-tight text-white sm:text-4xl lg:text-6xl'>
                                Inspired by <span className='font-display font-light italic'>water</span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal variant='up' delay={160} className='lg:col-span-4 lg:col-start-9'>
                        <p className='leading-relaxed text-white/75'>
                            Years of working on and around the water have given us a rare set of skills. Robust
                            knowledge, purpose-built equipment and a sustainable practice recognized with the Green
                            Stamp Award.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={220}>
                    <div className='mt-16 grid divide-y divide-white/15 border-y border-white/15 lg:grid-cols-3 lg:divide-x lg:divide-y-0'>
                        {ITEMS.map(({ icon: Icon, title, body }) => (
                            <Link
                                key={title}
                                href='/contact'
                                className='group flex flex-col justify-between gap-12 p-7 transition-colors duration-500 hover:bg-white/5 sm:p-9 lg:min-h-80'>
                                <Icon className='size-11 text-white/75 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-white' />
                                <div>
                                    <h3 className='font-editorial text-2xl tracking-tight text-white'>
                                        {title}
                                    </h3>
                                    <p className='mt-3 max-w-xs text-sm leading-relaxed text-white/60'>{body}</p>
                                    <span className='mt-7 inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-white/80 uppercase transition-colors group-hover:text-white'>
                                        Book Now
                                        <ArrowUpRight className='size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default WaterServices;
