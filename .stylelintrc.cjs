module.exports = {
  plugins: ['stylelint-declaration-strict-value'],
  files: ['**/*.css'],
  rules: {
    'scale-unlimited/declaration-strict-value': [
      ['color', 'background-color', 'font-size', 'font-weight', 'font-family', 'border-color'],
      {
        ignoreValues: ['currentColor', 'unset', 'inherit', 'initial', 'transparent'],
      },
    ],
  },
};
