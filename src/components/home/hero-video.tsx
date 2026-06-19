'use client';

import { useState } from 'react';

import Image from 'next/image';

import { cn } from '@/lib/utils';

const VIDEO_ID = 'pluqPh8QSr0';
const START = 10;

/**
 * Full-bleed muted YouTube background video for the hero. The hero photo sits
 * underneath as an instant poster + fallback (good for LCP and if the embed is
 * blocked). The iframe is scaled to cover the viewport in both orientations.
 */
const HeroVideo = () => {
    const [ready, setReady] = useState(false);

    const params = new URLSearchParams({
        autoplay: '1',
        mute: '1',
        controls: '0',
        loop: '1',
        playlist: VIDEO_ID,
        start: String(START),
        playsinline: '1',
        rel: '0',
        modestbranding: '1',
        iv_load_policy: '3',
        disablekb: '1',
        fs: '0'
    });

    return (
        <div className='absolute inset-0 overflow-hidden'>
            <Image
                src='/gallery/hero.webp'
                alt='Waterfront patio at sunset overlooking the lake'
                fill
                priority
                sizes='100vw'
                className='object-cover'
            />
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?${params.toString()}`}
                title='Pritty Landscapes showreel'
                allow='autoplay; encrypted-media; picture-in-picture'
                aria-hidden
                tabIndex={-1}
                onLoad={() => setReady(true)}
                className={cn(
                    'pointer-events-none absolute top-1/2 left-1/2 border-0 transition-opacity duration-1000',
                    ready ? 'opacity-100' : 'opacity-0'
                )}
                style={{
                    width: '100vw',
                    height: '56.25vw',
                    minHeight: '100svh',
                    minWidth: '177.78svh',
                    // Overscan so YouTube's title/branding (top edge) is cropped out of view.
                    transform: 'translate(-50%, -50%) scale(1.35)'
                }}
            />
        </div>
    );
};

export default HeroVideo;
