/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    //rootDir: "./test",
    //roots: ["<rootDir>"],
    //modulePaths: ["<rootDir>"],
    //testMatch: ["**/?(*.)+(test).ts"],
    resetMocks: true,
    clearMocks: true,
    collectCoverage: true,
    coverageReporters: ["html"],
    coverageDirectory: "./test/coverage",
    collectCoverageFrom: ["./src/**"],
    coverageThreshold: {
        global: {
            lines: 90,
        },
    },
};
