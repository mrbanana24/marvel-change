import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardDetail from "../index";

describe("CardDetail", () => {
  const mockCharacter = {
    name: "Spider-Man",
    description: "Your friendly neighborhood Spider-Man.",
    thumbnail: {
      path: "https://example.com/spiderman",
      extension: "jpg",
    },
  };

  test("renders with correct props", () => {
    const { getByText, getByAltText } = render(
      <CardDetail character={mockCharacter} />
    );

    const nameElement = getByText("Spider-Man");
    const descriptionElement = getByText(
      "Your friendly neighborhood Spider-Man."
    );
    const imageElement = getByAltText("Spider-Man");

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://example.com/spiderman.jpg"
    );
  });

  test("renders with default values if character prop is missing", () => {
    const { getByText, queryByAltText } = render(<CardDetail />);

    const nameElement = getByText("N/A");
    const descriptionElement = getByText("No description available.");
    const imageElement = queryByAltText("Character Image");

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeNull(); // Verify that the image is not present (null)
  });
});
