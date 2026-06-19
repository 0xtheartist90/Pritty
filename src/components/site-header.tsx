'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import SiteLogo from '@/components/site-logo';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/registry/new-york-v4/ui/sheet';

import { Menu } from 'lucide-react';

export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Contact', href: '/contact' }
] as const;

const SiteHeader = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const isHome = pathname === '/';
    // Light treatment only while floating over the dark hero on the homepage.
    const overHero = isHome && !scrolled;

    const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

    return (
        <header
            className={cn(
                'fixed top-0 z-50 w-full transition-all duration-500',
                overHero ? 'bg-transparent py-2' : 'bg-background/80 border-border/60 border-b backdrop-blur-xl'
            )}>
            <div className='mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8'>
                <SiteLogo variant={overHero ? 'light' : 'dark'} />

                <nav className='hidden items-center gap-9 md:flex'>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'group relative text-sm tracking-wide transition-colors',
                                overHero
                                    ? 'text-white/80 hover:text-white'
                                    : isActive(link.href)
                                      ? 'text-foreground'
                                      : 'text-muted-foreground hover:text-foreground'
                            )}>
                            {link.label}
                            <span
                                className={cn(
                                    'absolute -bottom-1.5 left-0 h-px transition-all duration-300',
                                    overHero ? 'bg-white' : 'bg-primary',
                                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                                )}
                            />
                        </Link>
                    ))}
                </nav>

                <div className='flex items-center gap-2'>
                    <Button
                        asChild
                        className={cn(
                            'hidden rounded-full px-5 transition-colors sm:inline-flex',
                            overHero && 'bg-white text-foreground hover:bg-white/90'
                        )}>
                        <Link href='/contact'>Book a Consultation</Link>
                    </Button>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant='ghost'
                                size='icon'
                                aria-label='Open menu'
                                className={cn('md:hidden', overHero && 'text-white hover:bg-white/10 hover:text-white')}>
                                <Menu className='size-5' />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='right' className='w-72'>
                            <SheetTitle className='sr-only'>Menu</SheetTitle>
                            <div className='flex flex-col gap-1 px-4 pt-10'>
                                <SiteLogo className='mb-6 px-2' />
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            'hover:bg-accent rounded-md px-2 py-2.5 text-base transition-colors',
                                            isActive(link.href)
                                                ? 'text-foreground font-medium'
                                                : 'text-muted-foreground'
                                        )}>
                                        {link.label}
                                    </Link>
                                ))}
                                <Button asChild className='mt-4 rounded-full'>
                                    <Link href='/contact' onClick={() => setOpen(false)}>
                                        Book a Consultation
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
