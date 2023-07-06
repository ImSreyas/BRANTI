import React from "react";
import { Form } from "react-router-dom";

const Search = () => {
  return (
    <div className="search-container">
      <Form method="get" className="search-form" action=".">
        <input
          type="text"
          name="search"
          placeholder="Type to search..."
          className="search-input"
        />
        <button type="submit" className="search-btn"></button>
      </Form>
    </div>
  );
};

export default Search;
