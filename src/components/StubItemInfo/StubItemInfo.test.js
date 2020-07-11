import React from "react";
import { render } from "@testing-library/react";
import StubItemInfo from "./StubItemInfo";

it("renders correctly", () => {
  const { baseElement } = render(<StubItemInfo null />);
  expect(baseElement).toMatchSnapshot();
});

it("should display stubItem information", () => {
  const selectedStubItem = {
    predicates: [
      {
        equals: {
          method: "GET",
          path: "/posts",
        },
      },
    ],
    responses: [
      {
        is: {
          statusCode: "200",
          body: "{}",
        },
      },
    ],
    _links: {
      self: {
        href: "http://test",
      },
    },
  };
  const { baseElement } = render(
    <StubItemInfo selectedStubItem={selectedStubItem} />
  );
  expect(baseElement).toMatchSnapshot();
});
