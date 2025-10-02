import { useState, useEffect, FormEvent } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    let hasShown = sessionStorage.getItem('exitIntentShown');

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('ebook_downloads').insert([
        { email, full_name: '' },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setEmail('');
      setTimeout(() => setIsVisible(false), 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full relative border border-amber-500 shadow-2xl">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Check Your Email!</h3>
            <p className="text-gray-300">Your free ebook is on its way.</p>
          </div>
        ) : (
          <>
            <h3 className="text-3xl font-bold mb-4">Wait! Before You Go...</h3>
            <p className="text-gray-300 mb-6">
              Download the free ebook: <span className="font-bold">The Secret Results Producer Distinctions</span>
              <br />
              <br />
              The exact principles used to build a million-dollar real estate business and live a life of total freedom.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Me the Free Ebook'}
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              No spam. Just powerful wisdom to help you rise.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
