import "./App.css";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNews from "./features/news/components/MainNews";
import { News } from "./features/news/types/Types";
import UseFetchNews from "./features/news/hooks/useFetchNews";
import UseNewsAction from "./features/news/hooks/useNewsAction";
import DetailNews from "./features/news/components/DetailNews";

function App() {
  const [newsList, setNews] = useState<News[]>([]);
  const { data, isLoading, error } = UseFetchNews();

  useEffect(() => {
    if (data) setNews(data);
  }, [data]);

  const { addNews, deleteNews } = UseNewsAction(setNews);

  if (isLoading) return <div>...isloading</div>;
  if (error) return <div>error occurred</div>;

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <MainNews
                  newsList={newsList}
                  addNews={addNews}
                  deleteNews={deleteNews}
                />
              }
            ></Route>
            <Route
              path="/:id"
              element={<DetailNews newsList={newsList} />}
            ></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
