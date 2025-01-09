import { News } from "../types/type";
import { useState } from "react";
import NewsList from "./NewsList";

const array = [{ id: 1, title: "タイトル1", path: "pen.png" }];

const MainNews = () => {
  const [newsList, setNewsList] = useState<News[]>(array);

  return (
    <div>
      <h1>main</h1>

      <NewsList newsList={newsList} />
    </div>
  );
};

export default MainNews;
