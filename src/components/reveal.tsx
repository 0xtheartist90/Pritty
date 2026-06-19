'use client';

import { type ComponentProps, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'blur' | 'scale' | 'mask' | 'media';

type RevealProps = ComponentProps<'div'> & {
    /** Motion style. Defaults to a soft fade-up. */
    variant?: RevealVariant;
    /** Stagger in ms. */
    delay?: number;
};

const VARIANT_CLASS: Record<RevealVariant, string> = {
    up: 'rv rv-up',
    down: 'rv rv-down',
    left: 'rv rv-left',
    right: 'rv rv-right',
    blur: 'rv rv-blur',
    scale: 'rv rv-scale',
    mask: 'rv-mask',
    media: 'reveal-media'
};

/**
 * Reveals its children once they scroll into view, with a choreographed set of
 * motions (see globals.css). Uses a throttled scroll/resize check so it triggers
 * reliably everywhere, reveals on mount when already in view, and can never stay
 * permanently hidden. Respects prefers-reduced-motion.
 */
const Reveal = ({ variant = 'up', delay = 0, className, style, children, ...props }: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
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
            if (rect.top < window.innerHeight * 0.82 && rect.bottom > 0) {
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
        <div
            ref={ref}
            style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
            className={cn(VARIANT_CLASS[variant], visible && 'is-visible', className)}
            {...props}>
            {children}
        </div>
    );
};

export default Reveal;
