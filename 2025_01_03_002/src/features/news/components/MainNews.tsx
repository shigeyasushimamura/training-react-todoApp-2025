import MemoNewsList from "./NewsList";
import { FC } from "react";
import styles from "./News.module.css";
import MemoPostNews from "./PostNews";

const MainNews: FC = () => {
  return (
    <div className={styles["m-news"]}>
      <h1 className={styles["m-news__heading"]}> MainNews</h1>
      <MemoNewsList />
      <MemoPostNews />
    </div>
  );
};

export default MainNews;
