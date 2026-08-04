import Reveal from '@/components/reveal';
import ShellPattern from '@/components/shell-pattern';

const STEPS = [
    {
        n: '01',
        title: 'Consult',
        body: 'We walk your property together, listen to how you want to live outdoors and study the land, the water and the light before anything is drawn.'
    },
    {
        n: '02',
        title: 'Design',
        body: 'Concept sketches grow into Dynascape 3D renderings, planting plans and permits, refined with you until every stone has a reason to be there.'
    },
    {
        n: '03',
        title: 'Build',
        body: 'Our own crews craft the design in natural stone and native planting, from the first excavation to the final walkthrough at the water’s edge.'
    }
];

/**
 * How we work, as a quiet editorial block: a serif label beside a large
 * indented statement, then the three phases as hairline columns with serif
 * numerals. No pinned panels, no colour blocks — just typography.
 */
const Process = () => {
    return (
        <section className='bg-background relative'>
            <ShellPattern />
            <div className='relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-32'>
                <div className='relative'>
                    <Reveal variant='up' className='lg:absolute lg:top-2 lg:left-0'>
                        <p className='font-display text-muted-foreground'>
                            How we<br className='hidden lg:block' /> work
                        </p>
                    </Reveal>
                    <Reveal variant='blur'>
                        <h2 className='font-editorial text-foreground mt-4 max-w-4xl text-4xl leading-[0.95] [text-indent:2.2em] sm:text-5xl lg:mt-0 lg:text-6xl'>
                            One team carries your project from the first walk of the land to the last stone set at the
                            water.
                        </h2>
                    </Reveal>
                </div>

                <div className='mt-16 grid gap-12 lg:mt-24 lg:grid-cols-3 lg:gap-5'>
                    {STEPS.map(({ n, title, body }, i) => (
                        <Reveal key={n} variant='up' delay={i * 120} className='border-border/70 border-t pt-6'>
                            <div className='flex items-baseline justify-between'>
                                <h3 className='text-foreground text-lg tracking-tight'>{title}</h3>
                                <span className='font-display text-muted-foreground text-sm'>{n}</span>
                            </div>
                            <p className='text-muted-foreground mt-10 max-w-xs text-sm leading-relaxed lg:mt-16'>
                                {body}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
