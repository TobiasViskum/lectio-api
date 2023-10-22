import { getSubjectName } from "@/lib/util/getSubjectFromClass";
import { titleMap } from "./getAssignment";

export function setInformationProps($: cheerio.Root, assignment: FullAssignment) {
  $("div#m_Content_registerAfl_pa > table > tbody > tr").map((index, item) => {
    const $item = $(item);
    const $td = $item.find("td");
    const foundTitle = titleMap[$item.find("th").text()];
    if (foundTitle === "title") {
      assignment.title = $td.find("span").text();
    } else if (foundTitle === "documents") {
      $td.find("a").each((index, a) => {
        const $a = $(a);
        const name = $a.text().trim();
        const splitName = name.split(".");
        let [fileExtension, ...rest] = splitName[splitName.length - 1].split(" ");
        fileExtension = `.${fileExtension}`;
        let additionFileName = rest.join(" ");
        additionFileName = ` ${additionFileName}` || "";
        splitName.pop();

        const newName = [[...splitName].join("."), additionFileName, fileExtension].join("");

        const length = assignment.documents.push({ name: newName, href: "" });
        const i = length - 1;
        let href = $a.attr("href");
        if (href) {
          assignment.documents[i].href = href;
        }
      });
    } else if (foundTitle === "note") {
      assignment.description = $td.text().split("\n");
    } else if (foundTitle === "class") {
      assignment.subject = getSubjectName($td.find("span").text());
      assignment.class = $td.find("span").text().split(" ")[0];
    } else if (foundTitle === "gradeSystem") {
      assignment.gradeSystem = $td.find("span").text();
    } else if (foundTitle === "teacher") {
      const splitName = $td.find("span").text().split(" (");
      const name = splitName[0];
      const initials = splitName[1].replace(")", "");
      assignment.teacher.name = name;
      assignment.teacher.initials = initials;
    } else if (foundTitle === "studentTime") {
      const studentTime = $td.find("span").text().split(" ")[0];
      if (!isNaN(Number(studentTime))) {
        assignment.studentTime = Number(studentTime);
      }
    } else if (foundTitle === "dueTo") {
      const dueTo = $td.text().split(" ");

      assignment.dueTo.date = dueTo[0];
      assignment.dueTo.time = dueTo[1];
    } else if (foundTitle === "inTeachingDescription") {
      const inTeachingDescription = $td.text() === "Ja";
      assignment.inTeachingDescription = inTeachingDescription;
    }
  });
}
