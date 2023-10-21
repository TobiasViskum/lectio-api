import {
  failedToGetData,
  invalidParameters,
  errorNotAuthenticated,
  errorSchoolInvalid,
  successRequest,
} from "@/lib/api-return";
import { getStudentByCredentials } from "@/lib/scrapeFunctions/getStudentByCredentials";
import { standardSchema } from "@/lib/standard-schema";
import { NextRequest } from "next/server";
import { getSearchParamsObject } from "@/lib/getSearchParamsObject";

const routeSchema = standardSchema;

export async function GET(req: NextRequest) {
  const params = getSearchParamsObject(req);

  try {
    const data = routeSchema.parse(params);

    const result = await getStudentByCredentials(data);

    if (result === "Not authenticated") {
      return errorNotAuthenticated();
    } else if (result === "Invalid school") {
      return errorSchoolInvalid();
    } else if (result === null) {
      return failedToGetData();
    } else {
      return successRequest(result, data.lectioCookies);
    }
  } catch (err) {
    return invalidParameters();
  }
}
