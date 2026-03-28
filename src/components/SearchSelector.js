
import { useState } from "react";

function SearchBar({onSearch}) {
  const [search, setSearch]= useState("");
  

  const onClick = (e)=> {
    e.preventDefault();
    onSearch(search);
  };

  return(
    <form onSubmit={onClick}>
      <input type="text" placeholder="Search Villain" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;