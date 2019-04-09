import axios from "axios";
// Export a function for google api calls
// require('dotenv').config()
// console.log();

export default {
  searchForBooks: function(search) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search);
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
