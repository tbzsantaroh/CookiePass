// const tailwindcss = require('tailwindcss');  // これいらんのでは？

module.exports = {
  plugins: [
    require('autoprefixer')({ // 自動でベンダープレフィックスを付与
    }),

    [
      "postcss-preset-env",
      {

      },
    ],

    [	// CSSのmediaQueriesをまとめる
      'postcss-sort-media-queries',
      {
        sort: 'mobile-first'	// mobile優先でまとめる
      }
    ],
  ]
};
