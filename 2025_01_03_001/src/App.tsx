import { useState } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainNews from "./features/news/components/MainNews";
import { News } from "./features/news/components/types/Types";

const array: News[] = [
  {
    id: 1,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
  },
  {
    id: 2,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "雑談",
    content: "開催！",
  },
  {
    id: 3,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
  },
  {
    id: 4,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "大切なお知らせ",
    content: "開催！",
  },
  {
    id: 5,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
  },
  {
    id: 6,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "雑談",
    content: "開催！",
  },
  {
    id: 7,
    publishDate: "2024-12-01",
    title: "バイローカルマーケット",
    category: "ニュース",
    content: "開催！",
  },
];

function App() {
  const [newsList, setNewsList] = useState<News[]>(array);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<MainNews newsList={newsList} />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
