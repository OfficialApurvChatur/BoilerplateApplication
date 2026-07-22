export default function (
  /** @type {import('plop').NodePlopAPI} **/
  plop
) {
  plop.setGenerator("create-generator", {
    description: "Create and register a new plop generator",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "Generator Name: ",
      },
    ],

    actions: [
      {
        type: "add",
        path: "src/dPlop/bGenerator/{{camelCase name}}.mjs",
        template: `
export default function {{camelCase name}}(plop) {
  plop.setGenerator("{{kebabCase name}}", {
    description: "{{camelCase name}} Generator",

    prompts: [],

    actions: [],
  });
}
`,
      },

      {
        type: "append",
        path: "plopfile.mjs",
        pattern: /(\/\/ PLOP_IMPORTS)/g,
        template:
          'import {{camelCase name}} from "./src/dPlop/bGenerator/{{camelCase name}}.mjs";',
      },

      {
        type: "append",
        path: "plopfile.mjs",
        pattern: /(\/\/ PLOP_REGISTER)/g,
        template:
          "  {{camelCase name}}(plop);",
      },
    ],
  });
}