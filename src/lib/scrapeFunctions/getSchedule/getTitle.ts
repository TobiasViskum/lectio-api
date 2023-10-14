export function getTitle(info: string) {
  const pattern = /[0-9]+\/[0-9]+-[0-9]+ [0-9]+:[0-9]+ til [0-9]+:[0-9]+$/i;
  const splitInfo = info.split("\n");
  let potentialTitle = splitInfo[0];
  if (splitInfo[0].includes("Aflyst!") || splitInfo[0].includes("Ændret!")) {
    potentialTitle = splitInfo[1];
  }

  if (potentialTitle.includes("Aflyst!")) return "";
  if (potentialTitle.includes("Ændret!")) return "";
  if (pattern.test(potentialTitle)) return "";

  if (potentialTitle.includes("Lektiecafé")) {
    return potentialTitle.split(" ")[0];
  }

  return potentialTitle;
}
