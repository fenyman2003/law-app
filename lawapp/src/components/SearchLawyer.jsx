import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import kemal from "../kemal.jpg";
import client from "../api";
import { Link } from "react-router-dom";

function SearchLawyer({ minPrice, maxPrice }) {
  const [lawyerInfo, setlawyerInfo] = useState([]);
  async function get(url) {
    let response = await client.get(url);
    return response.data;
  }
  useEffect(() => {
    if (lawyerInfo.length) return;
    async function fetchData() {
      let data = await get(`/search?minPrice=${minPrice}&maxPrice=${maxPrice}`);
      setlawyerInfo(data);
    }

    fetchData();
  }, []);

  return (
    <>
      {lawyerInfo.length == 0 ? (
        <p>hii hello</p>
      ) : (
        <div>
          {lawyerInfo.map((data, key) => (
            <div className="container mt-5 justify-content-center border border-danger rounded border-2 w-50 bg-warning">
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <img
                    src={kemal}
                    className="img-fluid rounded-circle mt-5"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
                <div className="col-md-9 mt-2">
                  <h3>{data.name}</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4 d-flex flex-row align-items-center">
                        <strong>Law Area:</strong>
                        {data.lawArea.map((datas, key) => (
                          <div key={key} className="m-2 text-muted">
                            {"   "}
                            {datas}
                            {"   "}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <strong>Languages:</strong> English, Hindi
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h2>Biography</h2>
                    <p>{data.biography}</p>
                  </div>
                  <div>
                    <Button className="btn btn-primary mb-2"> Book Now </Button>
                    <h4>Consultation Price : {data.charges}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SearchLawyer;
