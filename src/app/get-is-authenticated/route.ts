import { errorSchoolInvalid, failedToGetData, invalidParameters, successNoData, successRequest } from "@/lib/api-return";
import { getSearchParamsObject } from "@/lib/getSearchParamsObject";
import { getIsAuthenticated } from "@/lib/scrapeFunctions/getIsAuthenticated";
import { standardSchema } from "@/lib/standard-schema";
import { NextRequest } from "next/server";

const routeSchema = standardSchema;

export async function GET(request: NextRequest) {
  const params = getSearchParamsObject(request);

  try {
    const data = routeSchema.parse(params);
    const result = await getIsAuthenticated(data);
    if (result === null) {
      return failedToGetData();
    } else if (result === "Invalid school") {
      return errorSchoolInvalid();
    } else if (result === "No data") {
      successNoData();
    } else {
      return successRequest(result);
    }
  } catch {
    return invalidParameters();
  }
}
