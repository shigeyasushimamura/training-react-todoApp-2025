import { News } from "../types/Types";
import { useCallback } from "react";

const UseNewsAction = (
  setNews: React.Dispatch<React.SetStateAction<News[]>>
) => {
  const addNews = useCallback(
    (news: News) => {
      setNews((prev) => [...prev, news]);
    },
    [setNews]
  );

  const deleteNews = useCallback(
    (id: number) => {
      setNews((prev) => prev.filter((n) => n.id !== id));
    },
    [setNews]
  );

  return { addNews, deleteNews };
};

export default UseNewsAction;
