import Link from 'next/link';

import Reveal from '@/components/reveal';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowUpRight, Phone } from 'lucide-react';

/**
 * Fullscreen closing call-to-action with a fixed-attachment parallax background.
 */
const FinalCta = () => {
    return (
        <section
            className='relative flex min-h-[100svh] items-center overflow-hidden bg-fixed bg-cover bg-center'
            style={{ backgroundImage: "url('/gallery/cta.webp')" }}>
            <div className='absolute inset-0 bg-[#0e1a13]/55' />
            <div className='from-[#0e1a13]/90 absolute inset-0 bg-gradient-to-t via-transparent to-[#0e1a13]/40' />

            <div className='relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8'>
                <div className='max-w-2xl'>
                    <Reveal variant='blur' delay={120}>
                        <h2 className='font-display text-5xl leading-[1.02] font-light tracking-tight text-white sm:text-7xl'>
                            Your Dream Landscape <span className='italic'>Starts Here</span>
                        </h2>
                    </Reveal>
                    <Reveal variant='up' delay={240}>
                        <p className='mt-6 max-w-md text-lg leading-relaxed text-white/80'>
                            Contact us today to schedule a consultation and start your journey toward a naturally
                            refined outdoor space, inspired by water.
                        </p>
                    </Reveal>
                    <Reveal variant='scale' delay={360} className='mt-9 flex flex-wrap items-center gap-4'>
                        <Button asChild size='lg' className='rounded-full bg-white px-7 text-[#16241b] hover:bg-white/90'>
                            <Link href='/contact'>
                                Book a Consultation <ArrowUpRight className='size-4' />
                            </Link>
                        </Button>
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
