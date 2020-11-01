import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import MockView from "./MockView";
import axios from "axios";
import { act } from "react-dom/test-utils";

jest.mock("axios");
afterEach(cleanup);

it("renders correctly", () => {
  const { baseElement } = render(<MockView />);
  expect(baseElement).toMatchSnapshot();
});

it("should fetch stubs from a given url on click fetch stubs button", () => {
  const testUrl = "http://test/5000";
  const response = {
    stubs: [
      {
        predicates: [
          {
            equals: {
              method: "GET",
              path: "/posts",
            },
          },
        ],
        _links: {
          self: {
            href: "http://test",
          },
        },
      },
    ],
  };
  axios.get.mockResolvedValue({
    data: response,
  });

  act(() => {
    const { getByTestId } = render(<MockView />);
    fireEvent.change(getByTestId("urlInput"), {
      target: { value: testUrl },
    });
    fireEvent.click(getByTestId("submitButton"));
  });

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(testUrl);
});
