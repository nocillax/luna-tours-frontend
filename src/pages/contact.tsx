import React from "react";

import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactHero from "@/components/contact/ContactHero";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--earth-darkest)]">
      {/* banner at top */}
      <ContactHero />

      {/* main contact stuffs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* left column */}
            <ContactInfo />

            {/* right column - the form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* map embed */}
      <ContactMap />

      {/* FAQs */}
      <ContactFAQ />
    </main>
  );
}
