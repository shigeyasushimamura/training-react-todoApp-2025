import React, { FC, memo } from "react";
import { News } from "./types/Types";
import styles from "./News.module.css";
import { Link } from "react-router-dom";
interface Props {
  news: News;
  deleteNews: (id: number) => void;
}

const NewItem: FC<Props> = ({ news, deleteNews }) => {
  const handleDeleteArticle = () => {
    deleteNews(news.id);
  };
  return (
    <>
      <article className={styles["news__item"]}>
        <div className={styles["news__date"]}>{news.publishDate}</div>
        <div className={styles["news__category"]}>{news.category}</div>
        <div className={styles["news__title"]}>
          <Link to={`/${news.id}`}>{news.title}</Link>
        </div>
        <button
          onClick={handleDeleteArticle}
          className={styles["news__btn--delete"]}
        >
          削除
        </button>
      </article>
    </>
  );
};

export const MemoNewItem = memo(NewItem);