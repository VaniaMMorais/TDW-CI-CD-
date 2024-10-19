
// Mock do componente Image de Next.js
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props) => {
      return <img {...props} />; // Renderiza como uma tag img simples
    },
  }));
  