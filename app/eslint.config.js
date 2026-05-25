import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly",
        fetch: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        Promise: "readonly",
        URL: "readonly",
        Buffer: "readonly",
        // Nuxt/Nitro auto-imports referenced in server routes
        defineEventHandler: "readonly",
        readBody: "readonly",
        createError: "readonly",
        setResponseStatus: "readonly",
        defineNuxtConfig: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off"
    }
  },
  {
    ignores: [
      "node_modules/**",
      ".nuxt/**",
      ".output/**",
      "tests/**",
      "**/*.vue"
    ]
  }
];
