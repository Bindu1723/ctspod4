const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a894d9904cb44fb3b39f2404fc113b67');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2
  .topHeadlines({
    language: 'en',
    country: 'in',
  })
  .then((response) => {
    console.log(response);
    /*
    {
      status: "ok",
      articles: [...]
    }
  */
  });
