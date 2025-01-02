import { FC } from "react";
import { Article } from "../types/Types";
import ArticleItem from "./ArticleItem";
import styles from "./Article.module.css";

interface Props {
  articleList: Article[];
}

const ArticleList: FC<Props> = ({ articleList }) => {
  return (
    <>
      <div className={styles["article-list-container"]}>
        <h1>お知らせ</h1>

        <ul>
          {articleList.map((a: Article) => {
            return (
              <li key={a.id}>
                <ArticleItem article={a} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ArticleList;
