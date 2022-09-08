import {API_KEY, endpoint, country} from '../config/APIconfig';

export async function services(category = 'top-headlines') {
  let articles = await fetch(
    `${endpoint}?country=${country}&category=${category}`,
    {
      headers: {
        'X-API-KEY': API_KEY,
      },
    },
  );

  let result = await articles.json();
  articles = null;

  return result.articles;
}
