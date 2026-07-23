"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "./faq-data";

export default function FAQList() {
    return (
        <Accordion
            defaultValue={[1]}
            className="mx-auto w-full max-w-4xl space-y-4"
        >
            {faqs.map((faq) => (
                <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="overflow-hidden rounded-2xl border border-zinc-200 bg-white px-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                >
                    <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:no-underline">
                        {faq.question}
                    </AccordionTrigger>

                    <AccordionContent className="pb-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}