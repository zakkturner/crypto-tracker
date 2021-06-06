import React, { useState } from "react";
import "./SearchBar.scss";

export default function SearchBar() {
  const [text, setText] = useState("");

  // const onChange = () => {
  //   console.log("y");
  // };
  return (
    <div className="search-container">
      <input
        className="app-search"
        type="text"
        name="search"
        placeholder="Search a coin"
        // onChange={() => {
        //   onChange();
        // }}
        // autoFocus
      />
    </div>
  );
}
