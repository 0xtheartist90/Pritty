'use client';

import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
] as const;

/**
 * Bureau-style header: a stacked three-line wordmark on the left, a single nav
 * row on the right. The whole bar sits in mix-blend-difference so it stays
 * white over imagery and inverts to ink over light sections. Clicking a link
 * for the page you are already on reloads it fresh.
 */
const SiteHeader = () => {
    const pathname = usePathname();
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;

        // Slip away when scrolling down past the hero, reappear on any upward scroll.
        const onScroll = () => {
            const y = window.scrollY;
            if (y > 160 && y > lastY + 4) setHidden(true);
            else if (y < lastY - 4 || y <= 160) setHidden(false);
            lastY = y;
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

    // Next.js treats a link to the current route as a no-op; give it a fresh
    // reload from the top instead so the click always does something.
    const reloadIfCurrent = (href: string) => (e: MouseEvent) => {
        if (isActive(href)) {
            e.preventDefault();
            window.history.scrollRestoration = 'manual';
            window.location.reload();
        }
    };

    return (
        <header
            className={cn(
                'fixed top-0 z-50 w-full mix-blend-difference transition-transform duration-500 ease-[cubic-bezier(0.17,0.84,0.44,1)]',
                hidden && '-translate-y-full'
            )}>
            <div className='flex w-full items-start justify-between px-5 py-5 text-white sm:px-8 lg:px-10'>
                <Link
                    href='/'
                    onClick={reloadIfCurrent('/')}
                    className='block text-[13px] leading-[1.05] tracking-tight sm:text-sm'>
                    <span className='block'>Pritty</span>
                    <span className='block'>Landscapes</span>
                    <span className='font-display block'>Design &amp; Build</span>
                </Link>

                <nav className='flex items-center gap-6 pt-0.5 text-[13px] sm:text-sm'>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={reloadIfCurrent(link.href)}
                            className={cn(
                                'group relative',
                                // The home link stays home to the wordmark on small screens.
                                link.href === '/' && 'hidden sm:block'
                            )}>
                            {link.label}
                            <span
                                className={cn(
                                    'absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-700 ease-[cubic-bezier(0.17,0.84,0.44,1)] group-hover:origin-left group-hover:scale-x-100',
                                    isActive(link.href) && 'scale-x-100'
                                )}
                            />
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default SiteHeader;
