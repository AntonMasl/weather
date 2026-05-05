/** @type {import("stylelint").Config} */
export default {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-standard-vue/scss",
    ],
    rules: {
        "custom-property-pattern": "^[a-z][a-zA-Z0-9]+$", // lowerCamelCase
        "value-keyword-case": ["lower", { ignoreKeywords: ["currentColor"] }],
        "selector-class-pattern": "^[a-z][a-z0-9_-]*$",
    },
}
