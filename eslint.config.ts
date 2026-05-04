import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import { defineConfig } from "eslint/config"
// превращает ошибки prettier в ошибки eslint
import prettierPlugin from "eslint-plugin-prettier"
// отключает правила eslint, которые конфликтуют с prettier
import prettierConfig from "eslint-config-prettier"

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
        plugins: { js, prettier: prettierPlugin },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
        rules: {
            "prettier/prettier": "error",
            "no-console": "error",
            eqeqeq: "error",
        },
    },
    tseslint.configs.recommended,
    pluginVue.configs["flat/essential"],
    {
        files: ["**/*.vue"],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
        },
    },
    prettierConfig, // объект с правилами, отключающими конфликты
])
