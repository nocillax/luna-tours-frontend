// src/pages/contact.tsx
import { GetServerSideProps } from "next";
import PageHero from "@/components/ui/ContactHero";
import ContactForm from "@/components/ui/ContactForm";
import OfficeLocationCard from "@/components/ui/OfficeLocationCard";
import BusinessHours from "@/components/ui/BusinessHours";
import FAQ from "@/components/ui/FAQ";

// Define types for our server-side props
interface ContactPageProps {
  offices: {
    name: string;
    address: string;
    email: string;
    phone: string;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function ContactPage({ offices, faqs }: ContactPageProps) {
  return (
    <div className="bg-[var(--background)]">
      <PageHero
        imageUrl="/contact/contact-hero.jpg"
        title="Contact Us"
        subtitle="We're here to help plan your perfect Japanese adventure"
      />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-montserrat font-extrabold mb-6 text-[var(--foreground)]">
              Our Offices
            </h2>

            <div className="space-y-8">
              {offices.map((office, index) => (
                <OfficeLocationCard
                  key={index}
                  name={office.name}
                  address={office.address}
                  email={office.email}
                  phone={office.phone}
                />
              ))}
            </div>

            <BusinessHours />
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-montserrat font-extrabold mb-6 text-[var(--foreground)]">
              Send Us a Message
            </h2>
            <p className="text-[var(--foreground)] opacity-80 mb-8">
              Have questions about our tours or need help planning your trip to
              Japan? Fill out the form below and we'll get back to you as soon
              as possible.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>

      <FAQ faqs={faqs} />
    </div>
  );
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // In a real application, you would fetch this data from an API or database
  // Here, we're using mock data for the example

  const offices = [
    {
      name: "Tokyo",
      address: "21 Udagawacho Shibuya, Tokyo, Japan",
      email: "tokyo@lunatours.com",
      phone: "+81 (123) 456-7890",
    },
    {
      name: "Kyoto",
      address: "456 Gion District, Kyoto, Japan",
      phone: "+81 (123) 456-7891",
      email: "kyoto@lunatours.com",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can I expect a response?",
      answer:
        "We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please call our office directly.",
    },
    {
      question: "Can I customize an existing tour package?",
      answer:
        "Absolutely! We specialize in creating personalized experiences. Just mention your preferences in your message, and our team will work with you to customize any of our tours.",
    },
    {
      question: "Do you offer virtual consultations before booking?",
      answer:
        "Yes, we're happy to schedule a video call to discuss your travel plans and answer any questions. Just request a consultation in your message, and we'll arrange a convenient time.",
    },
  ];

  return {
    props: {
      offices: offices,
      faqs: faqs,
    },
  };
};
