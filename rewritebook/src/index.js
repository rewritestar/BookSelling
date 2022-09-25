import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.jsx";
import reportWebVitals from "./reportWebVitals";
import BookApi from "./service/book_api";

const root = ReactDOM.createRoot(document.getElementById("root"));
const bookApi = new BookApi(process.env.REACT_APP_BOOK_API_KEY);
root.render(
  <React.StrictMode>
    <App bookApi={bookApi} />
  </React.StrictMode>
);
reportWebVitals();
