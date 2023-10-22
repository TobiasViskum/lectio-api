export function setSubmitProps($: cheerio.Root, assignment: FullAssignment) {
  $("#m_Content_RecipientGV > tbody > tr").each((i, tr) => {
    const $tr = $(tr);
    if ($tr.text().includes("Der er ingen indlæg!")) return;

    if (i !== 0) {
      assignment.submits.push({
        time: "",
        submitter: "",
        comment: "",
        document: { name: "", href: "" },
      });
    }

    $tr.find("td").each((index, td) => {
      const $td = $(td);
      if (index === 0) {
        const time = $td.text();
        assignment.submits[i - 1].time = time;
      } else if (index === 1) {
        const submitter = $td.find("span").text();
        if (assignment.teacher.initials.toLowerCase() === submitter.toLowerCase()) {
          assignment.submits[i - 1].submitter = assignment.teacher.name;
        } else {
          assignment.submits[i - 1].submitter = submitter;
        }
      } else if (index === 2) {
        const comment = $td.text();
        assignment.submits[i - 1].comment = comment;
      } else if (index === 3) {
        const $a = $td.find("span > a");
        let href = $a.attr("href");
        if (href) {
          assignment.submits[i - 1].document.name = $a.text();
          assignment.submits[i - 1].document.href = href;
        }
      }
    });
  });
}
