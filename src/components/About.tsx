import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 px-6 md:px-20 bg-black transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">What Does It Mean to Be a King?</h2>
          <p className="mb-4">
            A true King isn't about domination. It's about sovereignty, presence, and living in alignment
            with your highest self. The King archetype represents integrity, service, wealth, and joy.
            When men come together in this power, they rise—and so does the world around them.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Integrity</strong> – Have your life handled.</li>
            <li><strong>Wealth</strong> – Create freedom and abundance.</li>
            <li><strong>Presence</strong> – Eliminate distractions and lead.</li>
            <li><strong>Purpose</strong> – Live in alignment with your mission.</li>
            <li><strong>Service</strong> – Elevate others through your leadership.</li>
            <li><strong>Joy</strong> – Celebrate life with passion and play.</li>
          </ul>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1152854/pexels-photo-1152854.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="King Archetype"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
