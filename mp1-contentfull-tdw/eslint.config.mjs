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
      "react/react-in-jsx-scope": "off",   //Importar o react (mais tarde tive de o fazer senão os testes não corriam)
      "@typescript-eslint/no-explicit-any": "off",  //Permite usar o tipo any em TS
      "react/prop-types": "off",          //Desativa a exigencia de validação de tipos 
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": false, // Permite o uso de @ts-ignore
        },
      ],
    },
  },
];
