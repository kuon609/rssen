module.exports = {
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react-native'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-native/all',
    // 競合避けるため prettier は最後に読み込み
    'prettier',
  ],
  settings: {
    // eslint-plugin-import
    // 以下拡張子のモジュールのインポートでエラー出ないように設定
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/ignore': ['react-native'],
    'react-native/style-sheet-object-names': ['EStyleSheet', 'OtherStyleSheet', 'PStyleSheet'],
  },
  rules: {
    'react/prop-types': 'off',
    // ルール不要のため削除：公式参照
    'import/no-unresolved': 'off',
    // import の順番をルール化
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
