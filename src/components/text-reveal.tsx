'use client';

import { type ElementType, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type TextRevealProps = {
    text: string;
    /** Wrapping element. Defaults to span so it can live inside any heading. */
    as?: ElementType;
    className?: string;
    /** Base delay in ms before the first word. */
    delay?: number;
    /** Per-word stagger in ms. */
    stagger?: number;
};

/**
 * Word-by-word masked text reveal: each word rises out of its own clipping
 * line once scrolled into view. Uses the same throttled viewport check as
 * Reveal; styles live in globals.css (.tr / .tr-w).
 */
const TextReveal = ({ text, as: Tag = 'span', className, delay = 0, stagger = 60 }: TextRevealProps) => {
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let raf = 0;
        let done = false;

        const cleanup = () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            window.cancelAnimationFrame(raf);
        };

        const check = () => {
            if (done) return;
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
                done = true;
                setVisible(true);
                cleanup();
            }
        };

        const onScroll = () => {
            window.cancelAnimationFrame(raf);
            raf = window.requestAnimationFrame(check);
        };

        check();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return cleanup;
    }, []);

    return (
        <Tag ref={ref} className={cn('tr', visible && 'is-visible', className)}>
            {text.split(' ').map((word, i) => (
                <span key={i}>
                    <span className='tr-w'>
                        <span style={{ transitionDelay: `${delay + i * stagger}ms` }}>{word}</span>
                    </span>{' '}
                </span>
            ))}
        </Tag>
    );
};

export default TextReveal;
