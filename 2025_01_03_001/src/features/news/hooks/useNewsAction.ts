import React, { useCallback } from "react";
import { News } from "../components/types/Types";

const UseNewsAction = (
  setNewsList: React.Dispatch<React.SetStateAction<News[]>>
) => {
  const addNews = useCallback(
    (news: News) => {
      setNewsList((prev) => [...prev, news]);
    },
    [setNewsList]
  );

  const deleteNews = useCallback(
    (id: number) => {
      setNewsList((prev) => prev.filter((n) => n.id !== id));
    },
    [setNewsList]
  );

  return { addNews, deleteNews };
};

export default UseNewsAction;
