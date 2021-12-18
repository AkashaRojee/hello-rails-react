import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Greeting from "./Greeting";
import store from "../redux/configureStore";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
        <Route
          path="/"
          element={<Link to="/greeting">Display random greeting</Link>}
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
