import { StarIcon } from "@heroicons/react/24/solid";

// client testimonials section
export default function AboutTestimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--earth-highlight)] mb-12 font-montserrat">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-[var(--earth-dark)]/20 p-8 rounded-lg border border-[var(--earth-medium)]/20">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} className="h-5 w-5 text-amber-400" />
              ))}
            </div>
            <blockquote className="mb-4 text-[var(--earth-light)] italic">
              "Our tour with Luna was truly life-changing. We experienced Japan
              in a way we never could have on our own. The guides were
              knowledgeable and passionate, and we felt like we gained authentic
              insight into Japanese culture."
            </blockquote>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-[var(--earth-accent)]/20 flex items-center justify-center text-[var(--earth-accent)] text-xl font-bold mr-4">
                SB
              </div>
              <div>
                <p className="text-[var(--earth-highlight)] font-semibold">
                  Sarah Brown
                </p>
                <p className="text-[var(--earth-light)] text-sm">
                  Tokyo Explorer Tour
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[var(--earth-dark)]/20 p-8 rounded-lg border border-[var(--earth-medium)]/20">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} className="h-5 w-5 text-amber-400" />
              ))}
            </div>
            <blockquote className="mb-4 text-[var(--earth-light)] italic">
              "The Mount Fuji Adventure exceeded all expectations. Not only was
              the scenery breathtaking, but our guide Haruki shared stories and
              cultural context that made the experience deeply meaningful."
            </blockquote>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-[var(--earth-accent)]/20 flex items-center justify-center text-[var(--earth-accent)] text-xl font-bold mr-4">
                JM
              </div>
              <div>
                <p className="text-[var(--earth-highlight)] font-semibold">
                  James Miller
                </p>
                <p className="text-[var(--earth-light)] text-sm">
                  Mount Fuji Adventure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
