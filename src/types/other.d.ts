type Pages =
  | "front"
  | "schedule"
  | "absence-overview"
  | "absence-reasons"
  | "assignments"
  | "homework"
  | "grades-overview"
  | "grades-messages"
  | "borrowed-books"
  | "questionnaire"
  | "messages-newest"
  | "messages-unread"
  | "messages-personal"
  | "messages-all"
  | "messages-deleted"
  | "studyPlan-calender"
  | "studyPlan-educationDescription"
  | "studyPlan-studyDirection"
  | "studyPlan-elective"
  | "teachers"
  | "student-by-credentials";

type GetPageReturn =
  | "Not authenticated"
  | "Invalid school"
  | "No data"
  | "Forbidden access"
  | {
      $: cheerio.Root;
      client: AxiosInstance;
    }
  | null;

type MessagesTypes = "all" | "unread" | "personal" | "newest" | "deleted";
