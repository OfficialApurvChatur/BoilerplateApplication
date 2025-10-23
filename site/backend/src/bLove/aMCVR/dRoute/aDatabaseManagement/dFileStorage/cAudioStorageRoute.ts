import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import audioStorageValidation from '../../../cValidation/aDatabaseManagement/dFileStorage/cAudioStorageValidation';
import audioStorageController from '../../../bController/aDatabaseManagement/dFileStorage/cAudioStorageController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AudioStorageModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AudioStorage", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AudioStorageModel-list", label: "AudioStorage", name: "List" }), 
  audioStorageValidation.list(), validatorMiddleware, 
  audioStorageController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AudioStorageModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AudioStorage", accessPoint: ["Create"] }),
  audioStorageValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  audioStorageController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AudioStorageModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AudioStorage", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AudioStorageModel-retrieve", label: "AudioStorage", name: "Retrieve" }), 
  audioStorageValidation.retrieve(), validatorMiddleware, 
  audioStorageController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AudioStorageModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AudioStorage", accessPoint: ["Update"] }),
  audioStorageValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  audioStorageController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AudioStorageModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AudioStorage", accessPoint: ["Delete"] }),
  audioStorageValidation.delete(), validatorMiddleware, 
  audioStorageController().delete
)

router.route("/single-image-create").post(
  authenticationMiddleware, 
  audioStorageController().singleAudioCreate
);

router.route("/single-image-update").post(
  authenticationMiddleware, 
  audioStorageController().singleAudioUpdate
);  

router.route("/single-image-delete").post(
  authenticationMiddleware, 
  audioStorageController().singleAudioDelete
);  

export const audioStorageRoute = router
