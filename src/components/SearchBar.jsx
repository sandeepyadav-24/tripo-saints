import React from "react";

function SearchBar({ onSearch }) {
  const [term, setTerm] = React.useState("");

  const handleInputChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar my-3 ">
      <input
        type="text"
        placeholder="Search "
        value={term}
        onChange={handleInputChange}
        className="form-control px-3 py-1 border-[#CACACA] border-2"
      />
    </div>
  );
}

export default SearchBar;
