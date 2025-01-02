import React, { useCallback } from "react";
import { Article } from "../types/Types";

const UseArticleAction = (
  setArticleList: React.Dispatch<React.SetStateAction<Article[]>>
) => {
  const addArticle = useCallback(
    (article: Article) => {
      console.log("article", article);
      setArticleList((prev) => [...prev, article]);
    },
    [setArticleList]
  );
  const deleteArticle = useCallback(
    (id: number) => {
      setArticleList((prev) => prev.filter((a) => a.id !== id));
    },
    [setArticleList]
  );

  return { addArticle, deleteArticle };
};

export default UseArticleAction;
