import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import kemal from "../kemal.jpg";
import client from "../api";
import { Link } from "react-router-dom";

function SearchLawyer({ lawyerInfo }) {
  return (
    <>
      {lawyerInfo.length == 0 ? (
        <div className="container mt-5 justify-content-center border border-primary rounded border-2 w-50 h-50">
          <h1 className="d-flex text-info justify-content-center">
            Loading...
          </h1>
        </div>
      ) : (
        <div>
          {lawyerInfo.map((data, id) => (
            <div
              key={id}
              className="container mt-5 justify-content-center border border-primary rounded border-2 w-50 bg"
            >
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
                    <Link to={`book`}>
                      <Button className="btn btn-primary mb-2">
                        {" "}
                        Book Now{" "}
                      </Button>
                    </Link>
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
