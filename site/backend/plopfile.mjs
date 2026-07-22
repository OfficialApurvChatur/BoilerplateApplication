import removeActionType from "./src/dPlop/aAction/aRemoveActionType.mjs";

import createGenerator from "./src/dPlop/dHelper/aCreateGenerator.mjs";
import deleteGenerator from "./src/dPlop/dHelper/bDeleteGenerator.mjs";

// PLOP_IMPORTS
import bSecondGenerator from "./src/dPlop/bGenerator/bSecondGenerator.mjs";
import aFirstGenerator from "./src/dPlop/bGenerator/aFirstGenerator.mjs";


export default function (
  /** @type {import('plop').NodePlopAPI} **/
  plop
) {
  removeActionType(plop);

  createGenerator(plop);
  deleteGenerator(plop);

  // PLOP_REGISTER  
  bSecondGenerator(plop);
  aFirstGenerator(plop);
}