import { getAllTeachers } from ".";
import { getAuthenticatedPage } from "../getAuthenticatedPage";

type Props = {
  initials: string;
};

export async function getTeacherByInitials({ username, password, initials, schoolCode }: StandardProps & Props) {
  try {
    const teachers = await getAllTeachers({ username: username, password: password, schoolCode: schoolCode });

    if (teachers === "Not authenticated") return teachers;
    if (teachers === null) return teachers;
    if (teachers === "No data") return teachers;

    const foundTeacher = teachers.find((teacher) => {
      return teacher.initials === initials;
    });

    if (foundTeacher) {
      if (foundTeacher.img === "") {
        const teacherId = foundTeacher.teacherId;
        const page = await getAuthenticatedPage({
          username: username,
          password: password,
          schoolCode: schoolCode,
          targetPage: `https://www.lectio.dk/lectio/${schoolCode}/DokumentOversigt.aspx?laererid=${teacherId}&folderid=T${teacherId}__5`,
        });

        if (page === "Error") return null;
        if (page === "Not authenticated") return page;

        const imageHref = await page.$eval("#s_m_HeaderContent_picctrlthumbimage", (elem) => {
          return elem.getAttribute("src") as string;
        });
        await page.browser().close();
        foundTeacher.img = ["https://lectio.dk", imageHref].join("");
        return foundTeacher;
      } else {
        return foundTeacher;
      }
    }
    return "No data";
  } catch (err) {
    return null;
  }
}
