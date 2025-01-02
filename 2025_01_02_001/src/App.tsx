import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import MainArticleList from "./domain/news/components/MainArticleList";
import { Article } from "./domain/news/types/Types";

const array: Article[] = [
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
];

function App() {
  const [articleList, setArticleList] = useState<Article[]>(array);

  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MainArticleList articleList={articleList} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
