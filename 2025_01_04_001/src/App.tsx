import "./App.css";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNews from "./features/news/components/MainNews";
import { News } from "./features/news/types/Types";
import UseFetchNews from "./features/news/hooks/useFetchNews";

function App() {
  const [newsList, setNews] = useState<News[]>([]);
  const { data, isLoading, error } = UseFetchNews();

  useEffect(() => {
    if (data) setNews(data);
  }, [data]);

  if (isLoading) return <div>...isloading</div>;
  if (error) return <div>error occurred</div>;

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
