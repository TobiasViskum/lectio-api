export function getClass(info: string) {
  const pattern = /Hold: ([a-zæøå0-9. ()-]+(, [a-zæøå0-9. ()-]+)*)/i;
  const i = info.search(pattern);
  const matchedText = info.match(pattern);
  if (i !== -1 && matchedText) {
    const strLength = matchedText[0].length;
    const classes = info
      .substring(i + 6, i + strLength)
      .replace("Alle 1. G. elever", "1.G")
      .replace("Alle 2. G. elever", "2.G")
      .replace("Alle 3. G. elever", "3.G")
      .replace("Alle 4. G. elever", "4.G")
      .replace("Alle Lærere", "Alle lærere")
      .replace(" Udlån af lokaler", "");

    let splitClasses = classes.split(/ [a-z]{2,3},/gi);
    splitClasses.forEach((item, index) => {
      splitClasses[index] = splitClasses[index].trim();
      if (splitClasses[index].split(", ").length > 1) {
        splitClasses[index].split(", ").forEach((_class) => {
          splitClasses.push(_class.trim());
        });
        splitClasses.splice(index, 1);
      }
    });
    splitClasses.forEach((item, index) => {
      splitClasses[index] = splitClasses[index].trim();
    });
    return splitClasses;
  }
  return [""];
}
