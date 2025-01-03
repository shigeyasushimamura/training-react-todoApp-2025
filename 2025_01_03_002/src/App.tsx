import { useReducer } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainNews from "./features/news/components/MainNews";
import NewsDetail from "./features/news/components/NewsDetail";
import { NewsReducer } from "./features/news/context/newsReducer";
import { initialState, NewsContext } from "./features/news/context/newsContext";

function App() {
  // const [newsList, setNewsList] = useState<News[]>([]);
  // const { data, isLoading, error } = UseFetchNews();

  const [state, dispatch] = useReducer(NewsReducer, initialState);
  console.log("App", state);
  // useEffect(() => {
  //   setNewsList(data);
  // }, [data]);

  // const { addNews, deleteNews } = UseNewsAction(setNewsList);

  // if (isLoading) return <div>...isLoading</div>;
  // if (error) return <div>..isError</div>;

  return (
    <>
      <BrowserRouter>
        <NewsContext.Provider value={{ state, dispatch }}>
          <Layout>
            <Routes>
              <Route path="/" element={<MainNews />}></Route>
              <Route path="/:id" element={<NewsDetail />}></Route>
            </Routes>
          </Layout>
        </NewsContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
