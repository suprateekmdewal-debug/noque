-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  business_type TEXT NOT NULL,
  city TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for phone lookups
CREATE INDEX IF NOT EXISTS waitlist_phone_idx ON waitlist(phone);
CREATE INDEX IF NOT EXISTS waitlist_city_idx ON waitlist(city);
CREATE INDEX IF NOT EXISTS waitlist_business_type_idx ON waitlist(business_type);

-- Row-level security: allow public inserts, no public reads
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only service role can read
CREATE POLICY "Service role full access" ON waitlist
  FOR ALL TO service_role
  USING (true)
  WITH CHECK (true);
