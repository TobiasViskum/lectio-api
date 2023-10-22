import { getAllTeachers } from ".";
import { getAuthenticatedPage } from "../getPage";

type Props = {
  initials: string;
};

export async function getTeacherByInitials({
  lectioCookies,
  initials,
  schoolCode,
}: StandardProps & Props) {
  const res = await getAuthenticatedPage({
    page: "teachers",
    lectioCookies: lectioCookies,
    schoolCode: schoolCode,
  });

  if (res === "Not authenticated") return res;
  if (res === "Forbidden access") return res;
  if (res === "Invalid school") return res;
  if (res === null) return res;

  const $ = res.$;
  const client = res.client;

  const teachers: Teacher[] = $("span.classpicture")
    .map((index, elem) => {
      let obj = { name: "", initials: "", teacherId: "", imgUrl: "", imgSrc: "" } as Teacher;
      const $elem = $(elem);
      const $name = $elem.find("> span > span");
      const name = $name.text();
      const teacherId = $name.attr("data-lectiocontextcard");
      if (name && teacherId) {
        obj.name = name.split(" (")[0];
        obj.initials = name.split(" (")[1].replace(")", "");
        obj.teacherId = teacherId.replace("T", "");
      }
      const src = $elem.find("img").attr("src");
      if (src) {
        const fullSrc = ["https://lectio.dk", src].join("");
        obj.imgUrl = fullSrc;
      }

      return obj;
    })
    .get();

  if (teachers.length === 0) {
    return "No data";
  }

  const foundTeacher = teachers.find((teacher) => {
    return teacher.initials.toLowerCase() === initials.toLowerCase();
  });

  if (foundTeacher === undefined) {
    return "No data";
  }

  const imageBase64 = await client
    .get(foundTeacher.imgUrl, { responseType: "arraybuffer", headers: { "Cookie": lectioCookies } })
    .then((res) => {
      const contentType = res.headers["content-type"];

      const base64Image = Buffer.from(res.data, "binary").toString("base64");
      const fullSrc = ["data:", contentType, ";base64,", base64Image].join("");

      return fullSrc;
    })
    .catch((err) => {
      return null;
    });

  if (imageBase64) foundTeacher.imgSrc = imageBase64;

  return foundTeacher;
}
