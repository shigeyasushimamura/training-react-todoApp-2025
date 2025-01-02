import { useState, useCallback } from "react";
import styles from "./Article.module.css";
import { MemoArticleList } from "./ArticleList";
import { Article } from "../types";
import { MemoArticleEdit } from "./ArticleEdit";

const array = [
  {
    id: 1,
    title: "みけねこ",
    text: "メスねこがおおい",
    path: "/mikeneko.jpg",
  },
  {
    id: 2,
    title: "くろねこ",
    text: "ちゅうせいじだいはきらわれていた",
    path: "/mikeneko.jpg",
  },
  {
    id: 3,
    title: "くろねこ",
    text: "ちゅうせいじだいはきらわれていた",
    path: "/mikeneko.jpg",
  },
  {
    id: 4,
    title: "くろねこ",
    text: "ちゅうせいじだいはきらわれていた",
    path: "/mikeneko.jpg",
  },
  {
    id: 5,
    title: "くろねこ",
    text: "ちゅうせいじだいはきらわれていた",
    path: "/mikeneko.jpg",
  },
];

const MainArticle = () => {
  const [articleList, setArticleList] = useState<Article[]>(array);

  const deleteArticle = useCallback((id: number) => {
    setArticleList((prevList) => prevList.filter((a) => a.id !== id));
  }, []);

  const addArticle = useCallback((article: Article) => {
    setArticleList((prevList) => [...prevList, article]);
  }, []);

  const updateArticle = useCallback((article: Article) => {
    setArticleList((prevList) =>
      prevList.map((a) => (a.id !== article.id ? a : article))
    );
  }, []);

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
