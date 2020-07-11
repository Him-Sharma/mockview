import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MockView from "./MockView";
import axios from "axios";

jest.mock("axios");

it("renders correctly", () => {
  const { baseElement } = render(<MockView />);
  expect(baseElement).toMatchSnapshot();
});

it("should dispatch request on click of fetch stubs button", () => {
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
