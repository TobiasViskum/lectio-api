import { failedToGetData, successNoData, successRequest } from "@/lib/api-return";
import { getAllSchools } from "@/lib/scrapeFunctions";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const result = await getAllSchools();
  if (result === "No data") {
    return successNoData(result);
  } else if (result === null) {
    return failedToGetData();
  } else {
    return successRequest(result);
  }
}
