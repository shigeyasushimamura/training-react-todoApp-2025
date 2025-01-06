import { useParams } from "react-router-dom";
import { News } from "../types/Types";
import { useState, useEffect } from "react";

const DetailNews = ({ newsList }: { newsList: News[] }) => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<News | null>(null);

  useEffect(() => {
    if (!id || isNaN(Number(id))) return;

    const tmp = newsList.find((n) => n.id === Number(id));

    setData(tmp ?? null);
  }, [id, newsList]);

  return (
    <div>
      <h1>詳細画面</h1>
      {data && (
        <article>
          {data.id}
          {data.title}
          {data.content}
          {data.category}
        </article>
      )}
    </div>
  );
};

export default DetailNews;
