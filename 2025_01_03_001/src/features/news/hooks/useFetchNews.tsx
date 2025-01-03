import { useState, useEffect } from "react";
import { News } from "../components/types/Types";

const array: News[] = [
  {
    id: 1,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
  },
  {
    id: 2,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "雑談",
    content: "開催！",
  },
  {
    id: 3,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
  },
  {
    id: 4,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "大切なお知らせ",
    content: "開催！",
  },
  {
    id: 5,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
  },
  {
    id: 6,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "雑談",
    content: "開催！",
  },
  {
    id: 7,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
  },
];

async function getNews(): Promise<News[]> {
  return new Promise((resolve, reject) => [
    setTimeout(() => {
      try {
        resolve(array);
      } catch (e) {
        reject(e);
      }
    }, 10),
  ]);

  // return new Promise((resolve,reject)=>{
  //     fetch("http://localhost:3003/api/news",{method:"GET"})
  //     .then(res=>res.json())
  //     .then(res=>{
  //         if(!res.ok){
  //             reject("failed fetch from server");
  //         }
  //         return res.data
  //     }).then(res=>resolve(res))
  //     .catch(e=>reject(e))
  // })
}

const UseFetchNews = () => {
  const [data, setData] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetch = async () => {
      try {
        const result = await getNews();

        setData(result);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [data]);

  return { data, isLoading, error };
};

export default UseFetchNews;
