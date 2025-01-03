import MemoNewsList from "./NewsList";
import { News } from "./types/Types";
import { FC } from "react";
import styles from "./News.module.css";
import MemoPostNews from "./PostNews";

interface Props {
  newsList: News[];
  deleteNews: (id: number) => void;
  addNews: (news: News) => void;
}

const MainNews: FC<Props> = ({ newsList, deleteNews, addNews }) => {
  return (
    <div className={styles["m-news"]}>
      <h1 className={styles["m-news__heading"]}> MainNews</h1>
      <MemoNewsList newsList={newsList} deleteNews={deleteNews} />
      <MemoPostNews addNews={addNews} />
    </div>
  );
};

export default MainNews;
