import { useParams } from "react-router-dom";
import { News } from "../types/Types";
import { useState, useEffect } from "react";
import styles from "./News.module.css";

const DetailNews = ({ newsList }: { newsList: News[] }) => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<News | null>(null);

  useEffect(() => {
    if (!id || isNaN(Number(id))) return;

    const tmp = newsList.find((n) => n.id === Number(id));

    setData(tmp ?? null);
  }, [id, newsList]);

  return (
    <div className={styles["news-detail"]}>
      <h1 className={styles["news-detail__heading"]}>詳細画面</h1>
      {data && (
        <article className={styles["news-detail__article"]}>
          <div className={styles["news-detail__image-container"]}>
            <img src={data.path} className={styles["news-detail__image"]} />
            <div className={styles["news-detail__category"]}>
              {data.category}
            </div>
          </div>

          <div className={styles["news-detail__article-heading"]}>
            <h2> {data.title}</h2>
          </div>
          <div className={styles["news-detail__content"]}> {data.content}</div>
        </article>
      )}
    </div>
  );
};

export default DetailNews;
