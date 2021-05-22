import React, { useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { FormBtn, Input } from "../components/Form";
import { Result, ResultItem } from "../components/Result";
import { Container, Col, Row } from "../components/Grid";

function Search() {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookSearch({ [name]: value });
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getApi(bookSearch.query)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Jumbotron>
        <h1>React Google Books Search</h1>{" "}
        <h3>Search for and save books of interest</h3>
      </Jumbotron>
      <Container>
        <Row>
          <Col size="md-12">
            <form className="search">
              <div className="form-group">
                {" "}
                <label htmlFor="search">Books:</label>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="query"
                        // value={bookSearch}
                        onChange={handleInputChange}
                        placeholder="Enter book name here"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <FormBtn
                        onClick={handleFormSubmit}
                        type="submit"
                        className="input-lg"
                      >
                        Search
                      </FormBtn>
                    </Col>
                  </Row>
                </Container>
              </div>
            </form>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col size="xs-12">
            {!books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
              <Result>
                {books.map((book) => {
                  return (
                    <div>
                      <ResultItem
                        key={book._id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        link={book.volumeInfo.infoLink}
                      />
                      <div>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={book.volumeInfo.infoLink}
                        >
                          View
                        </a>
                        <FormBtn>Save</FormBtn>
                      </div>
                    </div>
                  );
                })}
              </Result>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
