import { FC, memo } from "react";
import { News } from "./types/type";

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
      {news.title}

      <button onClick={handleDelete}>削除</button>
    </div>
  );
});

export default NewsItem;
