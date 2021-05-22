import React from "react";

function Form(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Books:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Book name here "
          id="search"
        />

        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;

// export function Input(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>
//   );
// }

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children}
//     </button>
//   );
// }
