import React from "react";
import SearchPage from "../components/SearchPage";
import SearchLawyer from "../components/SearchLawyer";

function Search() {
  return (
    <>
      {/* <SearchPage /> */}
      <SearchLawyer minPrice={400} maxPrice={1000} />
    </>
  );
}

export default Search;
