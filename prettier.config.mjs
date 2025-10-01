// prettier.config.js or prettier.config.mjs

/** @type {import("prettier").Config} */
const config = {
  // Use single quotes instead of double quotes
  singleQuote: true,

  // Do not print semicolons at the end of statements
  semi: false,

  // Print trailing commas wherever valid in ES5 (objects, arrays, etc.)
  trailingComma: "es5",

  // Specify the number of spaces per indentation-level
  tabWidth: 2,

  // Specify the line length that Prettier will try to wrap at
  printWidth: 80,

  // Include parentheses around a sole arrow function parameter
  arrowParens: "always",
  
  // Note: Plugins are auto-detected, but for clarity you can list them
  // plugins: ["prettier-plugin-tailwindcss"],
};

export default config;