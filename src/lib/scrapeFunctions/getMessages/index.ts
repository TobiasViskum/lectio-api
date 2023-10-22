import { getAuthenticatedPage } from "../../getPage/getAuthenticatedPage";
import { getAllMessagesPage } from "../../getPage/getAllMessagesPage";
import { getMessageInformation } from "./utils";

type Message = {
  title: string;
  latestSender: string;
  sender: string;
  receivers: string;
  latestChange: string;
};

type Props = { type: MessagesTypes };

export async function getMessages({ lectioCookies, schoolCode, type }: StandardProps & Props) {
  const typeMap = {
    personal: "messages-personal",
    all: "messages-all",
    deleted: "messages-deleted",
    newest: "messages-newest",
    unread: "messages-unread",
  } as const;

  let res: GetPageReturn = null;

  if (type === "all") {
    res = await getAllMessagesPage({
      lectioCookies: lectioCookies,
      schoolCode: schoolCode,
    });
  } else {
    res = await getAuthenticatedPage({
      lectioCookies: lectioCookies,
      schoolCode: schoolCode,
      page: typeMap[type],
    });
  }

  if (res === null) return res;
  if (res === "Not authenticated") return res;
  if (res === "Forbidden access") return res;
  if (res === "Invalid school") return res;
  const $ = res.$;

  if ($.html().includes("Ingen beskeder at vise...")) {
    return "No data";
  }

  const allGroupReceivers = Array.from(
    $('div[lec-node-id="-20"] > div[lec-role="ltv-sublist"] > div > div > a > div')
  ).map((value, index) => {
    const $value = $(value);
    return $value.text();
  });

  const messages: Message[] = $("#s_m_Content_Content_threadGV_ctl00 > tbody > tr:not([class])")
    .map((_index, _elem) => {
      const $_elem = $(_elem);
      const message = $_elem
        .map((index, elem) => {
          const $elem = $(elem);
          const messageInformation = getMessageInformation($elem, allGroupReceivers);

          return messageInformation;
        })
        .get();
      return message;
    })
    .get();

  if (messages.length === 0) {
    return "No data";
  }

  return messages;
}
