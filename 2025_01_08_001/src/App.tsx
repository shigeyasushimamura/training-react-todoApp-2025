import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainNews from "./features/news";
import { News } from "./features/news/types/type";
import GetNews from "./api/getNews";
import UseNewsAction from "./features/news/hooks/useNewsAction";

const array: News[] = [
  {
    id: 1,
    title: "今年1番のビールは？",
    body: "はてなびーる！！",
    path: "pen.png",
  },
  {
    id: 2,
    title: "今年2番のビールは？",
    body: "koronaびーる！！",
    path: "pen.png",
  },
  {
    id: 3,
    title: "今年3番のビールは？",
    body: "sapporoびーる！！",
    path: "pen.png",
  },
];

function App() {
  const [newsList, setNewsList] = useState<News[]>(array);
  const { data, isLoading, error } = GetNews();
  const { addNews, deleteNews } = UseNewsAction(setNewsList);

  useEffect(() => {
    if (data) {
      setNewsList(data);
    }
  }, [data]);

  if (isLoading) return <div>...is Loading</div>;
  if (error) return <div>...is Error Occurred</div>;

  return (
    <div>
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
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
