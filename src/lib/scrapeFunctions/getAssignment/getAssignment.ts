import { getSubjectName } from "@/lib/util/getSubjectFromClass";
import { getAuthenticatedPage } from "@/lib/getPage";
import { getTeacherByInitials } from "..";
import { setInformationProps } from "./setInformationProps";
import { setAdditionalProps } from "./setAdditionalProps";
import { setSubmitProps } from "./setSubmitProps";

type Props = { href: string } & StandardProps;

type Titles =
  | "title"
  | "documents"
  | "note"
  | "class"
  | "gradeSystem"
  | "teacher"
  | "studentTime"
  | "dueTo"
  | "inTeachingDescription";

export const titleMap: { [key: string]: Titles } = {
  "Opgavetitel:": "title",
  "Opgavebeskrivelse:": "documents",
  "Opgavenote:": "note",
  "Hold:": "class",
  "Karakterskala:": "gradeSystem",
  "Ansvarlig:": "teacher",
  "Elevtid:": "studentTime",
  "Afleveringsfrist:": "dueTo",
  "I undervisningsbeskrivelse:": "inTeachingDescription",
};

export async function getAssignment({ lectioCookies, schoolCode, href }: Props) {
  const res = await getAuthenticatedPage({
    lectioCookies: lectioCookies,
    schoolCode: schoolCode,
    specificPage: href,
  });

  if (res === "Not authenticated") return res;
  if (res === "Invalid school") return res;
  if (res === null) return res;

  const $ = res.$;

  const assignment: FullAssignment = {
    title: "",
    documents: [],
    description: [],
    subject: "",
    class: "",
    gradeSystem: "",
    teacher: { name: "", initials: "", teacherId: "", imgSrc: "", imgUrl: "" },
    studentTime: 0,
    dueTo: { date: "", time: "" },
    inTeachingDescription: false,
    awaiter: "",
    status: "",
    absence: "",
    finished: false,
    grade: "",
    gradeNote: "",
    studentNote: "",
    submits: [],
  };

  setInformationProps($, assignment);
  setAdditionalProps($, assignment);
  setSubmitProps($, assignment);

  const teacher = await getTeacherByInitials({
    lectioCookies: lectioCookies,
    schoolCode: schoolCode,
    initials: assignment.teacher.initials,
  });

  if (typeof teacher === "object" && teacher !== null) {
    assignment.teacher = teacher;
  }
  return assignment;
}
