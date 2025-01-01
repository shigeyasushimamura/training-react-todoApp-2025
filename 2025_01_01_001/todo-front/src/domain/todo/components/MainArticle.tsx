import styles from "./Article.module.css";
import { MemoArticleList } from "./ArticleList";

const MainArticle = () => {
  return (
    <div className={styles["todo-main-container"]}>
      <MemoArticleList />
    </div>
  );
};

export default MainArticle;
