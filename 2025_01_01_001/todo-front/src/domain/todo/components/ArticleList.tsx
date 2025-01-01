import React, { useState, useEffect, memo } from "react";
import styles from "./Article.module.css";
import { Article } from "../types";
import { MemoArticleItem } from "./ArticleItem";

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

const ArticleList = () => {
  const [articleList, setArticleList] = useState<Article[]>(array);

  return (
    <div className={styles["todo-list-container"]}>
      {articleList.map((article) => {
        return <MemoArticleItem article={article} />;
      })}
    </div>
  );
};

export const MemoArticleList = memo(ArticleList);
