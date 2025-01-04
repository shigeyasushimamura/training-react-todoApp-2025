import { FC } from "react";
import { News } from "../types/Types";
import NewsList from "./NewsList";

interface Props {
  newsList: News[];
}

const MainNews: FC<Props> = ({ newsList }) => {
  return (
    <div>
      <NewsList newsList={newsList} />
    </div>
  );
};

export default MainNews;
