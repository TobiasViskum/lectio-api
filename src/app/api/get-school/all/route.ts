import { failedToGetData, schoolSuccessNoData, schoolSuccessRequest } from "@/lib/api-return";
import { getAllSchools } from "@/lib/scrapeFunctions";

export async function GET() {
  const result = await getAllSchools();
  if (result === "No data") {
    return schoolSuccessNoData();
  } else if (result === null) {
    return failedToGetData();
  } else {
    return schoolSuccessRequest(result);
  }
}
