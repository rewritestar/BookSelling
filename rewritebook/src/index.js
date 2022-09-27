import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.jsx";
import reportWebVitals from "./reportWebVitals";
import BookApi from "./service/book_api";
import LikeService from "./service/like_service";
import CartService from "./service/cart_service";

const root = ReactDOM.createRoot(document.getElementById("root"));
const bookApi = new BookApi(process.env.REACT_APP_BOOK_API_KEY);
const likeService = new LikeService();
const cartService = new CartService();
root.render(
  <React.StrictMode>
    <App
      bookApi={bookApi}
      likeService={likeService}
      cartService={cartService}
    />
  </React.StrictMode>
);
reportWebVitals();
