import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import Header from "./Components/Header";
import GlobalStyle from "./utils/style/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"user/12"} replace />} />
        <Route path="user/:userId" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
