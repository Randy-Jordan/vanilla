
import globals from "globals";
export default [
    {
        ignores: ["node_modules/"]
    },
        {
            languageOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
                globals: {
                    ...globals.node,
                   
                }
            },
    rules: {
        'no-unused-vars': 'warn',
        'no-console': 'warn',
        }
    }
];  

