import React, { FC, useState } from "react";
import { News } from "./types/type";
import styles from "./News.module.css";
import { useNewsActionDispatch } from "./hooks/useNewsActionDispatch";

interface Props {
  newsList: News[];
  addNews: (n: News) => void;
}

const NewsPost: FC<Props> = ({ addNews }) => {
  const [id, setId] = useState(Math.floor(Math.random() * 10000));
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // const { dispatch } = UseNewsContext();
  const { addNewsDispatch } = useNewsActionDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setId(Math.floor(Math.random() * 10000));

    const tmp = {
      id: id,
      title: title,
      body: body,
      path: "pen.png",
    };

    // addNews(tmp);
    addNewsDispatch(tmp);
  };

  const isBtnDisabled = !title || !body;

  return (
    <div className={styles["post"]}>
      <h1 className={styles["post__heading"]}>あなたの投稿を求む！</h1>
      <form onSubmit={handleSubmit} className={styles["post__form"]}>
        <div className={styles["post__item"]}>
          <label htmlFor="text" className={styles["post__label"]}>
            タイトル
          </label>
          <input
            id="text"
            className={styles["post__input"]}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles["post__item"]}>
          <label className={styles["post__label"]}>本文</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className={styles["post__textarea"]}
          />
        </div>
        <div className={styles["post__btn-container"]}>
          <button
            disabled={isBtnDisabled}
            type="submit"
            className={styles["post__btn"]}
          >
            投稿
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsPost;
