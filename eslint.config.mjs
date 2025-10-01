// eslint.config.js or eslint.config.mjs

import nextPlugin from '@next/eslint-plugin-next';
import prettierConfig from 'eslint-config-prettier';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
// You might need to import any other plugins used by 'next/core-web-vitals' here

/**
 * The settings object for the tailwindcss plugin, telling it where to look
 * for class strings in utility functions like 'cn'.
 */
const tailwindSettings = {
  tailwindcss: {
    callees: ['classnames', 'clsx', 'cn'],
    // config: "./path/to/your/tailwind.config.js" // Uncomment if needed
  },
};

export default [
  // 1. Next.js Core Web Vitals (including React rules)
  {
    // The "next/core-web-vitals" config is a preset of various rules.
    // In flat config, you often need to manually apply the parts it includes.
    // This is a minimal representation; you may need to add more modules
    // (like @typescript-eslint, react) if your next config relies on them.
    plugins: {
      '@next': nextPlugin,
    },
    extends: [
      // Manually importing recommended configs often used by Next.js preset
      // This is an *approximation* of "next/core-web-vitals"
      // You should install: @eslint/js, @next/eslint-plugin-next
    ],
    rules: {
      // Replicating key rules from the 'next/core-web-vitals' preset
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
    settings: {
      // Common settings for React/Next if not provided by the imported config
      // react: { version: "detect" }
    },
  },

  // 2. Tailwind CSS Recommended Rules
  {
    // The 'recommended' config from the plugin
    ...tailwindPlugin.configs.recommended,
    // Add the settings for 'callees' directly to this config object
    settings: tailwindSettings,
  },

  // 3. Prettier: Must be last to disable conflicting formatting rules
  // 'eslint-config-prettier' is applied as a rules object that turns off
  // all conflicting rules.
  prettierConfig,
];
