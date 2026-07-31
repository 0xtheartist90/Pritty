import Approach from '@/components/home/approach';
import Faq from '@/components/home/faq';
import FeaturedProjects from '@/components/home/featured-projects';
import FinalCta from '@/components/home/final-cta';
import Hero from '@/components/home/hero';
import MarqueeBand from '@/components/home/marquee-band';
import ParallaxBand from '@/components/home/parallax-band';
import PhotoBanner from '@/components/home/photo-banner';
import Proof from '@/components/home/proof';
import ServiceAreasSection from '@/components/home/service-areas-section';
import Statement from '@/components/home/statement';
import WaterServices from '@/components/home/water-services';

/**
 * Pritty Landscapes homepage — naturally refined, inspired by water.
 */
const Page = () => {
    return (
        <>
            <Hero />

            <Approach />

            <Statement />

            <ParallaxBand />

            <FeaturedProjects />

            <MarqueeBand />

            <WaterServices />

            <ServiceAreasSection />

            <PhotoBanner />

            <Proof />

            <PhotoBanner src='/gallery/banner2.webp' />

            <Faq />

            <FinalCta />
        </>
    );
};

export default Page;
