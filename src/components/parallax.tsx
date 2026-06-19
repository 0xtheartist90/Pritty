'use client';

import { type ComponentProps, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type ParallaxProps = ComponentProps<'div'> & {
    /** Drift strength in px across the full travel (higher = more movement). */
    strength?: number;
};

/**
 * Subtle vertical parallax. Translates its children based on the element's
 * position relative to the viewport center. Throttled with rAF; disabled for
 * reduced-motion users.
 */
const Parallax = ({ strength = 60, className, style, children, ...props }: ParallaxProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let raf = 0;
        const update = () => {
            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight;
            // -1 (element below viewport) … 0 (centered) … 1 (above)
            const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
            setOffset(Math.max(-1, Math.min(1, progress)) * strength);
        };
        const onScroll = () => {
            window.cancelAnimationFrame(raf);
            raf = window.requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            window.cancelAnimationFrame(raf);
        };
    }, [strength]);

    return (
        <div
            ref={ref}
            style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: 'transform', ...style }}
            className={cn(className)}
            {...props}>
            {children}
        </div>
    );
};

export default Parallax;
