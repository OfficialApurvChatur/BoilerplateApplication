import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import imageStorageValidation from '../../../cValidation/aDatabaseManagement/dFileStorage/aImageStorageValidation';
import imageStorageContorller from '../../../bController/aDatabaseManagement/dFileStorage/aImageStorageController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"ImageStorageModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ImageStorage", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"ImageStorageModel-list", label: "ImageStorage", name: "List" }), 
  imageStorageValidation.list(), validatorMiddleware, 
  imageStorageContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"ImageStorageModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ImageStorage", accessPoint: ["Create"] }),
  imageStorageValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  imageStorageContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"ImageStorageModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ImageStorage", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"ImageStorageModel-retrieve", label: "ImageStorage", name: "Retrieve" }), 
  imageStorageValidation.retrieve(), validatorMiddleware, 
  imageStorageContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"ImageStorageModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ImageStorage", accessPoint: ["Update"] }),
  imageStorageValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  imageStorageContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"ImageStorageModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ImageStorage", accessPoint: ["Delete"] }),
  imageStorageValidation.delete(), validatorMiddleware, 
  imageStorageContorller().delete
)

router.route("/single-image-create").post(
  authenticationMiddleware, 
  imageStorageContorller().singleImageCreate
);

router.route("/single-image-update").post(
  authenticationMiddleware, 
  imageStorageContorller().singleImageUpdate
);  

router.route("/single-image-delete").post(
  authenticationMiddleware, 
  imageStorageContorller().singleImageDelete
);  

export const imageStorageRoute = router
