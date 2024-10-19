import { render } from '@testing-library/react';
import DateComponent from '../app/date'; // Ajusta o caminho conforme necessário
import { format } from 'date-fns';

test('renders the date in the correct format', () => {
  const testDate = '2024-10-16T12:34:56Z';
  
  // Renderiza o componente com a data de teste
  const { getByText } = render(<DateComponent dateString={testDate} />);

  // Verifica se a data formatada é exibida corretamente
  const formattedDate = format(new Date(testDate), 'LLLL d, yyyy'); // Usa o mesmo formato do componente

  // Testa se a data formatada aparece no documento
  expect(getByText(formattedDate)).toBeInTheDocument();
});
