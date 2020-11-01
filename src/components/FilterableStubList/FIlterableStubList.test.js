import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import FilterableStubList from "./FilterableStubList";

afterEach(cleanup);
const stubs = [
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
];
it("renders correctly", () => {
  const { baseElement } = render(<FilterableStubList stubs={stubs} />);
  expect(baseElement).toMatchSnapshot();
});
