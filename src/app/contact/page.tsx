import PageHero from '@/components/page-hero';

export const metadata = { title: 'Contact — Pritty Landscapes' };

const OFFICES = [
    { name: 'Markham Office', address: '675 Cochrane Drive, Suite 600-E, Markham ON L3R 0B8', phone: '(416) 722-0210' },
    { name: 'Collingwood Office', address: '64 Hurontario Street, Collingwood ON L9Y 2L6', phone: '(705) 984-4810' }
];

const ContactPage = () => (
    <>
        <PageHero
            eyebrow='Contact'
            title='Let’s start your journey.'
            description='Reach out to schedule a consultation. We offer free estimates and would love to hear about your project.'
        />
        <section className='mx-auto max-w-7xl px-5 py-16 sm:px-8'>
            <div className='grid gap-8 sm:grid-cols-2'>
                {OFFICES.map((o) => (
                    <div key={o.name} className='border-border/60 bg-card rounded-2xl border p-8'>
                        <h2 className='font-display text-foreground text-2xl font-normal'>{o.name}</h2>
                        <p className='text-muted-foreground mt-3 leading-relaxed'>{o.address}</p>
                        <a href={`tel:${o.phone.replace(/[^\d+]/g, '')}`} className='text-primary mt-3 inline-block hover:underline'>
                            {o.phone}
                        </a>
                    </div>
                ))}
            </div>
            <a
                href='mailto:info@prittylandscapes.com'
                className='text-primary mt-8 inline-block text-lg hover:underline'>
                info@prittylandscapes.com
            </a>
        </section>
    </>
);

export default ContactPage;
