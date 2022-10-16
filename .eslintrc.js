const useTypeScript = true; // ここでts用かjs用かを切り替え

const lintEs = {
  env: {
    'browser': true,
    'jquery': true,
    'node': true,
    'es6': true
  },
  globals: {},
  parserOptions: {
    'sourceType': 'module',
    'ecmaVersion': 2015
  },
  // extends: ['eslint:recommended'], // eslintオススメ項目をまとめて追加
  rules: {
    'no-extra-semi': 'warn',
    'no-undef': 'warn',
    'quotes': [
      'warn', 'single'
    ],
    'space-before-blocks': [
      'warn', {
        'functions': 'always'
      }
    ]
  }
};

const lintTs = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    // ecmaVersion: 2020, // env:でECMAバージョン指定している場合は省略可能
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json'
    ]
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'no-extra-semi': 'warn',
    'no-undef': 'warn',
    'quotes': [
      'warn', 'single'
    ],
    'space-before-blocks': [
      'warn', {
        'functions': 'always'
      }
    ],
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn'
  },
};

module.exports = useTypeScript ? lintTs : lintEs;
