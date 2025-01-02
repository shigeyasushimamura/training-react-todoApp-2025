import { FC } from "react";
import { Article } from "../types/Types";
import ArticleList from "./ArticleList";
import styles from "./Article.module.css";

interface Props {
  articleList: Article[];
}

const MainArticleList: FC<Props> = ({ articleList }) => {
  return (
    <>
      <div className={styles["m-container"]}>
        <ArticleList articleList={articleList} />
      </div>
    </>
  );
};

export default MainArticleList;
