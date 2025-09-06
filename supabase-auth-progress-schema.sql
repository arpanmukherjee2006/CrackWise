-- Supabase Schema for Authentication and Progress Tracking Only
-- (Quiz questions will be stored in static files)

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create progress tracking table
CREATE TABLE IF NOT EXISTS progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exam TEXT NOT NULL, -- 'JEE' or 'NEET'
    subject TEXT NOT NULL, -- 'Physics', 'Chemistry', 'Mathematics', 'Biology'
    chapter TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, exam, subject, chapter)
);

-- Create quiz progress table (for scores and completion tracking)
CREATE TABLE IF NOT EXISTS quiz_progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    chapter TEXT NOT NULL,
    score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, chapter)
);

-- Enable Row Level Security
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_progress ENABLE ROW LEVEL SECURITY;

-- Create policies for progress table
CREATE POLICY "Users can view their own progress" ON progress
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress" ON progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress" ON progress
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own progress" ON progress
    FOR DELETE USING (auth.uid() = user_id);

-- Create policies for quiz_progress table
CREATE POLICY "Users can view their own quiz progress" ON quiz_progress
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own quiz progress" ON quiz_progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own quiz progress" ON quiz_progress
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own quiz progress" ON quiz_progress
    FOR DELETE USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_progress_user_exam ON progress(user_id, exam);
CREATE INDEX IF NOT EXISTS idx_progress_user_subject ON progress(user_id, subject);
CREATE INDEX IF NOT EXISTS idx_quiz_progress_user ON quiz_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_progress_chapter ON quiz_progress(chapter);

-- Create updated_at trigger for progress table
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_progress_updated_at BEFORE UPDATE ON progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data (optional)
-- This will be populated by the application when users interact with it

COMMENT ON TABLE progress IS 'Tracks user progress through study chapters';
COMMENT ON TABLE quiz_progress IS 'Tracks user quiz scores and completion';