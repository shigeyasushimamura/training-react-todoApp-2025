import { FC } from "react";
import { News } from "../types/Types";
import NewsList from "./NewsList";
import EditNews from "./EditNews";

interface Props {
  newsList: News[];
  deleteNews: (id: number) => void;
}

const MainNews: FC<Props> = ({ newsList, deleteNews }) => {
  return (
    <div>
      <NewsList newsList={newsList} deleteNews={deleteNews} />
      <EditNews />
    </div>
  );
};

export default MainNews;
