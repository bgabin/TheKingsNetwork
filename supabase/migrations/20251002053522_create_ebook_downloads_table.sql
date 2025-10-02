/*
  # Create Ebook Downloads Table

  1. New Tables
    - `ebook_downloads`
      - `id` (uuid, primary key) - Unique identifier for each download
      - `email` (text, required) - Email address for ebook delivery
      - `full_name` (text, optional) - Optional name field
      - `downloaded_at` (timestamptz, default now()) - When they signed up
      - `ip_address` (text, optional) - IP address for tracking (optional)

  2. Security
    - Enable RLS on `ebook_downloads` table
    - Add policy for anyone to register for ebook
    - Add policy for authenticated admins to view all downloads
*/

CREATE TABLE IF NOT EXISTS ebook_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text DEFAULT '',
  downloaded_at timestamptz DEFAULT now() NOT NULL,
  ip_address text DEFAULT ''
);

ALTER TABLE ebook_downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for ebook"
  ON ebook_downloads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all ebook downloads"
  ON ebook_downloads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS ebook_downloads_email_idx ON ebook_downloads(email);
CREATE INDEX IF NOT EXISTS ebook_downloads_created_at_idx ON ebook_downloads(downloaded_at DESC);