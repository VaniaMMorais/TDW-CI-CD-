module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Para testes de componentes React ou DOM
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Extensões de ficheiros a serem testadas
  transform: {
    '^.+\\.(ts|js|jsx|tsx)$': 'babel-jest', // Transforma JavaScript e JSX usando Babel
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(uuid)/)'], // Ignora node_modules
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Setup do jest-dom
};
