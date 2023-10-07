import { failedToGetData, successNoData, successRequest } from "@/lib/api-return";
import { getSearchParamsObject } from "@/lib/getSearchParamsObject";
import { getAllSchools } from "@/lib/scrapeFunctions";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  const params = getSearchParamsObject(request);

  const result = await getAllSchools(params);
  if (result === "No data") {
    return successNoData(result);
  } else if (result === null) {
    return failedToGetData();
  } else {
    return successRequest(result);
  }
}
