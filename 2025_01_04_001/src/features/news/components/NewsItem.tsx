import { FC, memo } from "react";
import { News } from "../types/Types";

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
        {news.title}
        {/* <img src={news.path} /> */}
        <button onClick={handleDelete} aira-lavel="記事削除">
          削除
        </button>
      </article>
    </div>
  );
});

export default NewsItem;
