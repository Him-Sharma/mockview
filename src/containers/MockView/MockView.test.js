import React from "react";
import { render } from "@testing-library/react";
import MockView from "./MockView";

describe("Mockview", () => {
  it("renders correctly", () => {
    const { baseElement } = render(<MockView />);
    expect(baseElement).toMatchSnapshot();
  });
});
