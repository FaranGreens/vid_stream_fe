import nv from "../CSS/Navbar.module.css";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ResultDropDown from "./ResultDropDown";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getData } from "../Redux/Actions/myAction";
import { Button } from "@chakra-ui/react";

const BASE_URL = import.meta.env.VITE_API_SERVER;

const SearchInputAndList = () => {
  const [searchparams, setsearchparams] = useSearchParams();
  //   const [movies, setMovies] = useState([]);
  const query = searchparams.get("query") || "";
  const [results, setResults] = useState([]);
  const [showList, setshowList] = useState(false);
  const inputRef = useRef();
  const navigate = useNavigate();
  const searchInputChange = (e) => {
    // console.log(e.target.value);
    setsearchparams({ query: e.target.value });
  };

  const getResults = () => {
    // fetch(`https://www.omdbapi.com/?apikey=fafa77a7&s=${query}`)
    fetch(BASE_URL + "/movies?q=" + query)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data.data.movies);
        localStorage.setItem("results", JSON.stringify(data.data.movies));
        // navigate("/search")
        
      });
  };
  useEffect(() => {
    inputRef.current.onClick = () => {
      console.log("input cicked");
    };
    const id = setTimeout(() => {
      getResults();
    }, 600);

    return () => clearTimeout(id);
  }, [searchparams]);

  return (
    <div className={nv.searchdiv}>
      <input
        placeholder="Search"
        className={nv.searchBar}
        onChange={searchInputChange}
        ref={inputRef}
      />
      {/* <Button bg={"blue.700"} ref={inputRef}>Search</Button> */}
      {/* <NavLink to="/search"> */}
      <button className={nv.searchIcon}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      {/* </NavLink> */}
      <ResultDropDown
        props={results}
        setResults={setResults}
        setsearchparams={setsearchparams}
      />
    </div>
  );
};

export default SearchInputAndList;
