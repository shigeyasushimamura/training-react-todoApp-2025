import { FC } from "react";
import { News } from "../types/Types";

interface Props {
  news: News;
}

const NewsItem: FC<Props> = ({ news }) => {
  return (
    <div>
      <article>
        {news.publishDate}
        {news.title}
        {/* <img src={news.path} /> */}
      </article>
    </div>
  );
};

export default NewsItem;
