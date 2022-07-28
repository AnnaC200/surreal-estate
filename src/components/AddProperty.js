/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";
import Alert from "./Alert";

const AddProperty = () => {
  const initalState = {
    fields: {
      title: "",
      city: "",
      propertyType: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initalState.fields);
  const [alert, setAlert] = useState(initalState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    // eslint-disable-next-line no-console
    axios
      // eslint-disable-next-line prettier/prettier
      .post(`http://localhost:3000/api/v1/PropertyListing`, { ...fields })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later",
          isSuccess: false,
        })
      );
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <div>Add Property Page</div>;
      <form className="Form" onSubmit={handleAddProperty}>
        <Alert message={alert.message} success={alert.isSuccess} />
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="type">
          Property Type
          <select
            id="propertyType"
            name="propertyType"
            value={fields.propertyType}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End Terrace">End Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          Bedrooms
          <select
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        <label htmlFor="bathrooms">
          Bathrooms
          <select
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>

        <label htmlFor="price">
          Price
          <select
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          >
            <option value="150000">£150,000</option>
            <option value="250000">£250,000</option>
            <option value="350000">£350,000</option>
            <option value="450000">£450,000</option>
            <option value="550000">£550,000</option>
          </select>
        </label>

        <label htmlFor="email">
          Email
          <select
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          >
            <option value="anna.chan@email.com">anna.chan@email.com</option>
            <option value="joe.bloggs@email.com">joe.bloggs@email.com</option>
          </select>
        </label>
        <button type="submit" onClick={handleAddProperty}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
