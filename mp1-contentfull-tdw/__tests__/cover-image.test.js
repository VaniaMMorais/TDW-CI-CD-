import React from "react";
import { render } from "@testing-library/react";
import CoverImage from "../app/cover-image";

test("renders the CoverImage with title and link", () => {
  const mockTitle = "Sample Title";
  const mockUrl = "http://example.com/sample.jpg";
  const mockSlug = "sample-post";

  const { getByAltText } = render(
    <CoverImage title={mockTitle} url={mockUrl} slug={mockSlug} />,
  );

  // Verifica se a imagem é renderizada
  const image = getByAltText(`Cover Image for ${mockTitle}`);
  expect(image).toBeInTheDocument();
  expect(image.src).toContain(mockUrl); // Verifica apenas se contém a URL base
});
