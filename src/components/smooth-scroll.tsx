'use client';

import { useEffect } from 'react';

import Lenis from 'lenis';

/**
 * Site-wide inertial smooth scrolling via Lenis. Skipped entirely for users
 * who prefer reduced motion and on touch devices (native momentum wins there).
 */
const SmoothScroll = () => {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // Low lerp = long, floaty glide. 0.05 is noticeably smoother than the default.
        const lenis = new Lenis({ lerp: 0.05, anchors: true });
        // Expose for programmatic scrolls (e.g. back-to-top) so they don't fight the lerp.
        (window as unknown as { lenis?: Lenis }).lenis = lenis;

        let raf = window.requestAnimationFrame(function loop(time) {
            lenis.raf(time);
            raf = window.requestAnimationFrame(loop);
        });

        return () => {
            window.cancelAnimationFrame(raf);
            lenis.destroy();
            delete (window as unknown as { lenis?: Lenis }).lenis;
        };
    }, []);

    return null;
};

export default SmoothScroll;
