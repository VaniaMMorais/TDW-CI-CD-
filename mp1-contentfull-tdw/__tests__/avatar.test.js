import { render } from '@testing-library/react';
import Avatar from '../app/avatar'; // Ajusta o caminho conforme necessário

// Mock do componente ContentfulImage
jest.mock('@/lib/contentful-image', () => ({
  __esModule: true,
  default: ({ alt, src, width, height }) => (
    <img alt={alt} src={src} width={width} height={height} />
  ),
}));

test('renders Avatar with name and picture', () => {
  const mockName = 'John Doe';
  const mockPicture = { url: 'http://example.com/avatar.jpg' };

  const { getByText, getByAltText } = render(<Avatar name={mockName} picture={mockPicture} />);

  // Verifica se o nome está a ser renderizado
  expect(getByText(mockName)).toBeInTheDocument();

  // Verifica se a imagem está a ser renderizada com o alt correto
  const image = getByAltText(mockName);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', mockPicture.url);
  expect(image).toHaveAttribute('width', '48');
  expect(image).toHaveAttribute('height', '48');
});
