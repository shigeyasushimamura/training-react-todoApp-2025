import React, { FC, memo } from "react";
import { Article } from "../types";
import styles from "./Article.module.css";

interface Props {
  article: Article;
}

const ArticleItem: FC<Props> = ({ article }) => {
  return (
    <article key={article.id} className={styles["todo-item-card"]}>
      <span>{article.title}</span>
      <figure>
        <img src={article.path} alt={article.title}></img>
      </figure>
      <span>{article.text}</span>
    </article>
  );
};

export const MemoArticleItem = memo(ArticleItem);
