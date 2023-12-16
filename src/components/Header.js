import React from "react";
import Search from "./Search";

function Header({ onSearch }) {
  
  // function handleSearch(userText) {
  //   onSearch(userText);
  // }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchChange={onSearch}/>
    </header>
  );
}

export default Header;
