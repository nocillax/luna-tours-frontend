import React from "react";

const ContactMap: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[var(--earth-darkest)]/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-[var(--earth-highlight)] font-montserrat mb-8 text-center">
          Find Us
        </h2>

        <div className="aspect-[16/9] md:aspect-[21/9] w-full rounded-lg overflow-hidden border-2 border-[var(--earth-medium)]/30">
          {/* Replace with your Google Maps or other map provider embed code */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747798533325!2d139.70089712671394!3d35.66047272646324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca80dd60aa9%3A0x68f6d16c49e382a7!2sShibuya%20Scramble%20Square!5e0!3m2!1sen!2sus!4v1692372509601!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Luna Tours Office Location"
            className="filter contrast-110 brightness-75"
          ></iframe>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[var(--earth-light)]/80 text-sm">
            Our office is located in the heart of Shibuya, just a 5-minute walk
            from Shibuya Station.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
