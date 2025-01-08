import { News } from "../features/news/types/type";
import { useEffect, useState } from "react";

const array: News[] = [
  {
    id: 1,
    title: "今年1番のビールは？",
    body: "はてなびーる！！",
    path: "pen.png",
  },
  {
    id: 2,
    title: "今年2番のビールは？",
    body: "koronaびーる！！",
    path: "pen.png",
  },
  {
    id: 3,
    title: "今年3番のビールは？",
    body: "sapporoびーる！！",
    path: "pen.png",
  },
];

const fetchData = (): Promise<News[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(array);
      } catch (e) {
        reject(e);
      }
    }, 10);
  });

  //   return fetch("htt", { method: "GET" })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("ser");
  //       }
  //       //   return res.json();
  //       return [];
  //     })
  //     .catch((e) => new Error(e));
};

const GetNews = () => {
  const [data, setData] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fn = async () => {
      try {
        const d = await fetchData();
        if (d) {
          setData(d);
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fn();
  }, []);

  return { data, isLoading, error };
};

export default GetNews;
