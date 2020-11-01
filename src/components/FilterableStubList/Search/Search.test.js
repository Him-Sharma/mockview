import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Search from "./Search";

afterEach(cleanup);

it("renders correctly", () => {
  const { baseElement } = render(<Search />);
  expect(baseElement).toMatchSnapshot();
});
it("should notify when filter text is changed", () => {
  const mockCallback = jest.fn();
  const { getByTestId } = render(<Search onFilterTextChange={mockCallback} />);
  fireEvent.change(getByTestId("filterTextInput"), {
    target: { value: "test" },
  });

  expect(mockCallback).toHaveBeenCalledTimes(1);
  expect(mockCallback).toHaveBeenCalledWith("test");
});
