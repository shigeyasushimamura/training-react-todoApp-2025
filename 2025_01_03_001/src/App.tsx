import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainNews from "./features/news/components/MainNews";
import { News } from "./features/news/components/types/Types";
import UseFetchNews from "./features/news/hooks/useFetchNews";
import UseNewsAction from "./features/news/hooks/useNewsAction";
import NewsDetail from "./features/news/components/NewsDetail";

function App() {
  const [newsList, setNewsList] = useState<News[]>([]);
  const { data, isLoading, error } = UseFetchNews();

  useEffect(() => {
    setNewsList(data);
  }, [data]);

  const { addNews, deleteNews } = UseNewsAction(setNewsList);

  if (isLoading) return <div>...isLoading</div>;
  if (error) return <div>..isError</div>;

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
              element={<NewsDetail newsList={newsList} />}
            ></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
