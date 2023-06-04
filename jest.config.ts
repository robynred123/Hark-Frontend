module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: { "^.+\\test.tsx?$": "babel-jest" },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/mocks/fileMock.ts",
  },
};
