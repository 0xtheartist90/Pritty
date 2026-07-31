import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type SiteLogoProps = {
    className?: string;
    /** `light` shows the full white wordmark (for dark surfaces); `dark` shows the icon + dark text. */
    variant?: 'light' | 'dark';
};

/**
 * Pritty Landscapes logo. Uses the supplied white wordmark on dark surfaces and
 * the icon mark + dark wordmark on light surfaces.
 */
const SiteLogo = ({ className, variant = 'dark' }: SiteLogoProps) => {
    return (
        <Link
            href='/'
            className={cn('flex items-center gap-2.5', className)}
            aria-label='Pritty Landscapes home'>
            <Image
                src={variant === 'light' ? '/pritty-logo-white.png' : '/pritty-logo-dark.png'}
                alt='Pritty Landscapes'
                width={220}
                height={44}
                priority
                className='h-7 w-auto'
            />
        </Link>
    );
};

export default SiteLogo;
