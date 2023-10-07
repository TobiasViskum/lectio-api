import { failedToGetData, invalidParameters, successNoData, successRequest } from "@/lib/api-return";
import { getSearchParamsObject } from "@/lib/getSearchParamsObject";
import { getMessages } from "@/lib/scrapeFunctions";
import { standardSchema } from "@/lib/standard-schema";
import { NextRequest } from "next/server";
import z from "zod";

const routeSchema = z
  .object({
    type: z.enum(["all", "newest", "unread", "deleted", "personal"]),
  })
  .merge(standardSchema);

export async function GET(request: NextRequest) {
  const params = getSearchParamsObject(request);

  try {
    const data = routeSchema.parse(params);
    const result = await getMessages(data);
    if (result === "No data") {
      return successNoData(result);
    } else if (result === null) {
      return failedToGetData();
    } else {
      return successRequest(result);
    }
  } catch {
    return invalidParameters();
  }
}
