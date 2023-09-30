import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import kemal from "../kemal.jpg";
import ben from "../ben.jpeg";
import ryan from "../ryan.jpeg";
import bale from "../bale.jpeg";
import { Link } from "react-router-dom";
import client from "../api/index";

const LawyerCard = () => {
  const [lawyersInfo, setLawyersInfo] = useState([]);
  async function get(url) {
    let response = await client.get(url);
    return response.data;
  }
  useEffect(() => {
    if (lawyersInfo.length) return;
    async function fetchData() {
      let data = await get("lawyers");
      setLawyersInfo(data);
    }

    fetchData();
  }, []);

  return (
    <>
      {lawyersInfo.length == 0 ? (
        <p>Hiii</p>
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div className="d-flex flex-nowrap overflow-auto">
                {lawyersInfo.map((data, key) => (
                  <div key={key} className="col-md-3 px-1">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={kemal}
                        className="img-fluid img-thumbnail"
                      ></Card.Img>
                      <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <div className="d-inline-flex flex-row justify-content-around">
                          {data.lawArea.map((datas, key) => (
                            <Card.Subtitle key={key} className="m-2 text-muted">
                              {"   "}
                              {datas}
                              {"   "}
                            </Card.Subtitle>
                          ))}
                        </div>
                        <Card.Text>{data.description}</Card.Text>
                        <Link to={`lawyers/${data._id}`}>
                          <Button className="btn btn-primary">
                            Book a consultation{" "}
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LawyerCard;
