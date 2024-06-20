module.exports = {
  customSyntax: "postcss-scss",
  overrides: [
    {
      files: ["**/*.html"],
      customSyntax: "postcss-html",
    },
  ],
  rules: {
    // Add your Stylelint rules here
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always",
    "no-extra-semicolons": true,
    "string-no-newline": true,
  },
};
