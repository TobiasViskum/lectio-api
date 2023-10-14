export function getMessageInformation($elem: cheerio.Cheerio, allGroupReceivers: string[]) {
  const title = $elem.children().eq(3).children().eq(0).children().eq(0).text();
  const latestSender = $elem.children().eq(4).children().eq(0).attr("title");
  const sender = $elem.children().eq(5).children().eq(0).attr("title");
  let receivers = $elem.children().eq(6).children().eq(0).attr("title");
  const latestChange = formatLatestChange($elem.children().eq(7).text());

  if (latestSender && sender && receivers) {
    receivers = formatReceivers(receivers, allGroupReceivers);

    return {
      title: title,
      latestSender: latestSender,
      sender: sender,
      receivers: receivers,
      latestChange: latestChange,
    };
  } else {
    return {
      title: "",
      latestSender: "",
      sender: "",
      receivers: "",
      latestChange: "",
    };
  }
}

function formatLatestChange(latestChange: string) {
  return latestChange.replace("ma", "Mandag").replace("ti", "Tirsdag").replace("on", "Onsdag").replace("to", "Torsdag").replace("fr", "Fredag").replace("lø", "Lørdag").replace("sø", "Søndag");
}

function formatReceivers(receivers: string, allGroupReceivers: string[]) {
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
    const closeMatch = allGroupReceivers.find((rec) => rec.includes(receiver));
    if (closeMatch) {
      formattedReceivers = formattedReceivers.replace(receiver, closeMatch);
    }
  });

  return formattedReceivers;
}
