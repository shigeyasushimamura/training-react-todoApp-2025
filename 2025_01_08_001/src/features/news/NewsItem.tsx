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
    <div className="">
      <h3>newsitem</h3>
      <div className="">
        <Link to={`/${news.id}`}>{news.title}</Link>
      </div>

      <button onClick={handleDelete}>削除</button>
    </div>
  );
});

export default NewsItem;
