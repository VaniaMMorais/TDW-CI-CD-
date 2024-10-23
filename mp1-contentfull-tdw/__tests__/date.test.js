import React from "react";
import { render, screen } from "@testing-library/react";
import DateComponent from "../app/date"; // Certifica-te de que o caminho está correto
import { format } from "date-fns";

test("renders the date in the correct format", () => {
  // Define uma data de teste
  const testDate = "2024-10-19";

  // Renderiza o componente com a data de teste
  render(<DateComponent dateString={testDate} />);

  // Verifica se a data formatada é exibida corretamente
  const formattedDate = format(new Date(testDate), "LLLL d, yyyy");
  expect(screen.getByText(formattedDate)).toBeInTheDocument();
});
