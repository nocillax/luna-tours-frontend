"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Validation state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear errors when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    // Phone validation (basic)
    if (formData.phone.trim()) {
      const phoneRegex =
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Invalid phone number format";
        isValid = false;
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 20) {
      newErrors.message = "Message should be at least 20 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--earth-darkest)]">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="/contact/contact-hero.jpg" // You'll need to add this image
          alt="Contact Luna Tours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--earth-darkest)]/60 to-[var(--earth-darkest)]/90"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--earth-highlight)] font-montserrat mb-6 uppercase">
              Contact Us
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <span className="w-16 h-1 bg-[var(--earth-accent)]"></span>
              <span className="text-[var(--earth-accent)] text-xl">●</span>
              <span className="w-16 h-1 bg-[var(--earth-accent)]"></span>
            </div>
            <p className="text-xl text-[var(--earth-light)] max-w-2xl mx-auto font-montserrat">
              We'd love to hear from you. Reach out and start your journey with
              Luna Tours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-[var(--earth-dark)]/30 rounded-lg p-8 h-full">
                <h2 className="text-2xl font-bold text-[var(--earth-highlight)] font-montserrat mb-6">
                  Get In Touch
                </h2>

                {/* Office Location */}
                <div className="mb-8">
                  <h3 className="text-[var(--earth-accent)] font-semibold text-lg mb-2 font-montserrat">
                    Office Location
                  </h3>
                  <address className="text-[var(--earth-light)] not-italic">
                    <p>21-1 Udagawacho</p>
                    <p>Shibuya, Tokyo 150-8330</p>
                    <p>Japan</p>
                  </address>
                </div>

                {/* Phone Numbers */}
                <div className="mb-8">
                  <h3 className="text-[var(--earth-accent)] font-semibold text-lg mb-2 font-montserrat">
                    Phone
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[var(--earth-accent)] mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-[var(--earth-light)]/70">
                          Japan (Local)
                        </p>
                        <p className="text-[var(--earth-light)]">
                          +81 3-1234-5678
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[var(--earth-accent)] mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-[var(--earth-light)]/70">
                          International
                        </p>
                        <p className="text-[var(--earth-light)]">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <h3 className="text-[var(--earth-accent)] font-semibold text-lg mb-2 font-montserrat">
                    Email
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[var(--earth-accent)] mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-[var(--earth-light)]/70">
                          General Inquiries
                        </p>
                        <p className="text-[var(--earth-light)]">
                          info@lunatours.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[var(--earth-accent)] mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-[var(--earth-light)]/70">
                          Support
                        </p>
                        <p className="text-[var(--earth-light)]">
                          support@lunatours.gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mb-8">
                  <h3 className="text-[var(--earth-accent)] font-semibold text-lg mb-2 font-montserrat">
                    Business Hours
                  </h3>
                  <div className="text-[var(--earth-light)]">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM (JST)</p>
                    <p>Saturday: 10:00 AM - 4:00 PM (JST)</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-[var(--earth-accent)] font-semibold text-lg mb-2 font-montserrat">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-[var(--earth-medium)]/30 hover:bg-[var(--earth-accent)]/20 p-2 rounded-full transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-[var(--earth-light)]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-[var(--earth-medium)]/30 hover:bg-[var(--earth-accent)]/20 p-2 rounded-full transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-[var(--earth-light)]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-[var(--earth-medium)]/30 hover:bg-[var(--earth-accent)]/20 p-2 rounded-full transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-[var(--earth-light)]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-[var(--earth-medium)]/30 hover:bg-[var(--earth-accent)]/20 p-2 rounded-full transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-[var(--earth-light)]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[var(--earth-dark)]/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-[var(--earth-highlight)] font-montserrat mb-6">
                  Send Us a Message
                </h2>

                {/* Success Message */}
                {submitSuccess && (
                  <div className="mb-6 bg-[var(--earth-accent)]/20 border border-[var(--earth-accent)]/50 rounded-md p-4 text-[var(--earth-highlight)]">
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-[var(--earth-accent)] mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p>
                        Thank you! Your message has been sent successfully.
                        We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--earth-light)] mb-1"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[var(--earth-dark)]/30 border ${
                        errors.name
                          ? "border-red-500"
                          : "border-[var(--earth-medium)]"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--earth-accent)] text-[var(--earth-highlight)]`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--earth-light)] mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[var(--earth-dark)]/30 border ${
                        errors.email
                          ? "border-red-500"
                          : "border-[var(--earth-medium)]"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--earth-accent)] text-[var(--earth-highlight)]`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[var(--earth-light)] mb-1"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[var(--earth-dark)]/30 border ${
                        errors.phone
                          ? "border-red-500"
                          : "border-[var(--earth-medium)]"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--earth-accent)] text-[var(--earth-highlight)]`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--earth-light)] mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={11}
                      className={`w-full px-4 py-3 bg-[var(--earth-dark)]/30 border ${
                        errors.message
                          ? "border-red-500"
                          : "border-[var(--earth-medium)]"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--earth-accent)] text-[var(--earth-highlight)]`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--earth-accent)] hover:bg-[var(--earth-medium)] text-[var(--earth-darkest)] font-bold py-3 px-6 rounded-md transition-colors font-montserrat flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-[var(--earth-darkest)]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 bg-[var(--earth-dark)]/10">
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
              Our office is located in the heart of Shibuya, just a 5-minute
              walk from Shibuya Station.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[var(--earth-highlight)] font-montserrat mb-8 text-center">
            Frequently Asked Questions
          </h2>

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
    </main>
  );
}
