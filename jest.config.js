// Configuracion de Jest con vite
module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx)$": [
      "babel-jest",
      {
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    ],
  },
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/**/*.stories.{js,jsx}",
    "!src/**/*.styles.{js,jsx}",
    "!src/**/*.test.{js,jsx}",
    "!src/**/index.{js,jsx}",
    "!src/**/index.js",
  ],
  coverageDirectory: "<rootDir>/coverage/",
  coverageReporters: ["text", "lcov", "clover"],
};
