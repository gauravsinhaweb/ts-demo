import React from "react";

interface Props {
  onSearch: (value: string) => void;
}
const Search = ({ onSearch }: Props) => {
  return (
    <div className="search-box">
      <input
        type="search"
        onChange={(e) => onSearch(e.target.value)}
        // value={""}
        placeholder="Search Products"
      />
    </div>
  );
};

export default Search;
