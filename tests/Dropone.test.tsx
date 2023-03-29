import "@testing-library/jest-dom";
import React from "react";
import { Dropzone } from "../src";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";

test("Validate label text must be 'Drop yor files here...'", () => {
  render(<Dropzone> Drop yor files here...</Dropzone>);
  expect(screen.getByText("Drop yor files here...")).toBeInTheDocument();
});
