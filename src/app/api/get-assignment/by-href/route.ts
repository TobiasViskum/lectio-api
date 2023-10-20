import { getAuthenticatedPage } from "@/lib/getPage";
import { getTeacherByInitials } from "@/lib/scrapeFunctions";
import { getSubjectName } from "@/lib/util/getSubjectFromClass";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const username = "tobi688c";
  const password = "10Elefanter!";
  const schoolCode = "243";
  const targetPage = "ElevAflevering.aspx?elevid=53701992282&exerciseid=61187741592";

  const res = await getAuthenticatedPage({
    username: username,
    password: password,
    schoolCode: schoolCode,
    specificPage: targetPage,
    cookies: request.cookies.getAll(),
  });

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

  const titleMap: { [key: string]: Titles } = {
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

  if (typeof res === "object" && res !== null) {
    const $ = res.$;

    let assignment: FullAssignment = {
      title: "",
      documents: [],
      note: [],
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

    $("div#m_Content_registerAfl_pa > table > tbody > tr").map(async (index, item) => {
      const $item = $(item);
      const $td = $item.find("td");
      const foundTitle = titleMap[$item.find("th").text()];
      if (foundTitle === "title") {
        assignment.title = $td.find("span").text();
      } else if (foundTitle === "documents") {
        $td.find("a").each((index, a) => {
          const $a = $(a);
          const length = assignment.documents.push({ name: $a.text().trim(), src: "" });
          const i = length - 1;
          let src = $a.attr("href");
          if (src) {
            if (src.includes("/lectio/")) {
              src = ["https://lectio.dk", src].join("");
            }
            assignment.documents[i].src = src;
          }
        });
      } else if (foundTitle === "note") {
        assignment.note = $td.text().split("\n");
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

    $("table#m_Content_StudentGV > tbody > tr:nth-child(2) > td").each((index, elem) => {
      const $elem = $(elem);
      if (index === 2) {
        const awaiter = $elem.text() || "Ingen";
        assignment.awaiter = awaiter;
      } else if (index === 3) {
        const statusAndAbsence = $elem.find("span").text().split("/");
        const status = statusAndAbsence[0].trim().replace("Ikke aflev.", "Ikke afleveret");
        const absence = statusAndAbsence[1].trim().split(" ")[1];
        assignment.status = status;
        assignment.absence = absence;
      } else if (index === 4) {
        const isChecked = $elem.find("span > input").attr("checked");
        if (isChecked && isChecked === "checked") {
          assignment.finished = true;
        }
      } else if (index === 5) {
        const grade = $elem.text().trim();
        assignment.grade = grade;
      } else if (index === 6) {
        const gradeNote = $elem.text().trim();
        assignment.gradeNote = gradeNote;
      } else if (index === 7) {
        const studentNote = $elem.text().trim();
        assignment.studentNote = studentNote;
      }
    });

    $("#m_Content_RecipientGV > tbody > tr").each((i, tr) => {
      const $tr = $(tr);
      if ($tr.text().includes("Der er ingen indlæg!")) return;
      $tr.find("td").each((index, td) => {
        const $td = $(td);
        assignment.submits.push({
          time: { date: "", time: "" },
          submitter: "",
          comment: "",
          document: { name: "", src: "" },
        });
        if (index === 1) {
        }
      });
    });

    const teacher = await getTeacherByInitials({
      username: username,
      password: password,
      schoolCode: schoolCode,
      initials: assignment.teacher.initials,
    });
    if (typeof teacher === "object" && teacher !== null) {
      assignment.teacher = teacher;
    }

    return NextResponse.json({ data: assignment });
  }

  return NextResponse.json({});
}
