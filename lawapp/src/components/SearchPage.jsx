import React from "react";
import SearchLawyer from "../components/SearchLawyer";
import { useState, useEffect } from "react";
import client from "../api";
import { Button, Form, Dropdown } from "react-bootstrap";

function SearchBar({ onSearch }) {
  const [search, setsearch] = useState("");

  const handlesearchChange = (e) => {
    setsearch(e.target.value);
  };
  const handleSearch = () => {
    onSearch(search);
    setsearch("");
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center m-3">
        <h4 className="text-primary"> Search Lawyers by Name or Law Area</h4>
        <div className="d-flex flex-row justify-content-around m-3 w-25">
          <Form className="">
            <Form.Group controlId="searchBar">
              <Form.Control
                type="text"
                placeholder="Search lawyers..."
                onChange={handlesearchChange}
                value={search}
              />
            </Form.Group>
          </Form>
          <Button onClick={handleSearch} classsearch="btn btn-primary">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

const SearchPage = () => {
  const [search, setsearch] = useState("");
  const [lawyerInfo, setlawyerInfo] = useState([]);

  async function get(url) {
    let response = await client.get(url);
    console.log(response.data);
    return response.data;
  }
  useEffect(() => {
    if (search.length > 0) {
      async function fetchData() {
        let data = await get(`/search?searchParam=${search}`);
        setlawyerInfo(data);
        console.log(lawyerInfo);
      }
      console.log("hi");
      fetchData();
    }
  }, [search]);

  const handlesearchSearch = (term) => {
    setsearch(term);
  };

  return (
    <>
      <SearchBar onSearch={handlesearchSearch} />
      {search && search.length > 0 && <SearchLawyer lawyerInfo={lawyerInfo} />}
    </>
  );
};

export default SearchPage;
