module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "eslint-config-prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
  },
  plugins: ["prettier"],
};

// module.exports = {
//   // rules: {
//   //   "no-unexpected-multiline": "error",
//   //   "no-extra-semi": "error",
//   // },

//   extends: [
//     // "airbnb-base"
//     "eslint:recommended",
//   ],

//   // env: {
//   //   browser: true,
//   //   commonjs: true,
//   //   es2021: true,
//   // },

//   // parserOptions: {
//   //   ecmaVersion: 12,
//   // },
// };
