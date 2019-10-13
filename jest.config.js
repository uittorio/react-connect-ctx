module.exports = {
    rootDir: './',
    preset: 'ts-jest',
    transform: {
        ".(ts|tsx)": "ts-jest"
    },
    globals: {
        "ts-jest": {
            tsConfig: "<rootDir>/tsconfig.json"
        }
    },
    testRegex: ".test.(ts|tsx)$"
};
