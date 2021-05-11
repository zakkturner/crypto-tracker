import React from "react";
import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="search-container">
      <input
        className="app-search"
        type="text"
        name="search"
        placeholder="Search a coin"
      />
    </div>
  );
}
