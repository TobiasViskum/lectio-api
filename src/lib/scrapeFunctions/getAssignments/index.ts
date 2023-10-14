import { getAssignmentsPage } from "../../getPage/getAssignmentsPage";
import { getAssignmentProps } from "./getAssignmentProps";

export async function getAssignments({ username, password, schoolCode }: StandardProps) {
  const res = await getAssignmentsPage({
    username: username,
    password: password,
    schoolCode: schoolCode,
  });

  if (res === "Not authenticated") return res;
  if (res === "No data") return res;
  if (res === "Invalid school") return res;
  if (res === null) return res;

  const $ = res.$;

  const assignments: Assignment[] = $("#s_m_Content_Content_ExerciseGV > tbody > tr:not(:first-child)")
    .map((index, item) => {
      const $item = $(item);
      const res = getAssignmentProps($item);

      return res;
    })
    .get();

  if (assignments.length === 0) {
    return "No data";
  }

  return assignments;
}
