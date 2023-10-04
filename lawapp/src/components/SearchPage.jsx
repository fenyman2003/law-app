import React from "react";
import SearchLawyer from "../components/SearchLawyer";
import { useState, useEffect } from "react";
import client from "../api";
import { Button, Form, Dropdown } from "react-bootstrap";

function SearchBar({ onSearch }) {
  const [name, setname] = useState("");
  const [law, setlaw] = useState("");

  const handleNameChange = (e) => {
    setname(e.target.value);
  };
  const handlelawChange = (e) => {
    setlaw(e.target.value);
  };
  const handleSearch = () => {
    let values = {
      name: name,
      law: law,
    };
    console.log(values);
    onSearch(values);
    setname("");
    setlaw("");
  };

  return (
    <>
      <div>
        <div className="d-flex flex-row mt-3 justify-content-around align-items-center">
          <h2 className="m-5">Search By Lawyer Name </h2>
          <div className="w-50  ">
            <Form>
              <Form.Group controlId="searchBar">
                <Form.Control
                  type="text"
                  placeholder="Search lawyers..."
                  onChange={handleNameChange}
                  value={name}
                />
              </Form.Group>
            </Form>
          </div>
          <Button onClick={handleSearch} className="btn btn-primary">
            Submit
          </Button>
        </div>
      </div>
      <div>
        <div className="d-flex flex-row mt-3 justify-content-around align-items-center">
          <h2 className="m-1">Search By lawyers by Law Area </h2>
          <div className="w-50  ">
            <Form>
              <Form.Group controlId="searchBar">
                <Form.Control
                  type="text"
                  placeholder="Search lawyers by law area..."
                  onChange={handlelawChange}
                  value={law}
                />
              </Form.Group>
            </Form>
          </div>
          <Button onClick={handleSearch} className="btn btn-primary">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

const SearchPage = () => {
  const [name, setname] = useState("");
  const [lawArea, setlawArea] = useState("");
  const [lawyerInfo, setlawyerInfo] = useState([]);
  async function get(url) {
    let response = await client.get(url);
    console.log(response.data);
    return response.data;
  }
  useEffect(() => {
    if (name.length > 0 || lawArea.length > 0) {
      async function fetchData() {
        if (name.length > 0) {
          let data = await get(`/search/name?names=${name}`);
          setlawyerInfo(data);
        } else {
          let data = await get(`/search/area?lawAreas=${lawArea}`);
          setlawyerInfo(data);
          console.log(lawyerInfo);
        }
      }
      console.log("hi");
      fetchData();
    }
  }, [name, lawArea]);

  const handleNameSearch = (term) => {
    setname(term.name);
    setlawArea(term.law);
  };

  return (
    <>
      <SearchBar onSearch={handleNameSearch} />
      {(name && name.length > 0) | (lawArea && lawArea.length > 0) && (
        <SearchLawyer lawyerInfo={lawyerInfo} />
      )}
    </>
  );
};

export default SearchPage;
