import Image from 'next/image';
import Link from 'next/link';

import Parallax from '@/components/parallax';
import Reveal from '@/components/reveal';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowUpRight } from 'lucide-react';

/**
 * Homepage "About" teaser — introduces the studio and links to the About page.
 */
const AboutIntro = () => {
    return (
        <section className='border-border/60 border-y bg-[#e7ede1]'>
            <div className='mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16'>
                <Reveal variant='media' className='relative aspect-[4/3] overflow-hidden lg:col-span-5'>
                    <Parallax strength={40} className='absolute inset-x-0 -top-[12%] h-[124%]'>
                        <Image
                            src='/gallery/design-patio.webp'
                            alt='Lakeside garden designed by Pritty Landscapes'
                            fill
                            sizes='(max-width: 1024px) 100vw, 42vw'
                            className='object-cover'
                        />
                    </Parallax>
                </Reveal>

                <div className='lg:col-span-7'>
                    <Reveal variant='left' className='text-muted-foreground flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase'>
                        <span className='bg-primary h-px w-8' />
                        About Pritty Landscapes
                    </Reveal>
                    <Reveal variant='blur' delay={80}>
                        <h2 className='font-display text-foreground mt-5 text-3xl leading-[1.08] font-light tracking-tight sm:text-4xl'>
                            At the root of every project, a connection to <span className='text-primary italic'>nature</span>
                        </h2>
                    </Reveal>
                    <Reveal variant='up' delay={160}>
                        <p className='text-muted-foreground mt-5 leading-relaxed'>
                            Founded by Tyler Pritty in 2017, we create beautiful, sustainable landscapes inspired by
                            water. Our distinctively different approach unlocks the magic within your landscape —
                            blending your modern lifestyle with thoughtful, award-winning design.
                        </p>
                    </Reveal>
                    <Reveal variant='scale' delay={240}>
                        <Button asChild className='mt-7'>
                            <Link href='/about'>
                                More About Us <ArrowUpRight className='size-4' />
                            </Link>
                        </Button>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
