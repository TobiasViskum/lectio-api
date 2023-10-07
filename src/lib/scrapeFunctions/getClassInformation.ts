import { getAuthenticatedPage } from "../getAuthenticatedPage";

type Props = { href: string };

type Homework = { titleHref: string; title: string; description: string[] };

async function getClassInformation({ username, password, href, gym }: StandardProps & Props) {
  try {
    const page = await getAuthenticatedPage({
      username: username,
      password: password,
      targetPage: href,
      gym: gym,
    });

    const getSubjectTheme = async () => {
      let subjectTheme = { theme: "", href: "" };
      try {
        subjectTheme = await page.$eval('[title="Tilknyttet forløb"]', (elem) => {
          const theme = elem.textContent ? elem.textContent.trimStart() : "";
          const href = elem.getAttribute("href") ? ["https://lectio.dk", elem.getAttribute("href")].join("") : "";
          return { theme: theme, href: href };
        });

        return subjectTheme;
      } catch {
        return subjectTheme;
      }
    };
    const getNote = async () => {
      let note = "";
      try {
        note = await page.$eval("#s_m_Content_Content_tocAndToolbar_ActNoteTB_tb", (elem) => {
          if (elem.textContent) {
            return elem.textContent;
          } else {
            return "";
          }
        });
        return note;
      } catch {
        return note;
      }
    };
    const getHomeworkOtherPresentation = async () => {
      const result = await page.$$eval("h1.ls-paper-section-heading", (elements) => {
        let resultHolder: {
          homework: Homework[];
          other: Homework[];
          presentation: string;
        } = {
          homework: [],
          other: [],
          presentation: "",
        };
        elements.forEach((elem) => {
          const parent = elem.parentElement as Element;
          let homework: Homework[] = [];
          let presentation: string = "";
          const resultType = elem.textContent;
          if (resultType === "Lektier" || resultType === "Øvrigt indhold") {
            const getHomework = (parent: Element | null) => {
              const sibling = parent ? parent.nextElementSibling : null;
              if (sibling) {
                if (sibling.children[1] && sibling.children[1].tagName === "H1") {
                  return;
                } else if (sibling.id.includes("ACH")) {
                  let currHomework: Homework = { titleHref: "", title: "", description: [] };
                  const children = Array.from(sibling.children[0].children);
                  children.forEach((child, index) => {
                    if (child.tagName === "H1" && index === 0) {
                      const title = child.textContent?.trimStart() as string;
                      currHomework.title = title;
                      const linkElement = child.children[0];
                      if (linkElement) {
                        const href = linkElement.getAttribute("href");
                        if (href) {
                          if (href.includes("https://")) {
                            currHomework.titleHref = href as string;
                          } else {
                            currHomework.titleHref = ["https://lectio.dk", href].join("");
                          }
                        }
                      }
                    } else {
                      let container = document.createElement("div");
                      container.innerHTML = child.innerHTML;

                      let elements = container.getElementsByTagName("*");

                      for (let i = 0; i < elements.length; i++) {
                        let element = elements[i];
                        let attrs = element.attributes;
                        for (let j = attrs.length - 1; j >= 0; j--) {
                          let attrName = attrs[j].name;
                          if (attrName !== "href" && attrName !== "target") {
                            element.removeAttribute(attrName);
                          }
                        }
                        if (element.tagName !== "BR") {
                          element.setAttribute("className", "");
                        }
                      }
                      currHomework.description.push(container.innerHTML);
                      container.remove();
                    }
                  });
                  homework.push(currHomework);
                  getHomework(sibling);
                } else if (sibling.classList[0] === "ls-hr-solid") {
                  getHomework(sibling);
                }
              }
            };
            getHomework(parent);
          } else if (resultType === "Præsentation") {
            const sibling = parent ? parent.nextElementSibling : null;
            if (sibling) {
              const section = sibling.children[1].children[1].children[0];
              let container = document.createElement("div");
              container.innerHTML = section.innerHTML;

              let elements = container.getElementsByTagName("*");

              for (let i = 0; i < elements.length; i++) {
                let element = elements[i];
                let attrs = element.attributes;
                for (let j = attrs.length - 1; j >= 0; j--) {
                  let attrName = attrs[j].name;
                  if (attrName !== "href" && attrName !== "target") {
                    element.removeAttribute(attrName);
                  }
                }
                if (element.tagName !== "BR") {
                  element.setAttribute("className", "");
                }
                if (element.innerHTML.trimStart().trimEnd() === "&nbsp;") {
                  element.remove();
                }
              }
              presentation = container.innerHTML;
              container.remove();
            }
          }
          if (resultType === "Lektier") {
            resultHolder.homework = homework;
          } else if (resultType === "Øvrigt indhold") {
            resultHolder.other = homework;
          } else if (resultType === "Præsentation") {
            resultHolder.presentation = presentation;
          }
        });
        return resultHolder;
      });
      return result;
    };

    const [subjectTheme, note, homeworkOtherPresentation] = await Promise.all([getSubjectTheme(), getNote(), getHomeworkOtherPresentation()]);

    await page.browser().close();

    return {
      subjectTheme: subjectTheme,
      note: note,
      homework: homeworkOtherPresentation.homework,
      other: homeworkOtherPresentation.other,
      presentation: homeworkOtherPresentation.presentation,
    };
  } catch (err) {
    console.log(err);

    return null;
  }
}

export { getClassInformation };
