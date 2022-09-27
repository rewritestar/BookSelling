import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.module.css";
import BookDetail from "./components/book_detail/book_detail";
import Cart from "./components/cart/cart";
import Home from "./components/home/home";
import Like from "./components/like/like";
import Search from "./components/search/search";
import styles from "./app.module.css";
import { useEffect, useState } from "react";
import Header from "./components/header/header";
function App({ bookApi, likeService, cartService }) {
  const [allCount, setAllCount] = useState(
    localStorage.getItem("cartCount") ? localStorage.getItem("cartCount") : 0
  );
  useEffect(() => {
    console.log(likeService.getBooks()); // null값 나옴
    if (!likeService.getBooks()) likeService.init();
    if (!cartService.getBooks()) cartService.init();
    // if (localStorage.getItem("cart") == undefined)
    //   localStorage.setItem("cart", JSON.stringify([]));
  }, []);
  useEffect(() => {
    localStorage.setItem("cartCount", allCount);
  }, [allCount]);
  const handleAllCount = (newBooks) => {
    let counts = 0;
    newBooks.forEach((item) => (counts += item.count));
    setAllCount(counts);
  };
  const HeaderCartCount = (props) => {
    return <Header {...props} allCount={allCount} />;
  };
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home bookApi={bookApi} HeaderCartCount={HeaderCartCount} />
            }
          />
          <Route
            path="/bookdetail"
            element={
              <BookDetail
                onAllCount={handleAllCount}
                HeaderCartCount={HeaderCartCount}
                likeService={likeService}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                onAllCount={handleAllCount}
                allCount={allCount}
                HeaderCartCount={HeaderCartCount}
              />
            }
          />
          <Route
            path="/like"
            element={
              <Like
                HeaderCartCount={HeaderCartCount}
                likeService={likeService}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search bookApi={bookApi} HeaderCartCount={HeaderCartCount} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
