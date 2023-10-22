import { getAuthenticatedPage } from "../../getPage";
import { getClass } from "./getClass";
import { getClassroom } from "./getClassroom";
import { getEndTime } from "./getEndTime";
import { getStartTime } from "./getStartTime";
import { getSubject } from "./getSubject";
import { getTeachers } from "./getTeachers";
import { getTime } from "./getTime";
import { getTitle } from "./getTitle";

type Props = { week: string; year: string; teacherId?: string; studentId?: string };

export async function getSchedule({
  lectioCookies,
  week,
  year,
  schoolCode,
  teacherId,
  studentId,
}: StandardProps & Props) {
  let targetPage = `SkemaNy.aspx?week=${week.toString() + year.toString()}`;
  if (teacherId) {
    targetPage = `SkemaNy.aspx?week=${week + year}&laererid=${teacherId}`;
  } else if (studentId) {
    targetPage = `SkemaNy.aspx?week=${week + year}&elevid=${teacherId}`;
  }

  const res = await getAuthenticatedPage({
    lectioCookies: lectioCookies,
    schoolCode: schoolCode,
    specificPage: targetPage,
  });

  if (res === null) return res;
  if (res === "Not authenticated") return res;
  if (res === "Forbidden access") return res;
  if (res === "Invalid school") return res;

  const $ = res.$;

  const weekSchedule: Week[] = $(".s2skemabrikcontainer.lec-context-menu-instance")
    .map((_index, _elem) => {
      const $_elem = $(_elem);

      const lessons: Lesson[] = $_elem
        .find("a[data-additionalinfo]")
        .map((index, elem) => {
          const $elem = $(elem);
          let href = ["https://lectio.dk", $elem.attr("href")].join("");
          const hrefRegex =
            /https:\/\/lectio.dk\/lectio\/[0-9]+\/(aktivitet\/aktivitetforside2.aspx\?absid=[0-9]+)/i;
          const hrefMath = href.match(hrefRegex);
          const info = $elem.attr("data-additionalinfo");
          let status: LessonStatus = "normal";
          if (hrefMath && info) {
            status = info.includes("Ændret!")
              ? "changed"
              : info.includes("Aflyst!")
              ? "cancelled"
              : "normal";
            href = hrefMath[1];
          }

          const lesson: Lesson = {
            href: "",
            status: "normal",
            time: { date: "", startTime: "", endTime: "" },
            teachers: [],
            classrooms: [""],
            classes: [],
            subjects: [],
            title: "",
            hasNote: false,
            hasHomework: false,
            hasOtherContent: false,
            hasPresentation: false,
            overlappingLessons: 0,
          };

          if (info) {
            lesson.href = href;
            lesson.status = status;
            lesson.time = getTime(info);
            lesson.teachers = getTeachers(info);
            lesson.classrooms = getClassroom(info);
            lesson.classes = getClass(info);
            lesson.subjects = getSubject(info);
            lesson.title = getTitle(info);
            lesson.hasNote = info.includes("Note:");
            lesson.hasHomework = info.includes("Lektier:");
            lesson.hasOtherContent = info.includes("Øvrigt indhold:");
            lesson.hasPresentation = info.includes("Aktiviteten har en præsentation.");
          }

          if (
            lesson.subjects.length === 1 &&
            lesson.classes.length === 1 &&
            lesson.subjects[0] === lesson.classes[0]
          ) {
            lesson.classes = [""];
          }

          return lesson;
        })
        .get();

      lessons.forEach((lesson1, index1) => {
        lessons.forEach((lesson2, index2) => {
          const startTime1 = getStartTime(lesson1);
          const endTime1 = getEndTime(lesson1);

          const startTime2 = getStartTime(lesson2);

          if (index1 !== index2) {
            if (startTime2 === startTime1) {
              lessons[index2].overlappingLessons += 1;
            } else if (startTime2 > startTime1 && startTime2 < endTime1) {
              lessons[index2].overlappingLessons += 1;
            }
          }
        });
      });

      lessons.sort((a, b) => getStartTime(a) - getStartTime(b) || getEndTime(a) - getEndTime(b));

      if (_index <= 4) {
        return { lessons: lessons, notes: [""] };
      }
    })
    .get();

  if (weekSchedule.length === 0) {
    return "No data";
  }

  return weekSchedule;
}
