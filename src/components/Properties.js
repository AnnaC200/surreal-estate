import axios from "axios";
import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing`)
      .then(({ data }) => setProperties(data))
      .catch(() =>
        setAlert({
          message: "Promise rejected. Please try again later"})
      );
  }, []);

  return (
    <div>
      <div>Properties Page</div>;
      <div className="propertyGrid">{properties.map((property) => (<PropertyCard {...property} key={property.price} />))}</div>
    </div>
  );
};

export default Properties;
