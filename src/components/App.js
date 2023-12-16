import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(userText) {
    setSearchInput(userText);
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer search={searchInput}/>
    </div>
  );
}

export default App;
