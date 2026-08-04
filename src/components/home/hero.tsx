import HeroVideo from '@/components/home/hero-video';
import Reveal from '@/components/reveal';

/**
 * Bureau-style hero: full-viewport footage with a single wordmark statement
 * anchored bottom-left — no buttons, no stats, no rotation. The name carries
 * the frame; the serif closes it.
 */
const Hero = () => {
    return (
        <section className='relative flex h-[100svh] min-h-[560px] w-full flex-col overflow-hidden bg-[#16241b]'>
            <HeroVideo />
            {/* Light tonal wash — just enough grounding at the bottom for the type,
                keeping the footage itself bright and open. */}
            <div className='absolute inset-0 bg-black/10' />
            <div className='absolute inset-0 bg-gradient-to-t from-[#0e1a13]/55 via-[#0e1a13]/5 to-[#0e1a13]/20' />

            <div className='relative z-10 flex h-full w-full items-end px-5 pb-9 sm:px-8 lg:px-10'>
                <Reveal variant='up' delay={140}>
                    <h1 className='font-editorial max-w-3xl text-[13.5vw] leading-[0.85] text-white sm:text-6xl lg:text-[4.5vw]'>
                        Pritty Landscapes <span className='font-display'>Design&nbsp;&amp;&nbsp;Build</span>
                    </h1>
                </Reveal>
            </div>

            <style>{`
                .hero-img { animation: heroZoom 18s ease-out forwards; }
                @keyframes heroZoom {
                    from { transform: scale(1.08); }
                    to { transform: scale(1); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .hero-img { animation: none; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
