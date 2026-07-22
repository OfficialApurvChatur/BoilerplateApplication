export default function bDeleteGenerator(
  /** @type {import('plop').NodePlopAPI} **/
  plop
) {
  plop.setGenerator("delete-generator", {
    description: "bDeleteGenerator Generator",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "Generator Name: ",
      },
    ],

    actions: [
      {
        type: "modify",
        path: "plopfile.mjs",
        transform(file, data) {
          const importRegex = new RegExp(
            `import\\s+${data.name}\\s+from\\s+".*${data.name}\\.mjs";?\\n?`,
            "g"
          );

          const registerRegex = new RegExp(
            `\\s*${data.name}\\(plop\\);\\n?`,
            "g"
          );

          return file
            .replace(importRegex, "")
            .replace(registerRegex, "");
        },
      },
      {
        type: "remove",
        path: "src/dPlop/bGenerator/{{name}}.mjs",
      },
    ],
  });
}
