// src/components/ui/BusinessHours.tsx
export default function BusinessHours() {
  return (
    <div className="mt-8 p-6 bg-[var(--earth-dark)]/20 bg-opacity-10 rounded-lg border border-[var(--earth-light)]">
      <h3 className="text-xl text-[var(--earth-accent)] font-semibold mb-4">
        Business Hours
      </h3>
      <ul className="space-y-2">
        <li className="flex justify-between text-[var(--earth-highlight)]">
          <span>Monday - Friday:</span>
          <span>9:00 AM - 6:00 PM JST</span>
        </li>
        <li className="flex justify-between text-[var(--earth-highlight)]">
          <span>Saturday:</span>
          <span>10:00 AM - 4:00 PM JST</span>
        </li>
        <li className="flex justify-between text-[var(--earth-highlight)]">
          <span>Sunday:</span>
          <span>Closed</span>
        </li>
      </ul>
    </div>
  );
}
