import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { List, ListItem } from "../components/List";
import Saved from "../components/saved";
import Nav from '../components/navBar'
import Hero from '../components/hero'

class Books extends Component {
  
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    picture: "",
    buy: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", buy: "", picture: ""})
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
      image={get.image}
      author={get.author}
      description={get.description}
      delete={() => this.deleteBook(get._id)}
      buy={get.buy}/>
  )
    return (
      <div>
        <Nav />
        <Hero />
        {saveResults}
      </div>
    );
  }
}

export default Books;
