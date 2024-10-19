const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Define o diretório onde está o teu Next.js (geralmente é a raiz)
});

module.exports = {
    preset: 'ts-jest', // Para transpilar TypeScript
    testEnvironment: 'jsdom', // Ambiente para simular o browser
    // transform: {
    //   '^.+\\.(ts|tsx)$': 'ts-jest', // Transpilar TypeScript
    //   '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest', // Transpilar JS/JSX com Babel
    // },
    transform: {
        "\\.tsx?$": "ts-jest",
        '^.+\\.(ts|tsx|js|jsx|mjs)$': 'babel-jest',
      },
    moduleNameMapper: {
        // Adiciona o mapeamento do alias '@' para a pasta 'src' ou a pasta correta no teu projeto
        '^@/(.*)$': '<rootDir>/$1',
      },
    extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'], 
    setupFilesAfterEnv: ['./jest.setup.js'], // Incluir o ficheiro de setup
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Extensões suportadas
    transformIgnorePatterns: ['node_modules/(?!(.*\\.mjs$|pdfjs-dist))', '/.next/'], // Ignorar ficheiros gerados pelo Next.js
  };