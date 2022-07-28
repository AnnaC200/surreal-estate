import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  test("displays an error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    const alert = asFragment();

    expect(getByText(/Error/).textContext).toBe("Error!");
    expect(alert).toMatchSnapshot();
  });

  test("displays a success message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!" success />
    );
    const alert = asFragment();

    expect(getByText(/Success/).textContext).toBe("Success!");
    expect(alert).toMatchSnapShot();
  });

  test("does not render an error or a success message if message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();

    expect(alert).toMatchSnapshot();
  });
});
