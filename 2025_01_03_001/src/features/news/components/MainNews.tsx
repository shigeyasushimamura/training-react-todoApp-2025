import MemoNewsList from "./NewsList";
import { News } from "./types/Types";
import { FC } from "react";
import styles from "./News.module.css";

interface Props {
  newsList: News[];
}

const MainNews: FC<Props> = ({ newsList }) => {
  return (
    <div className={styles["m-news"]}>
      <h1 className={styles["m-news__heading"]}> MainNews</h1>
      <MemoNewsList newsList={newsList} />
    </div>
  );
};

export default MainNews;
