/*
  # Create Applications Table

  1. New Tables
    - `applications`
      - `id` (uuid, primary key) - Unique identifier for each application
      - `full_name` (text, required) - Applicant's full name
      - `email` (text, required) - Applicant's email address
      - `calling` (text, required) - What's calling them to this work
      - `integrity` (text, required) - Where they are out of integrity
      - `result` (text, required) - What result will prove this worked
      - `status` (text, default 'pending') - Application status (pending, reviewed, accepted, rejected)
      - `created_at` (timestamptz, default now()) - When the application was submitted
      - `updated_at` (timestamptz, default now()) - When the application was last updated

  2. Security
    - Enable RLS on `applications` table
    - Add policy for anyone to insert their own application
    - Add policy for authenticated admins to view all applications
*/

CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  calling text NOT NULL,
  integrity text NOT NULL,
  result text NOT NULL,
  status text DEFAULT 'pending' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit application"
  ON applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update applications"
  ON applications
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS applications_email_idx ON applications(email);
CREATE INDEX IF NOT EXISTS applications_status_idx ON applications(status);
CREATE INDEX IF NOT EXISTS applications_created_at_idx ON applications(created_at DESC);