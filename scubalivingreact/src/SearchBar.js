import React from "react";
import SearchInput from "./SearchInput";
import SearchBtn from "./SearchBtn";

class SearchBar extends React.Component {
  render() {
    return (
      <div id="searchbar" className="searchbar">
        <SearchInput />
        <SearchBtn />
      </div>
    );
  }
}

export default SearchBar;
