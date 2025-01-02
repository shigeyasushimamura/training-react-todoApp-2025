import { FC, memo } from "react";
import { Article } from "../types/Types";
import ArticleItem from "./ArticleItem";
import styles from "./Article.module.css";

interface Props {
  articleList: Article[];
  deleteArticle: (id: number) => void;
}

const ArticleList: FC<Props> = ({ articleList, deleteArticle }) => {
  return (
    <>
      <div className={styles["article-list-container"]}>
        <h1>お知らせ</h1>

        <ul>
          {articleList.map((a: Article) => {
            return (
              <li key={a.id}>
                <ArticleItem article={a} deleteArticle={deleteArticle} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const MemoArticleList = memo(ArticleList);

export default MemoArticleList;
