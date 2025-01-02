import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import MainArticleList from "./domain/news/components/MainArticleList";
import { Article } from "./domain/news/types/Types";
import useFetcArticle from "./domain/news/hooks/useFetcArticle";
import UseArticleAction from "./domain/news/hooks/useArticleAction";
import MainArticleDetail from "./domain/news/components/MainArticleDetail";

function App() {
  const [articleList, setArticleList] = useState<Article[]>([]);

  const { data, isLoading, error } = useFetcArticle();

  useEffect(() => {
    setArticleList(data);
  }, [data]);

  const { addArticle, deleteArticle } = UseArticleAction(setArticleList);

  if (isLoading) return <div>...loading...</div>;
  if (error) return <div>error occurred</div>;

  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MainArticleList
                  articleList={articleList}
                  deleteArticle={deleteArticle}
                  addArticle={addArticle}
                />
              }
            ></Route>
            <Route
              path="/:id"
              element={<MainArticleDetail articleList={articleList} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
