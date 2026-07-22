import fs from "node:fs";

export default function (plop) {
  plop.setActionType("remove", (answers, config) => {
    const path = plop.renderString(config.path, answers);

    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      return `Deleted ${path}`;
    }

    return `${path} does not exist`;
  });
}
