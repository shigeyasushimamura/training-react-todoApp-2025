import { FC, memo } from "react";
import { News } from "../types/Types";
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
    <div>
      <article>
        {news.publishDate}
        <div>
          <Link to={`/${news.id}`}>{news.title}</Link>
        </div>
        {/* <img src={news.path} /> */}
        {news.category}
        <button onClick={handleDelete} aira-lavel="記事削除">
          削除
        </button>
      </article>
    </div>
  );
});

export default NewsItem;
