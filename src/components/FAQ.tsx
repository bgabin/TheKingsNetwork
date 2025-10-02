import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Who is this for?',
    answer: "This is for men who are done with excuses and ready to lead. If you're willing to face the truth, do the work, and commit to your standards, this is for you. If you're looking for quick fixes or surface-level motivation, this isn't it."
  },
  {
    question: "What makes this different from other men's programs?",
    answer: "Most programs give you theory. We give you systems, accountability, and real transformation. This isn't about feeling inspired—it's about having your life handled, building wealth, and living with integrity. We focus on results, not just feelings."
  },
  {
    question: 'How long does the program take?',
    answer: 'The Initiation is a 90-day container designed to create fundamental shifts. However, sovereignty is a lifelong practice. Many men continue in the Sovereign Brotherhood for ongoing accountability and growth.'
  },
  {
    question: 'Do I need to be in Costa Rica to participate?',
    answer: "No. The 1:1 King Coaching and Sovereign Brotherhood are virtual. The King's Initiation Retreat takes place in Costa Rica, but we also run immersions in other locations throughout the year."
  },
  {
    question: "What if I'm already successful?",
    answer: "Success and sovereignty are different. Many successful men are still trapped by distraction, broken agreements, and lack of purpose. If you're successful but not fulfilled, or if you know you're capable of more, this work will take you to the next level."
  },
  {
    question: 'Is this a religious or spiritual program?',
    answer: "This is a leadership and sovereignty program grounded in practical systems, integrity, and results. While we honor the philosophical wisdom of the King archetype and Memento Mori, this is not religious. Men of all backgrounds participate."
  },
  {
    question: "What's the investment?",
    answer: "Investment varies by container. After you apply and we determine it's a fit, we'll discuss pricing on a call. This work pays for itself many times over—men typically see significant ROI within the first 90 days."
  },
  {
    question: 'What happens after I apply?',
    answer: "If your application shows you're ready for this work, we'll invite you to a 30-minute clarity call. We'll discuss your situation, see if there's alignment, and determine the best path forward. Not everyone is accepted—this is a curated brotherhood."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 md:px-20 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Questions & Answers</h2>
        <p className="text-center text-gray-400 mb-12">Everything you need to know before applying</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-750 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="flex-shrink-0 ml-4" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
