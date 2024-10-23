import React from 'react';
import { render } from '@testing-library/react';
import Avatar from '../app/avatar';

// Mocking the ContentfulImage component
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

  // Check if the name is rendered
  expect(getByText(mockName)).toBeInTheDocument();

  // Check if the image is rendered with the correct alt attribute
  const image = getByAltText(mockName);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', mockPicture.url);
  expect(image).toHaveAttribute('width', '48');
  expect(image).toHaveAttribute('height', '48');
});