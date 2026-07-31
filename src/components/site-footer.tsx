import Link from 'next/link';

import { BackToTop, LocalTime } from '@/components/footer-widgets';
import Marquee from '@/components/marquee';
import TextReveal from '@/components/text-reveal';

import { ArrowUpRight } from 'lucide-react';

const MENU = [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Contact', href: '/contact' }
];

const AREAS = ['Blue Mountain', 'Collingwood', 'Georgian Bay', 'Markham', 'Muskoka', 'Thornbury', 'Toronto'];

const OFFICES = [
    {
        name: 'Markham',
        address: '675 Cochrane Drive, Suite 600-E, Markham ON L3R 0B8',
        phone: '(416) 722-0210'
    },
    {
        name: 'Collingwood',
        address: '64 Hurontario Street, Collingwood ON L9Y 2L6',
        phone: '(705) 984-4810'
    }
];

const SOCIALS = [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Youtube', href: '#' }
];

const MARQUEE_WORDS = ['Naturally Refined', 'Inspired by Water', 'Award-Winning Design', 'Shoreline Protection'];

/**
 * Studio-style footer: marquee strip, giant contact CTA, an oversized serif
 * menu with quiet contact details beside it, and a full-bleed wordmark. On tall
 * viewports it sits pinned behind the page for a curtain reveal.
 */
const SiteFooter = () => {
    return (
        <footer className='footer-reveal overflow-hidden bg-[#0a140e] text-white/70'>
            <div className='border-b border-white/10 py-4'>
                <Marquee duration={42}>
                    {MARQUEE_WORDS.map((word) => (
                        <span key={word} className='flex items-center'>
                            <span className='font-display text-base font-light text-white/50 italic'>{word}</span>
                            <span className='mx-10 size-1.5 rotate-45 bg-white/25' />
                        </span>
                    ))}
                </Marquee>
            </div>

            <div className='mx-auto max-w-7xl px-5 sm:px-8'>
                <Link href='/contact' className='group block border-b border-white/10 py-14 sm:py-16'>
                    <p className='font-display text-lg font-light text-white/55 italic'>Have a project in mind?</p>
                    <span className='font-display mt-4 flex flex-wrap items-baseline text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[1.04] font-light tracking-tight text-white'>
                        <TextReveal text='Let’s shape your shoreline' stagger={80} />
                        <ArrowUpRight className='ml-2 size-[0.7em] shrink-0 self-center text-white/60 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-white' />
                    </span>
                </Link>

                <div className='grid gap-14 py-16 lg:grid-cols-12 lg:gap-8'>
                    <nav className='lg:col-span-6'>
                        <ul>
                            {MENU.map((item) => (
                                <li key={item.label} className='border-b border-white/10 last:border-b-0'>
                                    <Link
                                        href={item.href}
                                        className='group flex items-center justify-between py-5 sm:py-6'>
                                        <span className='font-display text-3xl font-light text-white/75 transition-colors duration-500 group-hover:text-white sm:text-4xl'>
                                            {item.label}
                                        </span>
                                        <ArrowUpRight className='size-6 -translate-x-2 text-white/0 transition-all duration-500 group-hover:translate-x-0 group-hover:text-white' />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className='space-y-10 lg:col-span-3 lg:col-start-8'>
                        {OFFICES.map((office) => (
                            <div key={office.name}>
                                <p className='font-display text-lg font-light text-white italic'>{office.name}</p>
                                <p className='mt-2 max-w-56 text-sm leading-relaxed text-white/50'>{office.address}</p>
                                <a
                                    href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}
                                    className='link-line mt-2 inline-block text-sm text-white/70 transition-colors hover:text-white'>
                                    {office.phone}
                                </a>
                            </div>
                        ))}
                        <a
                            href='mailto:info@prittylandscapes.com'
                            className='link-line inline-block text-sm text-white transition-colors'>
                            info@prittylandscapes.com
                        </a>
                    </div>

                    <div className='flex flex-col justify-between gap-10 lg:col-span-2 lg:col-start-11'>
                        <div>
                            <p className='font-display text-lg font-light text-white italic'>Where we work</p>
                            <p className='mt-3 text-sm leading-loose text-white/50'>
                                {AREAS.map((area, i) => (
                                    <span key={area}>
                                        <Link
                                            href='/service-areas'
                                            className='transition-colors hover:text-white'>
                                            {area}
                                        </Link>
                                        {i < AREAS.length - 1 && <span className='text-white/25'> · </span>}
                                    </span>
                                ))}
                            </p>
                        </div>
                        <ul className='space-y-2'>
                            {SOCIALS.map((social) => (
                                <li key={social.label}>
                                    <Link
                                        href={social.href}
                                        className='group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white'>
                                        <span className='link-line'>{social.label}</span>
                                        <ArrowUpRight className='size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div aria-hidden className='pointer-events-none overflow-hidden select-none'>
                <p className='font-display translate-y-[14%] text-center text-[17vw] leading-[0.75] font-light tracking-[-0.02em] whitespace-nowrap text-white/[0.05]'>
                    PRITTY
                </p>
            </div>

            <div className='border-t border-white/10'>
                <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-xs text-white/50 sm:flex-row sm:px-8'>
                    <p>© {new Date().getFullYear()} Pritty Landscapes Inc.</p>
                    <LocalTime />
                    <div className='flex items-center gap-6'>
                        <Link href='/privacy' className='link-line transition-colors hover:text-white'>
                            Privacy Policy
                        </Link>
                        <BackToTop />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
