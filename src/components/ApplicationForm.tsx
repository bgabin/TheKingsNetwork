import { FormEvent, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    calling: '',
    integrity: '',
    result: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('applications').insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          calling: formData.calling,
          integrity: formData.integrity,
          result: formData.result,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        calling: '',
        integrity: '',
        result: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-20 px-6 md:px-20 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Apply for the Work</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
          This container is for men ready to end excuses, claim standards, and lead.
          Fill out the application—if it's a fit, you'll be invited to a call.
        </p>
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg text-center">
            <p className="text-green-100 font-semibold">Application submitted successfully!</p>
            <p className="text-green-200 text-sm mt-2">We'll review your application and be in touch soon.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg text-center">
            <p className="text-red-100 font-semibold">Error submitting application</p>
            <p className="text-red-200 text-sm mt-2">{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-black p-8 rounded-2xl shadow-lg grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-2 text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="Your name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-400">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="you@example.com"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-400">What's calling you to this work?</label>
            <textarea
              value={formData.calling}
              onChange={(e) => setFormData({ ...formData, calling: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500 transition-colors"
              rows={4}
              placeholder="Be specific"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-400">Where are you out of integrity right now?</label>
            <textarea
              value={formData.integrity}
              onChange={(e) => setFormData({ ...formData, integrity: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500 transition-colors"
              rows={4}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-400">What result will prove this worked?</label>
            <input
              type="text"
              value={formData.result}
              onChange={(e) => setFormData({ ...formData, result: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="Define success in 90 days"
              required
              disabled={isSubmitting}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 px-6 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
          <p className="text-xs text-gray-500">By applying, you agree to be contacted about the program. No spam. Ever.</p>
        </form>
      </div>
    </section>
  );
}
