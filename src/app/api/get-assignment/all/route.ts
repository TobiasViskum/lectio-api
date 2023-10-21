import {
  failedToGetData,
  invalidParameters,
  successNoData,
  errorNotAuthenticated,
  errorSchoolInvalid,
  successRequest,
} from "@/lib/api-return";
import { getSearchParamsObject } from "@/lib/getSearchParamsObject";
import { getAssignments } from "@/lib/scrapeFunctions";
import { standardSchema } from "@/lib/standard-schema";
import { NextRequest } from "next/server";

const routeSchema = standardSchema;

export async function GET(req: NextRequest) {
  const params = getSearchParamsObject(req);

  try {
    const data = routeSchema.parse(params);
    const result = await getAssignments(data);

    if (result === "Not authenticated") {
      return errorNotAuthenticated();
    } else if (result === "Invalid school") {
      return errorSchoolInvalid();
    } else if (result === "No data") {
      return successNoData(data.lectioCookies);
    } else if (result === null) {
      return failedToGetData();
    } else {
      return successRequest(result, data.lectioCookies);
    }
  } catch {
    return invalidParameters();
  }
}
