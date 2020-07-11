import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import MockView from "./MockView";
import axios from "axios";

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
      },
    ],
  };
  axios.get.mockResolvedValue({
    data: response,
  });

  const { getByTestId } = render(<MockView />);

  //act
  fireEvent.change(getByTestId("serverUrlInput"), {
    target: { value: testUrl },
  });
  fireEvent.click(getByTestId("fetchStubButton"));

  //assert
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(testUrl);
});
