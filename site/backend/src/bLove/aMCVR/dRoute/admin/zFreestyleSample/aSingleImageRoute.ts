import express from "express";

import { singleImageCreateController, singleImageDeleteController, singleImageUpdateController } from "../../../../bMiddleware/gMulterMiddleware";
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';


const router = express.Router();

router.post("/create", authenticationMiddleware, singleImageCreateController);
router.post("/update", authenticationMiddleware, singleImageUpdateController);  
router.post("/delete", authenticationMiddleware, singleImageDeleteController);  

export const singleImageRouter =  router;
