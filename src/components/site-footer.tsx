import Link from 'next/link';

import { BackToTop, FooterRevealGuard, LocalTime } from '@/components/footer-widgets';
import Marquee from '@/components/marquee';
import ShellPattern from '@/components/shell-pattern';
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
 * Studio-style footer on the site's light ground with the shell texture:
 * marquee strip, giant contact CTA, an oversized menu with quiet contact
 * details beside it, and a full-bleed wordmark. On tall viewports it sits
 * pinned behind the page for a curtain reveal.
 */
const SiteFooter = () => {
    return (
        <footer className='footer-reveal bg-background text-foreground relative overflow-hidden'>
            <FooterRevealGuard />
            <ShellPattern />
            {/* On desktop the footer fills exactly one viewport (guard keeps the
                curtain reveal off whenever it doesn't fit). */}
            <div className='relative lg:flex lg:min-h-svh lg:flex-col lg:justify-between'>
                <div className='border-border/70 border-y py-4'>
                    <Marquee duration={42}>
                        {MARQUEE_WORDS.map((word) => (
                            <span key={word} className='flex items-center'>
                                <span className='font-display text-muted-foreground text-base font-light'>
                                    {word}
                                </span>
                                <span className='bg-foreground/20 mx-10 size-1.5 rotate-45' />
                            </span>
                        ))}
                    </Marquee>
                </div>

                <div className='mx-auto max-w-7xl px-5 sm:px-8'>
                    <Link href='/contact' className='group border-border/70 block border-b py-10 sm:py-12'>
                        <p className='font-display text-muted-foreground text-lg font-light'>
                            Have a project in mind?
                        </p>
                        <span className='font-editorial mt-4 flex flex-wrap items-baseline text-[clamp(2rem,4.5vw,3.75rem)] leading-[0.95] tracking-tight'>
                            <TextReveal text='Let’s shape your shoreline' stagger={80} />
                            <ArrowUpRight className='text-foreground/50 group-hover:text-foreground ml-2 size-[0.7em] shrink-0 self-center transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2' />
                        </span>
                    </Link>

                    <div className='grid gap-14 py-10 lg:grid-cols-12 lg:gap-8'>
                        <nav className='lg:col-span-6'>
                            <ul>
                                {MENU.map((item) => (
                                    <li key={item.label} className='border-border/70 border-b last:border-b-0'>
                                        <Link
                                            href={item.href}
                                            className='group flex items-center justify-between py-4 sm:py-5'>
                                            <span className='font-editorial text-foreground/75 group-hover:text-foreground text-2xl transition-colors duration-500 sm:text-3xl'>
                                                {item.label}
                                            </span>
                                            <ArrowUpRight className='text-foreground/0 group-hover:text-foreground size-6 -translate-x-2 transition-all duration-500 group-hover:translate-x-0' />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className='space-y-7 lg:col-span-3 lg:col-start-8'>
                            {OFFICES.map((office) => (
                                <div key={office.name}>
                                    <p className='font-display text-foreground text-lg font-light'>
                                        {office.name}
                                    </p>
                                    <p className='text-muted-foreground mt-2 max-w-56 text-sm leading-relaxed'>
                                        {office.address}
                                    </p>
                                    <a
                                        href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}
                                        className='link-line text-foreground/70 hover:text-foreground mt-2 inline-block text-sm transition-colors'>
                                        {office.phone}
                                    </a>
                                </div>
                            ))}
                            <a
                                href='mailto:info@prittylandscapes.com'
                                className='link-line text-foreground inline-block text-sm transition-colors'>
                                info@prittylandscapes.com
                            </a>
                        </div>

                        <div className='flex flex-col justify-between gap-10 lg:col-span-2 lg:col-start-11'>
                            <div>
                                <p className='font-display text-foreground text-lg font-light'>Where we work</p>
                                <p className='text-muted-foreground mt-3 text-sm leading-loose'>
                                    {AREAS.map((area, i) => (
                                        <span key={area}>
                                            <Link
                                                href='/service-areas'
                                                className='hover:text-foreground transition-colors'>
                                                {area}
                                            </Link>
                                            {i < AREAS.length - 1 && <span className='text-foreground/25'> · </span>}
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <ul className='space-y-2'>
                                {SOCIALS.map((social) => (
                                    <li key={social.label}>
                                        <Link
                                            href={social.href}
                                            className='group text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors'>
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
                    <p className='font-editorial text-foreground/[0.05] translate-y-[14%] text-center text-[17vw] leading-[0.75] tracking-[-0.02em] whitespace-nowrap lg:text-[9vw]'>
                        PRITTY
                    </p>
                </div>

                <div className='border-border/70 border-t'>
                    <div className='text-muted-foreground mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-4 text-xs sm:flex-row sm:px-8'>
                        <div className='flex items-center gap-4'>
                            <p>© {new Date().getFullYear()} Pritty Landscapes Inc.</p>
                            <span className='bg-border hidden h-3 w-px sm:block' />
                            <a
                                href='https://www.wearevirtuo.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-muted-foreground/70 hover:text-foreground transition-colors'>
                                Powered by <span className='font-display'>Virtuo</span>
                            </a>
                        </div>
                        <LocalTime />
                        <div className='flex items-center gap-6'>
                            <Link href='/privacy' className='link-line hover:text-foreground transition-colors'>
                                Privacy Policy
                            </Link>
                            <BackToTop />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
