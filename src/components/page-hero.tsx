import ShellPattern from '@/components/shell-pattern';

/**
 * Simple inner-page hero used by the placeholder routes until each page is built out.
 */
const PageHero = ({ title, description }: { title: string; description: string }) => {
    return (
        <section className='border-border/60 relative border-b'>
            <ShellPattern />
            <div className='relative mx-auto max-w-7xl px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-28'>
                <h1 className='font-editorial text-foreground max-w-3xl text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl'>
                    {title}
                </h1>
                <p className='text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed'>{description}</p>
            </div>
        </section>
    );
};

export default PageHero;
