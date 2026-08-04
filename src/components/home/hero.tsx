import HeroVideo from '@/components/home/hero-video';

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
                {/* Plays on load rather than on scroll: the title sits below the
                    viewport's reveal threshold, so a scroll-triggered reveal would
                    leave it hidden until the visitor moved. */}
                <h1 className='font-editorial max-w-3xl text-[13.5vw] leading-[0.85] text-white sm:text-6xl lg:text-[4.5vw]'>
                    <span className='hero-mask'>
                        <span className='hero-rise'>
                            Pritty Landscapes <span className='font-display'>Design&nbsp;&amp;&nbsp;Build</span>
                        </span>
                    </span>
                </h1>
            </div>

            <style>{`
                .hero-img { animation: heroZoom 18s ease-out forwards; }
                @keyframes heroZoom {
                    from { transform: scale(1.08); }
                    to { transform: scale(1); }
                }
                /* Padding + negative margin give descenders room inside the clip. */
                .hero-mask {
                    display: block;
                    overflow: hidden;
                    padding-bottom: 0.18em;
                    margin-bottom: -0.18em;
                }
                .hero-rise {
                    display: block;
                    animation: heroRise 1.15s cubic-bezier(0.17, 0.84, 0.44, 1) 0.25s both;
                }
                @keyframes heroRise {
                    from { transform: translateY(115%); }
                    to { transform: translateY(0); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .hero-img, .hero-rise { animation: none; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
