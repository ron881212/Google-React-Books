import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { List, ListItem } from "../components/List";
import Saved from "../components/saved";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    buy: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", buy: "",})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    const saveResults = this.state.books.map(get => 
      <Saved 
      title={get.title}
      picture={get.image}
      author={get.author}
      description={get.description}
      delete={() => this.deleteBook(get.book._id)}
      buy={get.buy}/>
  )
    return (
       {saveResults}
    );
  }
}

export default Books;
