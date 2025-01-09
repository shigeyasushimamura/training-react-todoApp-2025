import { FC } from "react";
import { News } from "../types/type";

interface Props {
  news: News;
}

const NewsItem: FC<Props> = ({ news }) => {
  return (
    <div>
      <header>
        <h3>NewsItem</h3>
      </header>
      <article>
        <div>{news.title}</div>
      </article>
    </div>
  );
};

export default NewsItem;
