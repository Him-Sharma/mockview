import React from "react";
import { render, cleanup } from "@testing-library/react";
import StubList from "./StubList";

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
  const { baseElement } = render(
    <StubList stubs={stubs} filterText="/posts" />
  );
  expect(baseElement).toMatchSnapshot();
});
it("should not render stub for which methodname or path doesnt meet filter criteria", () => {
  const { queryByText } = render(<StubList stubs={stubs} filterText="QQ" />);
  expect(queryByText("/posts")).toBeNull();
});
