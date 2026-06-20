import Parallax from '@/components/parallax';

/**
 * Slim full-bleed photo banner — a quiet, cinematic breath between sections.
 */
const PhotoBanner = ({ src = '/gallery/banner.webp' }: { src?: string }) => {
    return (
        <section className='relative h-[44svh] min-h-[300px] w-full overflow-hidden'>
            <Parallax strength={70} className='absolute inset-x-0 -top-[14%] h-[128%]'>
                <div className='size-full bg-cover bg-center' style={{ backgroundImage: `url('${src}')` }} />
            </Parallax>
        </section>
    );
};

export default PhotoBanner;
