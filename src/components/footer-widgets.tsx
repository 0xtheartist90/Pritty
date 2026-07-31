'use client';

import { useEffect, useState } from 'react';

import { ArrowUp } from 'lucide-react';

/** Live local time for the studio's timezone — a small "we're real people" touch. */
export const LocalTime = () => {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const format = () =>
            setTime(
                new Intl.DateTimeFormat('en-CA', {
                    hour: 'numeric',
                    minute: '2-digit',
                    timeZone: 'America/Toronto'
                }).format(new Date())
            );
        format();
        const id = window.setInterval(format, 30_000);

        return () => window.clearInterval(id);
    }, []);

    return (
        <span className='tabular-nums'>
            Ontario, Canada{time ? `, ${time}` : ''}
        </span>
    );
};

export const BackToTop = () => {
    return (
        <button
            type='button'
            onClick={() => {
                const lenis = (window as unknown as { lenis?: { scrollTo: (t: number) => void } }).lenis;
                if (lenis) lenis.scrollTo(0);
                else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className='group inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white'>
            Back to top
            <span className='flex size-8 items-center justify-center border border-white/15 transition-colors group-hover:border-white/50'>
                <ArrowUp className='size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5' />
            </span>
        </button>
    );
};
