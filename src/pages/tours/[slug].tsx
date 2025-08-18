import React, { useState, useRef, useEffect } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { toursData, Tour } from "@/lib/data";
import TourGallery from "@/components/tours/TourGallery";
import TourHeader from "@/components/tours/TourHeader";
import TourBookingCard from "@/components/tours/TourBookingCard";
import TourBookingForm from "@/components/tours/TourBookingForm";
import TourTabs from "@/components/tours/TourTabs";
import TourAboutTab from "@/components/tours/TourAboutTab";
import TourItineraryTab from "@/components/tours/TourItineraryTab";
import TourServicesTab from "@/components/tours/TourServicesTab";
import TourReviewsTab from "@/components/tours/TourReviewsTab";
import SimilarTours from "@/components/tours/SimilarTours";
import TourNotFound from "@/components/tours/TourNotFound";

interface TourDetailsPageProps {
  tour: Tour | null;
  similarTours: Tour[];
}

export default function TourDetailsPage({
  tour,
  similarTours,
}: TourDetailsPageProps) {
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
    return <TourNotFound />;
  }

  return (
    <div className="min-h-screen bg-[var(--earth-darkest)]">
      {/* Improved Image Gallery with Swiper */}
      <TourGallery gallery={tour.gallery} title={tour.title} />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header section with key info and booking actions */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <TourHeader tour={tour} averageRating={averageRating} />
            <TourBookingCard
              price={tour.price}
              toggleBookingForm={toggleBookingForm}
            />
          </div>
        </div>

        {/* Booking form - shows when "Book Now" is clicked */}
        <TourBookingForm
          showBookingForm={showBookingForm}
          setShowBookingForm={setShowBookingForm}
          handleBookingSubmit={handleBookingSubmit}
        />

        {/* Content tabs */}
        <div className="mb-16">
          <TourTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Tab content */}
          {activeTab === "about" && <TourAboutTab tour={tour} />}
          {activeTab === "itinerary" && <TourItineraryTab tour={tour} />}
          {activeTab === "services" && <TourServicesTab tour={tour} />}
          {activeTab === "reviews" && (
            <TourReviewsTab
              tour={tour}
              showReviewForm={showReviewForm}
              setShowReviewForm={setShowReviewForm}
              handleReviewSubmit={handleReviewSubmit}
              toggleReviewForm={toggleReviewForm}
            />
          )}
        </div>

        {/* Similar Tours */}
        <SimilarTours tours={similarTours} />
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all tours
  const paths = toursData.map((tour) => ({
    params: { slug: tour.slug },
  }));

  return {
    paths,
    fallback: false, // Show 404 for non-existent tours
  };
};

export const getStaticProps: GetStaticProps<TourDetailsPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;

  // Find the requested tour
  const tour = toursData.find((t) => t.slug === slug) || null;

  // Find similar tours (excluding current one)
  const similarTours = tour
    ? toursData
        .filter(
          (t) =>
            t.id !== tour.id &&
            (t.category === tour.category ||
              t.locations.some((loc) => tour.locations.includes(loc)))
        )
        .slice(0, 3)
    : [];

  return {
    props: {
      tour,
      similarTours,
    },
    revalidate: 86400, // Revalidate every 24 hours
  };
};
