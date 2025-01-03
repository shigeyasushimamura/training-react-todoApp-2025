import { memo, FC } from "react";
import { MemoNewItem } from "./NewsItem";
import styles from "./News.module.css";
import UseNewsState from "../hooks/useNewsState";

const NewsList: FC = () => {
  const { state } = UseNewsState();
  const { newsList } = state;

  return (
    <div className={styles["news"]}>
      <h1 className={styles["news__heading"]}>NewsList</h1>

      <ul className={styles["news__list"]}>
        {newsList.map((news) => {
          return (
            <li key={news.id}>
              <MemoNewItem news={news} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const MemoNewsList = memo(NewsList);

export default MemoNewsList;
