import React from "react";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";

function Search() {
  // state = {
  //     search: "",
  //     results: [],
  //     error: "",
  //   };

  //   componentDidMount(){
  //     this.findEmployee("");
  //   };

  //   findEmployee = () => {
  //     API.find()
  //       .then((res) => this.setState({ results: res.data.results }))
  //       .catch((err) => console.log(err));
  //   };

  //   handleInputChange = (event) => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     this.setState({
  //       [name]: value,
  //     });
  //   };

  //   handleFormSubmit = (event) => {
  //     event.preventDefault();
  //     this.findEmployee();
  //   };

  // render(){
  return (
    <div>
      <Jumbotron>
        <h1>React Google Books Search</h1>
        <h3>Search for and save books of interest</h3>
      </Jumbotron>
      <Form />
    </div>
  );
  //   }
}

export default Search;
