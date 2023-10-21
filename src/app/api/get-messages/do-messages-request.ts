import {
  failedToGetData,
  invalidParameters,
  successNoData,
  errorNotAuthenticated,
  errorSchoolInvalid,
  successRequest,
} from "@/lib/api-return";
import { getSearchParamsObject } from "@/lib/getSearchParamsObject";
import { getMessages } from "@/lib/scrapeFunctions";
import { standardSchema } from "@/lib/standard-schema";
import { NextRequest } from "next/server";

const routeSchema = standardSchema;

type Props = {
  request: NextRequest;
  type: MessagesTypes;
};

export async function doMessagesRequest({ request, type }: Props) {
  const params = getSearchParamsObject(request);

  try {
    const data = routeSchema.parse(params);
    const result = await getMessages({ ...data, type: type });
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
