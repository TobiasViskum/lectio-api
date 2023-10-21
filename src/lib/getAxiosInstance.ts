import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";

export function getAxiosInstance() {
  const cookieJar = new CookieJar();

  const client = wrapper(axios.create({ jar: cookieJar, withCredentials: true }));

  return { client: client, cookieJar: cookieJar };
}
