export function getTeachers(info: string): Teacher[] {
  const pattern = /Lærer(e)?: ([a-zæøå ()-]+(, [a-zæøå ()-]+)*)/i;
  const i = info.search(pattern);
  const matchedText = info.match(pattern);
  if (i !== -1 && matchedText) {
    const strLength = matchedText[0].length;
    const offset = info.includes("Lærere:") ? 8 : 7;
    const teachers = info.substring(i + offset, i + strLength);
    if (teachers.includes("(") && teachers.includes(")")) {
      const split = teachers.split(" (");
      return [{ name: split[0], initials: split[1].replace(")", ""), teacherId: "", imgUrl: "", imgSrc: "" }];
    } else {
      const split = teachers.split(", ");
      let nTeachers: Teacher[] = [];
      split.forEach((str) => {
        nTeachers.push({ name: "", initials: str, teacherId: "", imgSrc: "", imgUrl: "" });
      });
      return nTeachers;
    }
  }
  return [{ name: "", initials: "", teacherId: "", imgSrc: "", imgUrl: "" }];
}
