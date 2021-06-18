module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatters: [
    "/node_modules/", "/.next/", "/.husk/"
  ],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"]
}