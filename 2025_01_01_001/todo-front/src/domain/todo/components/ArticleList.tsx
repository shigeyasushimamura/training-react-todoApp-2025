import React, { useState, useEffect, memo, FC } from "react";
import styles from "./Article.module.css";
import { Article } from "../types";
import { MemoArticleItem } from "./ArticleItem";

interface Props {
  articleList: Article[];
  deleteArticle: (id: number) => void;
}

const ArticleList: FC<Props> = ({ articleList, deleteArticle }) => {
  return (
    <>
      <div className={styles["todo-list-container"]}>
        {articleList.map((article) => {
          return (
            <MemoArticleItem
              key={article.id}
              article={article}
              deleteArticle={deleteArticle}
            />
          );
        })}
      </div>
    </>
  );
};

export const MemoArticleList = memo(ArticleList);
