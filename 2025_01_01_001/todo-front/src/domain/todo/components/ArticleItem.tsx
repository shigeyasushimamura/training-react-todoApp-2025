import React, { FC, memo } from "react";
import { Article } from "../types";
import styles from "./Article.module.css";

interface Props {
  article: Article;
  deleteArticle: (id: number) => void;
}

const ArticleItem: FC<Props> = ({ article, deleteArticle }) => {
  return (
    <article className={styles["todo-item-card"]}>
      <button
        aria-label={`Delete Article ${article.id}`}
        onClick={() => {
          deleteArticle(article.id);
        }}
      >
        {article.id} 削除
      </button>
      <h3 className={styles["todo-item-card-title"]}>{article.title}</h3>
      <figure>
        <img src={article.path} alt={article.title}></img>
      </figure>
      <span>{article.text}</span>
    </article>
  );
};

export const MemoArticleItem = memo(ArticleItem);
