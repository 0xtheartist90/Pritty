/**
 * Simple inner-page hero used by the placeholder routes until each page is built out.
 */
const PageHero = ({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) => {
    return (
        <section className='border-border/60 border-b'>
            <div className='mx-auto max-w-7xl px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-28'>
                <p className='text-muted-foreground text-xs font-medium tracking-[0.18em] uppercase'>{eyebrow}</p>
                <h1 className='font-display text-foreground mt-4 max-w-3xl text-5xl leading-[1.02] font-light tracking-tight sm:text-7xl'>
                    {title}
                </h1>
                <p className='text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed'>{description}</p>
            </div>
        </section>
    );
};

export default PageHero;
