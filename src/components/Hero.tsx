export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1500')" }}
      role="banner"
      aria-label="Hero section"
    >
      <div className="bg-black bg-opacity-70 absolute inset-0" aria-hidden="true"></div>
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-widest">Rise Kings, Rise</h1>
        <p className="text-xl md:text-2xl mb-8">Awaken your King archetype. Lead with purpose, wealth, power, and integrity.</p>
        <a
          href="#apply"
          className="inline-block px-8 py-4 bg-amber-500 text-black text-lg font-bold rounded-lg shadow-lg hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Join the Kings Network movement"
        >
          Join the Movement
        </a>
      </div>
    </section>
  );
}
