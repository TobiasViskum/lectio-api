export function getClassroom(info: string) {
  const splitInfo = info.split("\n");
  const classRoomStr = splitInfo.find((str) => str.includes("Lokale"));

  if (classRoomStr) {
    const classRooms = classRoomStr.split(": ")[1].split(", ");

    return classRooms;
  }

  return [""];
}
