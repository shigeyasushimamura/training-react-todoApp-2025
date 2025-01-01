import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainArticle from "./domain/todo/components/MainArticle";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainArticle />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
