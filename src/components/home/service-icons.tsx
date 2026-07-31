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

/** Dredge bucket lifting below a water line. */
export const DredgingIcon = (props: IconProps) => (
    <svg {...base} {...props}>
        <path d='M4 20c4-4 8-4 12 0s8 4 12 0 8-4 12 0 8 4 12 0 8-4 12 0' />
        <path d='M32 20v12' />
        <path d='M24 32h16l-2.5 12c-.5 2.5-2.5 4-5.5 4s-5-1.5-5.5-4Z' />
    </svg>
);

/** Barge hull riding a wave line. */
export const BargingIcon = (props: IconProps) => (
    <svg {...base} {...props}>
        <path d='M12 34h40l-6 10H18Z' />
        <path d='M26 34v-7h12v7' />
        <path d='M4 52c4-4 8-4 12 0s8 4 12 0 8-4 12 0 8 4 12 0 8-4 12 0' />
    </svg>
);

/** Placed armour stones, stacked. */
export const BuildingIcon = (props: IconProps) => (
    <svg {...base} {...props}>
        <path d='M22 30c2-5 7-8 12-6 5 1 8 5 7 10l-19-1c-.5-1-.5-2 0-3Z' />
        <path d='M8 46c1-6 6-10 12-9 5 0 9 4 10 9Z' />
        <path d='M34 46c1-5 5-9 11-9 5 0 9 4 10 9Z' />
        <path d='M6 52h52' />
    </svg>
);
