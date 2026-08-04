import Reveal from '@/components/reveal';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/registry/new-york-v4/ui/accordion';

import { ArrowUpRight } from 'lucide-react';

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
        a: 'Hard solutions use durable materials such as armour stone, boulders, seawalls and breakwalls to create a robust barrier against erosion. They are ideal for high-energy shorelines exposed to strong waves, ice and boat traffic.'
    },
    {
        q: 'What are soft shoreline solutions?',
        a: 'Soft solutions work with nature, using native plantings, natural stone and bioengineering to stabilize the shore while preserving habitat and a natural look and feel. They are well suited to calmer, lower-energy shorelines.'
    },
    {
        q: 'What is your approach to sustainability?',
        a: 'Our commitment to sustainability is simple: work with Mother Nature, not against her. We use permeable paving, native planting designs and best-practice water management, an approach recognized with the Green Stamp Award.'
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
        a: 'Yes. Reach out through our contact page or give one of our offices a call and we’ll be happy to arrange an estimate for your project.'
    }
];

const Faq = () => {
    return (
        <section className='bg-[#42654a]'>
            <div className='mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-8'>
                {/* Editorial masthead */}
                <div className='lg:col-span-4'>
                    <Reveal variant='blur'>
                        <h2 className='font-editorial text-3xl leading-[1.05] tracking-tight text-[#f2efe6] sm:text-4xl lg:text-6xl'>
                            Questions,
                            <span className='font-display mt-1 block font-light text-[#c3d8c3]'>answered</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={160}>
                        <p className='mt-6 max-w-xs leading-relaxed text-[#f2efe6]/65'>
                            Everything you need to know about our landscape and shoreline services.
                        </p>
                    </Reveal>
                    <Reveal delay={240}>
                        <a
                            href='mailto:info@prittylandscapes.com'
                            className='group mt-8 inline-flex items-center gap-2 text-sm text-[#f2efe6]'>
                            <span className='link-line'>Ask us anything</span>
                            <ArrowUpRight className='size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                        </a>
                    </Reveal>
                </div>

                {/* Oversized question index */}
                <div className='lg:col-span-8'>
                    <Reveal delay={120}>
                        <Accordion type='single' collapsible className='w-full border-t border-white/15'>
                            {FAQS.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className='border-white/15'>
                                    <AccordionTrigger className='font-editorial group items-center py-6 text-left text-lg leading-snug tracking-tight text-[#f2efe6] transition-colors duration-500 hover:text-[#c3d8c3] hover:no-underline sm:py-7 sm:text-xl [&>svg]:size-5 [&>svg]:translate-y-0 [&>svg]:text-[#f2efe6]/60'>
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className='max-w-2xl pb-9 text-base leading-relaxed text-[#f2efe6]/70'>
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
