import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "3 bed detached cottage",
    propertyType: "detached",
    bathrooms: 4,
    bedrooms: 3,
    price: 450000,
    city: "Leeds",
    email: "anna@Mcrcodes.com",
  };

  it("render", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        propertyType={validProps.propertyType}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
