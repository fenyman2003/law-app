import React, { useState } from "react";
import client from "../api";

function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    lawArea: [],
    biography: "",
    region: "",
    experience: "",
    languages: [],
    lawCertificate: "",
    charges: "",
    consultingTime: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      // Handle checkbox inputs (lawArea options)
      const isChecked = e.target.checked;
      setFormData((prevData) => ({
        ...prevData,
        lawArea: isChecked
          ? [...prevData.lawArea, value]
          : prevData.lawArea.filter((lawArea) => lawArea !== value),
      }));
    } else {
      // Handle other inputs (name, age, experience, consultingTime, biography)
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  async function post(url, formData) {
    const response = await client.post(url, formData);
    console.log(response.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your server route
      const newLawyer = { ...formData };
      console.log(newLawyer);
      const response = post("/lawyers", newLawyer);
      // Handle the response as needed
      console.log("Server response:", response.data);

      // Reset the form after successful submission
      setFormData({
        name: "",
        lawArea: [],
        biography: "",
        region: "",
        experience: "",
        languages: [],
        lawCertificate: "",
        charges: "",
        consultingTime: "",
      });
      // navigate("/");
    } catch (error) {
      // Handle any errors here
      console.error("Error:", error);
    }
  };

  // Define an array of lawArea options
  const lawOptions = [
    "Corporate Law",
    "Property Law",
    "Family Law",
    "Tax Law",
    "Criminal Law",
  ];

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lawArea" className="form-label h-6">
            Law Area
          </label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gridGap: "10px",
            }}
          >
            {lawOptions.map((lawArea) => (
              <div key={lawArea}>
                <input
                  type="checkbox"
                  id={lawArea.toLowerCase()}
                  name="lawArea"
                  value={lawArea.toLowerCase()}
                  checked={formData.lawArea.includes(lawArea.toLowerCase())}
                  onChange={handleChange}
                  style={{ marginRight: "7px" }}
                />
                <label htmlFor={lawArea.toLowerCase()}>{lawArea}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="region" className="form-label">
            Region
          </label>
          <input
            type=""
            className="form-control"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">
            Work Experience (yrs)
          </label>
          <input
            type="number"
            className="form-control"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="charges" className="form-label">
            Charge per hour (in rupees)
          </label>
          <input
            type="number"
            className="form-control"
            id="charges"
            name="charges"
            value={formData.charges}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="consultingTime" className="form-label">
            Consulting Time
          </label>
          <select
            className="form-select"
            id="consultingTime"
            name="consultingTime"
            value={formData.consultingTime}
            onChange={handleChange}
          >
            <option value="">Select a consulting time</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="biography" className="form-label">
            Biography
          </label>
          <textarea
            type="text"
            className="form-control"
            id="biography"
            name="biography"
            rows="4"
            value={formData.biography}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
