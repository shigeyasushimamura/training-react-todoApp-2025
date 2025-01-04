import { useState, useEffect } from "react";
import { News } from "../types/Types";

const array: News[] = [
  {
    id: 1,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
    path: "pen.png",
  },
  {
    id: 2,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "雑談",
    content: "開催！",
    path: "pen.png",
  },
  {
    id: 3,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
    path: "pen.png",
  },
  {
    id: 4,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "大切なお知らせ",
    content: "開催！",
    path: "pen.png",
  },
  {
    id: 5,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
    path: "pen.png",
  },
  {
    id: 6,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "雑談",
    content: "開催！",
    path: "pen.png",
  },
  {
    id: 7,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
    path: "pen.png",
  },
];

async function GetAsyncNews(): Promise<News[]> {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(array);
      }, 10);
    } catch (e) {
      reject(e);
    }

    // fetch("http://localost:8000/api.news", { method: "GET" })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (!res.ok) reject("ng");
    //     return res.data;
    //   })
    //   .then((res) => resolve(res))
    //   .catch((e) => reject(e));
  });
}

const UseFetchNews = () => {
  const [data, setData] = useState<News[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const res = await GetAsyncNews();
        if (res) setData(res);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default UseFetchNews;
