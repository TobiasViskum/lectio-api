import { NextRequest } from "next/server";
import { doMessagesRequest } from "../do-messages-request";

export async function GET(request: NextRequest) {
  return doMessagesRequest({
    request: request,
    type: "personal",
  });
}
