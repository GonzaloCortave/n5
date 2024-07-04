export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-tailwindcss",
    "stylelint-config-standard-scss",
  ],
  rules: {
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind"],
      },
    ],
    "declaration-no-important": true,
    "scss/no-global-function-names": null,
    "selector-class-pattern": null,
  },
};
