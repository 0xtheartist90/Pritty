import ApproachPanels from '@/components/home/approach-panels';
import Reveal from '@/components/reveal';
import ShellPattern from '@/components/shell-pattern';

/**
 * What we offer: the oversized centred statement, then the three services as a
 * pinned block-reveal sequence (approach-panels.tsx).
 */
const Approach = () => {
    return (
        <section className='bg-secondary/40'>
            <div className='relative'>
                <ShellPattern />
                {/* Oversized centred statement in the bureau register: the headline
                    at near-viewport scale, then two quiet grey columns beneath it. */}
                <div className='relative mx-auto max-w-7xl px-5 pt-24 pb-16 text-center sm:px-8 sm:pt-36 sm:pb-24'>
                    <Reveal variant='up'>
                        <h2 className='font-editorial text-foreground text-[13vw] leading-[0.78] lg:text-[8.5vw]'>
                            A distinctively
                            <span className='mt-[0.12em] block'>
                                <span className='font-display'>different</span> approach
                            </span>
                        </h2>
                    </Reveal>
                    <Reveal
                        variant='up'
                        delay={160}
                        className='mx-auto mt-12 flex max-w-3xl flex-col justify-center gap-6 text-left sm:mt-16 sm:flex-row sm:gap-20'>
                        <p className='text-muted-foreground max-w-xs text-sm leading-relaxed'>
                            Architecture, landscaping and shoreline contracting under one roof, carried by a single
                            team.
                        </p>
                        <p className='text-muted-foreground max-w-xs text-sm leading-relaxed'>
                            Natural elements and organic materials, shaped into outdoor living spaces inspired by
                            water.
                        </p>
                    </Reveal>
                </div>
            </div>

            <ApproachPanels />
        </section>
    );
};

export default Approach;
