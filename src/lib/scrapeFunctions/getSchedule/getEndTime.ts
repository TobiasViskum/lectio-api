export function getEndTime(lesson: Lesson) {
  const splitEndTime = lesson.time.endTime.split(":");
  const endTime = Number(splitEndTime[0]) + Number(splitEndTime[1]) / 60;

  return endTime;
}
