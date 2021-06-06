import React, { useState } from "react";
import "./SearchBar.scss";

export default function SearchBar({ getQuery }) {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <div className="search-container">
      <form>
        <input
          className="app-search"
          type="text"
          name="search"
          placeholder="Search a coin"
          onChange={(e) => {
            onChange(e.target.value);
          }}
          autoFocus
        />
      </form>
    </div>
  );
}
