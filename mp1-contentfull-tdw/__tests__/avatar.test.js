import React from "react";
import { render } from "@testing-library/react";
import Avatar from "../app/avatar";

// Mock do componente Avatar
jest.mock("@/lib/contentful-image", () => ({
  __esModule: true,
  default: ({ alt, src, width, height }) => (
    <img alt={alt} src={src} width={width} height={height} />
  ),
}));

test("renders Avatar with name and picture", () => {
  const mockName = "John Doe";
  const mockPicture = { url: "http://example.com/avatar.jpg" };

  const { getByText, getByAltText } = render(
    <Avatar name={mockName} picture={mockPicture} />,    //Definição dos dados simulados
  );

  expect(getByText(mockName)).toBeInTheDocument();  // Verifica se o nome é exibido corretamente

  // Verifica se a imagem é renderizada com os atributos corretos
  const image = getByAltText(mockName);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", mockPicture.url);
  expect(image).toHaveAttribute("width", "48");
  expect(image).toHaveAttribute("height", "48");
});
