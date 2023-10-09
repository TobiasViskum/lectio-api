import { failedToGetData, invalidParameters, successNoData, successNotAuthenticated, successRequest } from "@/lib/api-return";
import { getSearchParamsObject } from "@/lib/getSearchParamsObject";
import { getStudentByCredentials } from "@/lib/scrapeFunctions/getStudentByCredentials";
import { standardSchema } from "@/lib/standard-schema";
import { NextRequest } from "next/server";

const routeSchema = standardSchema;

export async function GET(request: NextRequest) {
  const params = getSearchParamsObject(request);

  try {
    const data = routeSchema.parse(params);
    const result = await getStudentByCredentials(data);

    if (result === "Not authenticated") {
      return successNotAuthenticated();
    } else if (result === null) {
      return failedToGetData();
    } else {
      return successRequest(result);
    }
  } catch {
    return invalidParameters();
  }
}
