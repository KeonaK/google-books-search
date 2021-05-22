import React from "react";
import "./style.css";

export function Result({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ResultItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
