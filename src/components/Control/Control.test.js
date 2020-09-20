import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Control from "./Control";

afterEach(cleanup);
global.alert = jest.fn();
it("renders correctly", () => {
  const { baseElement } = render(<Control />);
  expect(baseElement).toMatchSnapshot();
});

it("should show alert when user submits without any text", () => {
  const { getByTestId } = render(<Control />);

  fireEvent.change(getByTestId("urlInput"), {
    target: { value: null },
  });
  fireEvent.click(getByTestId("submitButton"));

  expect(global.alert).toHaveBeenCalledTimes(1);
});
