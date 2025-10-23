import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import videoStorageValidation from '../../../cValidation/aDatabaseManagement/dFileStorage/bVideoStorageValidation';
import videoStorageContorller from '../../../bController/aDatabaseManagement/dFileStorage/bVideoStorageController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"VideoStorageModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "VideoStorage", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"VideoStorageModel-list", label: "VideoStorage", name: "List" }), 
  videoStorageValidation.list(), validatorMiddleware, 
  videoStorageContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"VideoStorageModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "VideoStorage", accessPoint: ["Create"] }),
  videoStorageValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  videoStorageContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"VideoStorageModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "VideoStorage", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"VideoStorageModel-retrieve", label: "VideoStorage", name: "Retrieve" }), 
  videoStorageValidation.retrieve(), validatorMiddleware, 
  videoStorageContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"VideoStorageModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "VideoStorage", accessPoint: ["Update"] }),
  videoStorageValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  videoStorageContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"VideoStorageModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "VideoStorage", accessPoint: ["Delete"] }),
  videoStorageValidation.delete(), validatorMiddleware, 
  videoStorageContorller().delete
)

router.route("/single-image-create").post(
  authenticationMiddleware, 
  videoStorageContorller().singleVideoCreate
);

router.route("/single-image-update").post(
  authenticationMiddleware, 
  videoStorageContorller().singleVideoUpdate
);  

router.route("/single-image-delete").post(
  authenticationMiddleware, 
  videoStorageContorller().singleVideoDelete
);  

export const videoStorageRoute = router
