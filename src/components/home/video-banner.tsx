import BgVideo from '@/components/bg-video';

/**
 * Full-width cinematic video banner — a quiet breath between sections, with
 * just enough tint to sit in the site's palette.
 */
const VideoBanner = () => {
    return (
        <section className='relative h-[70svh] min-h-[420px] w-full overflow-hidden'>
            <BgVideo videoId='wgoDINcFZ9g' poster='/gallery/water.webp' posterAlt='Waterfront landscape' />
            <div className='absolute inset-0 bg-[#0e1a13]/20' />
        </section>
    );
};

export default VideoBanner;
