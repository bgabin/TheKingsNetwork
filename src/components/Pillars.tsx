const pillars = [
  {
    title: 'Integrity',
    description: 'Keep your word, clean up your messes, and design systems that make excellence inevitable.'
  },
  {
    title: 'Presence',
    description: 'Eliminate distractions. Choose where attention goes. Rule your inner kingdom first.'
  },
  {
    title: 'Purpose',
    description: 'Move from a clear Why. Align decisions to mission, not mood.'
  },
  {
    title: 'Wealth',
    description: 'Create freedom, not just money. Build assets and systems that serve your calling.'
  },
  {
    title: 'Service',
    description: "Use power to elevate others. A King's greatness is measured by the strength of his kingdom."
  },
  {
    title: 'Joy',
    description: 'Celebrate. Play. Let aliveness be proof that your rule is good.'
  }
];

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Pillars() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="pillars"
      ref={ref}
      className={`py-20 px-6 md:px-20 bg-gray-900 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Pillars of the King</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:bg-gray-750 transition-colors">
              <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
