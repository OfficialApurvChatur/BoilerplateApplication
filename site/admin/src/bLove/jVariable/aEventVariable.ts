type listType = {
  Label?: string
} 

type createType = {
  Label?: string,
} 

type retrieveType = {
  Label?: string
  id: string | undefined
} 

type updateType = {
  Label?: string,
  id: string | undefined
} 

type deleteType = {
  Label?: string,
  id: string | undefined
} 

const eventVariable = {
  baseModel: {
    list: ({ Label= "BaseModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "BaseModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "BaseModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "BaseModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "BaseModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  apiLogModel: {
    list: ({ Label= "APILogModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "APILogModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "APILogModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "APILogModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "APILogModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  activityLogModel: {
    list: ({ Label= "ActivityLogModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "ActivityLogModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "ActivityLogModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "ActivityLogModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "ActivityLogModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  accessPointModel: {
    list: ({ Label= "AccessPointModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AccessPointModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AccessPointModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AccessPointModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AccessPointModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  menuModel: {
    list: ({ Label= "MenuModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "MenuModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "MenuModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "MenuModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "MenuModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  permissionModel: {
    list: ({ Label= "PermissionModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "PermissionModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "PermissionModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "PermissionModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "PermissionModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  roleModel: {
    list: ({ Label= "RoleModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "RoleModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "RoleModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "RoleModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "RoleModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  userModel: {
    list: ({ Label= "UserModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "UserModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "UserModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "UserModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "UserModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  profileModel: {
    list: ({ Label= "ProfileModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "ProfileModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "ProfileModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "ProfileModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "ProfileModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  accountModel: {
    list: ({ Label= "AccountModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AccountModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AccountModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AccountModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AccountModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  signInModel: {
    list: ({ Label= "SignInModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "SignInModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "SignInModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "SignInModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "SignInModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  signUpModel: {
    list: ({ Label= "SignUpModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "SignUpModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "SignUpModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "SignUpModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "SignUpModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  signOutModel: {
    list: ({ Label= "SignOutModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "SignOutModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "SignOutModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "SignOutModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "SignOutModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  forgotPasswordModel: {
    list: ({ Label= "ForgotPasswordModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "ForgotPasswordModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "ForgotPasswordModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "ForgotPasswordModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "ForgotPasswordModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  resetPasswordModel: {
    list: ({ Label= "ResetPasswordModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "ResetPasswordModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "ResetPasswordModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "ResetPasswordModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "ResetPasswordModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  imageStorageModel: {
    list: ({ Label= "ImageStorageModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "ImageStorageModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "ImageStorageModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "ImageStorageModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "ImageStorageModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  videoStorageModel: {
    list: ({ Label= "VideoStorageModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "VideoStorageModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "VideoStorageModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "VideoStorageModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "VideoStorageModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  audioStorageModel: {
    list: ({ Label= "AudioStorageModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AudioStorageModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AudioStorageModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AudioStorageModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AudioStorageModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  staticContentModel: {
    list: ({ Label= "StaticContentModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "StaticContentModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "StaticContentModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "StaticContentModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "StaticContentModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  socialMediaContentModel: {
    list: ({ Label= "SocialMediaContentModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "SocialMediaContentModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "SocialMediaContentModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "SocialMediaContentModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "SocialMediaContentModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminHeroModel: {
    list: ({ Label= "AdminHeroModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminHeroModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminHeroModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminHeroModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminHeroModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminAboutCompanyModel: {
    list: ({ Label= "AdminAboutCompanyModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminAboutCompanyModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminAboutCompanyModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminAboutCompanyModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminAboutCompanyModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminAboutApplicationModel: {
    list: ({ Label= "AdminAboutApplicationModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminAboutApplicationModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminAboutApplicationModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminAboutApplicationModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminAboutApplicationModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminContactFormModel: {
    list: ({ Label= "AdminContactFormModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminContactFormModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminContactFormModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminContactFormModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminContactFormModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminContactInfoModel: {
    list: ({ Label= "AdminContactInfoModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminContactInfoModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminContactInfoModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminContactInfoModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminContactInfoModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminCounterModel: {
    list: ({ Label= "AdminCounterModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminCounterModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminCounterModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminCounterModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminCounterModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminServiceModel: {
    list: ({ Label= "AdminServiceModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminServiceModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminServiceModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminServiceModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminServiceModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminBranchSectionModel: {
    list: ({ Label= "AdminBranchSectionModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminBranchSectionModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminBranchSectionModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminBranchSectionModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminBranchSectionModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminBranchGroupModel: {
    list: ({ Label= "AdminBranchGroupModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminBranchGroupModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminBranchGroupModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminBranchGroupModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminBranchGroupModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminBranchModel: {
    list: ({ Label= "AdminBranchModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminBranchModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminBranchModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminBranchModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminBranchModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminProjectSectionModel: {
    list: ({ Label= "AdminProjectSectionModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminProjectSectionModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminProjectSectionModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminProjectSectionModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminProjectSectionModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminProjectGroupModel: {
    list: ({ Label= "AdminProjectGroupModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminProjectGroupModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminProjectGroupModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminProjectGroupModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminProjectGroupModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  adminProjectModel: {
    list: ({ Label= "AdminProjectModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AdminProjectModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AdminProjectModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AdminProjectModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AdminProjectModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  heroModel: {
    list: ({ Label= "HeroModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "HeroModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "HeroModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "HeroModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "HeroModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  aboutCompanyModel: {
    list: ({ Label= "AboutCompanyModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AboutCompanyModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AboutCompanyModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AboutCompanyModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AboutCompanyModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  aboutApplicationModel: {
    list: ({ Label= "AboutApplicationModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "AboutApplicationModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "AboutApplicationModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "AboutApplicationModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "AboutApplicationModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  contactFormModel: {
    list: ({ Label= "ContactFormModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "ContactFormModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "ContactFormModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "ContactFormModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "ContactFormModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  contactInfoModel: {
    list: ({ Label= "ContactInfoModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "ContactInfoModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "ContactInfoModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "ContactInfoModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "ContactInfoModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  counterModel: {
    list: ({ Label= "CounterModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "CounterModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "CounterModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "CounterModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "CounterModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  serviceModel: {
    list: ({ Label= "ServiceModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "ServiceModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "ServiceModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "ServiceModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "ServiceModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  branchSectionModel: {
    list: ({ Label= "BranchSectionModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "BranchSectionModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "BranchSectionModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "BranchSectionModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "BranchSectionModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  branchGroupModel: {
    list: ({ Label= "BranchGroupModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "BranchGroupModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "BranchGroupModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "BranchGroupModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "BranchGroupModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  branchModel: {
    list: ({ Label= "BranchModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "BranchModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "BranchModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "BranchModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "BranchModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  projectSectionModel: {
    list: ({ Label= "ProjectSectionModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "ProjectSectionModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "ProjectSectionModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "ProjectSectionModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "ProjectSectionModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  projectGroupModel: {
    list: ({ Label= "ProjectGroupModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "ProjectGroupModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "ProjectGroupModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "ProjectGroupModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "ProjectGroupModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  projectModel: {
    list: ({ Label= "ProjectModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "ProjectModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "ProjectModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "ProjectModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "ProjectModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  chatModel: {
    list: ({ Label= "ChatModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "ChatModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "ChatModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "ChatModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "ChatModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  requestModel: {
    list: ({ Label= "RequestModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "RequestModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "RequestModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "RequestModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "RequestModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
  messageModel: {
    list: ({ Label= "MessageModel" }: listType = {}): string => `New-${Label}-Listed`,
    create: ({ Label= "MessageModel" }: createType): string => `New-${Label}-BlaBlaBla`, // Not in use
    retrieve: ({ Label= "MessageModel", id }: retrieveType): string => `New-${Label}-Retrieved:${id}`,
    update: ({ Label= "MessageModel", id }: updateType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
    delete: ({ Label= "MessageModel", id }: deleteType): string => `New-${Label}-BlaBlaBla:${id}`, // Not in use
  },  
};

export default eventVariable;
