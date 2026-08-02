import Image from 'next/image';
import Link from 'next/link';

import { DesignIcon, LandscapesIcon, ShorelinesIcon } from '@/components/home/service-icons';
import Reveal from '@/components/reveal';
import ShellPattern from '@/components/shell-pattern';

import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
    {
        icon: LandscapesIcon,
        title: 'Landscapes',
        accent: 'rooted in place',
        body: 'Beauty and sustainability, held to an award-winning standard. Gardens, stonework and outdoor rooms that feel like they have always belonged to the land.',
        image: '/gallery/card-landscapes.webp',
        alt: 'Natural stone patio surrounded by gardens'
    },
    {
        icon: DesignIcon,
        title: 'Design',
        accent: 'from first sketch',
        body: 'Naturally refined landscape architecture. We carry the design, permits and planning of your project from the first drawing to the final stone.',
        image: '/gallery/card-design.webp',
        alt: 'Aerial view of a landscaped waterfront garden'
    },
    {
        icon: ShorelinesIcon,
        title: 'Shorelines',
        accent: 'built for water',
        body: "Southern Ontario's only award-winning shoreline contractor. Armour stone, breakwalls and living edges that hold their ground against ice and wave.",
        image: '/gallery/card-shorelines.webp',
        alt: 'Granite steps leading down to a waterfront dock'
    }
];

/**
 * What we offer, as a stacking scroll sequence: each service is a full-viewport
 * panel that pins to the top while the next one slides up and covers it.
 */
const Approach = () => {
    return (
        <section className='bg-secondary/40'>
            <div className='relative'>
                <ShellPattern />
                <div className='relative mx-auto max-w-7xl px-5 pt-24 pb-16 sm:px-8 sm:pt-32 sm:pb-20'>
                    <div className='grid gap-8 lg:grid-cols-12 lg:items-end'>
                        <div className='lg:col-span-8'>
                            <Reveal variant='blur'>
                                <h2 className='font-editorial text-foreground text-3xl leading-[1.04] tracking-tight sm:text-4xl lg:text-6xl'>
                                    A distinctively <span className='font-display text-primary font-light italic'>different</span> approach
                                </h2>
                            </Reveal>
                        </div>
                        <Reveal variant='up' delay={140} className='lg:col-span-4'>
                            <p className='text-muted-foreground leading-relaxed'>
                                Architecture, landscaping and shoreline contracting under one roof. Natural elements and
                                organic materials, shaped into outdoor living spaces inspired by water.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Stacking is desktop-only; on mobile the panels flow as calm,
                full-screen frames without the sliding-over effect. */}
            {SERVICES.map(({ icon: Icon, title, accent, body, image, alt }, i) => (
                <div key={title} className='lg:sticky lg:top-0'>
                    <div className='relative flex min-h-[100svh] items-start overflow-hidden'>
                        <Image src={image} alt={alt} fill sizes='100vw' className='object-cover' priority={i === 0} />
                        <div className='absolute inset-0 bg-[#0e1a13]/20' />
                        <div className='absolute inset-0 bg-gradient-to-b from-[#0e1a13]/80 via-[#0e1a13]/15 to-[#0e1a13]/10' />

                        <div className='relative z-10 w-full px-5 pt-28 sm:px-8 sm:pt-32 lg:px-10'>
                            <Reveal variant='up' className='max-w-2xl'>
                                <Icon className='size-14 text-white/85 sm:size-16' />
                                <h3 className='font-editorial mt-6 text-4xl leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-7xl'>
                                    {title}
                                    <span className='font-display mt-2 block text-xl font-light text-white/70 italic sm:text-2xl'>
                                        {accent}
                                    </span>
                                </h3>
                                <p className='mt-6 max-w-md leading-relaxed text-white/75'>{body}</p>
                                <Link
                                    href='/portfolio'
                                    className='group mt-8 inline-flex items-center gap-2 text-sm text-white'>
                                    <span className='link-line'>Explore {title.toLowerCase()}</span>
                                    <ArrowUpRight className='size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                                </Link>
                            </Reveal>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Approach;
