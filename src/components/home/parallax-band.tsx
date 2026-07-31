import Link from 'next/link';

import Reveal from '@/components/reveal';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowUpRight } from 'lucide-react';

/**
 * Full-viewport statement band with a fixed-attachment parallax background.
 * Breaks the editorial rhythm with a cinematic, immersive moment.
 */
const ParallaxBand = () => {
    return (
        <section
            className='relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-fixed bg-cover bg-center'
            style={{ backgroundImage: "url('/gallery/parallax.webp')" }}>
            <div className='absolute inset-0 bg-[#0e1a13]/60' />
            <div className='absolute inset-0 bg-gradient-to-b from-[#0e1a13]/40 via-transparent to-[#0e1a13]/60' />

            <div className='relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8'>
                <Reveal variant='blur' delay={120}>
                    <p className='font-editorial mt-7 text-3xl leading-[1.12] text-white sm:text-4xl lg:text-6xl'>
                        We don’t work against nature.
                        <br className='hidden sm:block' /> We design{' '}
                        <span className='font-display font-light italic'>with</span> her.
                    </p>
                </Reveal>
                <Reveal variant='scale' delay={300}>
                    <Button asChild size='lg' className='mt-9 bg-white px-7 text-[#16241b] hover:bg-white/90'>
                        <Link href='/about'>
                            More About Us <ArrowUpRight className='size-4' />
                        </Link>
                    </Button>
                </Reveal>
            </div>
        </section>
    );
};

export default ParallaxBand;
