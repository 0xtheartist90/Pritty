import Image from 'next/image';
import Link from 'next/link';

import { Facebook, Instagram, Youtube } from 'lucide-react';

const MENU = [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Design', href: '/portfolio' },
    { label: 'Landscapes', href: '/portfolio' },
    { label: 'Shorelines', href: '/portfolio' },
    { label: 'Careers', href: '/about' },
    { label: 'Contact Us', href: '/contact' }
];

const AREAS = ['Blue Mountain', 'Collingwood', 'Georgian Bay', 'Markham', 'Muskoka', 'Thornbury', 'Toronto'];

const OFFICES = [
    {
        name: 'Markham Office',
        address: '675 Cochrane Drive, Suite 600-E, Markham ON L3R 0B8',
        phone: '(416) 722-0210'
    },
    {
        name: 'Collingwood Office',
        address: '64 Hurontario Street, Collingwood ON L9Y 2L6',
        phone: '(705) 984-4810'
    }
];

const SiteFooter = () => {
    return (
        <footer className='bg-[#0e1a13] text-white/70'>
            <div className='mx-auto max-w-7xl px-5 py-20 sm:px-8'>
                <div className='grid gap-12 lg:grid-cols-12'>
                    <div className='lg:col-span-4'>
                        <Image
                            src='/pritty-logo-white.png'
                            alt='Pritty Landscapes'
                            width={240}
                            height={48}
                            className='h-10 w-auto'
                        />
                        <p className='mt-6 max-w-sm text-sm leading-relaxed text-white/60'>
                            Naturally refined, inspired by water. Pritty Landscapes is dedicated to the creation of
                            bespoke outdoor spaces that connect you with nature — award-winning shoreline protection and
                            landscape design.
                        </p>
                        <div className='mt-7 flex items-center gap-3'>
                            {[
                                { icon: Facebook, label: 'Facebook', href: '#' },
                                { icon: Instagram, label: 'Instagram', href: '#' },
                                { icon: Youtube, label: 'Youtube', href: '#' }
                            ].map(({ icon: Icon, label, href }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className='flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/50 hover:text-white'>
                                    <Icon className='size-4' />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className='lg:col-span-3'>
                        <h3 className='text-xs font-medium tracking-[0.18em] text-white/40 uppercase'>Main Menu</h3>
                        <ul className='mt-5 space-y-3 text-sm'>
                            {MENU.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className='text-white/70 transition-colors hover:text-white'>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='lg:col-span-2'>
                        <h3 className='text-xs font-medium tracking-[0.18em] text-white/40 uppercase'>Service Areas</h3>
                        <ul className='mt-5 space-y-3 text-sm'>
                            {AREAS.map((area) => (
                                <li key={area}>
                                    <Link
                                        href='/service-areas'
                                        className='text-white/70 transition-colors hover:text-white'>
                                        {area}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='lg:col-span-3'>
                        <h3 className='text-xs font-medium tracking-[0.18em] text-white/40 uppercase'>Contact Us</h3>
                        <ul className='mt-5 space-y-5 text-sm'>
                            {OFFICES.map((office) => (
                                <li key={office.name}>
                                    <p className='font-medium text-white'>{office.name}</p>
                                    <p className='mt-1 leading-relaxed text-white/60'>{office.address}</p>
                                    <a
                                        href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}
                                        className='mt-1 inline-block text-white/70 transition-colors hover:text-white'>
                                        {office.phone}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href='mailto:info@prittylandscapes.com' className='text-white hover:underline'>
                                    info@prittylandscapes.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row'>
                    <p>© {new Date().getFullYear()} Pritty Landscapes Inc. All rights reserved.</p>
                    <div className='flex items-center gap-5'>
                        <Link href='/privacy' className='transition-colors hover:text-white'>
                            Privacy Policy
                        </Link>
                        <Link href='/contact' className='transition-colors hover:text-white'>
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
