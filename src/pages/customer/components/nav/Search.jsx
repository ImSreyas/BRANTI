import React from "react";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { disable } from "../../../store/navOptionSlice"

const Search = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(disable());
  };

  return (
    <div className="search-container" onClick={handleClick}>
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
