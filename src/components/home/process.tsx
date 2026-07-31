import Reveal from '@/components/reveal';

import { cn } from '@/lib/utils';

const STEPS = [
    {
        n: '01',
        title: 'Consult',
        body: 'We walk your property together, listen to how you want to live outdoors and study the land, the water and the light before anything is drawn.',
        theme: 'bg-background text-foreground',
        muted: 'text-muted-foreground'
    },
    {
        n: '02',
        title: 'Design',
        body: 'Concept sketches grow into Dynascape 3D renderings, planting plans and permits, refined with you until every stone has a reason to be there.',
        theme: 'bg-[#42654a] text-[#f2efe6]',
        muted: 'text-[#f2efe6]/70'
    },
    {
        n: '03',
        title: 'Build',
        body: 'Our own crews craft the design in natural stone and native planting, from the first excavation to the final walkthrough at the water’s edge.',
        theme: 'bg-[#0e1a13] text-[#a9c7ad]',
        muted: 'text-[#a9c7ad]/70'
    }
];

/**
 * How we work, as stacking colour-block chapters: each full-viewport band pins
 * to the top while the next slides up and covers it, cream to forest to dark.
 */
const Process = () => {
    return (
        <section>
            {STEPS.map(({ n, title, body, theme, muted }) => (
                <div key={n} className='sticky top-0'>
                    <div className={cn('flex min-h-[100svh] items-center', theme)}>
                        <div className='mx-auto grid w-full max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:items-center'>
                            <Reveal variant='up' className='lg:col-span-7'>
                                <h3 className='flex items-start gap-3'>
                                    <sup className={cn('mt-2 font-mono text-sm tracking-widest', muted)}>{n}</sup>
                                    <span className='font-editorial text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl'>
                                        {title}
                                    </span>
                                </h3>
                            </Reveal>
                            <Reveal variant='up' delay={140} className='lg:col-span-4 lg:col-start-9'>
                                <p className={cn('max-w-xs text-sm leading-relaxed', muted)}>{body}</p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Process;
