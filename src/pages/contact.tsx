import React from "react";
import { GetStaticProps } from "next";

import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactHero from "@/components/contact/ContactHero";

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[var(--earth-darkest)]">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Info + Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <ContactInfo />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />

      {/* FAQ Section */}
      <ContactFAQ />
    </main>
  );
};

export default ContactPage;

export const getStaticProps: GetStaticProps = async () => {
  // In the future, you could fetch contact information from a CMS or API here
  return {
    props: {},
  };
};
