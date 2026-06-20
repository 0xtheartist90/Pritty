'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { cn } from '@/lib/utils';

declare global {
    interface Window {
        YT?: any;
        onYouTubeIframeAPIReady?: () => void;
    }
}

let apiPromise: Promise<void> | null = null;

/** Load the YouTube IFrame API once, shared across all instances. */
function loadApi(): Promise<void> {
    if (window.YT?.Player) return Promise.resolve();
    if (!apiPromise) {
        apiPromise = new Promise<void>((resolve) => {
            const prev = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
                prev?.();
                resolve();
            };
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.head.appendChild(tag);
        });
    }

    return apiPromise;
}

// Cover the viewport in both orientations while staying 16:9; overscan crops
// any residual branding. pointer-events disabled so the chrome is never reachable.
const COVER_STYLE: Record<string, string> = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100vw',
    height: '56.25vw',
    minHeight: '100svh',
    minWidth: '177.78svh',
    transform: 'translate(-50%, -50%) scale(1.35)',
    border: '0',
    pointerEvents: 'none',
    opacity: '0',
    transition: 'opacity 0.8s ease'
};

type BgVideoProps = {
    videoId: string;
    /** Poster shown until the video is playing (and as a fallback). Omit for none. */
    poster?: string;
    posterAlt?: string;
    start?: number;
};

/**
 * Full-bleed muted YouTube background video via the IFrame Player API — no
 * controls, no playlist prev/next buttons, looped seamlessly, and revealed only
 * once it is actually playing (no chrome flash at the start).
 */
const BgVideo = ({ videoId, poster, posterAlt = '', start = 0 }: BgVideoProps) => {
    const hostRef = useRef<HTMLDivElement>(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let player: any;
        let cancelled = false;
        let revealTimer = 0;
        let revealed = false;

        loadApi().then(() => {
            if (cancelled || !hostRef.current) return;
            player = new window.YT.Player(hostRef.current, {
                videoId,
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    modestbranding: 1,
                    rel: 0,
                    playsinline: 1,
                    iv_load_policy: 3,
                    start
                },
                events: {
                    onReady: (e: any) => {
                        e.target.mute();
                        e.target.playVideo();
                    },
                    onStateChange: (e: any) => {
                        // PLAYING — wait out YouTube's start-up overlay (the muted-autoplay
                        // play/pause affordance) before revealing, so no chrome is ever seen.
                        if (e.data === 1 && !revealed) {
                            revealed = true;
                            revealTimer = window.setTimeout(() => {
                                const iframe = e.target.getIframe?.();
                                if (iframe) iframe.style.opacity = '1';
                                setReady(true);
                            }, 1200);
                        }
                        // ENDED — loop without a playlist (keeps prev/next chrome hidden).
                        if (e.data === 0) {
                            e.target.seekTo(start);
                            e.target.playVideo();
                        }
                    }
                }
            });

            const iframe = player.getIframe?.();
            if (iframe) Object.assign(iframe.style, COVER_STYLE);
        });

        return () => {
            cancelled = true;
            window.clearTimeout(revealTimer);
            try {
                player?.destroy();
            } catch {
                /* noop */
            }
        };
    }, [videoId, start]);

    return (
        <div className='absolute inset-0 overflow-hidden bg-[#16241b]'>
            {poster && (
                <Image
                    src={poster}
                    alt={posterAlt}
                    fill
                    sizes='100vw'
                    className={cn('object-cover transition-opacity duration-700', ready ? 'opacity-0' : 'opacity-100')}
                />
            )}
            <div ref={hostRef} />
        </div>
    );
};

export default BgVideo;
