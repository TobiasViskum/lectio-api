import { getSubjectName } from "../../util/getSubjectFromClass";

export function getAssignmentProps($item: cheerio.Cheerio): Assignment {
  const week = $item.find("td:first-child > span").text();
  let schoolClass = $item.find("td:nth-child(2) > span").text();
  const subject = getSubjectName(schoolClass);
  const title = $item.find("td:nth-child(3) > a").text();
  const dueTo = $item.find("td:nth-child(4)").text();
  const assignmentTime = $item.find("td:nth-child(5)").text();
  const status =
    $item.find("td:nth-child(6) > span").text() !== ""
      ? $item.find("td:nth-child(6) > span").text()
      : $item.find("td:nth-child(6)").text();
  const absence =
    $item.find("td:nth-child(7)").text().replace("&nbsp;", "").replace(" ", "") || "0%";
  const awaiter = $item.find("td:nth-child(8)").text() || "Ingen";
  const assignmentDescription = $item.find("td:nth-child(9)").text();
  const grade = $item.find("td:nth-child(10)").text();
  const gradeNote = $item.find("td:nth-child(11)").text();

  schoolClass = schoolClass.split(" ")[0];

  let href = ["https://lectio.dk", $item.find("td:nth-child(3) > a").attr("href")].join("");

  const strToReplace1 = /https:\/\/lectio.dk\/lectio\/[0-9]+\//;
  const strToReplace2 = /&prevurl=.*/;

  href = href.replace(strToReplace1, "").replace(strToReplace2, "");

  const id = new URLSearchParams(
    [schoolClass, week, title]
      .join("")
      .replace(/[!?:()\/,.'"+ ]/g, "")
      .replaceAll("æ", "ae")
      .replaceAll("ø", "oe")
      .replaceAll("å", "aa")
      .replaceAll("Æ", "Ae")
      .replaceAll("Ø", "Oe")
      .replaceAll("Å", "Aa")
      .replaceAll("ß", "ss")
      .replaceAll("ä", "a")
      .replaceAll("ö", "o")
      .replaceAll("ü", "u")
      .replaceAll("Ä", "a")
      .replaceAll("Ö", "o")
      .replaceAll("Ü", "u")
      .replaceAll("é", "e")
      .replaceAll("É", "E")
  )
    .toString()
    .slice(0, -1);

  return {
    week: week,
    class: schoolClass,
    href: href,
    subject: subject,
    title: title,
    dueTo: dueTo,
    studentTime: assignmentTime,
    description: assignmentDescription,
    status: status,
    absence: absence,
    awaiter: awaiter,
    grade: grade,
    gradeNote: gradeNote,
    id: href.split("exerciseid=")[1],
  };
}
