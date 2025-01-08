import React, { FC, useState } from "react";
import { News } from "./types/type";

interface Props {
  newsList: News[];
  addNews: (n: News) => void;
}

const NewsPost: FC<Props> = ({ addNews }) => {
  const [id, setId] = useState(Math.floor(Math.random() * 10000));
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setId(Math.floor(Math.random() * 10000));

    const tmp = {
      id: id,
      title: title,
      body: body,
      path: "pen.png",
    };

    addNews(tmp);
  };

  return (
    <div className="">
      <h1>あなたの投稿を求む！</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="">
          <label>本文</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">投稿</button>
      </form>
    </div>
  );
};

export default NewsPost;
