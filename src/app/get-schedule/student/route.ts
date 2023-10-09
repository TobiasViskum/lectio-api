import { failedToGetData, invalidParameters, successNoData, successNotAuthenticated, successRequest } from "@/lib/api-return";
import { getSearchParamsObject } from "@/lib/getSearchParamsObject";
import { getSchedule } from "@/lib/scrapeFunctions";
import { standardSchema } from "@/lib/standard-schema";
import { NextRequest } from "next/server";
import z from "zod";

const routeSchema = z
  .object({
    week: z.string(),
    year: z.string(),
  })
  .merge(standardSchema);

export async function GET(request: NextRequest) {
  const params = getSearchParamsObject(request);

  try {
    const data = routeSchema.parse(params);
    const result = await getSchedule(data);
    if (result === "Not authenticated") {
      return successNotAuthenticated();
    } else if (result === "No data") {
      return successNoData();
    } else if (result === null) {
      return failedToGetData();
    } else {
      return successRequest(result);
    }
  } catch {
    return invalidParameters();
  }
}
