import { FC, memo, useState } from "react";
import { Category, News } from "../types/Types";

interface Props {
  addNews: (news: News) => void;
}

const EditNews: FC<Props> = memo(() => {
  const id = Number(Math.random() * 10000);
  const [publishDate, setPublishDate] = useState("2025-01-01");
  const [title, setTitle] = useState("ななしタイトル");
  const [category, setCategory] = useState<Category>("ニュース");
  const [content, setContent] = useState("");
  const path = "pen.png";

  const handleSubmit = () => {};

  return (
    <div>
      <h1>記事追加</h1>
      <form>
        <div>
          <label htmlFor="title">タイトル</label>

          <input type="text" id="title"></input>
        </div>

        <div>
          <label htmlFor="publishDate">公開日</label>
          <input type="text"></input>
        </div>

        <div className="">
          <label htmlFor="category">カテゴリー</label>
          <select>
            <option value="雑談">雑談</option>
            <option value="大切なお知らせ">大切なお知らせ</option>
            <option value="ニュース">ニュース</option>
          </select>
        </div>

        <div className="">
          <label htmlFor="content">本文</label>
          <textarea></textarea>
        </div>
      </form>
    </div>
  );
});

export default EditNews;
