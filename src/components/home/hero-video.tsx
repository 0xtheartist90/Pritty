import BgVideo from '@/components/bg-video';

/**
 * Hero background video — chrome-free, with a photographic poster shown
 * whenever the video is not actively playing.
 */
const HeroVideo = () => (
    <BgVideo videoId='pluqPh8QSr0' start={10} poster='/gallery/hero.webp' posterAlt='Waterfront landscape at dusk' />
);

export default HeroVideo;
