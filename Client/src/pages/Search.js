import React, { useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { FormBtn, Input } from "../components/Form";
import { Result, ResultItem } from "../components/Result";

function Search() {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setBookSearch(value);
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(bookSearch)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Jumbotron>
        <h1>React Google Books Search</h1>
        <h3>Search for and save books of interest</h3>
      </Jumbotron>
      <form className="search">
        <div className="form-group">
          {" "}
          <label htmlFor="search">Books:</label>
          <input
            name="bookSearch"
            value={bookSearch}
            onChange={handleInputChange}
            placeholder="Enter book name here"
          />
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="btn btn-success"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
