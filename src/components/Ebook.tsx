import { FormEvent, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Ebook() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('ebook_downloads').insert([
        {
          email,
          full_name: fullName,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setEmail('');
      setFullName('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="ebook" className="py-20 px-6 md:px-20 bg-black text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Free Ebook: The Secret Results Producer Distinctions</h2>
        <p className="mb-8">
          The exact principles I used to build a million-dollar real estate business, leave the 9-5,
          and live a life of freedom. This is powerful medicine—only download if you're ready to rise.
        </p>

        {!showForm && submitStatus !== 'success' && (
          <button
            onClick={() => setShowForm(true)}
            className="inline-block px-8 py-4 bg-amber-500 text-black text-lg font-bold rounded-lg shadow-lg hover:bg-amber-400 transition-colors"
          >
            Get Your Free Copy
          </button>
        )}

        {showForm && submitStatus !== 'success' && (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
            <div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500 transition-colors"
                placeholder="Your name (optional)"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500 transition-colors"
                placeholder="Your email"
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-amber-500 text-black text-lg font-bold rounded-lg shadow-lg hover:bg-amber-400 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Me the Ebook'}
            </button>
          </form>
        )}

        {submitStatus === 'success' && (
          <div className="mt-8 p-6 bg-green-900 border border-green-700 rounded-lg">
            <p className="text-green-100 font-semibold text-lg">Check your email!</p>
            <p className="text-green-200 mt-2">Your free ebook is on its way.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-900 border border-red-700 rounded-lg">
            <p className="text-red-100">Something went wrong. Please try again.</p>
          </div>
        )}
      </div>
    </section>
  );
}
