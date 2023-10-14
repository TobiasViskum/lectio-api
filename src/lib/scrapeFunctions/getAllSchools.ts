import { getBasicPage } from "../getPage";

export async function getAllSchools() {
  const $ = await getBasicPage({ page: "school" });

  if ($ === null) return $;

  let schools: School[] = $("#schoolsdiv > div > a")
    .map((index, elem) => {
      let obj = { schoolCode: "", name: "" };
      const $elem = $(elem);
      const schoolCode = $elem.attr("href");
      const name = $elem.text();
      if (schoolCode) {
        obj.schoolCode = schoolCode.match(/[0-9]+/)![0];
        obj.name = name;
      }
      return obj;
    })
    .get();

  if (schools.length === 0) return "No data";

  schools = schools.filter((school) => school.name !== "Vis alle skoler");

  return schools;
}
