-- Create students table
CREATE TABLE public.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  course TEXT NOT NULL,
  date_of_birth DATE,
  enrollment_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create instructors table
CREATE TABLE public.instructors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  expertise TEXT NOT NULL,
  bio TEXT NOT NULL,
  photo_url TEXT,
  subjects TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.instructors ENABLE ROW LEVEL SECURITY;

-- RLS Policies for students (public access for this LMS demo)
CREATE POLICY "Allow public read access to students"
  ON public.students FOR SELECT
  USING (true);

CREATE POLICY "Allow public insert to students"
  ON public.students FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public update to students"
  ON public.students FOR UPDATE
  USING (true);

CREATE POLICY "Allow public delete to students"
  ON public.students FOR DELETE
  USING (true);

-- RLS Policies for instructors (public access for this LMS demo)
CREATE POLICY "Allow public read access to instructors"
  ON public.instructors FOR SELECT
  USING (true);

CREATE POLICY "Allow public insert to instructors"
  ON public.instructors FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public update to instructors"
  ON public.instructors FOR UPDATE
  USING (true);

CREATE POLICY "Allow public delete to instructors"
  ON public.instructors FOR DELETE
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER set_students_updated_at
  BEFORE UPDATE ON public.students
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_instructors_updated_at
  BEFORE UPDATE ON public.instructors
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();