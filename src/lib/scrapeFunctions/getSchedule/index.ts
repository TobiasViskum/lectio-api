import { getAuthenticatedPage } from "../../getPage";
import { getClass } from "./getClass";
import { getClassroom } from "./getClassroom";
import { getSubject } from "./getSubject";
import { getTeachers } from "./getTeachers";
import { getTime } from "./getTime";
import { getTitle } from "./getTitle";

type Props = { week: string; year: string; teacherId?: string; studentId?: string };

export async function getSchedule({ username, password, week, year, schoolCode, teacherId, studentId }: StandardProps & Props) {
  let targetPage = `SkemaNy.aspx?week=${week.toString() + year.toString()}`;
  if (teacherId) {
    targetPage = `SkemaNy.aspx?week=${week + year}&laererid=${teacherId}`;
  } else if (studentId) {
    targetPage = `SkemaNy.aspx?week=${week + year}&elevid=${teacherId}`;
  }

  const res = await getAuthenticatedPage({
    username: username,
    password: password,
    schoolCode: schoolCode,
    specificPage: targetPage,
  });

  if (res === null) return res;
  if (res === "Not authenticated") return res;
  if (res === "No data") return res;
  if (res === "Invalid school") return res;

  const $ = res.$;

  const weekSchedule = $(".s2skemabrikcontainer.lec-context-menu-instance")
    .map((_index, _elem) => {
      const $_elem = $(_elem);

      const lessons: Lesson[] = $_elem
        .find("a[data-additionalinfo]")
        .map((index, elem) => {
          const $elem = $(elem);
          let href = ["https://lectio.dk", $elem.attr("href")].join("");
          const hrefRegex = /https:\/\/lectio.dk\/lectio\/[0-9]+\/(aktivitet\/aktivitetforside2.aspx\?absid=[0-9]+)/i;
          const hrefMath = href.match(hrefRegex);
          const info = $elem.attr("data-additionalinfo");
          let status: LessonStatus = "normal";
          if (hrefMath && info) {
            status = info.includes("Ændret!") ? "changed" : info.includes("Aflyst!") ? "cancelled" : "normal";
            href = hrefMath[1];
          }

          const lesson: Lesson = {
            href: "",
            status: "normal",
            time: { date: "", startTime: "", endTime: "" },
            teachers: [],
            classroom: "",
            classes: [],
            subjects: [],
            title: "",
          };

          if (info) {
            lesson.href = href;
            lesson.status = status;
            lesson.time = getTime(info);
            lesson.teachers = getTeachers(info);
            lesson.classroom = getClassroom(info);
            lesson.classes = getClass(info);
            lesson.subjects = getSubject(info);
            lesson.title = getTitle(info);
          }
          return lesson;
        })
        .get();
      return lessons;
    })
    .get();

  if (weekSchedule.length === 0) {
    return "No data";
  }

  return weekSchedule;
}
