import Link from 'next/link';

import Reveal from '@/components/reveal';

import { ArrowUpRight, Phone } from 'lucide-react';

/**
 * Fullscreen closing call-to-action with a fixed-attachment parallax background.
 */
const FinalCta = () => {
    return (
        <section
            className='relative flex min-h-[100svh] items-center overflow-hidden bg-fixed bg-cover bg-center'
            style={{ backgroundImage: "url('/gallery/cta.webp')" }}>
            <div className='absolute inset-0 bg-[#0e1a13]/40' />
            <div className='from-[#0e1a13]/75 absolute inset-0 bg-gradient-to-t via-transparent to-[#0e1a13]/25' />

            <div className='relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8'>
                <div className='max-w-2xl'>
                    <Reveal variant='blur' delay={120}>
                        <h2 className='font-editorial text-4xl leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl'>
                            Your Dream Landscape <span className='font-display font-light italic'>Starts Here</span>
                        </h2>
                    </Reveal>
                    <Reveal variant='up' delay={280} className='mt-9 flex flex-wrap items-center gap-x-8 gap-y-4'>
                        <Link
                            href='/contact'
                            className='group inline-flex items-center gap-2 border border-white/50 px-7 py-3 text-sm text-white transition-colors duration-500 hover:bg-white hover:text-[#16241b]'>
                            Book a Consultation
                            <ArrowUpRight className='size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                        </Link>
                        <a
                            href='tel:+14167220210'
                            className='inline-flex items-center gap-2 text-sm tracking-wide text-white/85 transition-colors hover:text-white'>
                            <Phone className='size-4' />
                            (416) 722-0210
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default FinalCta;
