// src/components/ui/OfficeLocationCard.tsx
import React from "react";

interface OfficeLocationProps {
  name: string;
  address: string;
  email: string;
  phone: string;
}

export default function OfficeLocationCard({
  name,
  address,
  email,
  phone,
}: OfficeLocationProps) {
  return (
    <div className="border border-[var(--earth-light)] bg-[var(--earth-dark)]/20 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-[var(--earth-accent)] mb-4">
        {name} Office
      </h3>
      <ul className="space-y-3">
        <li className="flex items-start">
          <svg
            className="h-5 w-5 text-[var(--earth-accent)] mt-0.5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-[var(--earth-highlight)]">{address}</span>
        </li>
        <li className="flex items-start">
          <svg
            className="h-5 w-5 text-[var(--earth-accent)] mt-0.5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[var(--earth-highlight)]">{email}</span>
        </li>
        <li className="flex items-start">
          <svg
            className="h-5 w-5 text-[var(--earth-accent)] mt-0.5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-[var(--earth-highlight)]">{phone}</span>
        </li>
      </ul>
    </div>
  );
}
