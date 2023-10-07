import { failedToGetData, successNoData, successRequest } from "@/lib/api-return";
import { getSchools } from "@/lib/scrapeFunctions";

export async function GET() {
  const result = await getSchools();
  if (result === "No data") {
    return successNoData(result);
  } else if (result === null) {
    return failedToGetData();
  } else {
    return successRequest(result);
  }
}
