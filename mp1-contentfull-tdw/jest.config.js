module.exports = {
  testEnvironment: 'jsdom', // Para testes de componentes React ou DOM
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Extensões de ficheiros a serem testadas
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transforma TypeScript
    '^.+\\.(js|jsx)$': 'babel-jest', // Transforma JavaScript e JSX usando Babel
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // Ignora node_modules
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Setup do jest-dom
};
