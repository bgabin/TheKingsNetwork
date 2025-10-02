import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Application = {
  id: string;
  full_name: string;
  email: string;
  calling: string;
  integrity: string;
  result: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export type EbookDownload = {
  id: string;
  email: string;
  full_name: string;
  downloaded_at: string;
  ip_address: string;
};
