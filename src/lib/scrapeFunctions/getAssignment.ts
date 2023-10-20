import { getAssignments } from ".";

type Props = { assignmentId: string } & StandardProps;

export async function getAssignment({ username, password, schoolCode, assignmentId }: Props) {
  const assignments = await getAssignments({
    username: username,
    password: password,
    schoolCode: schoolCode,
  });
  if (assignments === "No data") return assignments;
  if (assignments === null) return assignments;
  if (assignments === "Invalid school") return assignments;
  if (assignments === "Not authenticated") return assignments;

  const assignment = assignments.find((obj) => obj.id === assignmentId);

  if (assignment === undefined) return null;

  return assignment;
}
