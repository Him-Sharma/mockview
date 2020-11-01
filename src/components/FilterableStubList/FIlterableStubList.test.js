import React from "react";
import { render, cleanup } from "@testing-library/react";
import FilterableStubList from "./FilterableStubList";

afterEach(cleanup);
const stubs = [
  {
    id: "0",
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
