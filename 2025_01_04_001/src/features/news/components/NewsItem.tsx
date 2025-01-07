import { FC, memo } from "react";
import { News } from "../types/Types";
import { Link } from "react-router-dom";
import styles from "./News.module.css";

interface Props {
  news: News;
  deleteNews: (id: number) => void;
}

const NewsItem: FC<Props> = memo(({ news, deleteNews }) => {
  const handleDelete = () => {
    deleteNews(news.id);
  };

  return (
    <article className={styles["news-item"]}>
      <div>{news.publishDate}</div>
      <div>
        <Link to={`/${news.id}`}>{news.title}</Link>
      </div>
      <div className={styles["news-item__img-container"]}>
        <img
          src={news.path}
          loading="lazy"
          className={styles["news-item__img"]}
        />

        <span className={styles["news-item__img-tag"]}>new</span>
      </div>
      <div className={styles["news-item__category"]}>{news.category}</div>
      <button
        onClick={handleDelete}
        aira-lavel="記事削除"
        className={styles["news-item__btn"]}
      >
        削除
      </button>
    </article>
  );
});

export default NewsItem;
