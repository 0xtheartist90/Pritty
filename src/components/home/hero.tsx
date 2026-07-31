'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import HeroVideo from '@/components/home/hero-video';
import Reveal from '@/components/reveal';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowUpRight } from 'lucide-react';

const WORDS = ['Waterfront', 'Shoreline', 'Landscape'];

const STATS = [
    { value: '20+', label: 'Years of Craft' },
    { value: '150+', label: 'Projects Delivered' },
    { value: '7', label: 'Service Regions' }
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2800);

        return () => clearInterval(id);
    }, []);

    return (
        <section className='relative flex h-[100svh] min-h-[660px] w-full flex-col overflow-hidden bg-[#16241b]'>
            <HeroVideo />
            {/* Tonal overlays — darken for legibility, weight toward the bottom. */}
            <div className='absolute inset-0 bg-black/25' />
            <div className='absolute inset-0 bg-gradient-to-t from-[#0e1a13]/90 via-[#0e1a13]/25 to-[#0e1a13]/45' />

            <div className='relative z-10 flex h-full w-full flex-col justify-end px-5 pt-28 pb-10 sm:px-8 sm:pb-14 lg:px-10'>
                <Reveal variant='blur' delay={140}>
                    <h1 className='font-display mt-6 text-5xl leading-[0.92] font-light tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl'>
                        <span className='block'>Transform Your</span>
                        <span className='mt-1 block overflow-hidden pb-2'>
                            <span key={index} className='hero-word inline-block italic'>
                                {WORDS[index]}
                            </span>
                        </span>
                    </h1>
                </Reveal>

                <Reveal variant='up' delay={360} className='mt-7 max-w-xl'>
                    <p className='text-base leading-relaxed text-white/80 sm:text-lg'>
                        Naturally refined landscapes and shoreline protection, inspired by water. We craft bespoke
                        outdoor spaces that connect you with nature, built to last a lifetime.
                    </p>
                </Reveal>

                <Reveal variant='scale' delay={460} className='mt-9 flex flex-wrap items-center gap-4'>
                    <Button asChild size='lg' className='rounded-full bg-white px-7 text-[#16241b] hover:bg-white/90'>
                        <Link href='/contact'>
                            Book a Consultation <ArrowUpRight className='size-4' />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        size='lg'
                        variant='outline'
                        className='rounded-full border-white/40 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white'>
                        <Link href='/portfolio'>Explore Portfolio</Link>
                    </Button>
                </Reveal>

                <Reveal
                    delay={600}
                    className='mt-12 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between'>
                    <dl className='flex flex-wrap gap-x-10 gap-y-4'>
                        {STATS.map((stat) => (
                            <div key={stat.label}>
                                <dt className='font-display text-3xl font-light text-white sm:text-4xl'>
                                    {stat.value}
                                </dt>
                                <dd className='mt-1 text-xs tracking-wide text-white/60 uppercase'>{stat.label}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className='font-display hidden items-center gap-2 text-sm text-white/50 italic sm:flex'>
                        Award-winning design and build, Southern Ontario
                    </div>
                </Reveal>
            </div>

            <style>{`
                .hero-img { animation: heroZoom 18s ease-out forwards; }
                @keyframes heroZoom {
                    from { transform: scale(1.08); }
                    to { transform: scale(1); }
                }
                .hero-word { animation: wordRise 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
                @keyframes wordRise {
                    from { opacity: 0; transform: translateY(0.5em); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .hero-img, .hero-word { animation: none; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
