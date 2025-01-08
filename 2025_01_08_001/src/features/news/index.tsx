import { FC } from "react";
import NewsList from "./NewsList";
import { News } from "./types/type";
import NewsPost from "./NewsPost";

interface Props {
  newsList: News[];
  addNews: (n: News) => void;
  deleteNews: (id: number) => void;
}

const MainNews: FC<Props> = ({ newsList, addNews, deleteNews }) => {
  return (
    <div className="">
      <h1>main</h1>
      <NewsList newsList={newsList} deleteNews={deleteNews} />
      <NewsPost newsList={newsList} addNews={addNews} />
    </div>
  );
};

export default MainNews;
