/* szoveget tree-be */
function parseXml(str) {
  const parser = new DOMParser(); /* bongeszobe beepitett */
  return parser.parseFromString(str, "text/xml");
}

function parseHtml(str) {
  const parser = new DOMParser();
  return parser.parseFromString(str, "text/html");
}

function renderFeed(feed) {
  const news = document.getElementById("news");
  const items = feed.getElementsByTagName("item");
  for (const item of items) {
    const title = item.getElementsByTagName("title")[0].textContent;
    const description = item.getElementsByTagName("description")[0].textContent;
    const link = item.getElementsByTagName("link")[0].textContent;
    /* getElementsByTagName mindig egy listat fog visszaadni, ezert kerjuk csak a [0]-t */
    const article = document.createElement("article");
    const titleEl = document.createElement("h1");
    const descEl = document.createElement("p");
    const linkEl = document.createElement("a");

    const shortDesc = parseHtml(description).body.textContent.substring(0, 128);

    titleEl.textContent = title;
    descEl.textContent = shortDesc;
    linkEl.textContent = link;
    linkEl.href = link;
    article.append(titleEl, descEl, linkEl);
    news.append(article);
  }
}

/* inline function lesz masodik attributumkent */
window.addEventListener("load", function () {
  fetch("https://dev.to/feed/")
    .then((r) => r.text())
    .then(parseXml)
    .then(renderFeed);
});

/* barmilyen rss channel link beillesztheto, pl.: https://hnrss.org/frontpage */
