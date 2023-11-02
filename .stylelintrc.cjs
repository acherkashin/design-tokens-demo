const variables = require('./variables');

function autoFixFunc(node, validation, root, config) {
  const { value, prop } = node;

  const key = Object.keys(variables).find(name => {
    // case insensitive value comparison
    return variables[name].toLowerCase() == value.toLowerCase();
  });
  const variable = `var(${key})`;
  if (key) {
    console.log(`Replaced: ${value} => ${variable}`);
    return variable;
  }
}

module.exports = {
  plugins: ['stylelint-declaration-strict-value'],
  files: ['**/*.css'],
  rules: {
    'scale-unlimited/declaration-strict-value': [
      ['color', 'background-color', 'font-size', 'font-weight', 'font-family', 'border-color'],
      {
        ignoreValues: ['currentColor', 'unset', 'inherit', 'initial', 'transparent'],
        autoFixFunc: autoFixFunc,
      },
    ],
  },
};
