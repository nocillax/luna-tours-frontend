"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { toursData } from "@/lib/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TourDetailsPage() {
  const params = useParams();
  const { slug } = params;

  // Find the current tour based on slug
  const tour = toursData.find((t) => t.slug === slug);

  // States for form visibility and user interactions
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const reviewFormRef = useRef<HTMLDivElement>(null);
  const bookingFormRef = useRef<HTMLDivElement>(null);

  // Calculate average rating
  const averageRating =
    tour?.reviews && tour.reviews.length > 0
      ? tour.reviews.reduce((sum, review) => sum + review.rating, 0) /
        tour.reviews.length
      : 0;

  // Find similar tours (excluding current one)
  const similarTours = toursData
    .filter(
      (t) =>
        t.id !== tour?.id &&
        (t.category === tour?.category ||
          t.locations.some((loc) => tour?.locations.includes(loc)))
    )
    .slice(0, 3);

  // Rating component
  const Rating = ({ value }: { value: number }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              star <= Math.round(value) ? "text-amber-400" : "text-gray-500"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-[var(--earth-light)]">
          {value.toFixed(1)} ({tour?.reviews.length}{" "}
          {tour?.reviews.length === 1 ? "review" : "reviews"})
        </span>
      </div>
    );
  };

  // Handle form submission
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission with API
    alert("Thank you for your review! It will be posted after moderation.");
    setShowReviewForm(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the booking submission with API
    alert(
      "Thank you for your booking! We will contact you shortly to confirm."
    );
    setShowBookingForm(false);
  };

  // Toggle forms
  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
    // Scroll to form when opened
    if (!showReviewForm && reviewFormRef.current) {
      setTimeout(() => {
        reviewFormRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
    // Scroll to form when opened
    if (!showBookingForm && bookingFormRef.current) {
      setTimeout(() => {
        bookingFormRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  if (!tour) {
    return (
      <div className="min-h-screen bg-[var(--earth-darkest)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-[var(--earth-highlight)] mb-4">
            Tour Not Found
          </h1>
          <p className="text-[var(--earth-light)] mb-8">
            The tour you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/tours"
            className="px-6 py-3 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/80"
          >
            Browse All Tours
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--earth-darkest)]">
      {/* Image Gallery with Swiper */}
      <div className="h-[70vh]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full w-full"
        >
          {tour.gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={image}
                  alt={`${tour.title} - image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="px-8 py-6 bg-[var(--earth-darkest)]/60 backdrop-blur-sm rounded-lg">
                      <h1 className="text-4xl md:text-6xl font-bold text-[var(--earth-highlight)]">
                        {tour.title}
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header section with key info and booking actions */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold text-[var(--earth-highlight)] mb-2">
                {tour.title}
              </h1>
              <div className="flex items-center mb-3">
                <Rating value={averageRating} />
              </div>
              <p className="text-lg text-[var(--earth-light)] mb-4">
                {tour.shortDescription}
              </p>

              {/* Key info pills */}
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-[var(--earth-dark)]/50 rounded-full">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[var(--earth-accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-[var(--earth-light)] text-sm">
                      {tour.duration}
                    </span>
                  </div>
                </div>

                <div className="px-4 py-2 bg-[var(--earth-dark)]/50 rounded-full">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[var(--earth-accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="text-[var(--earth-light)] text-sm">
                      {tour.groupSize}
                    </span>
                  </div>
                </div>

                <div className="px-4 py-2 bg-[var(--earth-dark)]/50 rounded-full">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[var(--earth-accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                    <span className="text-[var(--earth-light)] text-sm">
                      {tour.languages.join(", ")}
                    </span>
                  </div>
                </div>

                <div className="px-4 py-2 bg-[var(--earth-dark)]/50 rounded-full">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[var(--earth-accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    <span className="text-[var(--earth-light)] text-sm">
                      {tour.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price and booking actions */}
            <div className="w-full lg:w-auto">
              <div className="bg-[var(--earth-dark)]/30 p-6 rounded-lg border border-[var(--earth-medium)]/20">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[var(--earth-light)]">
                    Price per person
                  </span>
                  <span className="text-3xl font-bold text-[var(--earth-highlight)]">
                    ${tour.price}
                  </span>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={toggleBookingForm}
                    className="w-full py-3 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/90 transition-all font-medium"
                  >
                    Book Now
                  </button>
                  <Link
                    href="/contact"
                    className="block w-full text-center py-3 border border-[var(--earth-accent)] text-[var(--earth-accent)] rounded-md hover:bg-[var(--earth-accent)]/10 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking form - shows when "Book Now" is clicked */}
        {showBookingForm && (
          <div
            ref={bookingFormRef}
            className="mb-12 bg-[var(--earth-dark)]/30 p-6 rounded-lg border border-[var(--earth-medium)]/20"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[var(--earth-light)]">
                Book this Tour
              </h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-[var(--earth-light)]/70 hover:text-[var(--earth-light)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form
              onSubmit={handleBookingSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-[var(--earth-light)] mb-2 text-sm">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
                  required
                />
              </div>
              <div>
                <label className="block text-[var(--earth-light)] mb-2 text-sm">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
                  required
                />
              </div>
              <div>
                <label className="block text-[var(--earth-light)] mb-2 text-sm">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
                />
              </div>
              <div>
                <label className="block text-[var(--earth-light)] mb-2 text-sm">
                  Date *
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
                  required
                />
              </div>
              <div>
                <label className="block text-[var(--earth-light)] mb-2 text-sm">
                  Number of People *
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-3 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[var(--earth-light)] mb-2 text-sm">
                  Special Requests
                </label>
                <textarea className="w-full px-4 py-3 h-24 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"></textarea>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/90 transition-all font-medium"
                >
                  Submit Booking
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Content tabs */}
        <div className="mb-16">
          <div className="flex overflow-x-auto border-b border-[var(--earth-medium)]/30 mb-8 scrollbar-hide">
            <button
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === "about"
                  ? "text-[var(--earth-accent)] border-b-2 border-[var(--earth-accent)]"
                  : "text-[var(--earth-light)] hover:text-[var(--earth-highlight)]"
              }`}
              onClick={() => setActiveTab("about")}
            >
              About This Tour
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === "itinerary"
                  ? "text-[var(--earth-accent)] border-b-2 border-[var(--earth-accent)]"
                  : "text-[var(--earth-light)] hover:text-[var(--earth-highlight)]"
              }`}
              onClick={() => setActiveTab("itinerary")}
            >
              Itinerary
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === "services"
                  ? "text-[var(--earth-accent)] border-b-2 border-[var(--earth-accent)]"
                  : "text-[var(--earth-light)] hover:text-[var(--earth-highlight)]"
              }`}
              onClick={() => setActiveTab("services")}
            >
              Included/Excluded
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === "reviews"
                  ? "text-[var(--earth-accent)] border-b-2 border-[var(--earth-accent)]"
                  : "text-[var(--earth-light)] hover:text-[var(--earth-highlight)]"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          {/* About tab */}
          {activeTab === "about" && (
            <div>
              <h2 className="text-2xl font-bold text-[var(--earth-light)] mb-6">
                About This Tour
              </h2>
              <div className="prose prose-invert prose-headings:text-[var(--earth-light)] prose-p:text-[var(--earth-light)]/80 max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  {tour.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {/* Tour Highlights */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--earth-light)] mb-6 flex items-center">
                    <span className="text-[var(--earth-accent)] mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    Tour Highlights
                  </h3>
                  <ul className="space-y-3">
                    {/* Create some mock highlights based on the description and itinerary */}
                    {tour.itinerary.map((day) => (
                      <li key={day.day} className="flex items-start">
                        <span className="text-[var(--earth-accent)] mr-3 mt-1">
                          ✓
                        </span>
                        <span className="text-[var(--earth-light)]/80">
                          {day.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tour Locations */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--earth-light)] mb-6 flex items-center">
                    <span className="text-[var(--earth-accent)] mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Tour Locations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tour.locations.map((location) => (
                      <span
                        key={location}
                        className="px-3 py-1.5 bg-[var(--earth-dark)]/50 text-[var(--earth-light)] text-sm rounded-full"
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Itinerary tab */}
          {activeTab === "itinerary" && (
            <div>
              <h2 className="text-2xl font-bold text-[var(--earth-light)] mb-8">
                Tour Itinerary
              </h2>
              <div className="space-y-12">
                {tour.itinerary.map((day, index) => (
                  <div
                    key={day.day}
                    className="flex flex-col md:flex-row gap-8"
                  >
                    {/* Day number with vertical line */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[var(--earth-dark)] border-2 border-[var(--earth-accent)] text-[var(--earth-accent)] text-xl font-bold">
                        Day {day.day}
                      </div>
                      {index < tour.itinerary.length - 1 && (
                        <div className="w-0.5 h-full bg-[var(--earth-accent)]/30 my-2"></div>
                      )}
                    </div>

                    {/* Day content */}
                    <div className="flex-1">
                      <div className="bg-[var(--earth-dark)]/20 rounded-lg overflow-hidden">
                        {/* Image (if available) */}
                        {day.image && (
                          <div className="relative h-60 w-full">
                            <Image
                              src={day.image}
                              alt={day.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-[var(--earth-light)] mb-3">
                            {day.title}
                          </h3>
                          <p className="text-[var(--earth-light)]/80">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services tab */}
          {activeTab === "services" && (
            <div>
              <h2 className="text-2xl font-bold text-[var(--earth-light)] mb-8">
                What's Included & Excluded
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Included */}
                <div className="bg-gradient-to-br from-[var(--earth-dark)]/30 to-[var(--earth-dark)]/10 p-8 rounded-lg border border-[var(--earth-medium)]/20">
                  <h3 className="text-xl font-bold text-[var(--earth-light)] mb-6 flex items-center">
                    <span className="text-[var(--earth-accent)] mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {tour.includedServices.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="h-5 w-5 mr-3 rounded-full bg-[var(--earth-accent)]/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-[var(--earth-accent)]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-[var(--earth-light)]/90">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                <div className="bg-gradient-to-br from-[var(--earth-dark)]/30 to-[var(--earth-dark)]/10 p-8 rounded-lg border border-[var(--earth-medium)]/20">
                  <h3 className="text-xl font-bold text-[var(--earth-light)] mb-6 flex items-center">
                    <span className="text-red-500 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    What's Excluded
                  </h3>
                  <ul className="space-y-4">
                    {tour.excludedServices.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="h-5 w-5 mr-3 rounded-full bg-red-500/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-red-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-[var(--earth-light)]/90">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Reviews tab */}
          {activeTab === "reviews" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[var(--earth-light)]">
                  Guest Reviews
                </h2>
                <button
                  onClick={toggleReviewForm}
                  className="px-5 py-2.5 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/80 transition-all text-sm font-medium"
                >
                  Write a Review
                </button>
              </div>

              {/* Review form */}
              {showReviewForm && (
                <div
                  ref={reviewFormRef}
                  className="bg-gradient-to-br from-[var(--earth-dark)]/30 to-[var(--earth-dark)]/10 p-8 rounded-lg mb-8 border border-[var(--earth-medium)]/20"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-[var(--earth-light)]">
                      Write a Review
                    </h3>
                    <button
                      onClick={() => setShowReviewForm(false)}
                      className="text-[var(--earth-light)]/70 hover:text-[var(--earth-light)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <form
                    onSubmit={handleReviewSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div>
                      <label className="block text-[var(--earth-light)] mb-2 text-sm">
                        Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--earth-light)] mb-2 text-sm">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[var(--earth-light)] mb-2 text-sm">
                        Rating *
                      </label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            className="text-gray-400 hover:text-amber-400 focus:outline-none transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[var(--earth-light)] mb-2 text-sm">
                        Review *
                      </label>
                      <textarea
                        className="w-full px-4 py-3 h-32 bg-[var(--earth-darkest)] border border-[var(--earth-medium)]/30 rounded-md text-[var(--earth-light)] focus:outline-none focus:border-[var(--earth-accent)]"
                        required
                      ></textarea>
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[var(--earth-accent)] text-[var(--earth-darkest)] rounded-md hover:bg-[var(--earth-accent)]/80 transition-all font-medium"
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Reviews list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tour.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-[var(--earth-dark)]/20 p-6 rounded-lg border border-[var(--earth-medium)]/10 transition-transform hover:translate-y-[-4px]"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-[var(--earth-light)] text-lg">
                        {review.name}
                      </h3>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 ${
                              star <= review.rating
                                ? "text-amber-400"
                                : "text-gray-500"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-[var(--earth-light)]/60 text-sm mb-3">
                      {new Date(review.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-[var(--earth-light)]/80 italic">
                      "{review.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Similar Tours */}
        <div className="mt-16 pt-12 border-t border-[var(--earth-medium)]/20">
          <h2 className="text-2xl font-bold text-[var(--earth-light)] mb-8">
            Similar Tours You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarTours.map((similarTour) => (
              <Link
                href={`/tours/${similarTour.slug}`}
                key={similarTour.id}
                className="group relative h-[360px] overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:shadow-[var(--earth-accent)]/20 transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full bg-[var(--earth-medium)]">
                  {(similarTour.gallery?.length > 0 ||
                    similarTour.coverImage) && (
                    <Image
                      src={
                        similarTour.gallery?.length > 0
                          ? similarTour.gallery[0]
                          : similarTour.coverImage
                      }
                      alt={similarTour.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-darkest)]/95 via-[var(--earth-dark)]/75 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 w-full p-6">
                  <h3 className="text-xl font-bold text-[var(--earth-highlight)] group-hover:text-[var(--earth-light)] transition-colors">
                    {similarTour.title}
                  </h3>
                  <p className="text-[var(--earth-light)]/80 text-sm mt-2 line-clamp-2">
                    {similarTour.shortDescription}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[var(--earth-highlight)] font-bold">
                      ${similarTour.price}
                      <span className="text-[var(--earth-light)]/50 text-xs font-normal ml-1">
                        / person
                      </span>
                    </span>
                    <span className="text-[var(--earth-light)]/70 text-sm">
                      {similarTour.duration}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
