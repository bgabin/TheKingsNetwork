const testimonials = [
  {
    name: 'Marcus J.',
    location: 'Austin, TX',
    result: '7-Figure Business Owner',
    quote: "This work stripped away every excuse I had. Within 90 days, I'd closed three major deals and finally had the clarity to lead my team with real authority. I'm no longer just working—I'm building a legacy.",
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'David R.',
    location: 'Miami, FL',
    result: 'Reclaimed His Family',
    quote: "I was drowning in distractions and broken promises. The integrity work was brutal but necessary. Now my wife trusts me again, my kids respect me, and I wake up with purpose every single day.",
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'James K.',
    location: 'Denver, CO',
    result: 'Tripled His Income',
    quote: "I thought I was doing well, but I was living in comfortable mediocrity. This program showed me what it means to actually claim your throne. My income tripled, but more importantly, I remember who I am.",
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 md:px-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Voices from the Kingdom</h2>
        <p className="text-center text-gray-400 mb-12">Real results. Real men. Real standards.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:bg-gray-750 transition-all"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-amber-900 text-amber-200 rounded-lg text-sm font-semibold">
                  {testimonial.result}
                </span>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
