import { FC } from "react";
import { Article } from "../types/Types";
import styles from "./Article.module.css";

interface Props {
  article: Article;
}

const ArticleItem: FC<Props> = ({ article }) => {
  return (
    <>
      <article className={styles["article-item-container"]}>
        <time className={styles["publish-time"]} aria-label="投稿日">
          {article.publishDate}
        </time>
        <div className={styles["category"]}>{article.category}</div>
        <h3 className={styles["title"]}>{article.title}</h3>
      </article>
    </>
  );
};

export default ArticleItem;
