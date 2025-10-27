import express from "express";


type listType = {
  Label: string
} 

type createType = {
  Label: string,
} 

type retrieveType = {
  Label: string
  request: express.Request
} 

type updateType = {
  Label: string,
  request: express.Request
} 

type deleteType = {
  Label: string,
  request: express.Request
} 

const cacheVariable = {
  baseModel: {
    list: ({ Label= "BaseModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "BaseModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "BaseModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "BaseModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "BaseModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  apiLogModel: {
    list: ({ Label= "APILogModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "APILogModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "APILogModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "APILogModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "APILogModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  activityLogModel: {
    list: ({ Label= "ActivityLogModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "ActivityLogModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "ActivityLogModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "ActivityLogModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "ActivityLogModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  accessPointModel: {
    list: ({ Label= "AccessPointModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AccessPointModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AccessPointModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AccessPointModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AccessPointModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "AccessPointModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  menuModel: {
    list: ({ Label= "MenuModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "MenuModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "MenuModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "MenuModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "MenuModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "MenuModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  permissionModel: {
    list: ({ Label= "PermissionModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "PermissionModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "PermissionModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "PermissionModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "PermissionModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "PermissionModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  roleModel: {
    list: ({ Label= "RoleModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "RoleModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "RoleModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "RoleModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "RoleModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "RoleModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  userModel: {
    list: ({ Label= "UserModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "UserModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "UserModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "UserModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "UserModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "UserModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  profileModel: {
    list: ({ Label= "ProfileModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "ProfileModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "ProfileModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "ProfileModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "ProfileModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "ProfileModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  accountModel: {
    list: ({ Label= "AccountModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AccountModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AccountModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AccountModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AccountModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  signInModel: {
    list: ({ Label= "SignInModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "SignInModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "SignInModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "SignInModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "SignInModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  signUpModel: {
    list: ({ Label= "SignUpModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "SignUpModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "SignUpModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "SignUpModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "SignUpModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  signOutModel: {
    list: ({ Label= "SignOutModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "SignOutModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "SignOutModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "SignOutModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "SignOutModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  forgotPasswordModel: {
    list: ({ Label= "ForgotPasswordModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "ForgotPasswordModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "ForgotPasswordModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "ForgotPasswordModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "ForgotPasswordModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  resetPasswordModel: {
    list: ({ Label= "ResetPasswordModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "ResetPasswordModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "ResetPasswordModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "ResetPasswordModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "ResetPasswordModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  imageStorageModel: {
    list: ({ Label= "ImageStorageModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "ImageStorageModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "ImageStorageModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "ImageStorageModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "ImageStorageModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  videoStorageModel: {
    list: ({ Label= "VideoStorageModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "VideoStorageModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "VideoStorageModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "VideoStorageModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "VideoStorageModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  audioStorageModel: {
    list: ({ Label= "AudioStorageModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AudioStorageModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AudioStorageModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AudioStorageModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AudioStorageModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  staticContentModel: {
    list: ({ Label= "StaticContentModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "StaticContentModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "StaticContentModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "StaticContentModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "StaticContentModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  socialMediaContentModel: {
    list: ({ Label= "SocialMediaContentModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "SocialMediaContentModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "SocialMediaContentModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "SocialMediaContentModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "SocialMediaContentModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  adminHeroModel: {
    list: ({ Label= "AdminHeroModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminHeroModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminHeroModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminHeroModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminHeroModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  adminAboutCompanyModel: {
    list: ({ Label= "AdminAboutCompanyModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminAboutCompanyModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminAboutCompanyModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminAboutCompanyModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminAboutCompanyModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  adminAboutApplicationModel: {
    list: ({ Label= "AdminAboutApplicationModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminAboutApplicationModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminAboutApplicationModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminAboutApplicationModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminAboutApplicationModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  adminContactFormModel: {
    list: ({ Label= "AdminContactFormModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminContactFormModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminContactFormModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminContactFormModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminContactFormModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  adminContactInfoModel: {
    list: ({ Label= "AdminContactInfoModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminContactInfoModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminContactInfoModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminContactInfoModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminContactInfoModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  adminCounterModel: {
    list: ({ Label= "AdminCounterModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminCounterModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminCounterModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminCounterModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminCounterModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  adminServiceModel: {
    list: ({ Label= "AdminServiceModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminServiceModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminServiceModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminServiceModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminServiceModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  adminBranchSectionModel: {
    list: ({ Label= "AdminBranchSectionModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminBranchSectionModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminBranchSectionModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminBranchSectionModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminBranchSectionModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  adminBranchGroupModel: {
    list: ({ Label= "AdminBranchGroupModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminBranchGroupModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminBranchGroupModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminBranchGroupModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminBranchGroupModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "AdminBranchGroupModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  adminBranchModel: {
    list: ({ Label= "AdminBranchModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminBranchModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminBranchModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminBranchModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminBranchModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "AdminBranchModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  adminProjectSectionModel: {
    list: ({ Label= "AdminProjectSectionModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminProjectSectionModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminProjectSectionModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminProjectSectionModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminProjectSectionModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  adminProjectGroupModel: {
    list: ({ Label= "AdminProjectGroupModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminProjectGroupModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminProjectGroupModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminProjectGroupModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminProjectGroupModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "AdminProjectGroupModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  adminProjectModel: {
    list: ({ Label= "AdminProjectModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AdminProjectModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AdminProjectModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AdminProjectModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AdminProjectModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "AdminProjectModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  heroModel: {
    list: ({ Label= "HeroModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "HeroModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "HeroModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "HeroModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "HeroModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  aboutCompanyModel: {
    list: ({ Label= "AboutCompanyModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AboutCompanyModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AboutCompanyModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AboutCompanyModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AboutCompanyModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  aboutApplicationModel: {
    list: ({ Label= "AboutApplicationModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "AboutApplicationModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "AboutApplicationModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "AboutApplicationModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "AboutApplicationModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  contactFormModel: {
    list: ({ Label= "ContactFormModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "ContactFormModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "ContactFormModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "ContactFormModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "ContactFormModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  contactInfoModel: {
    list: ({ Label= "ContactInfoModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "ContactInfoModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "ContactInfoModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "ContactInfoModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "ContactInfoModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  counterModel: {
    list: ({ Label= "CounterModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "CounterModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "CounterModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "CounterModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "CounterModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  serviceModel: {
    list: ({ Label= "ServiceModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "ServiceModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "ServiceModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "ServiceModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "ServiceModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  branchSectionModel: {
    list: ({ Label= "BranchSectionModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "BranchSectionModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "BranchSectionModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "BranchSectionModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "BranchSectionModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  branchGroupModel: {
    list: ({ Label= "BranchGroupModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "BranchGroupModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "BranchGroupModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "BranchGroupModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "BranchGroupModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "BranchGroupModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  branchModel: {
    list: ({ Label= "BranchModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "BranchModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "BranchModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "BranchModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "BranchModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "BranchModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  projectSectionModel: {
    list: ({ Label= "ProjectSectionModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "ProjectSectionModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "ProjectSectionModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "ProjectSectionModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "ProjectSectionModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  projectGroupModel: {
    list: ({ Label= "ProjectGroupModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "ProjectGroupModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "ProjectGroupModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "ProjectGroupModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "ProjectGroupModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "ProjectGroupModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  projectModel: {
    list: ({ Label= "ProjectModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "ProjectModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "ProjectModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "ProjectModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "ProjectModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    listMini: ({ Label= "ProjectModel" }: listType) => (
     `${Label}::list-mini`
    ),
  },
  chatModel: {
    list: ({ Label= "ChatModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "ChatModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "ChatModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "ChatModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "ChatModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  requestModel: {
    list: ({ Label= "RequestModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "RequestModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "RequestModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "RequestModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "RequestModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  messageModel: {
    list: ({ Label= "MessageModel" }: listType) => (
     `${Label}::list`
    ),
    create: ({ Label= "MessageModel" }: createType) => [ 
      `${Label}::list`
    ],
    retrieve: ({ Label= "MessageModel", request }: retrieveType) => (
      `${Label}::retrieve:${request.params.id}`
    ),
    update: ({ Label= "MessageModel", request }: updateType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
    delete: ({ Label= "MessageModel", request }: deleteType) => [ 
      `${Label}::list`, 
      `${Label}::retrieve:${request.params.id}`
    ],
  },
  adminHomePageModel: {
    // list: ({ Label= "AdminHomePageModel" }: listType) => (
    //  `${Label}::list`
    // ),
    // create: ({ Label= "AdminHomePageModel" }: createType) => [ 
    //   `${Label}::list`
    // ],
    retrieve: ({ Label= "AdminHomePageModel", request }: retrieveType) => (
      `${Label}::retrieve`
    ),
    // update: ({ Label= "AdminHomePageModel", request }: updateType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
    // delete: ({ Label= "AdminHomePageModel", request }: deleteType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
  },
  adminAboutCompanyPageModel: {
    // list: ({ Label= "AdminAboutCompanyPageModel" }: listType) => (
    //  `${Label}::list`
    // ),
    // create: ({ Label= "AdminAboutCompanyPageModel" }: createType) => [ 
    //   `${Label}::list`
    // ],
    retrieve: ({ Label= "AdminAboutCompanyPageModel", request }: retrieveType) => (
      `${Label}::retrieve`
    ),
    // update: ({ Label= "AdminAboutCompanyPageModel", request }: updateType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
    // delete: ({ Label= "AdminAboutCompanyPageModel", request }: deleteType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
  },
  adminAboutApplicationPageModel: {
    // list: ({ Label= "AdminAboutApplicationPageModel" }: listType) => (
    //  `${Label}::list`
    // ),
    // create: ({ Label= "AdminAboutApplicationPageModel" }: createType) => [ 
    //   `${Label}::list`
    // ],
    retrieve: ({ Label= "AdminAboutApplicationPageModel", request }: retrieveType) => (
      `${Label}::retrieve`
    ),
    // update: ({ Label= "AdminAboutApplicationPageModel", request }: updateType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
    // delete: ({ Label= "AdminAboutApplicationPageModel", request }: deleteType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
  },
  adminContactPageModel: {
    // list: ({ Label= "AdminContactPageModel" }: listType) => (
    //  `${Label}::list`
    // ),
    // create: ({ Label= "AdminContactPageModel" }: createType) => [ 
    //   `${Label}::list`
    // ],
    retrieve: ({ Label= "AdminContactPageModel", request }: retrieveType) => (
      `${Label}::retrieve`
    ),
    // update: ({ Label= "AdminContactPageModel", request }: updateType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
    // delete: ({ Label= "AdminContactPageModel", request }: deleteType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
  },
  adminServicePageModel: {
    // list: ({ Label= "AdminServicePageModel" }: listType) => (
    //  `${Label}::list`
    // ),
    // create: ({ Label= "AdminServicePageModel" }: createType) => [ 
    //   `${Label}::list`
    // ],
    retrieve: ({ Label= "AdminServicePageModel", request }: retrieveType) => (
      `${Label}::retrieve`
    ),
    // update: ({ Label= "AdminServicePageModel", request }: updateType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
    // delete: ({ Label= "AdminServicePageModel", request }: deleteType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
  },
  adminBranchSectionPageModel: {
    // list: ({ Label= "AdminBranchSectionPageModel" }: listType) => (
    //  `${Label}::list`
    // ),
    // create: ({ Label= "AdminBranchSectionPageModel" }: createType) => [ 
    //   `${Label}::list`
    // ],
    retrieve: ({ Label= "AdminBranchSectionPageModel", request }: retrieveType) => (
      `${Label}::retrieve`
    ),
    // update: ({ Label= "AdminBranchSectionPageModel", request }: updateType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
    // delete: ({ Label= "AdminBranchSectionPageModel", request }: deleteType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
  },
  adminBranchGroupPageModel: {
    // list: ({ Label= "AdminBranchGroupPageModel" }: listType) => (
    //  `${Label}::list`
    // ),
    // create: ({ Label= "AdminBranchGroupPageModel" }: createType) => [ 
    //   `${Label}::list`
    // ],
    retrieve: ({ Label= "AdminBranchGroupPageModel", request }: retrieveType) => (
      `${Label}::retrieve`
    ),
    // update: ({ Label= "AdminBranchGroupPageModel", request }: updateType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
    // delete: ({ Label= "AdminBranchGroupPageModel", request }: deleteType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
  },
  adminBranchPageModel: {
    // list: ({ Label= "AdminBranchPageModel" }: listType) => (
    //  `${Label}::list`
    // ),
    // create: ({ Label= "AdminBranchPageModel" }: createType) => [ 
    //   `${Label}::list`
    // ],
    retrieve: ({ Label= "AdminBranchPageModel", request }: retrieveType) => (
      `${Label}::retrieve`
    ),
    // update: ({ Label= "AdminBranchPageModel", request }: updateType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
    // delete: ({ Label= "AdminBranchPageModel", request }: deleteType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
  },
  adminProjectSectionPageModel: {
    // list: ({ Label= "AdminProjectSectionPageModel" }: listType) => (
    //  `${Label}::list`
    // ),
    // create: ({ Label= "AdminProjectSectionPageModel" }: createType) => [ 
    //   `${Label}::list`
    // ],
    retrieve: ({ Label= "AdminProjectSectionPageModel", request }: retrieveType) => (
      `${Label}::retrieve`
    ),
    // update: ({ Label= "AdminProjectSectionPageModel", request }: updateType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
    // delete: ({ Label= "AdminProjectSectionPageModel", request }: deleteType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
  },
  adminProjectGroupPageModel: {
    // list: ({ Label= "AdminProjectGroupPageModel" }: listType) => (
    //  `${Label}::list`
    // ),
    // create: ({ Label= "AdminProjectGroupPageModel" }: createType) => [ 
    //   `${Label}::list`
    // ],
    retrieve: ({ Label= "AdminProjectGroupPageModel", request }: retrieveType) => (
      `${Label}::retrieve`
    ),
    // update: ({ Label= "AdminProjectGroupPageModel", request }: updateType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
    // delete: ({ Label= "AdminProjectGroupPageModel", request }: deleteType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
  },
  adminProjectPageModel: {
    // list: ({ Label= "AdminProjectPageModel" }: listType) => (
    //  `${Label}::list`
    // ),
    // create: ({ Label= "AdminProjectPageModel" }: createType) => [ 
    //   `${Label}::list`
    // ],
    retrieve: ({ Label= "AdminProjectPageModel", request }: retrieveType) => (
      `${Label}::retrieve`
    ),
    // update: ({ Label= "AdminProjectPageModel", request }: updateType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
    // delete: ({ Label= "AdminProjectPageModel", request }: deleteType) => [ 
    //   `${Label}::list`, 
    //   `${Label}::retrieve:${request.params.id}`
    // ],
  },

};

export default cacheVariable;
