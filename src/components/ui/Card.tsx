import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  imageSrc: string;
  slug: string;
}

export default function Card({
  id,
  title,
  description,
  duration,
  price,
  imageSrc,
  slug,
}: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-56 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <svg
            className="h-5 w-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{duration}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">
            ₹{price.toLocaleString()}
          </span>
          <Link
            href={`/tours/${slug}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
