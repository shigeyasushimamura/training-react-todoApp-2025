import { FC } from "react";
import { News } from "../types/type";

interface Props {
  newsList: News[];
}

const NewsList: FC<Props> = ({ newsList }) => {
  return (
    <div>
      <h2>NewsList</h2>
    </div>
  );
};

export default NewsList;
