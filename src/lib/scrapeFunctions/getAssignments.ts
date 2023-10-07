import { getAuthenticatedPage } from "../getAuthenticatedPage";

export async function getAssignments({ username, password, gym }: StandardProps) {
  try {
    const page = await getAuthenticatedPage({
      username: username,
      password: password,
      targetPage: `https://www.lectio.dk/lectio/${gym}/OpgaverElev.aspx`,
      gym: gym,
    });

    await Promise.all([page.waitForNavigation(), page.click("#s_m_Content_Content_CurrentExerciseFilterCB")]);

    const assignments = await page.$$eval("#s_m_Content_Content_ExerciseGV > tbody > tr:not(:first-child)", (rows) => {
      return rows.map((row) => {
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

        const schoolClass = row.children[1].children[0].innerHTML;
        const href = ["https://lectio.dk", row.children[2].children[0].getAttribute("href")].join("");
        return {
          href: href,
          week: row.children[0].children[0].innerHTML,
          class: schoolClass.split(" ")[0],
          subject: getSubjectName(schoolClass),
          title: row.children[2].children[0].innerHTML,
          dueTo: row.children[3].innerHTML,
          assignmentLength: row.children[4].innerHTML,
          status: row.children[5].children[0] ? row.children[5].children[0].innerHTML : row.children[5].innerHTML,
          absence: row.children[6].innerHTML.replace("&nbsp;", ""),
          awaiter: row.children[7].innerHTML,
          assignmentDescription: row.children[8].innerHTML,
          grade: row.children[9].innerHTML,
          gradeNote: row.children[10].innerHTML,
        };
      });
    });

    await page.browser().close();

    if (assignments.length === 0) {
      return null;
    }
    return assignments;
  } catch {
    return null;
  }
}
