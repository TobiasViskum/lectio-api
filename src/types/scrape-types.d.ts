type StandardProps = {
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
  assignmentTime: string;
  assignmentDescription: string;
  status: string;
  absence: string;
  awaiter: string;
  grade: string;
  gradeNote: string;
  id: string;
};

type Homework = { titleHref: string; title: string; description: (string | string[] | { img: string })[] };

type LessonStatus = "changed" | "cancelled" | "normal";
type LessonTime = { date: string; startTime: string; endTime: string };
type Lesson = {
  href: string;
  status: LessonStatus;
  time: LessonTime;
  teachers: Teacher[];
  classroom: string;
  classes: string[];
  title: string;
  subjects: string[];
};
type Week = { lessons: Lesson[]; notes: string[] };
