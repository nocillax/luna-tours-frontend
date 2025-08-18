import React from "react";

export default function ContactFAQ() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[var(--earth-highlight)] font-montserrat mb-8 text-center">
          Frequently Asked Questions
        </h2>

        {/* faq items */}
        <div className="space-y-6">
          <div className="bg-[var(--earth-dark)]/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[var(--earth-accent)] font-montserrat mb-2">
              How quickly can I expect a response?
            </h3>
            <p className="text-[var(--earth-light)]">
              We aim to respond to all inquiries within 24-48 hours during
              business days. For urgent matters, please call our office
              directly.
            </p>
          </div>

          <div className="bg-[var(--earth-dark)]/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[var(--earth-accent)] font-montserrat mb-2">
              Can I customize an existing tour package?
            </h3>
            <p className="text-[var(--earth-light)]">
              Absolutely! We specialize in creating personalized experiences.
              Just mention your preferences in your message, and our team will
              work with you to customize any of our tours.
            </p>
          </div>

          <div className="bg-[var(--earth-dark)]/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[var(--earth-accent)] font-montserrat mb-2">
              Do you offer virtual consultations before booking?
            </h3>
            <p className="text-[var(--earth-light)]">
              Yes, we're happy to schedule a video call to discuss your travel
              plans and answer any questions. Just request a consultation in
              your message, and we'll arrange a convenient time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
