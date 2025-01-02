import React, { FC, memo } from "react";
import { Article } from "../types";
import styles from "./Article.module.css";

interface Props {
  article: Article;
}

const ArticleItem: FC<Props> = ({ article }) => {
  return (
    <article className={styles["todo-item-card"]}>
      <h3 className={styles["todo-item-card-title"]}>{article.title}</h3>
      <figure>
        <img src={article.path} alt={article.title}></img>
      </figure>
      <span>{article.text}</span>
    </article>
  );
};

export const MemoArticleItem = memo(
  ArticleItem,
  (prevProps, nextProps) => prevProps.article === nextProps.article
);
