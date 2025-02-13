import { FC } from "react";
import { Article } from "../types/Types";
import ArticleList from "./ArticleList";
import styles from "./Article.module.css";
import { MemoFormArticle } from "./FormArticle";

interface Props {
  articleList: Article[];
  addArticle: (article: Article) => void;
  deleteArticle: (id: number) => void;
}

const MainArticleList: FC<Props> = ({
  articleList,
  addArticle,
  deleteArticle,
}) => {
  return (
    <>
      <div className={styles["m-container"]}>
        <ArticleList articleList={articleList} deleteArticle={deleteArticle} />
        <MemoFormArticle addArticle={addArticle} />
      </div>
    </>
  );
};

export default MainArticleList;
