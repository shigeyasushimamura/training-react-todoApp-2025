import NewsItem from "./NewsItem";
import { FC, memo } from "react";
import { News } from "./types/type";
import styles from "./News.module.css";
import { useNewsContext } from "./reducers/reducer";
interface Props {
  newsList: News[];
  deleteNews: (id: number) => void;
}
const NewsList: FC<Props> = memo(({ newsList, deleteNews }) => {
  const { state } = useNewsContext();

  return (
    <div className={styles["news__list"]}>
      <h2 className={styles["news__list-heading"]}>ニュース一覧</h2>
      <ul className={styles["news__list-ul"]}>
        {/* {newsList.map((news) => {
          return (
            <li key={news.id}>
              <NewsItem news={news} deleteNews={deleteNews} />
            </li>
          );
        })} */}
        {state.newsList.map((news) => {
          return (
            <li key={news.id}>
              <NewsItem news={news} deleteNews={deleteNews} />
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default NewsList;
