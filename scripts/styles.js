import fs from 'fs';
import path from 'path';
import postcss from 'postcss';

const tokensPath = path.resolve('src/variables.css');
const cssContent = fs.readFileSync(tokensPath, 'utf-8');

const variables = {};

const plugin = {
  postcssPlugin: 'css-to-js',
  Once(root) {
    root.walkDecls(variable => {

      if (variable.variable) {
        variables[variable.prop] = variable.value;
      }
    });

    const jsObject = JSON.stringify(variables, null, 2);
    console.log(jsObject);
    
    fs.writeFileSync('variables.json', jsObject, 'utf-8');
  }
};

postcss([plugin])
  .process(cssContent, { from: tokensPath })
  .catch(error => {
    console.error('Error:', error);
  });
