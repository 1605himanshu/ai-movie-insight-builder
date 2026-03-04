import { render, screen } from "@testing-library/react";
import SentimentCard from "../components/SentimentCard";

test("renders sentiment summary", () => {
  render(
    <SentimentCard
      data={{ summary: "Great movie", sentiment: "Positive" }}
    />
  );

  expect(screen.getByText(/great movie/i)).toBeInTheDocument();
  expect(screen.getByText(/positive/i)).toBeInTheDocument();
});