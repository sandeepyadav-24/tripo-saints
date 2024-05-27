import React from "react";

function SearchBar({ onSearch }) {
  const [term, setTerm] = React.useState("");

  const handleInputChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for an employee..."
        value={term}
        onChange={handleInputChange}
        className="form-control"
      />
    </div>
  );
}

export default SearchBar;
