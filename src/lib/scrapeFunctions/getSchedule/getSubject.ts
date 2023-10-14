import { getSubjectName } from "@/lib/util/getSubjectFromClass";
import { getTitle } from "./getTitle";

export function getSubject(info: string) {
  if (getTitle(info).includes("Lektiecafé")) {
    const regex = /Lektiecafé \(([a-z]+)\/([a-z]+)\)/;
    const match = info.match(regex);
    if (match) {
      let subject1 = getSubjectName("-" + match[1]);

      if (match[1].length === 3 && subject1 === "") {
        subject1 = getSubjectName(match[1][0] + match[1][1]);
      }
      let subject2 = getSubjectName("-" + match[2]);
      if (match[2].length === 3 && subject2 === "") {
        subject2 = getSubjectName(match[2][0] + match[2][1]);
      }

      return [subject1, subject2];
    }

    return [""];
  }

  const pattern = /Hold: ([a-zæøå0-9. ()-]+(, [a-zæøå0-9. ()-]+)*)/i;
  const i = info.search(pattern);
  const matchedText = info.match(pattern);
  if (i !== -1 && matchedText) {
    const strLength = matchedText[0].length;
    const classroom = info.substring(i + 6, i + strLength);

    if (classroom.split(", ").length > 3) {
      return [""];
    }

    const subject = getSubjectName(classroom);

    return [subject];
  }
  return [""];
}
