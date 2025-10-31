# GYNT Database Setup Guide

This guide will help you set up your Supabase database from scratch.

## Step 1: Create a New Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in:
   - **Project Name**: `gynt` (or your preferred name)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose closest to your users
   - **Pricing Plan**: Select based on your needs

## Step 2: Get Your Project Credentials

1. Once your project is created, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (looks like: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)
3. Create/update `.env.local` in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 3: Run SQL in Supabase SQL Editor

1. Go to **SQL Editor** in your Supabase dashboard
2. Click "New Query"
3. Copy and paste the SQL below
4. Click "Run" to execute

---

## Complete Database Schema

```sql
-- ============================================
-- GYNT DATABASE SCHEMA
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. TOURNAMENT_YEARS TABLE
-- ============================================
CREATE TABLE tournament_years (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  year INTEGER UNIQUE NOT NULL,
  is_open BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 2. TOURNAMENTS TABLE (Multilingual)
-- ============================================
CREATE TABLE tournaments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tournament_year_id UUID NOT NULL REFERENCES tournament_years(id) ON DELETE CASCADE,
  language VARCHAR(2) NOT NULL DEFAULT 'en', -- 'en', 'ge'
  
  -- Tournament Details
  edition VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  location TEXT NOT NULL,
  host VARCHAR(255),
  
  -- Dates
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  
  -- Stats & Info
  teams_count INTEGER DEFAULT 0,
  format TEXT,
  jury_info TEXT,
  summary TEXT,
  winner JSONB, -- Store winner info as JSON
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Unique constraint: one tournament per year per language
  UNIQUE(tournament_year_id, language)
);

-- ============================================
-- 3. PROBLEMS TABLE (Tournament Problems)
-- ============================================
CREATE TABLE problems (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tournament_id UUID NOT NULL REFERENCES tournaments(id) ON DELETE CASCADE,
  language VARCHAR(2) NOT NULL DEFAULT 'en',
  
  code VARCHAR(50) NOT NULL, -- Problem code like "A1", "B2"
  title VARCHAR(255) NOT NULL,
  description TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Unique constraint: one problem per tournament per language with same code
  UNIQUE(tournament_id, code, language)
);

-- ============================================
-- 4. TOURNAMENT_FILES TABLE
-- ============================================
CREATE TABLE tournament_files (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tournament_id UUID NOT NULL REFERENCES tournaments(id) ON DELETE CASCADE,
  language VARCHAR(2) NOT NULL DEFAULT 'en',
  
  label VARCHAR(255) NOT NULL,
  url TEXT NOT NULL,
  file_type VARCHAR(50), -- 'pdf', 'docx', etc.
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 5. RESEARCHES TABLE (Multilingual)
-- ============================================
CREATE TABLE researches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  language VARCHAR(2) NOT NULL DEFAULT 'en', -- 'en', 'ge'
  
  -- Basic Info
  title VARCHAR(500) NOT NULL,
  description TEXT,
  authors TEXT NOT NULL, -- Comma-separated or single name
  field VARCHAR(255) NOT NULL, -- Main field/category
  tags TEXT[], -- Array of tags
  
  -- Optional Content
  abstract TEXT,
  content TEXT,
  methodology TEXT,
  results TEXT,
  conclusions TEXT,
  
  year INTEGER, -- Year research was completed
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 6. RESEARCH_FILES TABLE
-- ============================================
CREATE TABLE research_files (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  research_id UUID NOT NULL REFERENCES researches(id) ON DELETE CASCADE,
  language VARCHAR(2) NOT NULL DEFAULT 'en',
  
  label VARCHAR(255) NOT NULL,
  url TEXT NOT NULL,
  file_type VARCHAR(50),
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 7. REGISTERED_SCHOOLS TABLE (School Registrations)
-- ============================================
CREATE TABLE registered_schools (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- School Info
  school_name VARCHAR(255) NOT NULL,
  school_address TEXT,
  city VARCHAR(255) NOT NULL,
  school_type VARCHAR(50), -- 'public', 'private', etc.
  
  -- Contact Person
  contact_person VARCHAR(255) NOT NULL,
  contact_phone VARCHAR(50),
  contact_email VARCHAR(255) NOT NULL,
  
  -- Additional Info
  additional_info TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 8. GYNT_TEAMS TABLE (Team Registrations - Legacy, optional)
-- ============================================
CREATE TABLE gynt_teams (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Team Info
  team_name VARCHAR(255) NOT NULL,
  school_name VARCHAR(255),
  city VARCHAR(255),
  
  -- Team Leader
  team_leader_name VARCHAR(255) NOT NULL,
  team_leader_phone VARCHAR(50),
  team_leader_email VARCHAR(255),
  
  -- Team Members (stored as array of names)
  team_members TEXT[] NOT NULL,
  
  -- Supervisor
  team_supervisor VARCHAR(255),
  supervisor_phone VARCHAR(50),
  supervisor_email VARCHAR(255),
  
  -- Additional Info
  additional_info TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

-- Tournament indexes
CREATE INDEX idx_tournaments_year_id ON tournaments(tournament_year_id);
CREATE INDEX idx_tournaments_language ON tournaments(language);
CREATE INDEX idx_tournaments_year_lang ON tournaments(tournament_year_id, language);

-- Problem indexes
CREATE INDEX idx_problems_tournament ON problems(tournament_id);
CREATE INDEX idx_problems_tournament_lang ON problems(tournament_id, language);

-- Tournament files indexes
CREATE INDEX idx_tournament_files_tournament ON tournament_files(tournament_id);
CREATE INDEX idx_tournament_files_tournament_lang ON tournament_files(tournament_id, language);

-- Research indexes
CREATE INDEX idx_researches_language ON researches(language);
CREATE INDEX idx_researches_year ON researches(year);
CREATE INDEX idx_researches_field ON researches(field);

-- Research files indexes
CREATE INDEX idx_research_files_research ON research_files(research_id);
CREATE INDEX idx_research_files_research_lang ON research_files(research_id, language);

-- Registered schools indexes
CREATE INDEX idx_registered_schools_city ON registered_schools(city);
CREATE INDEX idx_registered_schools_created_at ON registered_schools(created_at);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE tournament_years ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournaments ENABLE ROW LEVEL SECURITY;
ALTER TABLE problems ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournament_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE researches ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE registered_schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE gynt_teams ENABLE ROW LEVEL SECURITY;

-- Public read access for all content tables
CREATE POLICY "Public read access for tournament_years" ON tournament_years FOR SELECT USING (true);
CREATE POLICY "Public read access for tournaments" ON tournaments FOR SELECT USING (true);
CREATE POLICY "Public read access for problems" ON problems FOR SELECT USING (true);
CREATE POLICY "Public read access for tournament_files" ON tournament_files FOR SELECT USING (true);
CREATE POLICY "Public read access for researches" ON researches FOR SELECT USING (true);
CREATE POLICY "Public read access for research_files" ON research_files FOR SELECT USING (true);
CREATE POLICY "Public read access for registered_schools" ON registered_schools FOR SELECT USING (true);

-- Public insert access for registrations
CREATE POLICY "Public insert access for registered_schools" ON registered_schools FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert access for gynt_teams" ON gynt_teams FOR INSERT WITH CHECK (true);

-- Public read access for team registrations (optional - you might want to restrict this)
CREATE POLICY "Public read access for gynt_teams" ON gynt_teams FOR SELECT USING (true);

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================

-- Insert sample tournament year
INSERT INTO tournament_years (year, is_open) VALUES (2024, false);

-- Insert sample tournament (English)
INSERT INTO tournaments (
  tournament_year_id,
  language,
  edition,
  city,
  location,
  host,
  start_date,
  end_date,
  teams_count,
  summary
) VALUES (
  (SELECT id FROM tournament_years WHERE year = 2024),
  'en',
  'GYNT 2024',
  'Tbilisi',
  'Tbilisi State University',
  'GYNT Organization',
  '2024-03-15',
  '2024-03-17',
  50,
  'Annual Georgian Young Naturalists Tournament featuring research presentations and debates.'
);

-- Insert sample tournament (Georgian)
INSERT INTO tournaments (
  tournament_year_id,
  language,
  edition,
  city,
  location,
  host,
  start_date,
  end_date,
  teams_count,
  summary
) VALUES (
  (SELECT id FROM tournament_years WHERE year = 2024),
  'ge',
  'GYNT 2024',
  'თბილისი',
  'თბილისის სახელმწიფო უნივერსიტეტი',
  'GYNT ორგანიზაცია',
  '2024-03-15',
  '2024-03-17',
  50,
  'წელიწადური საქართველოს ახალგაზრდა ბუნებისმეტყველთა ტურნირი კვლევითი პრეზენტაციებითა და დებატებით.'
);

-- Insert sample research
INSERT INTO researches (
  language,
  title,
  authors,
  field,
  tags,
  abstract,
  year
) VALUES (
  'en',
  'Analysis of Water Quality in Tbilisi Urban Areas',
  'Giorgi Giorgadze, Mariam Mikeladze',
  'Environmental Science',
  ARRAY['water quality', 'urban environment', 'pollution'],
  'This research investigates the water quality parameters in various urban areas of Tbilisi, analyzing pH levels, heavy metal concentrations, and microbial contamination.',
  2024
);

INSERT INTO researches (
  language,
  title,
  authors,
  field,
  tags,
  abstract,
  year
) VALUES (
  'ge',
  'თბილისის ურბანული ზონებში წყლის ხარისხის ანალიზი',
  'გიორგი გიორგაძე, მარიამ მიქელაძე',
  'გარემოსდაცვითი მეცნიერება',
  ARRAY['წყლის ხარისხი', 'urbანული გარემო', 'დაბინძურება'],
  'ეს კვლევა გამოიკვლევს წყლის ხარისხის პარამეტრებს თბილისის სხვადასხვა ურბანულ ზონებში, გაანალიზებს pH დონეს, მძიმე მეტალების კონცენტრაციას და მიკრობიოლოგიურ დაბინძურებას.',
  2024
);

-- Insert sample registered schools
INSERT INTO registered_schools (
  school_name,
  city,
  school_type,
  contact_person,
  contact_email,
  school_address
) VALUES (
  'Tbilisi Public School #1',
  'Tbilisi',
  'Public',
  'Nino Giorgadze',
  'nino.giorgadze@tbilisi.edu.ge',
  'Rustaveli Ave 1, Tbilisi'
),
(
  'Batumi Science Lyceum',
  'Batumi',
  'Public',
  'Mariam Bakradze',
  'm.bakradze@batumi.edu.ge',
  'Nobel Street 10, Batumi'
),
(
  'American School of Tbilisi',
  'Tbilisi',
  'Private',
  'David Mikhelidze',
  'd.mikhelidze@ast.ge',
  'Chavchavadze Ave 4, Tbilisi'
);

-- ============================================
-- VERIFICATION QUERIES
-- ============================================

-- Check all tables were created
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- Check tournament data
SELECT t.*, ty.year, ty.is_open 
FROM tournaments t 
JOIN tournament_years ty ON t.tournament_year_id = ty.id;

-- Check research data
SELECT id, title, authors, field, tags, year FROM researches;

-- Check registered schools
SELECT school_name, city, school_type, contact_person, contact_email FROM registered_schools;

-- Check RLS policies
SELECT schemaname, tablename, policyname FROM pg_policies 
WHERE schemaname = 'public'
ORDER BY tablename, policyname;
```

---

## Step 4: Verify Setup

Run these queries in the SQL Editor to verify everything is set up correctly:

```sql
-- Check all tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- Should return: 8 tables
-- tournament_years, tournaments, problems, tournament_files, 
-- researches, research_files, registered_schools, gynt_teams
```

---

## Step 5: Update Environment Variables

Make sure your `.env.local` file has the correct values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

---

## Step 6: Test Your Application

1. Restart your Next.js dev server:
```bash
npm run dev
```

2. Navigate to your pages and verify:
   - `/researches` - Should show research list
   - `/tournaments` - Should show tournament list
   - `/school-registration` - Should be able to submit school registrations and view registered schools

---

## Troubleshooting

### RLS Policy Issues
If you get "new row violates row-level security policy" errors, make sure all RLS policies are created properly.

### Connection Issues
- Double-check your `.env.local` has correct Supabase URL and key
- Make sure the Supabase project is running (not paused)

### Migration Issues
If you need to reset the database:
1. Go to Database → Reset database in Supabase dashboard
2. Run the SQL script again

---

## Next Steps

1. Add your actual tournament and research data
2. Configure authentication if needed (for admin access)
3. Set up storage buckets for file uploads if you want to host files in Supabase
4. Consider adding admin functions to manage data

---

## Support

For issues or questions, check:
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)

