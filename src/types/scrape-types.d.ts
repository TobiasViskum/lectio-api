type StandardProps = {
  lectioCookies: string;
  schoolCode: string;
};

type StandardProps2 = {
  username: string;
  password: string;
  schoolCode: string;
};

type School = {
  schoolCode: string;
  name: string;
};

type Teacher = {
  name: string;
  initials: string;
  teacherId: string;
  imgUrl: string;
  imgSrc: string;
};

type Student = {
  name: string;
  class: string;
  studentId: string;
  imgUrl: string;
  imgSrc: string;
};

type Assignment = {
  week: string;
  class: string;
  href: string;
  subject: string;
  title: string;
  dueTo: string;
  studentTime: string;
  description: string;
  status: string;
  absence: string;
  awaiter: string;
  grade: string;
  gradeNote: string;
  id: string;
};
type SubmittedDocument = { name: string; href: string };
type FullAssignment = {
  studentName: string;
  title: string;
  documents: SubmittedDocument[];
  description: string[];
  subject: string;
  class: string;
  gradeSystem: string;
  teacher: Teacher;
  studentTime: number;
  dueTo: string;
  inTeachingDescription: boolean;
  awaiter: string;
  status: string;
  absence: string;
  finished: boolean;
  grade: string;
  gradeNote: string;
  studentNote: string;
  submits: {
    time: string;
    submitter: string;
    comment: string;
    document: SubmittedDocument;
  }[];
};

type Homework = {
  titleHref: string;
  title: string;
  description: (string | string[] | { img: string })[];
};

type LessonStatus = "changed" | "cancelled" | "normal";
type LessonTime = { date: string; startTime: string; endTime: string };
type Lesson = {
  href: string;
  status: LessonStatus;
  time: LessonTime;
  teachers: Teacher[];
  classrooms: string[];
  classes: string[];
  title: string;
  subjects: string[];
  hasNote: boolean;
  hasHomework: boolean;
  hasOtherContent: boolean;
  hasPresentation: boolean;
  overlappingLessons: number;
};
type Week = { lessons: Lesson[]; notes: string[] };
