import { FC, memo } from "react";
import { Article } from "../types/Types";
import styles from "./Article.module.css";
import { Link } from "react-router-dom";

interface Props {
  article: Article;
  deleteArticle: (id: number) => void;
}

const ArticleItem: FC<Props> = ({ article, deleteArticle }) => {
  const handleDeleteArticle = () => {
    deleteArticle(article.id);
  };

  return (
    <>
      <article className={styles["article-item-container"]}>
        <time className={styles["publish-time"]} aria-label="投稿日">
          {article.publishDate}
        </time>
        <div className={styles["category"]}>{article.category}</div>
        <h3 className={styles["title"]}>
          <Link to={`/${article.id}`}>{article.title}</Link>
        </h3>
        <button className={styles["delete-btn"]} onClick={handleDeleteArticle}>
          削除
        </button>
      </article>
    </>
  );
};

const MemoArticleItem = memo(ArticleItem);

export default MemoArticleItem;
