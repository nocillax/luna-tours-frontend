import React, { useState, useRef } from "react";
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
  // states for forms and tabs
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const reviewFormRef = useRef<HTMLDivElement>(null);
  const bookingFormRef = useRef<HTMLDivElement>(null);

  // calc avg rating
  const averageRating =
    tour?.reviews && tour.reviews.length > 0
      ? tour.reviews.reduce((sum, review) => sum + review.rating, 0) /
        tour.reviews.length
      : 0;

  // handle review form
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your review! It will be posted after moderation.");
    setShowReviewForm(false);
  };

  // handle booking form
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your booking! We will contact you shortly to confirm."
    );
    setShowBookingForm(false);
  };

  // toggle review form
  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
    // scroll to form
    if (!showReviewForm && reviewFormRef.current) {
      setTimeout(() => {
        reviewFormRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // toggle booking form
  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
    // scroll to form
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
      {/* tour images */}
      <TourGallery gallery={tour.gallery} title={tour.title} />

      {/* main content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* tour header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <TourHeader tour={tour} averageRating={averageRating} />
            <TourBookingCard
              price={tour.price}
              toggleBookingForm={toggleBookingForm}
            />
          </div>
        </div>

        {/* booking form popup */}
        <TourBookingForm
          showBookingForm={showBookingForm}
          setShowBookingForm={setShowBookingForm}
          handleBookingSubmit={handleBookingSubmit}
        />

        {/* tabs section */}
        <div className="mb-16">
          <TourTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* tab content */}
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

        {/* similar tours */}
        <SimilarTours tours={similarTours} />
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // get all tour slugs
  const paths = toursData.map((tour) => ({
    params: { slug: tour.slug },
  }));

  return {
    paths,
    fallback: false, // 404 for bad slugs
  };
};

export const getStaticProps: GetStaticProps<TourDetailsPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;

  // find tour by slug
  const tour = toursData.find((t) => t.slug === slug) || null;

  // get similar tours
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
    revalidate: 86400, // refresh daily
  };
};
