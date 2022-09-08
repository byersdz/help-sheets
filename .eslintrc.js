
module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "no-underscore-dangle": "off",
    "space-in-parens": ["error", "always"],
    "no-bitwise": "off",
    "template-curly-spacing": ["error", "always"],
    "arrow-body-style": "off",
    "brace-style": ["error", "stroustrup"],
    "max-len": ["error", { "code": 120, "ignoreComments": true, "ignoreTrailingComments": true }],
    "operator-assignment": "off",
    "no-lonely-if": "off",
    "no-console": 'off',
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "arrow-parens": "off",
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-else-return": 'off',
    "no-continue": "off",
    "prefer-destructuring": "off",
    "import/order": "off",
    "linebreak-style": 'off',
    "quotes": 'off',
  },
  "globals": {
    "bitmelo": "readonly"
  }
}
