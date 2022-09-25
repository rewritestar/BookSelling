class BookApi {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  makeBook(booksApi) {
    return booksApi.map((item) => {
      const book = {
        id: item.id,
        thumbnail: item.volumeInfo.readingModes.image
          ? item.volumeInfo.imageLinks.thumbnail
          : "images/logo.png",
        title: item.volumeInfo.title,
        writer: item.volumeInfo.authors
          ? item.volumeInfo.authors[0]
          : "anomynous",
        publishedDate: item.volumeInfo.publishedDate,
        price:
          item.saleInfo.saleability === "NOT_FOR_SALE"
            ? "20000"
            : item.saleInfo.listPrice.amount,
        description: item.volumeInfo.description
          ? item.volumeInfo.description
          : "no description",
        isImage: item.volumeInfo.readingModes.image ? true : false,
      };
      return book;
    });
  }

  async random(RANDOMQUERY, IDX) {
    const res = await fetch(
      `https://books.googleapis.com/books/v1/volumes?q=${RANDOMQUERY[IDX]}&maxResults=16&key=${this.key}`,
      this.getRequestOptions
    );
    const json = await res.json();
    const booksApi = json.items;
    return this.makeBook(booksApi);
  }
  async search(keyword) {
    const res = await fetch(
      `https://books.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=16&key=${this.key}`,
      this.getRequestOptions
    );
    const json = await res.json();
    const booksAPI = json.items;
    return this.makeBook(booksAPI);
  }
}
export default BookApi;
