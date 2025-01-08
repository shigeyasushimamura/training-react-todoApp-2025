import { useParams } from "react-router-dom";
import { News } from "./types/type";
import { FC, useEffect, useState } from "react";
import styles from "./News.module.css";
interface Props {
  newsList: News[];
}

const NewsDetail: FC<Props> = ({ newsList }) => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<News | null>(null);

  useEffect(() => {
    if (!id || isNaN(Number(id))) {
      return;
    }
    const tmp = newsList.find((n) => n.id === Number(id));
    setData(tmp ?? null);
  }, [id, newsList]);

  return (
    <div className="">
      ニュース詳細
      {data && (
        <article>
          {data.id}
          {data.title}
          {data.body}
        </article>
      )}
    </div>
  );
};

export default NewsDetail;
