const steps = [
  {
    number: '1',
    title: 'Inventory',
    description: 'Face the truth. Integrity audit, money map, distraction detox.'
  },
  {
    number: '2',
    title: 'Fire',
    description: 'Set fire to the old life. Clear agreements, install systems, claim standards.'
  },
  {
    number: '3',
    title: 'Coronation',
    description: 'Choose the throne. Commit publicly. Lead in wealth, purpose, and service.'
  }
];

export default function Initiation() {
  return (
    <section id="path" className="py-20 px-6 md:px-20 bg-black">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">The Initiation</h2>
        <p className="text-lg text-gray-300">A simple path to sovereignty—direct, demanding, and deeply liberating.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div key={step.number} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:bg-gray-750 transition-colors">
            <h3 className="text-2xl font-bold mb-2">{step.number}. {step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
