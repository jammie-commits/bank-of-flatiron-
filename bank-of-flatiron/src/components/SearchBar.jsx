import React from "react";

const SearchBar = ({ filter, handleFilter }) => {

  return (
    <>
    <input type="text" value={filter} onChange={handleFilter} placeholder="Search Transactions..." />
    </>
  );
}

export default SearchBar;