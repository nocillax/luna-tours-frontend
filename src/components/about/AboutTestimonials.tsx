// src/components/about/AboutTestimonials.tsx
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
                <svg
                  key={star}
                  className="h-5 w-5 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
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
                <svg
                  key={star}
                  className="h-5 w-5 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
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
