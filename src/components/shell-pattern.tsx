import { cn } from '@/lib/utils';

/**
 * Subtle repeating shell-pattern texture for light sections. Absolutely fills
 * its nearest relative parent; keep sibling content on a higher stacking layer.
 */
const ShellPattern = ({ className }: { className?: string }) => (
    <div
        aria-hidden
        className={cn('pointer-events-none absolute inset-0 bg-repeat opacity-[0.04]', className)}
        style={{ backgroundImage: "url('/shellpattern-tile.jpg')", backgroundSize: '540px auto' }}
    />
);

export default ShellPattern;
