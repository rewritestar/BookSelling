class CartService {
  init() {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  getBooks() {
    return JSON.parse(localStorage.getItem("cart"));
  }
  setBooks(book) {
    localStorage.setItem("cart", JSON.stringify(book));
  }
  add(book) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const found = cart.find((item) => item.id === book.id);
    if (found) {
      return 0;
    }
    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
  }
  setCartCount(num) {
    localStorage.setItem("cartCount", num);
  }
  getCartCount() {
    return localStorage.getItem("cartCount");
  }
  countUpAndDown(count, book) {
    const books = JSON.parse(localStorage.getItem("cart"));
    books.forEach((item) => {
      if (item.id == book.id) item.count = count;
    });
    localStorage.setItem("cart", JSON.stringify(books));
    return books;
  }
}

export default CartService;
