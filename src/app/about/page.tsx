import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowUpRight, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About | Pritty Landscapes',
    description:
        'Naturally refined, inspired by water. Meet the award-winning team behind Pritty Landscapes and discover our mission, vision, values and recognition.'
};

const PILLARS = [
    {
        title: 'Our Mission',
        body: 'To create beautiful and sustainable natural landscapes inspired by water, blending your modern lifestyle with thoughtful design that enhances the way you spend your time outdoors. Our distinctively different approach to creative concept development unlocks the magic within your landscape.'
    },
    {
        title: 'Our Vision',
        body: 'To create an immersive, natural environment that enriches the way you connect with nature. Our award-winning design and build process transforms your yard into something truly remarkable, a cohesive blend of natural elements that captures the unique charm of your landscape.'
    },
    {
        title: 'Our Values',
        body: 'We grow and develop together as a team through shared success. We strive to exceed all expectations while displaying integrity and precision. Passion, teamwork and a commitment to excellence are the core values we draw from. Creativity is in our roots.'
    }
];

const TEAM = [
    {
        initial: 'T',
        name: 'Tyler Pritty',
        role: 'Founder / Designer',
        bio: 'Tyler founded Pritty Landscapes in 2017. His creative vision and passion have inspired the growth of an experienced team dedicated to the details. He maintains a hands-on approach, balancing creative design and onsite construction, because participating throughout both is the best way to bring his vision to life. In his free time, Tyler enjoys the outdoors, time with family, travelling, and mountain sledding.'
    },
    {
        initial: 'A',
        name: 'Andrew Baillie',
        role: 'Construction Manager',
        bio: 'Andrew has been with Pritty Landscapes for over 7 years. His dedicated work ethic and craftsmanship are incredible assets to the team. He manages day-to-day operations and onsite construction, and his genuine nature embodies what it means to be part of Pritty Landscapes. In his free time, Andrew enjoys professional sports and a healthy dose of relaxation.'
    },
    {
        initial: 'B',
        name: 'Bear',
        role: 'Quality Control',
        bio: "Bear can often be found inspecting lunches when he isn't swimming. His fearless “paws-on” approach to testing the water access and water quality on each project is a valuable asset to the team."
    }
];

const AWARDS = [
    {
        name: 'Magical Forest',
        year: '2021',
        category: 'Special Construction',
        value: 'Water Features',
        image: '/gallery/waterfall.webp'
    },
    {
        name: 'On The Rocks',
        year: '2023',
        category: 'Residential Construction',
        value: '$500,000 – $1,000,000',
        image: '/gallery/shoreline.webp'
    },
    {
        name: 'Sunset Bay',
        year: '2023',
        category: 'Residential Construction',
        value: '$100,000 – $250,000',
        image: '/gallery/hero.webp'
    },
    {
        name: 'A River Runs Through It',
        year: '2024',
        category: 'Residential Construction',
        value: '$250,000 – $500,000',
        image: '/gallery/water.webp'
    },
    {
        name: 'Island Retreat',
        year: '2024',
        category: 'Residential Construction',
        value: '$100,000 – $250,000',
        image: '/gallery/card-design.webp'
    },
    {
        name: 'Endless Views',
        year: '2024',
        category: 'Residential Construction',
        value: '$100,000 – $250,000',
        image: '/gallery/banner.webp'
    },
    {
        name: 'Granite Shores',
        year: '2024',
        category: 'Residential Construction',
        value: '$100,000 – $250,000',
        image: '/gallery/card-shorelines.webp'
    }
];

const AboutPage = () => {
    return (
        <>
            {/* Hero */}
            <section className='border-border/60 border-b'>
                <div className='mx-auto max-w-7xl px-5 pt-36 pb-16 sm:px-8 sm:pt-44 sm:pb-20'>
                    <Reveal variant='blur'>
                        <h1 className='font-editorial text-foreground max-w-4xl text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl'>
                            A Distinctively <span className='font-display text-primary font-light'>Different</span>{' '}
                            Approach
                        </h1>
                    </Reveal>
                    <Reveal variant='up' delay={160}>
                        <p className='text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed'>
                            At the root of every project is our mission to connect you with nature.
                        </p>
                    </Reveal>
                </div>
                <Reveal variant='media' className='relative aspect-[16/7] w-full overflow-hidden'>
                    <Image
                        src='/gallery/banner.webp'
                        alt='Lakeside landscape by Pritty Landscapes'
                        fill
                        priority
                        sizes='100vw'
                        className='object-cover'
                    />
                </Reveal>
            </section>

            {/* Mission / Vision / Values */}
            <section className='bg-[#16241b]'>
                <div className='mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32'>
                    <Reveal variant='blur'>
                        <h2 className='font-editorial max-w-3xl text-3xl leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-5xl'>
                            Rooted in mission, vision &amp; <span className='font-display font-light'>values</span>
                        </h2>
                    </Reveal>

                    <div className='mt-16 grid gap-10 md:grid-cols-3 md:gap-8'>
                        {PILLARS.map(({ title, body }, i) => (
                            <Reveal key={title} variant='up' delay={i * 120} className='flex flex-col border-t border-white/15 pt-7'>
                                <span className='font-display text-xs text-white/40'>0{i + 1}</span>
                                <h3 className='font-display mt-5 text-2xl font-normal text-white'>{title}</h3>
                                <p className='mt-4 text-sm leading-relaxed text-white/65'>{body}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className='bg-secondary/40 border-border/60 border-y'>
                <div className='mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32'>
                    <Reveal variant='blur'>
                        <h2 className='font-editorial text-foreground text-3xl leading-[0.95] tracking-tight sm:text-4xl lg:text-5xl'>
                            The people behind the <span className='font-display text-primary font-light'>work</span>
                        </h2>
                    </Reveal>

                    <div className='mt-14 grid gap-6 md:grid-cols-3'>
                        {TEAM.map(({ initial, name, role, bio }, i) => (
                            <Reveal key={name} variant='up' delay={i * 120} className='border-border/60 bg-background flex flex-col border p-8'>
                                <div className='bg-primary text-primary-foreground font-display flex size-16 items-center justify-center text-2xl'>
                                    {initial}
                                </div>
                                <h3 className='font-display text-foreground mt-6 text-2xl font-normal'>{name}</h3>
                                <p className='text-primary mt-1 text-xs font-medium tracking-[0.14em] uppercase'>{role}</p>
                                <p className='text-muted-foreground mt-4 text-sm leading-relaxed'>{bio}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured testimonial */}
            <section className='bg-[#0e1a13]'>
                <div className='mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32'>
                    <Reveal variant='scale'>
                        <span aria-hidden className='font-display block text-8xl leading-[0.5] text-white/20 select-none'>
                            “
                        </span>
                    </Reveal>
                    <Reveal variant='blur' delay={160}>
                        <blockquote className='font-editorial mt-8 text-2xl leading-[1.3] tracking-tight text-white sm:text-3xl'>
                            “Tyler’s approach was different. From the very first placement of armour stone, I knew this
                            was a very special project. I simply needed to trust in his experience, excitement, and
                            vision.”
                        </blockquote>
                    </Reveal>
                    <Reveal variant='up' delay={220}>
                        <div className='mx-auto mt-10 max-w-2xl space-y-4 text-left text-sm leading-relaxed text-white/65'>
                            <p>
                                I originally met Tyler in his first year of business on a job site in my neighbourhood.
                                Several landscapers had already provided estimates based on my idea of a retaining wall
                                to keep my inclined backyard from eroding. Tyler’s approach was different; I could sense
                                the ideas formulating in his mind as we spoke. The existing waterfalls, the plantings,
                                and the creation of what we now refer to as my ‘magical forest’ was something he alone
                                designed.
                            </p>
                            <p>
                                I trust Tyler. I respect his work ethic and how he stands behind the water features he
                                installs: his planning, design and workmanship, and his attention to detail. The sound
                                of water cascading over rocks that mirror what you’d find in nature, always aware of the
                                integral pieces that sustain what he has built for years to come.
                            </p>
                            <p>
                                I am so grateful to be one of Tyler’s ‘forever’ clients. My magical forest is a huge
                                element of my ‘heaven on earth’.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal variant='up' delay={280} className='mt-8 flex items-center justify-center gap-4'>
                        <div className='text-left'>
                            <p className='font-medium text-white'>Dorothy</p>
                            <p className='text-sm text-white/55'>Forever Client</p>
                        </div>
                        <span className='h-8 w-px bg-white/20' />
                        <div className='flex gap-0.5 text-white'>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className='size-4 fill-current' />
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Award-winning designs */}
            <section className='bg-secondary/40 border-border/60 border-y'>
                <div className='mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32'>
                    <div className='flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
                        <Reveal variant='blur'>
                            <h2 className='font-editorial text-foreground text-3xl leading-[0.95] tracking-tight sm:text-4xl lg:text-5xl'>
                                Our Award-Winning <span className='font-display text-primary font-light'>Designs</span>
                            </h2>
                        </Reveal>
                        <Reveal variant='up' delay={160}>
                            <p className='font-display text-muted-foreground text-lg font-light'>
                                Landscape Ontario Awards of Excellence
                            </p>
                        </Reveal>
                    </div>

                    <div className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {AWARDS.map(({ name, year, category, value, image }, i) => (
                            <Reveal key={name} variant='up' delay={(i % 3) * 100}>
                                <Link href='/portfolio' className='group block'>
                                    <div className='relative aspect-[4/3] overflow-hidden'>
                                        <Image
                                            src={image}
                                            alt={name}
                                            fill
                                            sizes='(max-width: 1024px) 100vw, 33vw'
                                            className='object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-105'
                                        />
                                        <span className='absolute top-4 left-4 bg-[#0e1a13]/55 px-3 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-sm'>
                                            {year} Winner
                                        </span>
                                    </div>
                                    <h3 className='font-display text-foreground mt-5 text-2xl font-normal'>{name}</h3>
                                    <p className='text-muted-foreground mt-2 text-sm'>
                                        {category} · {value}
                                    </p>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section
                className='relative flex min-h-[70svh] items-center overflow-hidden bg-fixed bg-cover bg-center'
                style={{ backgroundImage: "url('/gallery/cta.webp')" }}>
                <div className='absolute inset-0 bg-[#0e1a13]/60' />
                <div className='from-[#0e1a13]/85 absolute inset-0 bg-gradient-to-t via-transparent to-[#0e1a13]/40' />
                <div className='relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8'>
                    <Reveal variant='blur' delay={120}>
                        <h2 className='font-editorial max-w-3xl text-3xl leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl'>
                            Masters of Natural <span className='font-display font-light'>Landscape Design</span>
                        </h2>
                    </Reveal>
                    <Reveal variant='up' delay={240}>
                        <p className='mt-6 max-w-xl leading-relaxed text-white/80'>
                            We take pride in crafting outdoor living spaces that are beautiful, functional and
                            sustainable. From designing your dream landscape to safeguarding your waterfront investment,
                            we have the knowledge and ingenuity to bring your vision to life.
                        </p>
                    </Reveal>
                    <Reveal variant='scale' delay={340}>
                        <Button asChild size='lg' className='mt-8 bg-white px-7 text-[#16241b] hover:bg-white/90'>
                            <Link href='/contact'>
                                Book Now <ArrowUpRight className='size-4' />
                            </Link>
                        </Button>
                    </Reveal>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
