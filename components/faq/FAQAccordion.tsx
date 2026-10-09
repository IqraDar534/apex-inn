"use client";

import { useState } from "react";
import { faqs } from "../../lib/faq";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-y border-border">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div className="border-b border-border last:border-b-0" key={item.question}>
            <button
              aria-controls={answerId}
              aria-expanded={isOpen}
              className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-base font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span>{item.question}</span>
              <span aria-hidden="true" className="shrink-0 text-2xl font-light text-primary">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              aria-hidden={!isOpen}
              className={isOpen ? "pb-5 pr-12 text-sm leading-7 text-muted" : "hidden"}
              id={answerId}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}