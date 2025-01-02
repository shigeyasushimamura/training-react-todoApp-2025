import React, { FC, useState, memo } from "react";
import { Article, Category } from "../types/Types";
interface Props {
  addArticle: (article: Article) => void;
}
import styles from "./Article.module.css";

const FormArticle: FC<Props> = ({ addArticle }) => {
  const [title, setTitle] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [category, setCategory] = useState<Category>("雑談");
  const [content, setContent] = useState("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Category; // 型アサーションを使用して Category に変換
    setCategory(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: バリデーション

    addArticle({
      id: Math.random() * 10000,
      title: title,
      publishDate: publishDate,
      category: category,
      content: content,
    });
  };
  const isButtonDisabled = !title || !publishDate || !category || !content;

  return (
    <>
      <div className={styles["article-form-container"]}>
        <h1>新規投稿</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles["article-form-group"]}>
            <label htmlFor="title">タイトル</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles["article-form-group"]}>
            <label htmlFor="publishDate">公開日</label>
            <input
              id="publishDate"
              type="text"
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
            />
          </div>
          <div className={styles["article-form-group"]}>
            <label htmlFor="content">本文</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className={styles["article-form-group"]}>
            <label htmlFor="category">カテゴリー</label>
            <select id="category" onChange={handleCategoryChange}>
              <option value="ニュース">ニュース</option>
              <option value="雑談">雑談</option>
              <option value="大切なお知らせ">大切なお知らせ</option>
            </select>
          </div>
          <button
            type="submit"
            aria-label="新規投稿"
            disabled={isButtonDisabled}
          >
            投稿
          </button>
        </form>
      </div>
    </>
  );
};

export const MemoFormArticle = memo(FormArticle);
