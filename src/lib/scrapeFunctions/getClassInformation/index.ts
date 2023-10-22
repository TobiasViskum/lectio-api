import { getAuthenticatedPage } from "../../getPage";
import { getHomeworkAndOtherAndPresentation, getNote, getSubjectTheme } from "./utils";

type Props = { href: string };

export async function getClassInformation({
  lectioCookies,
  href,
  schoolCode,
}: StandardProps & Props) {
  const res = await getAuthenticatedPage({
    lectioCookies: lectioCookies,
    schoolCode: schoolCode,
    specificPage: href,
  });

  if (res === "Not authenticated") return res;
  if (res === "Forbidden access") return res;
  if (res === "Invalid school") return res;
  if (res === null) return res;

  const $ = res.$;

  const subjectTheme = getSubjectTheme($);

  const note = getNote($);
  const homeWorkAndOtherAndPresentation = getHomeworkAndOtherAndPresentation($);

  return {
    subjectTheme: subjectTheme,
    note: note,
    homework: homeWorkAndOtherAndPresentation.homework,
    other: homeWorkAndOtherAndPresentation.other,
    presentation: homeWorkAndOtherAndPresentation.presentation,
  };
}
