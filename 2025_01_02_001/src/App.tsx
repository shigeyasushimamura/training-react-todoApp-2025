import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
