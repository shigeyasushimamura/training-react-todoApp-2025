import { useState, useEffect } from "react";
import { Article } from "../types";
const array = [
  {
    id: 1,
    title: "みけねこ",
    text: "メスねこがおおい",
    path: "/mikeneko.jpg",
  },
  {
    id: 2,
    title: "くろねこ",
    text: "ちゅうせいじだいはきらわれていた",
    path: "/mikeneko.jpg",
  },
  {
    id: 3,
    title: "くろねこ",
    text: "ちゅうせいじだいはきらわれていた",
    path: "/mikeneko.jpg",
  },
  {
    id: 4,
    title: "くろねこ",
    text: "ちゅうせいじだいはきらわれていた",
    path: "/mikeneko.jpg",
  },
  {
    id: 5,
    title: "くろねこ",
    text: "ちゅうせいじだいはきらわれていた",
    path: "/mikeneko.jpg",
  },
];

async function AsyncGetData(): Promise<Article[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(array);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
}

const useFetchArticles = () => {
  const [data, setData] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    AsyncGetData()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
};

export default useFetchArticles;
