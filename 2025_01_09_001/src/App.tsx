import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNews from "./features/news/Components/MainNews";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<MainNews />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
