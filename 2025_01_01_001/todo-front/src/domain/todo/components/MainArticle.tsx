import { useState, useEffect } from "react";
import styles from "./Article.module.css";
import { MemoArticleList } from "./ArticleList";
import { Article } from "../types";
import { MemoArticleEdit } from "./ArticleEdit";
import useArticleActions from "../hooks/useArticleAction";
import useFetchArticles from "../hooks/useFetchArticle";

const MainArticle = () => {
  const [articleList, setArticleList] = useState<Article[]>([]);
  const { data, isLoading, error } = useFetchArticles();

  useEffect(() => {
    if (data) {
      setArticleList(data);
    }
  }, [data]);

  const { deleteArticle, addArticle, updateArticle } =
    useArticleActions(setArticleList);

  if (isLoading) {
    return <div>...isLoading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles["todo-main-container"]}>
      <MemoArticleList
        articleList={articleList}
        deleteArticle={deleteArticle}
      />
      <MemoArticleEdit articleList={articleList} />
    </div>
  );
};

export default MainArticle;
