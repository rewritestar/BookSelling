import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.module.css";
import BookDetail from "./components/book_detail/book_detail";
import Cart from "./components/cart/cart";
import Home from "./components/home/home";
import Like from "./components/like/like";
import Search from "./components/search/search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/bookdetail" element={<BookDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/like" element={<Like />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
