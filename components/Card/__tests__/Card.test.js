import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "../index";

describe("Card Component", () => {
  // Props test
  it("should render with correct props", () => {
    const id = "1";
    const name = "John Doe";
    const imageUrl = "https://example.com/john.jpg";

    const { getByAltText, getByText } = render(
      <Card id={id} name={name} imageUrl={imageUrl} />
    );

    expect(getByAltText(name)).toBeInTheDocument();
    expect(getByText(name)).toBeInTheDocument();
  });

  // State test
  it("should toggle 'isFavorite' state when clicked on the favorite icon", () => {
    const id = "1";
    const name = "John Doe";
    const imageUrl = "https://example.com/john.jpg";

    const { getByTestId } = render(
      <Card id={id} name={name} imageUrl={imageUrl} />
    );

    const favoriteIcon = getByTestId("favorite-icon");

    // Initially, isFavorite should be false
    expect(favoriteIcon).toContainHTML('<svg class="icon"');
    expect(localStorage.getItem(id)).toBeNull();

    // Click on the icon to set it as favorite
    fireEvent.click(favoriteIcon);

    // After clicking, isFavorite should be true and it should be added to localStorage
    expect(favoriteIcon).toContainHTML('<svg class="icon"');
    expect(localStorage.getItem(id)).toBeTruthy();

    // Click on the icon again to remove it from favorites
    fireEvent.click(favoriteIcon);

    // After clicking again, isFavorite should be false and it should be removed from localStorage
    expect(favoriteIcon).toContainHTML('<svg class="icon"');
    expect(localStorage.getItem(id)).toBeNull();
  });

  // Life Cycles and Render test
  it("should render with the correct favorite icon based on localStorage", () => {
    const id = "1";
    const name = "John Doe";
    const imageUrl = "https://example.com/john.jpg";

    // Adding the item to localStorage to simulate a favorite
    localStorage.setItem(
      id,
      JSON.stringify({
        name,
        imageUrl,
      })
    );

    const { getByTestId } = render(
      <Card id={id} name={name} imageUrl={imageUrl} />
    );

    const favoriteIcon = getByTestId("favorite-icon");

    // The icon should render as 'Favorited' since it's in localStorage
    expect(favoriteIcon).toContainHTML('<svg class="icon"');

    // Clean up localStorage after the test
    localStorage.removeItem(id);
  });
});
