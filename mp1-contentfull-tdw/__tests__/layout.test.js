import React from "react";
import { render } from "@testing-library/react";
import RootLayout from "../app/layout";

jest.mock("next/font/google", () => ({
  Inter: () => ({
    variable: "--font-inter",
  }),
}));

test("renders layout with children and footer", () => {
  const { getByText } = render(
    <RootLayout>
      <div>Content Section</div>
    </RootLayout>,
  );

  // Verifica se o conteúdo da secção principal foi renderizado
  expect(getByText("Content Section")).toBeInTheDocument();

  // Verifica se o rodapé foi renderizado
  expect(getByText("Criado com Next.js.")).toBeInTheDocument();
});
