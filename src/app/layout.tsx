import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Fraunces } from 'next/font/google';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import SmoothScroll from '@/components/smooth-scroll';
import '@/app/globals.css';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});
const fraunces = Fraunces({
    subsets: ['latin'],
    variable: '--font-fraunces',
    display: 'swap',
    axes: ['opsz']
});

export const metadata: Metadata = {
    title: 'Pritty Landscapes | Naturally Refined, Inspired by Water',
    description:
        'Award-winning landscape design and shoreline protection across Southern Ontario. Bespoke outdoor living spaces inspired by water.'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background text-foreground overscroll-none antialiased`}>
                <ThemeProvider forcedTheme='light' attribute='class'>
                    <SmoothScroll />
                    <SiteHeader />
                    {/* z-10 + solid bg lets the page slide over the pinned footer (curtain reveal). */}
                    <main className='bg-background relative z-10'>{children}</main>
                    <SiteFooter />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
