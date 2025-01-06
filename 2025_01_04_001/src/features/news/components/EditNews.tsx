import { FC, FormEvent, memo, useState } from "react";
import { Category, News } from "../types/Types";

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
    <div>
      <h1>記事追加</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="title">タイトル</label>

          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
        </div>

        <div>
          <label htmlFor="publishDate">公開日</label>
          <input
            value={publishDate}
            type="text"
            onChange={(e) => setPublishDate(e.target.value)}
          />
        </div>

        <div className="">
          <label htmlFor="category">カテゴリー</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            <option value="雑談">雑談</option>
            <option value="大切なお知らせ">大切なお知らせ</option>
            <option value="ニュース">ニュース</option>
          </select>
        </div>

        <div className="">
          <label htmlFor="content">本文</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" disabled={isBtnDisabled}>
          新規投稿
        </button>
      </form>
    </div>
  );
});

export default EditNews;
