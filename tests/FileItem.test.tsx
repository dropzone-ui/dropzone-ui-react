import "@testing-library/jest-dom";
import React from "react";
import { FileMosaic } from "../src";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";

test("Validate size formatted 28.00 MB'", () => {

  const size= 28*1024*1024;
  const sizeFormatted="28.00 MB";
    render(<FileMosaic name="myfile.png" type="image/png" size={size}/>);
    expect(screen.getByText(sizeFormatted)).toBeInTheDocument();
  });
  