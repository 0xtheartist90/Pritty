import Link from 'next/link';

import Reveal from '@/components/reveal';
import ShellPattern from '@/components/shell-pattern';
import TextReveal from '@/components/text-reveal';

import { ArrowUpRight } from 'lucide-react';

/**
 * Light editorial statement: a quiet, typographic breather between the
 * full-bleed image sequences on either side of it.
 */
const Statement = () => {
    return (
        <section className='bg-background relative'>
            <ShellPattern />
            <div className='relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40'>
                <p className='font-display text-foreground max-w-4xl text-3xl leading-[1.18] font-light tracking-tight sm:text-5xl'>
                    <TextReveal text='Twenty years of shaping land and water into places that feel inevitable.' stagger={40} />{' '}
                    <TextReveal
                        text='We listen to the site first, then we design.'
                        delay={500}
                        stagger={40}
                        className='text-primary italic'
                    />
                </p>
                <Reveal variant='up' delay={300}>
                    <Link href='/about' className='group text-foreground mt-12 inline-flex items-center gap-2 text-sm'>
                        <span className='link-line'>The story behind our approach</span>
                        <ArrowUpRight className='size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

export default Statement;
