import { FC, memo } from "react";
import { News } from "../types/Types";
import NewsItem from "./NewsItem";
import styles from "./News.module.css";

interface Props {
  newsList: News[];
}

const NewsList: FC<Props> = memo(({ newsList }) => {
  return (
    <div className={styles["news-list"]}>
      <header className={styles["news-list__header"]}>
        <h2 className={styles["news-list__title"]}>記事一覧</h2>
      </header>
      <ul className={styles["news-list__items"]}>
        {newsList.map((n) => (
          <li key={n.id}>
            <NewsItem news={n} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default NewsList;
