import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import {SearchView} from "./components/SearchView";
import MovieView from "./components/MovieView";
import { Routes, Route, useNavigate } from "react-router-dom";
import Page404View from "./components/Page404View";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate ();
// https://api.themoviedb.org/3/search/movie?api_key=500f8af666af6bc2c3c23efd0eda676d&language=en-US&query=Star%20Wars&include_adult=false
  useEffect(() => {
    if (searchText) {
      console.log(searchText, " is the search text");
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=500f8af666af6bc2c3c23efd0eda676d&language=en-US&query=${searchText}&include_adult=false`
      )
      .then(response=> response.json())
      .then(data => {
          setSearchResults(data.results);
        })
      .catch(err => {
         
          if (err)
          {
              navigate('/page404');
          }
        }
          );
    }
  }, [searchText]);
  console.log(searchResults, " is the search results");
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<AboutView />}></Route>
        <Route
          path="/search"
          element={
          <div>
            <SearchView keyword={searchText} searchResults={searchResults} />
            </div>
          }
        />
        <Route path="/movies/:id" element={<MovieView />}></Route>
        <Route path="/page404" element={<Page404View />}></Route>
      </Routes>
    </div>
  );
}

export default App;
