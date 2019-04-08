import axios from "axios";
// Export a function for google api calls
// require('dotenv').config()
// console.log();

export default {
  searchForBooks: function(search) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search);
  }
};
