'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://ym.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://ym.com';",
      output: "var test = 'http://ym.com';",
      errors: [
        {
          message: 'Recommended "http://ym.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://ym.com' />",
      output: "<img src='http://ym.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://ym.com" switch to HTTPS',
        },
      ],
    },
  ],
});
