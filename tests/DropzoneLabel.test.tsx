import "@testing-library/jest-dom";
import React from "react";
import { DropzoneLabel } from "../src";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";

test("Validate label text must be 'Drop yor files here...'", () => {
  render(<DropzoneLabel> Drop yor files here...</DropzoneLabel>);
  expect(screen.getByText("Drop yor files here...")).toBeInTheDocument();
});
