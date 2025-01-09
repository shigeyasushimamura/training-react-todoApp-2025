import { FC } from "react";
import { News } from "../types/type";
import NewsItem from "./NewsItem";

interface Props {
  newsList: News[];
}

const NewsList: FC<Props> = ({ newsList }) => {
  return (
    <div>
      <h2>NewsList</h2>
      <ul>
        {newsList.map((n) => {
          return (
            <li key={n.id}>
              <NewsItem news={n} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewsList;
