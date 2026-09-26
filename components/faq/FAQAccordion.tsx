"use client";

import { useState } from "react";

const questions = [
  {
    question: "What time is check-in?",
    answer: "Our standard check-in time is 2:00 PM.",
  },
  {
    question: "What time is check-out?",
    answer: "Our standard check-out time is 12:00 PM.",
  },
  {
    question: "Does Apex Inn provide Wi-Fi?",
    answer: "Yes. Free Wi-Fi is available for guests.",
  },
  {
    question: "Is parking available?",
    answer: "Yes. Free parking is available for guests.",
  },
  {
    question: "Is reception available 24/7?",
    answer: "Yes. Our reception is available 24/7.",
  },
  {
    question: "Does Apex Inn provide housekeeping?",
    answer: "Yes. Housekeeping is available to help maintain a clean and comfortable stay.",
  },
  {
    question: "How can I make a booking?",
    answer:
      "You can submit a booking request through our booking page. Our team will contact you to confirm availability.",
  },
  {
    question: "Does submitting the booking form guarantee a reservation?",
    answer:
      "No. The booking form currently submits a booking request. Availability must be confirmed by Apex Inn.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-y border-border">
      {questions.map((item, index) => {
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