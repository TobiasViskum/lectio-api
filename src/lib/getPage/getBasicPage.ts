import axios from "axios";
import { load } from "cheerio";

type UnauthenticatedPages = "school";

const pageMap: { [key in UnauthenticatedPages]: string } = {
  "school": "https://www.lectio.dk/lectio/login_list.aspx",
};

type Props = { page: UnauthenticatedPages };

export async function getBasicPage({ page }: Props) {
  const targetPage = pageMap[page];
  const targetPageContent = await axios
    .get(targetPage)
    .then((res) => {
      if (res.data.includes("Der opstod en ukendt fejl")) {
        return null;
      } else {
        return load(res.data);
      }
    })
    .catch((err) => {
      return null;
    });

  return targetPageContent;
}
