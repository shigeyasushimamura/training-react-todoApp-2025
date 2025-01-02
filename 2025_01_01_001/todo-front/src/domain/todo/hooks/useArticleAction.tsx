import React, { useCallback } from "react";
import { Article } from "../types";

const useArticleActions = (
  setArticleList: React.Dispatch<React.SetStateAction<Article[]>>
) => {
  const deleteArticle = useCallback(
    (id: number) => {
      setArticleList((prevList) => prevList.filter((a) => a.id !== id));
    },
    [setArticleList]
  );

  const addArticle = useCallback(
    (article: Article) => {
      setArticleList((prevList) => [...prevList, article]);
    },
    [setArticleList]
  );

  const updateArticle = useCallback(
    (article: Article) => {
      setArticleList((prevList) =>
        prevList.map((a) => (a.id !== article.id ? a : article))
      );
    },
    [setArticleList]
  );

  return { deleteArticle, addArticle, updateArticle };
};

export default useArticleActions;
