import React from "react";
import { render, cleanup } from "@testing-library/react";
import StubList from "./StubList";

afterEach(cleanup);

it("renders correctly", () => {
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
  const { baseElement } = render(
    <StubList stubs={stubs} filterText="/posts" />
  );
  expect(baseElement).toMatchSnapshot();
});
