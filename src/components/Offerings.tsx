const offerings = [
  {
    title: '1:1 King Coaching',
    items: [
      'Integrity & systems install',
      'Wealth architecture',
      'Purpose alignment & rituals'
    ]
  },
  {
    title: "King's Initiation Retreat",
    items: [
      'Embodied brotherhood',
      'Memento Mori rites',
      'Command presence training'
    ]
  },
  {
    title: 'Sovereign Brotherhood',
    items: [
      'Weekly councils',
      'Accountability & standards',
      'Results scoreboard'
    ]
  }
];

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Offerings() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="offerings"
      ref={ref}
      className={`py-20 px-6 md:px-20 bg-gray-900 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Step Into the Work</h2>
        <p className="text-lg text-gray-300">Three containers. One outcome: you, crowned.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {offerings.map((offering) => (
          <div key={offering.title} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:bg-gray-750 transition-colors">
            <h3 className="text-2xl font-bold mb-4">{offering.title}</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
              {offering.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
