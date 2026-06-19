import Reveal from '@/components/reveal';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/registry/new-york-v4/ui/accordion';

const FAQS = [
    {
        q: 'What is shoreline protection?',
        a: 'Shoreline protection is the process of enhancing the structural integrity of your waterfront to protect against erosion and other forms of damage caused by fluctuating water levels, high winds, boat traffic and winter ice. On large bodies of water such as Georgian Bay, this work typically includes the use of large boulders carefully placed along the water’s edge to help stabilize the shoreline during wave uprush. As water levels continue to rise, shoreline protection remains the key to maintaining and preserving your waterfront real estate.'
    },
    {
        q: 'What are breakwalls and groynes?',
        a: 'Breakwalls and groynes are engineered structures that reduce wave energy and control the movement of sediment along your shoreline. Breakwalls run parallel to the shore to absorb and deflect wave action, while groynes extend out from the shore to trap sand and prevent beach loss.'
    },
    {
        q: 'What are hard shoreline solutions?',
        a: 'Hard solutions use durable materials — armour stone, boulders, seawalls and breakwalls — to create a robust barrier against erosion. They are ideal for high-energy shorelines exposed to strong waves, ice and boat traffic.'
    },
    {
        q: 'What are soft shoreline solutions?',
        a: 'Soft solutions work with nature, using native plantings, natural stone and bioengineering to stabilize the shore while preserving habitat and a natural look and feel. They are well suited to calmer, lower-energy shorelines.'
    },
    {
        q: 'What is your approach to sustainability?',
        a: 'Our commitment to sustainability is simple — work with Mother Nature, not against her. We use permeable paving, native planting designs and best-practice water management, an approach recognized with the Green Stamp Award.'
    },
    {
        q: 'What services do you offer?',
        a: 'We offer landscape architecture and design, landscape construction, shoreline protection and restoration, breakwalls, seawalls and groynes, as well as dredging, barging and waterfront building services.'
    },
    {
        q: 'How do I get started?',
        a: 'Contact us to schedule a consultation. We’ll discuss your vision, assess your property and guide you through our design and build process from concept to completion.'
    },
    {
        q: 'Do you offer free estimates?',
        a: 'Yes — reach out through our contact page or give one of our offices a call and we’ll be happy to arrange an estimate for your project.'
    }
];

const Faq = () => {
    return (
        <section className='bg-secondary/40 border-border/60 border-y'>
            <div className='mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12'>
                <div className='lg:col-span-4'>
                    <Reveal variant='left' className='text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase'>
                        FAQ
                    </Reveal>
                    <Reveal variant='blur' delay={80}>
                        <h2 className='font-display text-foreground mt-4 text-4xl leading-[1.08] font-light tracking-tight sm:text-5xl'>
                            Frequently Asked <span className='text-primary italic'>Questions</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={160}>
                        <p className='text-muted-foreground mt-5 leading-relaxed'>
                            Everything you need to know about our landscape and shoreline services. Can’t find the
                            answer you’re looking for? Reach out to our team.
                        </p>
                    </Reveal>
                </div>

                <div className='lg:col-span-8'>
                    <Reveal delay={120}>
                        <Accordion type='single' collapsible className='w-full'>
                        {FAQS.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className='border-border/60'>
                                <AccordionTrigger className='font-display text-foreground text-left text-lg font-normal hover:no-underline'>
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className='text-muted-foreground text-sm leading-relaxed'>
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                        </Accordion>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Faq;
