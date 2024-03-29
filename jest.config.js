// jest.config.js

// Note: If you are using babel version 7 you have to install babel-jest with
// yarn add --dev babel-jest 'babel-core@^7.0.0-bridge' @babel/core

module.exports = {
  'collectCoverage': true,
  'verbose': true,
  'transform': {
    '^.+\\.js$': 'babel-jest'
  },
  'setupFiles': [
    'jest-localstorage-mock'
  ],
  "moduleNameMapper": { 
    '^.+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$': '<rootDir>/src/__mocks__/svgMock.js', 
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js' 
  },
  'testPathIgnorePatterns': [
    '/node_modules/',
    '/fixtures/',
    '/__modules__/',
    '/__files__/',
    '/lib/',
    '/dist/',
  ]
};