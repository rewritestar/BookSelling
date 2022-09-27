class CartService {
  init() {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  getBooks() {
    return JSON.parse(localStorage.getItem("cart"));
  }
}

export default CartService;
