export function getStartTime(lesson: Lesson) {
  const splitStartTime = lesson.time.startTime.split(":");
  const startTime = Number(splitStartTime[0]) + Number(splitStartTime[1]) / 60;

  return startTime;
}
