import { useState, useCallback, useEffect } from "react";
import styles from "./Article.module.css";
import { MemoArticleList } from "./ArticleList";
import { Article } from "../types";
import { MemoArticleEdit } from "./ArticleEdit";
import useArticleActions from "../hooks/useArticleAction";

const array = [
  {
    id: 1,
    title: "みけねこ",
    text: "メスねこがおおい",
    path: "/mikeneko.jpg",
  },
  {
    id: 2,
    title: "くろねこ",
    text: "ちゅうせいじだいはきらわれていた",
    path: "/mikeneko.jpg",
  },
  {
    id: 3,
    title: "くろねこ",
    text: "ちゅうせいじだいはきらわれていた",
    path: "/mikeneko.jpg",
  },
  {
    id: 4,
    title: "くろねこ",
    text: "ちゅうせいじだいはきらわれていた",
    path: "/mikeneko.jpg",
  },
  {
    id: 5,
    title: "くろねこ",
    text: "ちゅうせいじだいはきらわれていた",
    path: "/mikeneko.jpg",
  },
];

async function AsyncGetData(): Promise<Article[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(array);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
}

const MainArticle = () => {
  const [articleList, setArticleList] = useState<Article[]>(array);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setErr(null);

    AsyncGetData()
      .then((data) => {
        setArticleList(data);
      })
      .catch((err) => {
        setErr(err);
        console.error("error occurred");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const { deleteArticle, addArticle, updateArticle } =
    useArticleActions(setArticleList);

  if (isLoading) {
    return <div>...isLoading</div>;
  }

  if (err) {
    return <div>{err}</div>;
  }

  return (
    <div className={styles["todo-main-container"]}>
      <MemoArticleList
        articleList={articleList}
        deleteArticle={deleteArticle}
      />
      <MemoArticleEdit articleList={articleList} />
    </div>
  );
};

export default MainArticle;
