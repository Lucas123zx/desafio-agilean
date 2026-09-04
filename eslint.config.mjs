import { defineConfig } from 'eslint/config';
import pluginCypress from 'eslint-plugin-cypress';

export default defineConfig([
  {
    extends: [pluginCypress.configs.recommended],
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
      'quotes': ['error', 'single'],
      'max-len': [
        'error', 
        { 
          'code': 90, 
          'ignoreUrls': true,
          'ignoreStrings': true,
          'ignoreTemplateLiterals': true,
          'ignoreRegExpLiterals': true,
          'ignoreComments': true,
          'tabWidth': 5
        }
      ],
      'semi': ['error', 'always'],
      'no-multiple-empty-lines': [
        'error', 
        { 'max': 1, 'maxEOF': 0 }
      ]
    },
  },
]);