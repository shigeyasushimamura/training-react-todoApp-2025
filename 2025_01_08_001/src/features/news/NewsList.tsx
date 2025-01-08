import NewsItem from "./NewsItem";
import { FC, memo } from "react";
import { News } from "./types/type";

interface Props {
  newsList: News[];
  deleteNews: (id: number) => void;
}
const NewsList: FC<Props> = memo(({ newsList, deleteNews }) => {
  return (
    <div className="">
      <h2>newslist</h2>
      <ul>
        {newsList.map((news) => {
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
