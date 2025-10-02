import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Story() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="story"
      ref={ref}
      className={`py-20 px-6 md:px-20 bg-gray-900 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">My Journey as a King</h2>
          <p className="mb-4">
            I began my journey as a high school Spanish and math teacher in the United States.
            But deep down, I knew I was called to something greater. I left the safety of the classroom
            and stepped boldly into the unknown.
          </p>
          <p className="mb-4">
            Within three years, I built a seven-figure real estate business, completing over 150 deals
            and creating the freedom to live life on my terms. That freedom brought me to Costa Rica,
            where I committed fully to living my dream life—building wealth, creating community,
            and guiding men to embody their King energy.
          </p>
          <p className="mb-4">
            With 15+ years of transformational leadership training at Landmark Worldwide,
            I've led workshops at international conferences, taught improv comedy and laughter yoga
            across the globe, and developed a system to help men rise into sovereignty, joy, and purpose.
          </p>
          <p className="font-semibold">
            Now, my mission is simple: to awaken Kings. To build a network of men who are powerful,
            present, and committed to leaving a legacy.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1535244/pexels-photo-1535244.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Journey"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
