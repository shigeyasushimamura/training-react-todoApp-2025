import { FC, memo } from "react";
import { News } from "./types/type";
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
    <div className={styles["news__item"]}>
      <div className={styles["news__item-field"]}>
        <h3 className={styles["news__item-heading"]}>
          <Link to={`/${news.id}`}>{news.title}</Link>
        </h3>
      </div>

      <div className={styles["news__item-field"]}>
        <img
          src={news.path}
          alt="news-iamge"
          className={styles["news__item-image"]}
        />
        <span className={styles["news__item-tag"]}>NEW</span>
      </div>

      <div className={styles["news__item-btn-container"]}>
        <button onClick={handleDelete} className={styles["news__item-btn"]}>
          削除
        </button>
      </div>
    </div>
  );
});

export default NewsItem;
