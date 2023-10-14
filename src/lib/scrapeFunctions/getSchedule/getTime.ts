export function getTime(info: string): LessonTime {
  const pattern = /[0-9]+\/[0-9]+-[0-9]+ [0-9]+:[0-9]+ til [0-9]+:[0-9]+/i;
  const i = info.search(pattern);
  const matchedText = info.match(pattern);
  if (i !== -1 && matchedText) {
    const strLength = info.match(pattern)![0].length;
    const time = info.substring(i, i + strLength);
    const splitTime = time.split(" ");
    const date = splitTime[0];
    const startTime = splitTime[1];
    const endTime = splitTime[3];
    return { date: date, startTime: startTime, endTime: endTime };
  }
  return { date: "", startTime: "", endTime: "" };
}
