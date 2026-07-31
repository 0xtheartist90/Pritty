'use client';

import { useEffect, useState } from 'react';

import { ArrowUp } from 'lucide-react';

/**
 * Enables the footer curtain reveal (sticky pinning) only when the whole
 * footer fits inside the viewport; a taller footer would get its top clipped.
 */
export const FooterRevealGuard = () => {
    useEffect(() => {
        const footer = document.querySelector('footer');
        if (!footer) return;

        const update = () =>
            footer.classList.toggle('footer-reveal-on', footer.offsetHeight <= window.innerHeight);

        update();
        const ro = new ResizeObserver(update);
        ro.observe(footer);
        window.addEventListener('resize', update);

        return () => {
            ro.disconnect();
            window.removeEventListener('resize', update);
        };
    }, []);

    return null;
};

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
            className='group text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-xs transition-colors'>
            Back to top
            <span className='border-border group-hover:border-foreground/50 flex size-8 items-center justify-center border transition-colors'>
                <ArrowUp className='size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5' />
            </span>
        </button>
    );
};
