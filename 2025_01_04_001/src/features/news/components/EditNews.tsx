import { FC, FormEvent, memo, useState } from "react";
import { Category, News } from "../types/Types";
import styles from "./News.module.css";

interface Props {
  addNews: (news: News) => void;
}

const EditNews: FC<Props> = memo(({ addNews }) => {
  // const id = Number(Math.random() * 10000);
  const [id, setId] = useState<number>(Math.floor(Math.random() * 10000));
  const [publishDate, setPublishDate] = useState("2025-01-01");
  const [title, setTitle] = useState("ななしタイトル");
  const [category, setCategory] = useState<Category>("ニュース");
  const [content, setContent] = useState("");
  const path = "pen.png";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setId(Math.floor(Math.random() * 1000000));

    const tmp = {
      id: id,
      title: title,
      category: category,
      content: content,
      path: path,
      publishDate: publishDate,
    };
    console.log(tmp);
    addNews(tmp);
  };

  const isBtnDisabled = !title || !category || !content;

  return (
    <div className={styles["news-post"]}>
      <h1 className={styles["news-post__heading"]}>記事追加</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={styles["news-post__form"]}
      >
        <div className={styles["news-post__form-field"]}>
          <label htmlFor="title" className={styles["news-post__label"]}>
            タイトル
          </label>

          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={styles["news-post__input"]}
          ></input>
        </div>

        <div className={styles["news-post__form-field"]}>
          <label htmlFor="publishDate" className={styles["news-post__label"]}>
            公開日
          </label>
          <input
            value={publishDate}
            type="text"
            onChange={(e) => setPublishDate(e.target.value)}
            className={styles["news-post__input"]}
          />
        </div>

        <div className={styles["news-post__form-field"]}>
          <label htmlFor="category" className={styles["news-post__label"]}>
            カテゴリー
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className={styles["news-post__input"]}
          >
            <option value="雑談">雑談</option>
            <option value="大切なお知らせ">大切なお知らせ</option>
            <option value="ニュース">ニュース</option>
          </select>
        </div>

        <div className={styles["news-post__form-field"]}>
          <label htmlFor="content" className={styles["news-post__label"]}>
            本文
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles["news-post__textarea"]}
          ></textarea>
        </div>
        <div className={styles["news-post__btn-container"]}>
          <button
            type="submit"
            disabled={isBtnDisabled}
            className={styles["news-post__btn"]}
          >
            新規投稿
          </button>
        </div>
      </form>
    </div>
  );
});

export default EditNews;
