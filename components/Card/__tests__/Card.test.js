// Card Test component (usando vite)
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react"; // Importa waitFor desde "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"; // Importa toBeInTheDocument desde "@testing-library/jest-dom/extend-expect"
import Card from "../index";

describe("Card component", () => {
  test("should render card component", () => {
    render(<Card />);
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toBeInTheDocument();
  });

  test("should render card component with props", () => {
    render(
      <Card
        name="Pikachu"
        imageUrl="https://pokeapi.co/api/v2/pokemon/25.png"
      />
    );
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toBeInTheDocument();
  });

  test("should render card component with props and click favorite icon", async () => {
    render(
      <Card
        name="Pikachu"
        imageUrl="https://pokeapi.co/api/v2/pokemon/25.png"
      />
    );

    // Esperar a que el componente se renderice completamente
    await waitFor(() => {
      const cardElement = screen.getByTestId("card");
      expect(cardElement).toBeInTheDocument();
    });

    const favoriteIcon = screen.getByTestId("favorite-icon");
    expect(favoriteIcon).toBeInTheDocument();

    fireEvent.click(favoriteIcon);
    expect(favoriteIcon).toBeInTheDocument();
  });
});
