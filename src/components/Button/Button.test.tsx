import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders a Button component", () => {
    render(<Button>Hello World</Button>);
  });
});
