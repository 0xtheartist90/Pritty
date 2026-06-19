import Reveal from '@/components/reveal';

import { Leaf } from 'lucide-react';

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
                <Reveal variant='scale' className='flex items-center justify-center gap-2.5 text-xs font-medium tracking-[0.22em] text-white/70 uppercase'>
                    <Leaf className='size-4' />
                    Our Philosophy
                </Reveal>
                <Reveal variant='blur' delay={120}>
                    <p className='font-display mt-7 text-4xl leading-[1.12] font-light text-white sm:text-6xl lg:text-7xl'>
                        We don’t work against nature.
                        <br className='hidden sm:block' /> We design <span className='italic'>with</span> her.
                    </p>
                </Reveal>
                <Reveal variant='up' delay={260}>
                    <p className='mx-auto mt-8 max-w-xl leading-relaxed text-white/75'>
                        Every shoreline, every garden, every stone is placed with intention — sustainable by principle,
                        timeless by design. This is what earned us the Green Stamp Award.
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default ParallaxBand;
