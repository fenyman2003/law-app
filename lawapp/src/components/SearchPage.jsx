// ProductList.js
import React, { useState, useEffect } from "react";
import SearchLawyer from "./SearchLawyer";

const SearchPage = () => {
  let lo, hi;
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    lo = minPrice;
    hi = maxPrice;
    // Do something with minPrice and maxPrice, e.g., send to an API or perform a search
    console.log("Minimum Price:", minPrice);
    console.log("Maximum Price:", maxPrice);
  };

  return (
    <>
      <div>
        <h2>Price Filter</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="minPrice">Minimum Price:</label>
            <input
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxPrice">Maximum Price:</label>
            <input
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <SearchLawyer minPrice={lo} maxPrice={hi} />
    </>
  );
};

export default SearchPage;
