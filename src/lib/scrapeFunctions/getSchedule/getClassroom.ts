export function getClassroom(info: string) {
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
