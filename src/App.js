import "./App.css";
import React, { useState, useEffect } from "react";
import MovieGrid from "./components/MovieGrid";
import SearchBox from "./components/SearchBox";

function App() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?s=${searchValue}&apikey=a336bcc5`
    )
      .then((res) => res.json())
      .then((data) => {
        if(data.Search) {
          setItems(data.Search);
        }
      })
      .catch((error) => console.log(error))
  }, [searchValue]);

  return (
    <div className="App">
      <h1 className="title">Search Movies</h1>
      <SearchBox setSearchValue={setSearchValue} searchValue={searchValue} />
      <MovieGrid items={items}/>
    </div>
  );
}

export default App;
