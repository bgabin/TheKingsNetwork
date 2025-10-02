const codeItems = [
  'My word is law—first to me.',
  'I choose purpose over comfort.',
  'My attention is sovereign.',
  'I create wealth to fund my mission.',
  'I elevate my kingdom: family, brothers, community.',
  'I celebrate life and remember death.'
];

export default function Code() {
  return (
    <section id="code" className="py-20 px-6 md:px-20 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Code of the King</h2>
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <ol className="list-decimal list-inside space-y-2">
            {codeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
