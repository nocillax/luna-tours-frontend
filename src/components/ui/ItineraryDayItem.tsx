import { useState } from "react";
import Image from "next/image";

// Add this component before your main TourDetailsPage component
function ItineraryDayItem({
  day,
  index,
  isLast,
}: {
  day: { day: number; title: string; description: string; image?: string };
  index: number;
  isLast: boolean;
  locations: string[];
}) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <div className="relative">
      {/* Journey timeline indicator */}
      <div className="hidden md:block absolute left-[26px] h-full w-[2px] bg-gradient-to-b from-[var(--earth-accent)] to-[var(--earth-dark)]/40"></div>

      {/* Day card with modern design */}
      <div className="relative ml-0 md:ml-16 transition-all duration-500">
        {/* Day marker and connector */}
        <div className="hidden md:flex absolute -left-16 top-8 items-center">
          <div className="w-[52px] h-[52px] rounded-full border-4 border-[var(--earth-accent)] bg-[var(--earth-darkest)] flex items-center justify-center shadow-lg shadow-[var(--earth-accent)]/20">
            <span className="text-[var(--earth-accent)] font-bold">
              {day.day}
            </span>
          </div>
          <div className="h-[2px] w-8 bg-gradient-to-r from-[var(--earth-accent)] to-transparent"></div>
        </div>

        {/* Main card */}
        <div className="bg-[var(--earth-dark)]/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-[var(--earth-medium)]/20 hover:border-[var(--earth-accent)]/30 transition-all duration-500 group">
          {/* Header section - always visible */}
          <div
            className="p-6 cursor-pointer flex flex-wrap items-center gap-4"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {/* Mobile day marker */}
            <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[var(--earth-accent)]/20 border-2 border-[var(--earth-accent)]">
              <span className="text-[var(--earth-accent)] font-bold">
                {day.day}
              </span>
            </div>

            <div className="flex-grow">
              <h3 className="text-xl font-bold text-[var(--earth-highlight)]">
                {day.title}
              </h3>
            </div>

            {/* Expandable indicator - animated */}
            <div className="flex-shrink-0">
              <div
                className={`w-10 h-10 rounded-full bg-[var(--earth-dark)]/40 flex items-center justify-center transform transition-all duration-300 ${
                  isExpanded ? "rotate-180 bg-[var(--earth-accent)]/20" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[var(--earth-accent)]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Expanded content */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6">
              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[var(--earth-accent)]/30 to-transparent mb-6"></div>

              {/* If there's an image, use a banner layout first */}
              {day.image && (
                <div className="relative h-48 md:h-64 w-full rounded-xl overflow-hidden mb-6 group-hover:shadow-lg transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-darkest)]/90 to-transparent z-10"></div>
                  <Image
                    src={day.image}
                    alt={day.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Description and highlights */}
              <div className="space-y-6">
                {/* Highlights/Activities Cards */}
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-[var(--earth-accent)] font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707.707-.707A1 1 0 0115 2h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-.707-.293L14 5.414l-.707.707A1 1 0 0112 6h-2a1 1 0 01-1-1V3a1 1 0 011-1h2zm0 10a1 1 0 01.707.293l.707.707.707-.707A1 1 0 0115 12h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-.707-.293L14 15.414l-.707.707A1 1 0 0112 16h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Day Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Generate highlight cards from description */}
                    {day.description
                      .split(". ")
                      .slice(0, 3)
                      .filter(Boolean)
                      .map((highlight, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-[var(--earth-dark)]/40 to-[var(--earth-dark)]/20 rounded-xl p-4 border border-[var(--earth-medium)]/10 hover:border-[var(--earth-accent)]/20 transition-all duration-300 hover:translate-y-[-2px]"
                        >
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-[var(--earth-accent)]/10 flex items-center justify-center flex-shrink-0 mr-3">
                              <span className="text-[var(--earth-accent)]">
                                {idx + 1}
                              </span>
                            </div>
                            <p className="text-sm text-[var(--earth-light)]/90">
                              {highlight}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline endpoint for last item */}
      {isLast && (
        <div className="hidden md:block absolute left-[26px] bottom-0 w-[2px] h-8 bg-gradient-to-b from-[var(--earth-dark)]/40 to-transparent"></div>
      )}
    </div>
  );
}

export default ItineraryDayItem;
