import { FC, memo, useState } from "react";
import { Article } from "../types";
import styles from "./Article.module.css";

interface Props {
  addArticle: (article: Article) => void;
}

const ArticleEdit: FC<Props> = ({ addArticle }) => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(addArticle);
    addArticle({
      id: Date.now(),
      title: title,
      text: text,
      path: "/mikeneko.jpg",
    });

    setText("");
    setTitle("");
  };

  const isButtonDisabled = title.trim() === "" || text.trim() === "";

  return (
    <>
      <div className={styles["todo-form-container"]}>
        <h1>管理者モード</h1>
        <h2>記事を追加します</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles["todo-form-group"]}>
            <label htmlFor="title">タイトル</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles["todo-form-group"]}>
            <label htmlFor="text">内容</label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={isButtonDisabled}
            className={styles["submit-button"]}
          >
            記事を追加
          </button>
        </form>
      </div>
    </>
  );
};

export const MemoArticleEdit = memo(ArticleEdit);
