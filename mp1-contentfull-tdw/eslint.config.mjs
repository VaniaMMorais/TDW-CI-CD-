import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react/prop-types": "off",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": false, // Permite o uso de @ts-ignore
        },
      ],
    },
  },
];
