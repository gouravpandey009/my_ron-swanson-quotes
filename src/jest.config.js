module.exports = {
  displayName: 'Quotes',
  setupTestFrameworkScriptFile: require.resolve(
    './test/setup-test-framework.js',
  ),
  setupFiles: [
    'jest-localstorage-mock'
  ],
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/__tests__/**',
    '!**/node_modules/**'
  ],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
    '\\.(png|jpg|gif|ttf|eot|svg)$': '<rootDir>/./test/style-mock'
  },
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0
    }
  },
  transformIgnorePatterns: [
    'node_modules/(?!(redux-persist)/)'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer']
}

