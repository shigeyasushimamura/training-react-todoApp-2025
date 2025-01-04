import { FC, memo } from "react";
import { News } from "../types/Types";

interface Props {
  news: News;
}

const NewsItem: FC<Props> = memo(({ news }) => {
  return (
    <div>
      <article>
        {news.publishDate}
        {news.title}
        {/* <img src={news.path} /> */}
        <button aira-lavel="記事削除">削除</button>
      </article>
    </div>
  );
});

export default NewsItem;
