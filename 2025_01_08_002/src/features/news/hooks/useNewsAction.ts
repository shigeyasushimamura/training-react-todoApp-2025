import { useCallback } from "react";
import { News } from "../types/type";

const UseNewsAction = (
  setNewsList: React.Dispatch<React.SetStateAction<News[]>>
) => {
  const addNews = useCallback(
    (news: News) => {
      setNewsList((prev) => [...prev, news]);
    },
    [setNewsList]
  );
  const deleteNews = useCallback((id: number) => {
    setNewsList((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return { addNews, deleteNews };
};

export default UseNewsAction;
