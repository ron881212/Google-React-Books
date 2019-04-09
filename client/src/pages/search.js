import React, { Component } from "react";
import API from "../utils/API";
import Searched from '../components/searched'

class Search extends Component {
  state = {
    search: "",
    results: [],
    books: [],
    error: "",
    title: "",
    author: "",
    description: "",
    picture: "",
    buy: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchForBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.items, error: "" });
        console.log(this.state.results);
        console.log(this.state.search);
        
        
      })
      .catch(err => this.setState({ error: err.message }));
  };
  saveBookSubmit = event => {
    event.preventDefault();
      API.saveBook({
        title: "test",
        author: this.state.author,
        description: this.state.description,
        picture: this.state.picture,
        buy: this.state.buy
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
  };
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", picture: "", buy: ""})
      )
      .catch(err => console.log(err));
  };
  render() {  
    const searchResults = this.state.results.map(find => 
        <Searched 
        title={find.volumeInfo.title}
        picture={find.volumeInfo.imageLinks.thumbnail}
        author={find.volumeInfo.authors[0]}
        description={find.selfLink}
        link={find.volumeInfo.description}
        post={this.saveBookSubmit}
        buy={find.saleInfo.buyLink}/>
    )
    return (
        <div className="container">
            <form>
                <div className="form-group">

                <input onChange={(event) => this.handleInputChange(event)} type="books" className="form-control" id="bookSearch"    aria-describedby="bookSearch" placeholder="Search Book"/>
                <small id="instructions" className="form-text text-muted">Search Google Library For Books</small>
                </div>
                <button onClick={(event) => this.handleFormSubmit(event)} type="submit" className="btn btn-primary">Search Library</    button>
            </form>

            <div className="card mt-5">
            <div className="card-body">

            {searchResults}

            </div>
            </div>
      </div>
    );
  }
}

export default Search;