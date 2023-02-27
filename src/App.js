import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <BrowserRouter>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News setProgress={setProgress} key="health" category="health" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News setProgress={setProgress} key="sports" category="sports" />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
