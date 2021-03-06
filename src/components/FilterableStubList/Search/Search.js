import React from "react";

import Card from "../../../UI/Card";
import "./Search.css";

const Search = (props) => {
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            id="filterTextInput"
            data-testid="filterTextInput"
            value={props.filterText}
            onChange={(event) => props.onFilterTextChange(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
};

export default Search;
