import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import "../App.css";

const lawTypes = [
  "Family law",
  "Criminal defense lawyer",
  "Corporate lawyer",
  "Personal injury lawyer",
  "Labour law",
  "Tax law",
  "Immigration law",
  "Property law",
  "Divorce lawyer",
];

const Lawcategories = () => {
  //   const listItems = lawTypes.map((lawtypes)=>
  //     <Nav></Nav>
  //   );
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home" className="btn btn-success">
          Active
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
      <br />
      <br />
      <br />
    </Nav>
  );
};

export default Lawcategories;
