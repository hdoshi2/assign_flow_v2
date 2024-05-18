-- Create Task table
CREATE TABLE task (
  id UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  creator_id UUID NOT NULL,
  assignee_ids UUID[] NOT NULL,
  name TEXT NOT NULL,
  due_date DATE,
  type_ids UUID[]
);

-- Create Task Type table
CREATE TABLE task_type (
  id UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  name TEXT NOT NULL,
  creator_id UUID NOT NULL,
  details_type TEXT NOT NULL,
  details_id UUID REFERENCES qa_details(id),
  response_complete BOOLEAN,
  position INT
);

-- Create QA Details table
CREATE TABLE qa_details (
  id UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  question TEXT NOT NULL
);

-- Create QA Response table
CREATE TABLE qa_response (
  id UUID PRIMARY KEY DEFAULT (gen_random_uuid()),
  qa_id UUID REFERENCES qa_details(id),
  response TEXT
);

