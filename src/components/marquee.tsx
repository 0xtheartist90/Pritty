import { type CSSProperties, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

type MarqueeProps = {
    children: ReactNode;
    className?: string;
    /** Seconds for one full loop. */
    duration?: number;
};

/**
 * Infinite horizontal marquee. Children are rendered twice back-to-back and the
 * track translates by exactly one copy, so the loop is seamless at any width.
 */
const Marquee = ({ children, className, duration = 36 }: MarqueeProps) => {
    return (
        <div className={cn('overflow-hidden whitespace-nowrap', className)}>
            <div
                className='marquee-track inline-flex'
                style={{ '--marquee-duration': `${duration}s` } as CSSProperties}>
                <div className='flex shrink-0 items-center'>{children}</div>
                <div aria-hidden className='flex shrink-0 items-center'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
