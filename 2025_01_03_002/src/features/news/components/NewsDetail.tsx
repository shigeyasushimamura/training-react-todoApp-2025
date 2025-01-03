import { FC, useEffect, useState } from "react";
import { News } from "./types/Types";
import { useParams } from "react-router-dom";
import styles from "./News.module.css";
import { useNewsContext } from "../context/newsContext";

const NewsDetail: FC = () => {
  const { state } = useNewsContext();

  const { newsList } = state;

  const { id } = useParams();
  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    if (!id || isNaN(Number(id))) return;

    const n = newsList.find((a) => a.id === Number(id));
    if (n) setNews(n);
  }, [id, newsList]);

  return (
    <>
      <div className={styles["detail"]}>
        <h1 className={styles["detail__header"]}>詳細画面</h1>
        {news && (
          <article className={styles["detail__list"]}>
            <h3 className={styles["detail__item"]}>{news.title}</h3>
            <h4 className={styles["detail__item"]}>{news.content}</h4>
            <h5 className={styles["detail__item"]}>{news.category}</h5>
          </article>
        )}
      </div>
    </>
  );
};

export default NewsDetail;
