import Marquee from '@/components/marquee';
import ShellPattern from '@/components/shell-pattern';

// Craft and materials, deliberately not a repeat of the service names above.
const ITEMS = ['Armour Stone', 'Native Planting', 'Flagstone Terraces', 'Water Features', 'Natural Stone'];

/**
 * Full-bleed typographic marquee — a breathing moment between sections,
 * borrowed from studio-site pacing.
 */
const MarqueeBand = () => {
    return (
        <section className='border-border/70 relative border-y py-10 sm:py-14'>
            <ShellPattern />
            <Marquee className='relative' duration={46}>
                {ITEMS.map((item) => (
                    <span key={item} className='flex items-center'>
                        {/* Roomy line height so serif descenders (p, g) clear the clip. */}
                        <span className='font-editorial text-foreground/85 text-4xl leading-[1.25] tracking-tight sm:text-6xl lg:text-7xl'>
                            {item}
                        </span>
                        <span className='bg-primary/50 mx-8 size-2 rotate-45 sm:mx-12' />
                    </span>
                ))}
            </Marquee>
        </section>
    );
};

export default MarqueeBand;
