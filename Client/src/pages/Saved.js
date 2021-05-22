import React, { useState, useEffect, Link } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Result, ResultItem } from "../components/Result";
import { Container, Col, Row } from "../components/Grid";

function Search() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }
  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Jumbotron>
        <h1>React Google Books Search</h1>{" "}
        <h3>Search for and save books of interest</h3>
      </Jumbotron>
      <Container>
        <Row>
          <Col size="xs-12">
            {!books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
              <Result>
                {books.map((book) => (
                  <ResultItem key={book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>

                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ResultItem>
                ))}
              </Result>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
