import PageHero from '@/components/page-hero';

export const metadata = { title: 'Service Areas — Pritty Landscapes' };

const AREAS = ['Blue Mountain', 'Collingwood', 'Georgian Bay', 'Markham', 'Muskoka', 'Thornbury', 'Toronto'];

const ServiceAreasPage = () => (
    <>
        <PageHero
            eyebrow='Service Areas'
            title='Serving Southern Ontario’s waterfront.'
            description='From Georgian Bay to the Greater Toronto Area, we bring naturally refined landscapes and shoreline protection to the places our clients call home.'
        />
        <section className='mx-auto max-w-7xl px-5 py-16 sm:px-8'>
            <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {AREAS.map((area) => (
                    <li
                        key={area}
                        className='border-border/60 bg-card font-display text-foreground rounded-xl border px-6 py-8 text-2xl font-normal'>
                        {area}
                    </li>
                ))}
            </ul>
        </section>
    </>
);

export default ServiceAreasPage;
