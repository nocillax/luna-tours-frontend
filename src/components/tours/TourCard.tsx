import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/lib/data";
import {
  StarIcon,
  ClockIcon,
  LanguageIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  // calc rating
  const averageRating =
    tour.reviews.length > 0
      ? tour.reviews.reduce((sum, review) => sum + review.rating, 0) /
        tour.reviews.length
      : 0;

  // shorten language names
  const languageAbbr = tour.languages
    .map((lang) => lang.substring(0, 2).toUpperCase())
    .join(", ");

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group relative h-[420px] overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:shadow-[var(--earth-accent)]/20 transition-all duration-500"
    >
      {/* tour image */}
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

      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-darkest)]/95 via-[var(--earth-dark)]/75 to-transparent transition-all duration-500 group-hover:from-[var(--earth-darkest)]/90 group-hover:via-[var(--earth-dark)]/60"></div>

      {/* tour info */}
      <div className="absolute bottom-0 w-full p-6 text-[var(--earth-highlight)]">
        <h3 className="text-2xl font-bold mb-2 text-[var(--earth-highlight)] group-hover:text-[var(--earth-light)] transition-colors">
          {tour.title}
        </h3>

        {/* stars */}
        <div className="flex items-center mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              className={`h-4 w-4 ${
                star <= Math.round(averageRating)
                  ? "text-amber-400"
                  : "text-gray-500"
              }`}
            />
          ))}
          <span className="text-xs ml-2 opacity-90">
            ({tour.reviews.length})
          </span>
        </div>

        {/* duration and language */}
        <div className="flex justify-between items-center w-full gap-6 text-sm mb-3">
          <div className="flex items-center text-[var(--earth-currentColor)]">
            <ClockIcon className="h-4 w-4 mr-1.5" />
            {tour.duration}
          </div>

          <div className="flex items-center text-[var(--earth-currentColor)]">
            <LanguageIcon className="h-4 w-4 mr-1.5" />
            {languageAbbr}
          </div>
        </div>

        {/* price */}
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
            <ArrowRightIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
