// [WIP]
// Sort articles by popularity
// Display top 10 articles on homepage
// Add search functionality
//    By company / author / etc.
// Add sorting functionality
//    By date / etc.
// Make pretty

async function getNewsData() {
  const apiURL = `https://newsapi.org/v2/everything?q=keyword&apiKey=4fb53380946b4991bfb438bf03b708d0`;
  const getData = await fetch(apiURL);
  const newsData = await getData.json();

  const articleImage = await fetch(newsData.articles[0].urlToImage);
  await console.log(articleImage);

  document.querySelector('.article-1');
  // createArticle();
}

getNewsData();

const asdf = new Date();
console.log(asdf);
