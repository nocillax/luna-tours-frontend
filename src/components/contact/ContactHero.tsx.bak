import Image from "next/image";

interface ContactHeroProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export default function ContactHero({
  imageUrl,
  title,
  subtitle,
}: ContactHeroProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] bg-black">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-5xl font-findel mb-4 text-center">
          {title}
        </h1>
        <p className="text-xl max-w-2xl text-center px-4">{subtitle}</p>
      </div>
    </div>
  );
}
