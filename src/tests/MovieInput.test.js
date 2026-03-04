import { render, screen } from "@testing-library/react";
import MovieInput from "../components/MovieInput";

test("renders IMDb input field", () => {
  render(<MovieInput onSubmit={() => {}} />);
  const input = screen.getByPlaceholderText(/enter imdb id/i);
  expect(input).toBeInTheDocument();
});