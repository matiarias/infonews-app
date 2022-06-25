export const getNews = async (category) => {
  const resp = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=d29f8cdd6aeb4282a787fbcc94fdc480`
  );
  const { articles } = await resp.json();
  return articles;
};
