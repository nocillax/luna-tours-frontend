import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/lib/data";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  // Calculate average rating
  const averageRating =
    tour.reviews.length > 0
      ? tour.reviews.reduce((sum, review) => sum + review.rating, 0) /
        tour.reviews.length
      : 0;

  // Get language abbreviations (e.g., "English" -> "EN")
  const languageAbbr = tour.languages
    .map((lang) => lang.substring(0, 2).toUpperCase())
    .join(", ");

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group relative h-[420px] overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:shadow-[var(--earth-accent)]/20 transition-all duration-500"
    >
      {/* Background Image - Covers entire card */}
      <div className="absolute inset-0 w-full h-full bg-[var(--earth-medium)]">
        {(tour.gallery?.length > 0 || tour.coverImage) && (
          <Image
            src={tour.gallery?.length > 0 ? tour.gallery[0] : tour.coverImage}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      {/* Gradient overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-darkest)]/95 via-[var(--earth-dark)]/75 to-transparent transition-all duration-500 group-hover:from-[var(--earth-darkest)]/90 group-hover:via-[var(--earth-dark)]/60"></div>

      {/* Content */}
      <div className="absolute bottom-0 w-full p-6 text-[var(--earth-highlight)]">
        <h3 className="text-2xl font-bold mb-2 text-[var(--earth-highlight)] group-hover:text-[var(--earth-light)] transition-colors">
          {tour.title}
        </h3>

        {/* Ratings */}
        <div className="flex items-center mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${
                star <= Math.round(averageRating)
                  ? "text-amber-400"
                  : "text-gray-500"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs ml-2 opacity-90">
            ({tour.reviews.length})
          </span>
        </div>

        {/* Tour info - Duration and Language */}
        <div className="flex justify-between items-center w-full gap-6 text-sm mb-3">
          <div className="flex items-center text-[var(--earth-currentColor)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {tour.duration}
          </div>

          <div className="flex items-center text-[var(--earth-currentColor)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                clipRule="evenodd"
              />
            </svg>
            {languageAbbr}
          </div>
        </div>

        {/* Price row */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-[var(--earth-medium)]/50">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-[var(--earth-highlight)]">
              ${tour.price}
            </span>
            <span className="text-sm ml-1 text-[var(--earth-light)]/80">
              /person
            </span>
          </div>
          <div className="bg-[var(--earth-accent)] text-[var(--earth-darkest)] w-10 h-10 rounded-full flex items-center justify-center transform group-hover:translate-x-1 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
