import { getAuthenticatedPage } from "../getAuthenticatedPage";

type MessageTypes = "all" | "newest" | "unread" | "deleted" | "personal";
type Message = {
  title: string;
  latestSender: string;
  sender: string;
  receivers: string;
  latestChange: string;
};
type Props = { type: MessageTypes };

export async function getMessages({ username, password, type, schoolCode }: StandardProps & Props) {
  const typeMap: { [key in MessageTypes]: string } = {
    personal: `https://www.lectio.dk/lectio/${schoolCode}/beskeder2.aspx?type=&selectedfolderid=-10`,
    all: `https://www.lectio.dk/lectio/${schoolCode}/beskeder2.aspx?type=&selectedfolderid=-30`,
    deleted: `https://www.lectio.dk/lectio/${schoolCode}/beskeder2.aspx?type=&selectedfolderid=-60`,
    newest: `https://www.lectio.dk/lectio/${schoolCode}/beskeder2.aspx?type=&selectedfolderid=-70`,
    unread: `https://www.lectio.dk/lectio/${schoolCode}/beskeder2.aspx?type=&selectedfolderid=-40`,
  } as const;
  const targetPage = typeMap[type];

  const page = await getAuthenticatedPage({
    username: username,
    password: password,
    targetPage: targetPage,
    schoolCode: schoolCode,
  });

  if (page === "Error") return null;
  if (page === "Not authenticated") return page;

  try {
    if (type === "all") {
      await Promise.all([page.click('div[lec-node-id="-30"] > div[lec-role="ltv-sublist"] > div:first-child > div > a'), page.waitForNavigation()]);
      await Promise.all([page.click('td[colspan="9"] > table > tbody > tr > td:last-child > a'), page.waitForNavigation()]);
    }

    let messages: Message[] | "No data" = "No data";
    try {
      messages = await page.$$eval("#s_m_Content_Content_threadGV_ctl00 > tbody > tr:not([class])", (elements) => {
        const allReceiversElement = Array.from(document.querySelectorAll('div[lec-node-id="-20"] > div[lec-role="ltv-sublist"] > div > div > a > div'));
        const allReceivers = allReceiversElement.map((receiver) => {
          return receiver.innerHTML;
        });

        return elements.map((elem) => {
          const title = elem.children[3].children[0].children[0].textContent as string;
          const latestSender = elem.children[4].children[0].getAttribute("title") as string;
          const sender = elem.children[5].children[0].getAttribute("title") as string;
          let receivers = elem.children[6].children[0].getAttribute("title") as string;
          const latestChange = (elem.children[7].textContent as string).replace("ma", "Mandag").replace("ti", "Tirsdag").replace("on", "Onsdag").replace("to", "Torsdag").replace("fr", "Fredag").replace("lø", "Lørdag").replace("sø", "Søndag");

          receivers = (function formatReceivers() {
            let formattedReceivers = receivers.replaceAll("\n", ", ").replace("1. G. elev", "1.G elever").replace("2. G. elev", "2.G elever").replace("3. G. elev", "3.G elever").replace("4. G. elev", "4.G elever").replace("Alle Lærere", "Alle lærere").replace("STX e", "STX elever").replace("G-elev", "-elever").replace("-eleve,", "-elever,").replace("td-ele,", "td-elever,");

            const lPattern = /Alle [a-zæøå]+-lære/i;
            const lMatch = formattedReceivers.match(lPattern);

            if (lMatch) {
              let match = lMatch[0];
              const hyphenIndex = match.indexOf("-");
              if (match[hyphenIndex - 1] !== "s") {
                match = match.replace("-", "s");
              }
              match = match.split("lære")[0] + "lærere";
              match = match.slice(0, 5) + match.charAt(5).toLowerCase() + match.slice(6);
              formattedReceivers = formattedReceivers.replace(lMatch[0], match);
            }

            formattedReceivers.split(", ").forEach((receiver) => {
              const closeMatch = allReceivers.find((rec) => rec.includes(receiver));
              if (closeMatch) {
                formattedReceivers = formattedReceivers.replace(receiver, closeMatch);
              }
            });

            return formattedReceivers;
          })();

          return { title: title, latestSender: latestSender, sender: sender, receivers: receivers, latestChange: latestChange };
        });
      });
    } catch {}

    await page.browser().close();

    if (messages.length === 0) {
      return "No data";
    }

    return messages;
  } catch {
    await page.browser().close();
    return null;
  }
}
