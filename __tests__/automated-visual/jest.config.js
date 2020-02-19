module.exports = {
    preset: 'jest-puppeteer',
    verbose: true,
    testTimeout: 30000,
    displayName: 'VISUAL TEST - INTEGRATION',
    transformIgnorePatterns: [
      "node_modules/(?!(@storybook/addon-contexts)/)"
    ],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetTransformer.js", "\\.(css|less)$": "<rootDir>/assetTransformer.js"
    }
    };