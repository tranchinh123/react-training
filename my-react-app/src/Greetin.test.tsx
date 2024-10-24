import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greeting from "./Greeting";

test("renders greeting message", () => {
  render(<Greeting name="John" />);

  const greetingElement = screen.getByText(/hello, john/i);
  expect(greetingElement).toBeInTheDocument();
});
