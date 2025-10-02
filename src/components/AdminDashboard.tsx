import { useEffect, useState } from 'react';
import { supabase, Application } from '../lib/supabase';

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateApplicationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      fetchApplications();
    } catch (error) {
      console.error('Error updating application:', error);
    }
  };

  const filteredApplications = applications.filter((app) =>
    filter === 'all' ? true : app.status === filter
  );

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-900 text-yellow-200',
    reviewed: 'bg-blue-900 text-blue-200',
    accepted: 'bg-green-900 text-green-200',
    rejected: 'bg-red-900 text-red-200',
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === 'all' ? 'bg-amber-500 text-black' : 'bg-gray-800 text-gray-300'
            }`}
          >
            All ({applications.length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === 'pending' ? 'bg-amber-500 text-black' : 'bg-gray-800 text-gray-300'
            }`}
          >
            Pending ({applications.filter((a) => a.status === 'pending').length})
          </button>
          <button
            onClick={() => setFilter('reviewed')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === 'reviewed' ? 'bg-amber-500 text-black' : 'bg-gray-800 text-gray-300'
            }`}
          >
            Reviewed ({applications.filter((a) => a.status === 'reviewed').length})
          </button>
          <button
            onClick={() => setFilter('accepted')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === 'accepted' ? 'bg-amber-500 text-black' : 'bg-gray-800 text-gray-300'
            }`}
          >
            Accepted ({applications.filter((a) => a.status === 'accepted').length})
          </button>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading applications...</p>
          </div>
        ) : filteredApplications.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No applications found.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredApplications.map((app) => (
              <div key={app.id} className="bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{app.full_name}</h3>
                    <p className="text-gray-400">{app.email}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Submitted: {new Date(app.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${statusColors[app.status]}`}>
                    {app.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-1">What's calling them:</p>
                    <p className="text-gray-200">{app.calling}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-1">Out of integrity:</p>
                    <p className="text-gray-200">{app.integrity}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-1">Success result:</p>
                    <p className="text-gray-200">{app.result}</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => updateApplicationStatus(app.id, 'reviewed')}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-colors"
                  >
                    Mark Reviewed
                  </button>
                  <button
                    onClick={() => updateApplicationStatus(app.id, 'accepted')}
                    className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => updateApplicationStatus(app.id, 'rejected')}
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg font-semibold transition-colors"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
