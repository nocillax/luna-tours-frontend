// src/components/ui/FAQ.tsx
import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[var(--earth-highlight)] font-montserrat mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--earth-dark)]/20 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--earth-accent)] font-montserrat mb-2">
                {faq.question}
              </h3>
              <p className="text-[var(--earth-light)]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
