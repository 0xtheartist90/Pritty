'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import HeroVideo from '@/components/home/hero-video';
import Reveal from '@/components/reveal';

import { ArrowUpRight } from 'lucide-react';

const WORDS = ['Waterfront', 'Shoreline', 'Landscape'];

const STATS = [
    { value: '20+', label: 'Years of Craft' },
    { value: '150+', label: 'Projects Delivered' },
    { value: '7', label: 'Service Regions' }
];

const Hero = () => {
    const [word, setWord] = useState<{ index: number; prev: number | null }>({ index: 0, prev: null });
    const { index, prev } = word;

    useEffect(() => {
        const id = setInterval(
            () => setWord((w) => ({ index: (w.index + 1) % WORDS.length, prev: w.index })),
            3400
        );

        return () => clearInterval(id);
    }, []);

    return (
        <section className='relative flex h-[100svh] min-h-[660px] w-full flex-col overflow-hidden bg-[#16241b]'>
            <HeroVideo />
            {/* Light tonal wash — just enough grounding at the bottom for the type,
                keeping the footage itself bright and open. */}
            <div className='absolute inset-0 bg-black/10' />
            <div className='absolute inset-0 bg-gradient-to-t from-[#0e1a13]/65 via-[#0e1a13]/10 to-[#0e1a13]/20' />

            <div className='relative z-10 flex h-full w-full flex-col justify-end px-5 pt-28 pb-10 sm:px-8 sm:pb-14 lg:px-10'>
                <Reveal variant='blur' delay={140}>
                    <h1 className='font-editorial mt-6 text-5xl leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl'>
                        <span className='block'>Transform Your</span>
                        <span className='relative mt-1 block overflow-hidden pb-2'>
                            {prev !== null && (
                                <span
                                    key={`out-${prev}`}
                                    aria-hidden
                                    className='hero-word-out font-display absolute top-0 left-0 inline-block font-light italic'>
                                    {WORDS[prev]}
                                </span>
                            )}
                            <span key={index} className='hero-word-in font-display inline-block font-light italic'>
                                {WORDS[index]}
                            </span>
                        </span>
                    </h1>
                </Reveal>

                <Reveal variant='up' delay={360} className='mt-9 flex flex-wrap items-center gap-x-8 gap-y-4'>
                    <Link
                        href='/contact'
                        className='group inline-flex items-center gap-2 border border-white/50 px-7 py-3 text-sm text-white transition-colors duration-500 hover:bg-white hover:text-[#16241b]'>
                        Book a Consultation
                        <ArrowUpRight className='size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </Link>
                    <Link
                        href='/portfolio'
                        className='group inline-flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-white'>
                        <span className='link-line'>Explore portfolio</span>
                        <ArrowUpRight className='size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </Link>
                </Reveal>

                <Reveal
                    delay={600}
                    className='mt-12 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between'>
                    <dl className='flex flex-wrap gap-x-10 gap-y-4'>
                        {STATS.map((stat) => (
                            <div key={stat.label}>
                                <dt className='font-display text-2xl font-light text-white sm:text-3xl'>
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
                /* Word swap: outgoing drifts up and softens while the incoming
                   rises from below — both on a long, gentle ease. */
                .hero-word-in { animation: wordIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) both; }
                .hero-word-out { animation: wordOut 1.2s cubic-bezier(0.22, 1, 0.36, 1) both; }
                @keyframes wordIn {
                    from { opacity: 0; transform: translateY(65%); filter: blur(8px); }
                    to { opacity: 1; transform: translateY(0); filter: blur(0); }
                }
                @keyframes wordOut {
                    from { opacity: 1; transform: translateY(0); filter: blur(0); }
                    to { opacity: 0; transform: translateY(-55%); filter: blur(8px); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .hero-img, .hero-word-in, .hero-word-out { animation: none; }
                    .hero-word-out { opacity: 0; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
