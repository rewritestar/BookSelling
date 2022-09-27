class LikeService {
  init() {
    localStorage.setItem("like", JSON.stringify([]));
  }
  getBooks() {
    return JSON.parse(localStorage.getItem("like"));
  }

  add(book) {
    const like = JSON.parse(localStorage.getItem("like"));
    const found = like.find((item) => item.id === book.id);
    if (found) {
      return 0;
    }
    like.push(book);
    localStorage.setItem("like", JSON.stringify(like));
    return 1;
  }
  remove(book) {
    const origin = JSON.parse(localStorage.getItem("like"));
    const newBooks = origin.filter((item) => item.id !== book.id);
    localStorage.setItem("like", JSON.stringify(newBooks));
    return newBooks;
  }
}

export default LikeService;
