import { useState, FormEvent } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

// contact form with validation and submit handling
export default function ContactForm() {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // validation state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // handle input changes
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
    // clear errors when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    // name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    // phone validation (basic)
    if (formData.phone.trim()) {
      const phoneRegex =
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Invalid phone number format";
        isValid = false;
      }
    }

    // message validation
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

  // handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      // simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="lg:col-span-2">
      <div className="bg-[var(--earth-dark)]/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-[var(--earth-highlight)] font-montserrat mb-6">
          Send Us a Message
        </h2>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-6 bg-[var(--earth-accent)]/20 border border-[var(--earth-accent)]/50 rounded-md p-4 text-[var(--earth-highlight)]">
            <div className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-[var(--earth-accent)] mr-3 mt-0.5" />
              <div>
                <h3 className="font-bold">Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out to us. A member of our team will
                  get back to you within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-[var(--earth-highlight)] font-medium mb-1"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[var(--earth-dark)]/30 border ${
                errors.name ? "border-red-500" : "border-[var(--earth-medium)]"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--earth-accent)] text-[var(--earth-highlight)]`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-[var(--earth-highlight)] font-medium mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[var(--earth-dark)]/30 border ${
                errors.email ? "border-red-500" : "border-[var(--earth-medium)]"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--earth-accent)] text-[var(--earth-highlight)]`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Field (Optional) */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[var(--earth-highlight)] font-medium mb-1"
            >
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[var(--earth-dark)]/30 border ${
                errors.phone ? "border-red-500" : "border-[var(--earth-medium)]"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--earth-accent)] text-[var(--earth-highlight)]`}
              placeholder="+1 (123) 456-7890"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-[var(--earth-highlight)] font-medium mb-1"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[var(--earth-dark)]/30 border ${
                errors.message
                  ? "border-red-500"
                  : "border-[var(--earth-medium)]"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--earth-accent)] text-[var(--earth-highlight)]`}
              placeholder="Please tell us how we can help you..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[var(--earth-accent)] hover:bg-[var(--earth-medium)] text-[var(--earth-darkest)] font-bold py-3 px-4 rounded-sm transition-colors ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
