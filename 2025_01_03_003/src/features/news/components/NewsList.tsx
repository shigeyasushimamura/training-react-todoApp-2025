import React, { memo, FC } from "react";
import { News } from "./types/Types";
import { MemoNewItem } from "./NewsItem";
import styles from "./News.module.css";

interface Props {
  newsList: News[];
  deleteNews: (id: number) => void;
}

const NewsList: FC<Props> = ({ newsList, deleteNews }) => {
  return (
    <div className={styles["news"]}>
      <h1 className={styles["news__heading"]}>NewsList</h1>

      <ul className={styles["news__list"]}>
        {newsList.map((news) => {
          return (
            <li key={news.id}>
              <MemoNewItem news={news} deleteNews={deleteNews} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const MemoNewsList = memo(NewsList);

export default MemoNewsList;
