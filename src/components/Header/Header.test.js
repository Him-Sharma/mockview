import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("should load header with text", () => {
  const headerMessage = "Mockview";
  render(<Header />);
  expect(screen.getByText(headerMessage)).toBeInTheDocument();
});
