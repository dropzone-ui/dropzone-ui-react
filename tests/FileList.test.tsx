import "@testing-library/jest-dom";
import * as React from "react";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { DropzoneLabel } from "../src";


test("Validate label text must be 'Drop yor files here...'", () => {
  render(<DropzoneLabel> Drop yor files here...</DropzoneLabel>);
  expect(screen.getByText("Drop yor files here...")).toBeInTheDocument();
});
