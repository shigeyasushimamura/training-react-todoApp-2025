import React, { FC, memo } from "react";
import { News } from "./types/Types";
import styles from "./News.module.css";
interface Props {
  news: News;
}

const NewItem: FC<Props> = ({ news }) => {
  return (
    <>
      <article className={styles["news__item"]}>
        <div className={styles["news__date"]}>{news.publishDate}</div>
        <div className={styles["news__category"]}>{news.category}</div>
        <div className={styles["news__title"]}>{news.title}</div>
      </article>
    </>
  );
};

export const MemoNewItem = memo(NewItem);
