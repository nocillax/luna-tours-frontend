import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon, PuzzlePieceIcon } from "@heroicons/react/24/outline";

export default function ItineraryDayItem({
  day,
  index,
  isLast,
}: {
  day: { day: number; title: string; description: string; image?: string };
  index: number;
  isLast: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <div className="relative">
      {/* timeline line */}
      <div className="hidden md:block absolute left-[26px] h-full w-[2px] bg-gradient-to-b from-[var(--earth-accent)] to-[var(--earth-dark)]/40"></div>

      {/* day card */}
      <div className="relative ml-0 md:ml-16 transition-all duration-500">
        {/* day number circle */}
        <div className="hidden md:flex absolute -left-16 top-8 items-center">
          <div className="w-[52px] h-[52px] rounded-full border-4 border-[var(--earth-accent)] bg-[var(--earth-darkest)] flex items-center justify-center shadow-lg shadow-[var(--earth-accent)]/20">
            <span className="text-[var(--earth-accent)] font-bold">
              {day.day}
            </span>
          </div>
          <div className="h-[2px] w-8 bg-gradient-to-r from-[var(--earth-accent)] to-transparent"></div>
        </div>

        {/* card content */}
        <div className="bg-[var(--earth-dark)]/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-[var(--earth-medium)]/20 hover:border-[var(--earth-accent)]/30 transition-all duration-500 group">
          {/* header */}
          <div
            className="p-6 cursor-pointer flex flex-wrap items-center gap-4"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {/* mobile day number */}
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

            {/* expand/collapse button */}
            <div className="flex-shrink-0">
              <div
                className={`w-10 h-10 rounded-full bg-[var(--earth-dark)]/40 flex items-center justify-center transform transition-all duration-300 ${
                  isExpanded ? "rotate-180 bg-[var(--earth-accent)]/20" : ""
                }`}
              >
                <ChevronDownIcon className="h-5 w-5 text-[var(--earth-accent)]" />
              </div>
            </div>
          </div>

          {/* expanded content */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6">
              {/* divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[var(--earth-accent)]/30 to-transparent mb-6"></div>

              {/* image if available */}
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

              {/* highlights section */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-[var(--earth-accent)] font-semibold mb-4 flex items-center">
                    <PuzzlePieceIcon className="h-5 w-5 mr-2" />
                    Day Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* split description into highlight cards */}
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

      {/* end of timeline indicator */}
      {isLast && (
        <div className="hidden md:block absolute left-[26px] bottom-0 w-[2px] h-8 bg-gradient-to-b from-[var(--earth-dark)]/40 to-transparent"></div>
      )}
    </div>
  );
}
