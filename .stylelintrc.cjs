function autoFixFunc(node, validation, root, config) {
  const { value, prop } = node;

  console.log(`prop: ${prop}, value: ${value}`)

  if (prop === 'font-weight') {
    switch (value) {
      case '300':
        return 'var(--font-weight-light)';
      case '400':
        return 'var(--font-weight-normal)';
      case '500':
        return 'var(--font-weight-medium)';
      case '600':
        return 'var(--font-weight-semi-bold)';
      case '700':
        return 'var(--font-weight-bold)';
      default:
        throw new Error(`Property ${prop} with value ${value} can't be autofixed!`)
    }
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
