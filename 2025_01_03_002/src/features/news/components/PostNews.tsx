import { FC, memo, useState, FormEvent } from "react";
import { Category } from "./types/Types";
import styles from "./News.module.css";
import UseNewsState from "../hooks/useNewsState";
import { addNews } from "../context/newsAction";

const PostNews: FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<Category>("雑談");
  const [publishDate, setPublishDate] = useState("2025-01-01");

  const { dispatch } = UseNewsState();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(
      addNews({
        title: title,
        content: content,
        category: category,
        publishDate: publishDate,
        id: Number(Math.random() * 10000),
      })
    );

    // addNews({
    //   title: title,
    //   content: content,
    //   category: category,
    //   publishDate: publishDate,
    //   id: Number(Math.random() * 10000),
    // });
  };

  const isBtnDisabled = !title || !content;

  return (
    <>
      <div className={styles["post"]}>
        <h2 className={styles["post__header"]}>記事投稿</h2>
        <form onSubmit={handleSubmit} className={styles["post__form"]}>
          <div className={styles["post__title"]}>
            <label>タイトル</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div>
            <label>本文</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>カテゴリー</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Category)}
            >
              <option>雑談</option>
              <option>ニュース</option>
              <option>大切なお知らせ</option>
            </select>
          </div>
          <div>
            <label>投稿日</label>
            <input
              type="text"
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
            ></input>
          </div>

          <button
            type="submit"
            disabled={isBtnDisabled}
            className={styles["news__btn--create"]}
          >
            投稿する
          </button>
        </form>
      </div>
    </>
  );
};

const MemoPostNews = memo(PostNews);
export default MemoPostNews;
