import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardList from "../index";

// Datos de prueba
const mockData = [
  {
    id: 1,
    title: "Comic 1",
    description: "Descripción del Comic 1",
    thumbnail: {
      path: "path/to/comic1",
      extension: "jpg",
    },
  },
  // Añadir más elementos de prueba aquí si es necesario
];

const renderCardList = (data) => {
  return render(<CardList data={data} />);
};

describe("CardList", () => {
  test("renderiza las cards correctamente", () => {
    renderCardList(mockData);

    // Verificar que se renderice la cantidad correcta de cards
    const cards = screen.getAllByTestId("card");
    expect(cards.length).toBe(mockData.length);

    // Verificar que el título y la descripción de cada card sean correctos
    mockData.forEach((item, index) => {
      const titleElement = screen.getByText(item.title);
      expect(titleElement).toBeTruthy(); // Cambio aquí

      const descriptionElement = screen.getByText(
        `${item.description?.split(" ").slice(0, 30).join(" ")}...`
      );
      expect(descriptionElement).toBeTruthy(); // Cambio aquí
    });
  });

  test("manejo del scroll", () => {
    renderCardList(mockData);

    // Simular el scroll hacia abajo
    const cardListElement = screen.getByTestId("cardList");
    fireEvent.scroll(cardListElement, { target: { scrollTop: 200 } });

    // Verificar que el estado de scrollPosition se actualice correctamente
    expect(cardListElement.scrollTop).toBe(200);
  });
});
