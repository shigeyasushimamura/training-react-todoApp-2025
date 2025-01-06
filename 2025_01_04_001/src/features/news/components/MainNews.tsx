import { FC } from "react";
import { News } from "../types/Types";
import NewsList from "./NewsList";
import EditNews from "./EditNews";

interface Props {
  newsList: News[];
  deleteNews: (id: number) => void;
  addNews: (news: News) => void;
}

const MainNews: FC<Props> = ({ newsList, deleteNews, addNews }) => {
  return (
    <div>
      <NewsList newsList={newsList} deleteNews={deleteNews} />
      <EditNews addNews={addNews} />
    </div>
  );
};

export default MainNews;
