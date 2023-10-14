export function getSubjectTheme($: cheerio.Root) {
  const $theme = $('a[title="Tilknyttet forløb"]');
  const name = $theme.text();
  const href = $theme.attr("href");
  if (name !== "" && href) {
    return { theme: name.trim(), href: href };
  } else {
    return { theme: "", href: "" };
  }
}
export function getNote($: cheerio.Root) {
  const note = $("#s_m_Content_Content_tocAndToolbar_ActNoteTB_tb").text();
  return note;
}
export function getHomework($parent: cheerio.Cheerio, $: cheerio.Root, homework: Homework[]) {
  const $sibling = $parent.next();

  if ($sibling.length === 0) return; //We have went through all elements
  if ($sibling.find("h1:first-child").length === 0 && $sibling.find("h1:nth-child(2)").length === 1) return; //We have switched between result type

  const id = $sibling.attr("id");

  if (id && id.includes("ACH")) {
    let currHomework: Homework = { titleHref: "", title: "", description: [] };

    const $article = $sibling.children().first();

    setTitle($article, currHomework);
    setDescription($article, currHomework, $);

    homework.push(currHomework);
    getHomework($sibling, $, homework);
  } else if ($sibling.hasClass("ls-hr-solid")) {
    getHomework($sibling, $, homework);
  }
}
export function getHomeworkAndOtherAndPresentation($: cheerio.Root) {
  type ResultHolder = {
    homework: Homework[];
    other: Homework[];
    presentation: Homework[][];
  };

  let resultHolder: ResultHolder = {
    homework: [],
    other: [],
    presentation: [],
  };

  $("h1.ls-paper-section-heading").each((index, elem) => {
    let homework: Homework[] = [];
    let presentation: Homework[][] = [];

    const $elem = $(elem);
    const $parent = $elem.parent();
    const resultType = $elem.text();

    if (resultType === "Lektier" || resultType === "Øvrigt indhold") {
      getHomework($parent, $, homework);
    } else {
      const $sibling = $parent.next();
      if ($sibling.length !== 0) {
        const $presentationsHolder = $sibling.children().eq(1).children().eq(1).children();

        setPresentation($presentationsHolder, presentation, $);
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
}

function getText(text: string) {
  if (text.length === 1) return "\n";
  text = text.trim();
  text = text.replaceAll("&nbsp;", "\n");
  text = text.replaceAll("<br>", "\n");
  text = text.replaceAll('href="/lectio', 'href="https://lectio.dk/lectio');

  return text;
}
function trimLineBreaks(currHomework: Homework) {
  let hasChanged = false;
  if (currHomework.description[0] === "\n") {
    hasChanged = true;
    currHomework.description.shift();
  }
  if (currHomework.description[currHomework.description.length - 1] === "\n") {
    hasChanged = true;
    currHomework.description.pop();
  }
  if (hasChanged) {
    trimLineBreaks(currHomework);
  }
}

function setTitle($article: cheerio.Cheerio, currHomework: Homework) {
  const $title = $article.children().first();
  let title = $title.text().trim();
  if (title === "image.png") {
    title = "Billede:";
  }
  currHomework.title = title;
  const href = $title.children().first().attr("href");

  if (href) {
    if (href.includes("https://")) {
      currHomework.titleHref = href;
    } else {
      currHomework.titleHref = ["https://lectio.dk", href].join("");
    }
  }
}
function setDescription($article: cheerio.Cheerio, currHomework: Homework, $: cheerio.Root) {
  const $elements = $article.find("*");

  let isAddingToUl = false;
  let tempUl: string[] = [];

  for (let i = 1; i < $elements.length; i++) {
    const elem = $elements[i];
    const $elem = $(elem);
    const text = getText($elem.html() as string);

    if (elem.type === "tag") {
      if (elem.name === "ul") {
        isAddingToUl = true;
      } else if (elem.name === "li") {
        tempUl.push(text);
      } else {
        if (tempUl.length !== 0) {
          currHomework.description.push(tempUl);
          tempUl = [];
        }
        isAddingToUl = false;
      }
      if (elem.name === "p") {
        currHomework.description.push(text);
      } else if (elem.name === "img") {
        const src = $elem.attr("src");
        if (src) {
          const fullSrc = ["https://lectio.dk", $elem.attr("src")].join("");
          currHomework.description.push({ img: fullSrc });
        }
      }
    }
  }

  trimLineBreaks(currHomework);
}
function setPresentation($presentationsHolder: cheerio.Cheerio, presentation: Homework[][], $: cheerio.Root) {
  $presentationsHolder.each((index, elem) => {
    let currIndex = 0;
    presentation.push([{ titleHref: "", title: "", description: [] }]);

    const $elem = $(elem);
    const $elements = $elem.find("*");
    let isAddingToUl = false;
    let tempUl: string[] = [];

    try {
      for (let i = 0; i < $elements.length; i++) {
        const elem = $elements[i];
        const $elem = $(elem);
        const text = getText($elem.html() as string);

        if (elem.type === "tag") {
          if (elem.name === "h1" || elem.name === "h2") {
            if (presentation[index][currIndex].title !== "") {
              currIndex += 1;
              presentation[index].push({ titleHref: "", title: "", description: [] });
            }
            if (text.length > 1) {
              presentation[index][currIndex].title = text;
            }
          }

          if (elem.name === "ul") {
            isAddingToUl = true;
          } else if (elem.name === "li") {
            tempUl.push(text);
          } else {
            if (tempUl.length !== 0) {
              presentation[index][currIndex].description.push(tempUl);
              tempUl = [];
            }
            isAddingToUl = false;
          }
          if (elem.name === "p") {
            presentation[index][currIndex].description.push(text);
          } else if (elem.name === "img") {
            const src = $elem.attr("src");
            if (src) {
              const fullSrc = ["https://lectio.dk", $elem.attr("src")].join("");
              presentation[index][currIndex].description.push({ img: fullSrc });
            }
          }
        }
      }

      trimLineBreaks(presentation[index][currIndex]);
    } catch (err) {
      console.log(err);
    }
  });

  /*
      This just removes the empty objects and arrays
  
      For some reason array.filter() doesn't work when
      it's an array in an array, so that's why the piece
      of code is as big as it is
    */
  presentation.forEach((homeworkArr) => {
    let indexesToRemove: number[] = [];
    homeworkArr.forEach((obj, index) => {
      if (obj.title === "" && obj.description.length === 0) {
        indexesToRemove.push(index);
      }
    });
    indexesToRemove.forEach((indexToRemove) => {
      homeworkArr.splice(indexToRemove, 1);
    });
  });
  let indexesToRemove: number[] = [];
  presentation.forEach((homeworkArr, index) => {
    if (homeworkArr.length === 0) {
      indexesToRemove.push(index);
    }
  });
  indexesToRemove.forEach((indexToRemove) => {
    presentation.splice(indexToRemove, 1);
  });
}
