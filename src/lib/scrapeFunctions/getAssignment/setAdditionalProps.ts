export function setAdditionalProps($: cheerio.Root, assignment: FullAssignment) {
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
}
