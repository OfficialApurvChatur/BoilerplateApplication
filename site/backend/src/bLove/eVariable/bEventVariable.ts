import express from "express";

type eventItemType = {
  name: string;
  action: 
    | "emit"        // send event to all clients
    | "broadcast"   // send to all except sender
    | "to-room"     // send to a specific room
    | "disconnect"  // disconnect a client
    | "log"         // only log, no emit
    | "none";       // do nothing
  room?: string;
};

type listType = {
  Label?: string
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

const eventVariable = {
  baseModel: {
    list: ({ Label= "BaseModel" }: listType) => [],
    create: ({ Label= "BaseModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "BaseModel", request }: retrieveType) => [],
    update: ({ Label= "BaseModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "BaseModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  apiLogModel: {
    list: ({ Label= "APILogModel" }: listType) => [],
    create: ({ Label= "APILogModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "APILogModel", request }: retrieveType) => [],
    update: ({ Label= "APILogModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "APILogModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  activityLogModel: {
    list: ({ Label= "ActivityLogModel" }: listType) => [],
    create: ({ Label= "ActivityLogModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "ActivityLogModel", request }: retrieveType) => [],
    update: ({ Label= "ActivityLogModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "ActivityLogModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  accessPointModel: {
    list: ({ Label= "AccessPointModel" }: listType) => [],
    create: ({ Label= "AccessPointModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AccessPointModel", request }: retrieveType) => [],
    update: ({ Label= "AccessPointModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AccessPointModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  menuModel: {
    list: ({ Label= "MenuModel" }: listType) => [],
    create: ({ Label= "MenuModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "MenuModel", request }: retrieveType) => [],
    update: ({ Label= "MenuModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "MenuModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  permissionModel: {
    list: ({ Label= "PermissionModel" }: listType) => [],
    create: ({ Label= "PermissionModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "PermissionModel", request }: retrieveType) => [],
    update: ({ Label= "PermissionModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "PermissionModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  roleModel: {
    list: ({ Label= "RoleModel" }: listType) => [],
    create: ({ Label= "RoleModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "RoleModel", request }: retrieveType) => [],
    update: ({ Label= "RoleModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "RoleModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  userModel: {
    list: ({ Label= "UserModel" }: listType) => [],
    create: ({ Label= "UserModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "UserModel", request }: retrieveType) => [],
    update: ({ Label= "UserModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "UserModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  profileModel: {
    list: ({ Label= "ProfileModel" }: listType) => [],
    create: ({ Label= "ProfileModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "ProfileModel", request }: retrieveType) => [],
    update: ({ Label= "ProfileModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "ProfileModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  accountModel: {
    list: ({ Label= "AccountModel" }: listType) => [],
    create: ({ Label= "AccountModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AccountModel", request }: retrieveType) => [],
    update: ({ Label= "AccountModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AccountModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  signInModel: {
    list: ({ Label= "SignInModel" }: listType) => [],
    create: ({ Label= "SignInModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "SignInModel", request }: retrieveType) => [],
    update: ({ Label= "SignInModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "SignInModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  signUpModel: {
    list: ({ Label= "SignUpModel" }: listType) => [],
    create: ({ Label= "SignUpModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "SignUpModel", request }: retrieveType) => [],
    update: ({ Label= "SignUpModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "SignUpModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  signOutModel: {
    list: ({ Label= "SignOutModel" }: listType) => [],
    create: ({ Label= "SignOutModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "SignOutModel", request }: retrieveType) => [],
    update: ({ Label= "SignOutModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "SignOutModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  forgotPasswordModel: {
    list: ({ Label= "ForgotPasswordModel" }: listType) => [],
    create: ({ Label= "ForgotPasswordModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "ForgotPasswordModel", request }: retrieveType) => [],
    update: ({ Label= "ForgotPasswordModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "ForgotPasswordModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  resetPasswordModel: {
    list: ({ Label= "ResetPasswordModel" }: listType) => [],
    create: ({ Label= "ResetPasswordModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "ResetPasswordModel", request }: retrieveType) => [],
    update: ({ Label= "ResetPasswordModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "ResetPasswordModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  imageStorageModel: {
    list: ({ Label= "ImageStorageModel" }: listType) => [],
    create: ({ Label= "ImageStorageModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "ImageStorageModel", request }: retrieveType) => [],
    update: ({ Label= "ImageStorageModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "ImageStorageModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  videoStorageModel: {
    list: ({ Label= "VideoStorageModel" }: listType) => [],
    create: ({ Label= "VideoStorageModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "VideoStorageModel", request }: retrieveType) => [],
    update: ({ Label= "VideoStorageModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "VideoStorageModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  audioStorageModel: {
    list: ({ Label= "AudioStorageModel" }: listType) => [],
    create: ({ Label= "AudioStorageModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AudioStorageModel", request }: retrieveType) => [],
    update: ({ Label= "AudioStorageModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AudioStorageModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  staticContentModel: {
    list: ({ Label= "StaticContentModel" }: listType) => [],
    create: ({ Label= "StaticContentModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "StaticContentModel", request }: retrieveType) => [],
    update: ({ Label= "StaticContentModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "StaticContentModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  socialMediaContentModel: {
    list: ({ Label= "SocialMediaContentModel" }: listType) => [],
    create: ({ Label= "SocialMediaContentModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "SocialMediaContentModel", request }: retrieveType) => [],
    update: ({ Label= "SocialMediaContentModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "SocialMediaContentModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminHeroModel: {
    list: ({ Label= "AdminHeroModel" }: listType) => [],
    create: ({ Label= "AdminHeroModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminHeroModel", request }: retrieveType) => [],
    update: ({ Label= "AdminHeroModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminHeroModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminAboutCompanyModel: {
    list: ({ Label= "AdminAboutCompanyModel" }: listType) => [],
    create: ({ Label= "AdminAboutCompanyModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminAboutCompanyModel", request }: retrieveType) => [],
    update: ({ Label= "AdminAboutCompanyModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminAboutCompanyModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminAboutApplicationModel: {
    list: ({ Label= "AdminAboutApplicationModel" }: listType) => [],
    create: ({ Label= "AdminAboutApplicationModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminAboutApplicationModel", request }: retrieveType) => [],
    update: ({ Label= "AdminAboutApplicationModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminAboutApplicationModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminContactFormModel: {
    list: ({ Label= "AdminContactFormModel" }: listType) => [],
    create: ({ Label= "AdminContactFormModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminContactFormModel", request }: retrieveType) => [],
    update: ({ Label= "AdminContactFormModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminContactFormModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminContactInfoModel: {
    list: ({ Label= "AdminContactInfoModel" }: listType) => [],
    create: ({ Label= "AdminContactInfoModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminContactInfoModel", request }: retrieveType) => [],
    update: ({ Label= "AdminContactInfoModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminContactInfoModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminCounterModel: {
    list: ({ Label= "AdminCounterModel" }: listType) => [],
    create: ({ Label= "AdminCounterModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminCounterModel", request }: retrieveType) => [],
    update: ({ Label= "AdminCounterModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminCounterModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminServiceModel: {
    list: ({ Label= "AdminServiceModel" }: listType) => [],
    create: ({ Label= "AdminServiceModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminServiceModel", request }: retrieveType) => [],
    update: ({ Label= "AdminServiceModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminServiceModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminBranchSectionModel: {
    list: ({ Label= "AdminBranchSectionModel" }: listType) => [],
    create: ({ Label= "AdminBranchSectionModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminBranchSectionModel", request }: retrieveType) => [],
    update: ({ Label= "AdminBranchSectionModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminBranchSectionModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminBranchGroupModel: {
    list: ({ Label= "AdminBranchGroupModel" }: listType) => [],
    create: ({ Label= "AdminBranchGroupModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminBranchGroupModel", request }: retrieveType) => [],
    update: ({ Label= "AdminBranchGroupModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminBranchGroupModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminBranchModel: {
    list: ({ Label= "AdminBranchModel" }: listType) => [],
    create: ({ Label= "AdminBranchModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminBranchModel", request }: retrieveType) => [],
    update: ({ Label= "AdminBranchModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminBranchModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminProjectSectionModel: {
    list: ({ Label= "AdminProjectSectionModel" }: listType) => [],
    create: ({ Label= "AdminProjectSectionModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminProjectSectionModel", request }: retrieveType) => [],
    update: ({ Label= "AdminProjectSectionModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminProjectSectionModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminProjectGroupModel: {
    list: ({ Label= "AdminProjectGroupModel" }: listType) => [],
    create: ({ Label= "AdminProjectGroupModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminProjectGroupModel", request }: retrieveType) => [],
    update: ({ Label= "AdminProjectGroupModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminProjectGroupModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  adminProjectModel: {
    list: ({ Label= "AdminProjectModel" }: listType) => [],
    create: ({ Label= "AdminProjectModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AdminProjectModel", request }: retrieveType) => [],
    update: ({ Label= "AdminProjectModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AdminProjectModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  heroModel: {
    list: ({ Label= "HeroModel" }: listType) => [],
    create: ({ Label= "HeroModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "HeroModel", request }: retrieveType) => [],
    update: ({ Label= "HeroModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "HeroModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  aboutCompanyModel: {
    list: ({ Label= "AboutCompanyModel" }: listType) => [],
    create: ({ Label= "AboutCompanyModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AboutCompanyModel", request }: retrieveType) => [],
    update: ({ Label= "AboutCompanyModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AboutCompanyModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  aboutApplicationModel: {
    list: ({ Label= "AboutApplicationModel" }: listType) => [],
    create: ({ Label= "AboutApplicationModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "AboutApplicationModel", request }: retrieveType) => [],
    update: ({ Label= "AboutApplicationModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "AboutApplicationModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  contactFormModel: {
    list: ({ Label= "ContactFormModel" }: listType) => [],
    create: ({ Label= "ContactFormModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "ContactFormModel", request }: retrieveType) => [],
    update: ({ Label= "ContactFormModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "ContactFormModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  contactInfoModel: {
    list: ({ Label= "ContactInfoModel" }: listType) => [],
    create: ({ Label= "ContactInfoModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "ContactInfoModel", request }: retrieveType) => [],
    update: ({ Label= "ContactInfoModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "ContactInfoModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  counterModel: {
    list: ({ Label= "CounterModel" }: listType) => [],
    create: ({ Label= "CounterModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "CounterModel", request }: retrieveType) => [],
    update: ({ Label= "CounterModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "CounterModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  serviceModel: {
    list: ({ Label= "ServiceModel" }: listType) => [],
    create: ({ Label= "ServiceModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "ServiceModel", request }: retrieveType) => [],
    update: ({ Label= "ServiceModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "ServiceModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  branchSectionModel: {
    list: ({ Label= "BranchSectionModel" }: listType) => [],
    create: ({ Label= "BranchSectionModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "BranchSectionModel", request }: retrieveType) => [],
    update: ({ Label= "BranchSectionModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "BranchSectionModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  branchGroupModel: {
    list: ({ Label= "BranchGroupModel" }: listType) => [],
    create: ({ Label= "BranchGroupModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "BranchGroupModel", request }: retrieveType) => [],
    update: ({ Label= "BranchGroupModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "BranchGroupModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  branchModel: {
    list: ({ Label= "BranchModel" }: listType) => [],
    create: ({ Label= "BranchModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "BranchModel", request }: retrieveType) => [],
    update: ({ Label= "BranchModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "BranchModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  projectSectionModel: {
    list: ({ Label= "ProjectSectionModel" }: listType) => [],
    create: ({ Label= "ProjectSectionModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "ProjectSectionModel", request }: retrieveType) => [],
    update: ({ Label= "ProjectSectionModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "ProjectSectionModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  projectGroupModel: {
    list: ({ Label= "ProjectGroupModel" }: listType) => [],
    create: ({ Label= "ProjectGroupModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "ProjectGroupModel", request }: retrieveType) => [],
    update: ({ Label= "ProjectGroupModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "ProjectGroupModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  projectModel: {
    list: ({ Label= "ProjectModel" }: listType) => [],
    create: ({ Label= "ProjectModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "ProjectModel", request }: retrieveType) => [],
    update: ({ Label= "ProjectModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "ProjectModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  chatModel: {
    list: ({ Label= "ChatModel" }: listType) => [],
    create: ({ Label= "ChatModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "ChatModel", request }: retrieveType) => [],
    update: ({ Label= "ChatModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "ChatModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  requestModel: {
    list: ({ Label= "RequestModel" }: listType) => [],
    create: ({ Label= "RequestModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "RequestModel", request }: retrieveType) => [],
    update: ({ Label= "RequestModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "RequestModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
  messageModel: {
    list: ({ Label= "MessageModel" }: listType) => [],
    create: ({ Label= "MessageModel" }: createType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    retrieve: ({ Label= "MessageModel", request }: retrieveType) => [],
    update: ({ Label= "MessageModel", request }: updateType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
    delete: ({ Label= "MessageModel", request }: deleteType): eventItemType[] => [ 
      { name: `New-${Label}-Listed`                        , action: "emit" },
      { name: `New-${Label}-Retrieved:${request.params.id}`, action: "emit" },
      { name: `New-ActivityLog-Listed`                     , action: "emit" },
    ],
  },  
};

export default eventVariable;
