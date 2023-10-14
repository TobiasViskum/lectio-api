import { getAuthenticatedPage } from "../getPage";

export async function getIsAuthenticated({ username, password, schoolCode }: StandardProps) {
  const res = await getAuthenticatedPage({
    username: username,
    password: password,
    schoolCode: schoolCode,
    page: "front",
  });

  if (res === "Not authenticated") return { isAuthenticated: false };
  if (res === "No data") return res;
  if (res === "Invalid school") return res;
  if (res === null) return res;

  return { isAuthenticated: true };
}
