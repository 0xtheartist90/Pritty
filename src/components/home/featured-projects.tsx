import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal';

const PROJECTS = [
    {
        title: 'Cedar Point Restoration',
        meta: 'Georgian Bay',
        image: { src: '/gallery/shoreline.webp', alt: 'Aerial view of a restored Georgian Bay shoreline' },
        aspect: 'aspect-[4/3]',
        // Staggered editorial grid: each card claims its own columns and
        // vertical offset so the sequence reads as a curated wall, not a row.
        cell: 'lg:col-span-7'
    },
    {
        title: 'Stillwater Estate',
        meta: 'Muskoka',
        image: { src: '/gallery/design-patio.webp', alt: 'Lakeside stone patio with gardens at golden hour' },
        aspect: 'aspect-[3/4]',
        cell: 'lg:col-span-4 lg:col-start-9 lg:mt-40'
    },
    {
        title: 'The Bluffs',
        meta: 'Collingwood',
        image: { src: '/gallery/waterfall.webp', alt: 'Custom water feature set amongst ferns and forest' },
        aspect: 'aspect-[16/10]',
        cell: 'lg:col-span-6 lg:col-start-3 lg:mt-24'
    }
];

/**
 * Selected work as a staggered editorial grid: offset columns, varied image
 * proportions, and a caption row whose right side swaps from place name to
 * "Visit" on hover.
 */
const FeaturedProjects = () => {
    return (
        <section className='relative py-24 sm:py-32'>
            <div className='relative mx-auto w-full max-w-7xl px-5 sm:px-8'>
                <Reveal variant='blur'>
                    <h2 className='font-editorial text-foreground max-w-xl text-4xl leading-[0.9] sm:text-5xl lg:text-7xl'>
                        Selected projects
                    </h2>
                </Reveal>

                <div className='mt-14 grid gap-y-14 lg:grid-cols-12 lg:gap-x-5 lg:gap-y-0'>
                    {PROJECTS.map(({ title, meta, image, aspect, cell }, i) => (
                        <Link key={title} href='/portfolio' className={`group block ${cell}`}>
                            <Reveal variant='media' delay={i * 100} className={`relative overflow-hidden ${aspect}`}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes='(max-width: 1024px) 100vw, 50vw'
                                    className='object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.17,0.84,0.44,1)] group-hover:scale-[1.035]'
                                />
                            </Reveal>
                            <div className='mt-4 flex items-baseline justify-between gap-4'>
                                <h3 className='text-foreground text-base tracking-tight'>{title}</h3>
                                {/* Caption swap: place name lifts out, "Visit" rises in. */}
                                <span className='font-display relative block overflow-hidden text-right text-sm'>
                                    <span className='text-muted-foreground block transition-transform duration-500 ease-[cubic-bezier(0.17,0.84,0.44,1)] group-hover:-translate-y-[101%]'>
                                        {meta}
                                    </span>
                                    <span className='text-foreground absolute top-0 right-0 translate-y-[101%] transition-transform duration-500 ease-[cubic-bezier(0.17,0.84,0.44,1)] group-hover:translate-y-0'>
                                        Visit
                                    </span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <Reveal variant='up' delay={120} className='mt-20 text-center lg:mt-28'>
                    <Link href='/portfolio' className='link-line text-foreground inline-block text-sm'>
                        See all projects
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

export default FeaturedProjects;
