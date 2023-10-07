import { getAuthenticatedPage } from "../getAuthenticatedPage";

type Props = { week: number; year: number; teacherId?: string };

export async function getSchedule({ username, password, week, year, gym, teacherId }: StandardProps & Props) {
  try {
    type LessonStatus = "changed" | "cancelled" | "normal";
    type LessonTime = { date: string; startTime: string; endTime: string };
    type LessonTeacher = { name: string; initials: string };
    type Lesson = {
      href: string;
      status: LessonStatus;
      time: LessonTime;
      teachers: LessonTeacher[];
      classroom: string;
      classes: string[];
      title: string;
      subjects: string[];
    };

    type Week = { lessons: Lesson[]; notes: string[] };

    let targetPage = `https://www.lectio.dk/lectio/${gym}/SkemaNy.aspx?week=${week.toString() + year.toString()}`;
    if (teacherId) {
      targetPage = `https://www.lectio.dk/lectio/${gym}/SkemaNy.aspx?week=${week + year}&laererid=${teacherId}`;
    }

    const page = await getAuthenticatedPage({
      username: username,
      password: password,
      targetPage: targetPage,
      gym: gym,
    });

    const weekSchedule: Week[] = await page.$$eval(".s2skemabrikcontainer.lec-context-menu-instance", async (containers) => {
      return containers.map((container, index) => {
        const lessons = Array.from(container.querySelectorAll("a[data-additionalinfo]"));
        const allLessons = lessons.map((a) => {
          const href = a.getAttribute("href") as string;
          const info = a.getAttribute("data-additionalinfo") as string;
          const status = info.includes("Ændret!") ? "changed" : info.includes("Aflyst!") ? "cancelled" : "normal";

          function capitalizeFirstLetter(str: string) {
            return str.charAt(0).toUpperCase() + str.slice(1);
          }

          function getSubjectName(classStr: string) {
            let lcClass = classStr.toLowerCase().trimStart();

            if (lcClass.includes("fy øv")) return "Fysikøvelse";
            if (lcClass.includes("ke øv")) return "Kemiøvelse";
            if (/ mc|-mc|mc-|mc /.test(lcClass)) {
              const mcName = capitalizeFirstLetter(lcClass.replace(/mc [0-9]+/i, "").trimStart());
              return `${mcName} (Masterclass)`;
            }
            if (/ mk|-mk|mk-|mk /.test(lcClass)) {
              const mkName = capitalizeFirstLetter(lcClass.replace(/mk [0-9]+/i, "").trimStart());
              return `${mkName} (Marselianerklub)`;
            }
            if (/ fy|-fy|fy-/.test(lcClass)) return "Fysik";
            if (/ ke|-ke|ke-/.test(lcClass)) return "Kemi";
            if (/ hi|-hi|hi-/.test(lcClass)) return "Historie";
            if (/ en|-en|en-/.test(lcClass)) return "Engelsk";
            if (/ da|-da|da-/.test(lcClass)) return "Dansk";
            if (/ if|-if|if-/.test(lcClass)) return "Informatik";
            if (/ ma|-ma|ma-/.test(lcClass)) return "Matematik";
            if (/ id|-id|id-/.test(lcClass)) return "Idræt";
            if (/ sa|-sa|sa-/.test(lcClass)) return "Samfundsfag";
            if (/ ty|-ty|ty-/.test(lcClass)) return "Tysk";
            if (/ bt|-bt|bt-/.test(lcClass)) return "Bioteknologi";
            if (/ la|-la|la-/.test(lcClass)) return "Latin";
            if (/ ap alm|-ap alm|ap alm-/.test(lcClass)) return "Almen sprogforståelse";
            if (/ de|-de|de-/.test(lcClass)) return "Design";
            if (/ mu|-mu|mu-/.test(lcClass)) return "Musik";
            if (/ bi|-bi|bi-/.test(lcClass)) return "Biologi";
            if (/ ol|-ol|ol-/.test(lcClass)) return "Oldtidskundskab";
            if (/ as|-as|as-/.test(lcClass)) return "Astronomi";
            if (/ bk|-bk|bk-/.test(lcClass)) return "Billedkunst";
            if (/ bro|-bro|bro-/.test(lcClass)) return "Brobygning";
            if (/ eø|-eø|eø-/.test(lcClass)) return "Erhvervsøkonomi";
            if (/ fi|-fi|fi-/.test(lcClass)) return "Filosofi";
            if (/ fr|-fr|fr-/.test(lcClass)) return "Fransk";
            if (/ me|-me|me-/.test(lcClass)) return "Mediefag";
            if (/ ng|-ng|ng-/.test(lcClass)) return "Naturgeografi";
            if (/ ps|-ps|ps-/.test(lcClass)) return "Psykologi";
            if (/ re|-re|re-/.test(lcClass)) return "Religion";
            if (/ skr|-skr|skr-/.test(lcClass)) return "Skriftlige opgaver";
            if (/ sp|-sp|sp-/.test(lcClass)) return "Spansk";
            return "";
          }
          function getTime(): LessonTime {
            const pattern = /[0-9]+\/[0-9]+-[0-9]+ [0-9]+:[0-9]+ til [0-9]+:[0-9]+/i;
            const i = info.search(pattern);
            const matchedText = info.match(pattern);
            if (i !== -1 && matchedText) {
              const strLength = info.match(pattern)![0].length;
              const time = info.substring(i, i + strLength);
              const splitTime = time.split(" ");
              const date = splitTime[0];
              const startTime = splitTime[1];
              const endTime = splitTime[3];
              return { date: date, startTime: startTime, endTime: endTime };
            }
            return { date: "", startTime: "", endTime: "" };
          }
          function getTeachers(): LessonTeacher[] {
            const pattern = /Lærer(e)?: ([a-zæøå ()-]+(, [a-zæøå ()-]+)*)/i;
            const i = info.search(pattern);
            const matchedText = info.match(pattern);
            if (i !== -1 && matchedText) {
              const strLength = matchedText[0].length;
              const offset = info.includes("Lærere:") ? 8 : 7;
              const teachers = info.substring(i + offset, i + strLength);
              if (teachers.includes("(") && teachers.includes(")")) {
                const split = teachers.split(" (");
                return [{ name: split[0], initials: split[1].replace(")", "") }];
              } else {
                const split = teachers.split(", ");
                let nTeachers: LessonTeacher[] = [];
                split.forEach((str) => {
                  nTeachers.push({ name: "", initials: str });
                });
                return nTeachers;
              }
            }
            return [{ name: "", initials: "" }];
          }
          function getClassroom() {
            const pattern = /Lokale(r)?: ([a-z0-9]+ - [a-z0-9]+(, [a-z0-9]+ - [a-z0-9]+)*)/i;
            const i = info.search(pattern);
            const matchedText = info.match(pattern);
            if (i !== -1 && matchedText) {
              const strLength = matchedText[0].length;
              const offset = info.includes("Lokaler:") ? 9 : 8;
              const classroom = info.substring(i + offset, i + strLength);
              return classroom;
            }
            return "";
          }
          function getClass() {
            const pattern = /Hold: ([a-zæøå0-9. ()-]+(, [a-zæøå0-9. ()-]+)*)/i;
            const i = info.search(pattern);
            const matchedText = info.match(pattern);
            if (i !== -1 && matchedText) {
              const strLength = matchedText[0].length;
              const classroom = info
                .substring(i + 6, i + strLength)
                .replace("Alle 1. G.", "1G")
                .replace("Alle 2. G.", "2G")
                .replace("Alle 3. G.", "3G")
                .replace("Alle 4. G.", "4G")
                .replace(" Udlån af lokaler", "");

              if (!classroom.includes(",")) {
                return classroom.replace(/ .*/, "").split(" ");
              } else {
                return classroom.replace(/(?<=\S) \S*?,/g, "").split(" ");
              }
            }
            return [""];
          }
          function getSubject() {
            if (getTitle() === "Lektiecafé") {
              return [""];
            }

            const pattern = /Hold: ([a-zæøå0-9. ()-]+(, [a-zæøå0-9. ()-]+)*)/i;
            const i = info.search(pattern);
            const matchedText = info.match(pattern);
            if (i !== -1 && matchedText) {
              const strLength = matchedText[0].length;
              const classroom = info.substring(i + 6, i + strLength);
              const subject = getSubjectName(classroom);

              return [subject];
            }
            return [""];
          }
          function getTitle() {
            const pattern = /[0-9]+\/[0-9]+-[0-9]+ [0-9]+:[0-9]+ til [0-9]+:[0-9]+$/i;
            const splitInfo = info.split("\n");
            let potentialTitle = splitInfo[0];
            if (splitInfo[0].includes("Aflyst!") || splitInfo[0].includes("Ændret!")) {
              potentialTitle = splitInfo[1];
            }

            if (potentialTitle.includes("Aflyst!")) return "";
            if (potentialTitle.includes("Ændret!")) return "";
            if (pattern.test(potentialTitle)) return "";

            return potentialTitle;
          }

          return {
            href: ["https://lectio.dk", href].join(""),
            status: status,
            time: getTime(),
            teachers: getTeachers(),
            classroom: getClassroom(),
            classes: getClass(),
            subjects: getSubject(),
            title: getTitle(),
          } as Lesson;
        });

        return {
          lessons: allLessons,
          notes: [""],
        } as Week;
      });
    });

    await page.browser().close();

    for (const week of weekSchedule) {
      week.lessons.sort((a, b) => {
        return Number(a.time.startTime.substring(0, 2)) - Number(b.time.startTime.substring(0, 2));
      });
    }

    return weekSchedule;
  } catch (err) {
    console.log(err);

    return null;
  }
}
