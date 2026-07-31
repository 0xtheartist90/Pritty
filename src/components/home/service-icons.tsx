import { type ComponentProps } from 'react';

type IconProps = ComponentProps<'svg'>;

const base = {
    viewBox: '0 0 64 64',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
};

/** Two soft rolling peaks under a low sun — hand-drawn line art. */
export const LandscapesIcon = (props: IconProps) => (
    <svg {...base} {...props}>
        <circle cx='47' cy='16' r='5.5' />
        <path d='M6 50c6-2 10-9 14-18 3-7 5-11 8-11s5 4 8 11c4 9 8 16 14 18' />
        <path d='M36 50c4-1.5 7-6 9-11 1.5-4 3-6.5 5-6.5s3.5 2.5 5 6.5c2 5 5 9.5 9 11' />
    </svg>
);

/** Drafting compass sweeping an arc. */
export const DesignIcon = (props: IconProps) => (
    <svg {...base} {...props}>
        <circle cx='32' cy='15' r='3.5' />
        <path d='M29.5 17.5 15 48' />
        <path d='M34.5 17.5 49 48' />
        <path d='M20.5 36.5c7 4.5 16 4.5 23 0' />
    </svg>
);

/** Three layered wave lines. */
export const ShorelinesIcon = (props: IconProps) => (
    <svg {...base} {...props}>
        <path d='M4 22c4-4 8-4 12 0s8 4 12 0 8-4 12 0 8 4 12 0 8-4 12 0' />
        <path d='M4 32c4-4 8-4 12 0s8 4 12 0 8-4 12 0 8 4 12 0 8-4 12 0' />
        <path d='M4 42c4-4 8-4 12 0s8 4 12 0 8-4 12 0 8 4 12 0 8-4 12 0' />
    </svg>
);
