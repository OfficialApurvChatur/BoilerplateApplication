
export default function aFirstGenerator(plop) {
  plop.setGenerator("a-first-generator", {
    description: "aFirstGenerator Generator",

    prompts: [{
      type: "input",
      name: "workspace",
      message: "Workspace Name: ",
    }],

    actions() {

      const modules = [
        { game: "aDatabaseManagement", manager: "aSetting",            name: "aBase",                   model: "Base",                   },
        { game: "aDatabaseManagement", manager: "aSetting",            name: "bAPILog",                 model: "APILog",                 },
        { game: "aDatabaseManagement", manager: "aSetting",            name: "cActivityLog",            model: "ActivityLog",            },
        { game: "aDatabaseManagement", manager: "aSetting",            name: "dEmailLog",               model: "EmailLog",               },
        { game: "aDatabaseManagement", manager: "aSetting",            name: "eNotification",           model: "Notification",           },
        { game: "aDatabaseManagement", manager: "aSetting",            name: "fNavigationMenu",         model: "NavigationMenu",         },
        { game: "aDatabaseManagement", manager: "aSetting",            name: "gAutomation",             model: "Automation",             },

        { game: "aDatabaseManagement", manager: "bUserAdministration", name: "aAccessPoint",            model: "AccessPoint",            },
        { game: "aDatabaseManagement", manager: "bUserAdministration", name: "bMenu",                   model: "Menu",                   },
        { game: "aDatabaseManagement", manager: "bUserAdministration", name: "cPermission",             model: "Permission",             },
        { game: "aDatabaseManagement", manager: "bUserAdministration", name: "dRole",                   model: "Role",                   },
        { game: "aDatabaseManagement", manager: "bUserAdministration", name: "eUser",                   model: "User",                   },
        { game: "aDatabaseManagement", manager: "bUserAdministration", name: "fProfile",                model: "Profile",                },
        { game: "aDatabaseManagement", manager: "bUserAdministration", name: "gAccount",                model: "Account",                },
        
        { game: "aDatabaseManagement", manager: "cUserAuthentication", name: "aSignIn",                 model: "SignIn",                 },
        { game: "aDatabaseManagement", manager: "cUserAuthentication", name: "bSignUp",                 model: "SignUp",                 },
        { game: "aDatabaseManagement", manager: "cUserAuthentication", name: "cSignOut",                model: "SignOut",                },
        { game: "aDatabaseManagement", manager: "cUserAuthentication", name: "dForgotPassword",         model: "ForgotPassword",         },
        { game: "aDatabaseManagement", manager: "cUserAuthentication", name: "eResetPassword",          model: "ResetPassword",          },
        
        { game: "aDatabaseManagement", manager: "dFileStorage",        name: "aImageStorage",           model: "ImageStorage",           },
        { game: "aDatabaseManagement", manager: "dFileStorage",        name: "bVideoStorage",           model: "VideoStorage",           },
        { game: "aDatabaseManagement", manager: "dFileStorage",        name: "cAudioStorage",           model: "AudioStorage",           },
        
        { game: "aDatabaseManagement", manager: "eContentOperation",   name: "aStaticContent",          model: "StaticContent",          },
        { game: "aDatabaseManagement", manager: "eContentOperation",   name: "bSocialMediaContent",     model: "SocialMediaContent",     },
        
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "aAdminHero",              model: "AdminHero",              },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "bAdminAboutCompany",      model: "AdminAboutCompany",      },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "cAdminAboutApplication",  model: "AdminAboutApplication",  },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "dAdminContactForm",       model: "AdminContactForm",       },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "eAdminContactInfo",       model: "AdminContactInfo",       },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "fAdminCounter",           model: "AdminCounter",           },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "gAdminService",           model: "AdminService",           },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "hAdminBranchSection",     model: "AdminBranchSection",     },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "iAdminBranchGroup",       model: "AdminBranchGroup",       },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "jAdminBranch",            model: "AdminBranch",            },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "kAdminProjectSection",    model: "AdminProjectSection",    },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "lAdminProjectGroup",      model: "AdminProjectGroup",      },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "mAdminProject",           model: "AdminProject",           },
        { game: "aDatabaseManagement", manager: "fAdminLanding",       name: "nAdminAboutSystemDesign", model: "AdminAboutSystemDesign", },
        
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "aHero",                   model: "Hero",                   },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "bAboutCompany",           model: "AboutCompany",           },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "cAboutApplication",       model: "AboutApplication",       },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "dContactForm",            model: "ContactForm",            },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "eContactInfo",            model: "ContactInfo",            },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "fCounter",                model: "Counter",                },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "gService",                model: "Service",                },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "hBranchSection",          model: "BranchSection",          },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "iBranchGroup",            model: "BranchGroup",            },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "jBranch",                 model: "Branch",                 },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "kProjectSection",         model: "ProjectSection",         },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "lProjectGroup",           model: "ProjectGroup",           },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "mProject",                model: "Project",                },
        { game: "aDatabaseManagement", manager: "gFrontendLanding",    name: "nAboutSystemDesign",      model: "AboutSystemDesign",      },
        
        { game: "aDatabaseManagement", manager: "hChatManagement",     name: "aChat",                   model: "Chat",                   },
        { game: "aDatabaseManagement", manager: "hChatManagement",     name: "bMessage",                model: "Message",                },
        { game: "aDatabaseManagement", manager: "hChatManagement",     name: "cRequest",                model: "Request",                },
        
        { game: "aDatabaseManagement", manager: "iSocialManagement",   name: "aLike",                   model: "Like",                   },
        { game: "aDatabaseManagement", manager: "iSocialManagement",   name: "bComment",                model: "Comment",                },
        { game: "aDatabaseManagement", manager: "iSocialManagement",   name: "cShare",                  model: "Share",                  },
        { game: "aDatabaseManagement", manager: "iSocialManagement",   name: "dSubscribe",              model: "Subscribe",              },
        { game: "aDatabaseManagement", manager: "iSocialManagement",   name: "eFollow",                 model: "Follow",                 },
        { game: "aDatabaseManagement", manager: "iSocialManagement",   name: "fBookmark",               model: "Bookmark",               },
        { game: "aDatabaseManagement", manager: "iSocialManagement",   name: "gBookmarkCollection",     model: "BookmarkCollection",     },
        { game: "aDatabaseManagement", manager: "iSocialManagement",   name: "hRepost",                 model: "Repost",                 },
      ];

      const files = [
        // =========================
        // Backend (05)
        // =========================
        {
          path: "backend/src/bLove/aMCVR/aModel/{{game}}/{{manager}}/{{name}}Model.ts",
          templateFile: "src/dPlop/eTemplate/backend/aModel.hbs",
        },
        {
          path: "backend/src/bLove/aMCVR/bController/{{game}}/{{manager}}/{{name}}Controller.ts",
          templateFile: "src/dPlop/eTemplate/backend/bController.hbs",
        },
        {
          path: "backend/src/bLove/aMCVR/cValidation/{{game}}/{{manager}}/{{name}}Validation.ts",
          templateFile: "src/dPlop/eTemplate/backend/cValidation.hbs",
        },
        {
          path: "backend/src/bLove/aMCVR/dRoute/{{game}}/{{manager}}/{{name}}Route.ts",
          templateFile: "src/dPlop/eTemplate/backend/dRoute.hbs",
        },
        {
          path: "backend/src/bLove/aMCVR/eService/{{game}}/{{manager}}/{{name}}Service.ts",
          templateFile: "src/dPlop/eTemplate/backend/eService.hbs",
        },

        // =========================
        // List Page (05)
        // =========================
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/aListPage/index.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/aList/index.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/aListPage/extra/aListHeader.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/aList/aListHeader.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/aListPage/extra/bListSchema.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/aList/bListSchema.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/aListPage/extra/cListColumn.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/aList/cListColumn.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/aListPage/extra/dAPIHandler.ts",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/aList/dAPIHandler.hbs",
        },

        // =========================
        // Create Page (06)
        // =========================
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/bCreatePage/index.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/bCreate/index.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/bCreatePage/extra/aFormHeader.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/bCreate/aFormHeader.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/bCreatePage/extra/bFormData.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/bCreate/bFormData.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/bCreatePage/extra/cFormValueSchema.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/bCreate/cFormValueSchema.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/bCreatePage/extra/dFormValueDefault.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/bCreate/dFormValueDefault.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/bCreatePage/extra/eAPIHandler.ts",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/bCreate/eAPIHandler.hbs",
        },

        // =========================
        // Retrieve Page (04)
        // =========================
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/cRetrievePage/index.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/cRetrieve/index.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/cRetrievePage/extra/aPageHeader.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/cRetrieve/aPageHeader.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/cRetrievePage/extra/bPageData.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/cRetrieve/bPageData.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/cRetrievePage/extra/cAPIHandler.ts",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/cRetrieve/cAPIHandler.hbs",
        },

        // =========================
        // Update Page (07)
        // =========================
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/dUpdatePage/index.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/dUpdate/index.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/dUpdatePage/extra/aFormHeader.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/dUpdate/aFormHeader.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/dUpdatePage/extra/bFormData.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/dUpdate/bFormData.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/dUpdatePage/extra/cFormValueSchema.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/dUpdate/cFormValueSchema.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/dUpdatePage/extra/dFormValueDefault.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/dUpdate/dFormValueDefault.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/dUpdatePage/extra/eFormValuePrevious.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/dUpdate/eFormValuePrevious.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/dUpdatePage/extra/fAPIHandler.ts",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/dUpdate/fAPIHandler.hbs",
        },

        // =========================
        // Delete Page (04)
        // =========================
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/eDeletePage/index.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/eDelete/index.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/eDeletePage/extra/aPageHeader.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/eDelete/aPageHeader.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/eDeletePage/extra/bPageData.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/eDelete/bPageData.hbs",
        },
        {
          path: "frontend/src/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/{{manager}}Page/{{name}}Page/eDeletePage/extra/cAPIHandler.ts",
          templateFile: "src/dPlop/eTemplate/frontend/fPage/eDelete/cAPIHandler.hbs",
        },

        // =========================
        // Components (05)
        // =========================
        {
          path: "frontend/src/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/{{manager}}Component/{{name}}Component/aListComponent/index.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/cComponent/aList/index.hbs",
        },
        {
          path: "frontend/src/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/{{manager}}Component/{{name}}Component/bCreateComponent/index.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/cComponent/bCreate/index.hbs",
        },
        {
          path: "frontend/src/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/{{manager}}Component/{{name}}Component/cRetrieveComponent/index.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/cComponent/cRetrieve/index.hbs",
        },
        {
          path: "frontend/src/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/{{manager}}Component/{{name}}Component/dUpdateComponent/index.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/cComponent/dUpdate/index.hbs",
        },
        {
          path: "frontend/src/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/{{manager}}Component/{{name}}Component/eDeleteComponent/index.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/cComponent/eDelete/index.hbs",
        },

        // =========================
        // API (01)
        // =========================
        {
          path: "frontend/src/bLove/aAPI/{{game}}/{{manager}}/{{name}}API/index.tsx",
          templateFile: "src/dPlop/eTemplate/frontend/aAPI/index.hbs",
        },
      ];

      return (
        modules.flatMap((eachModule) =>
          files.map((eachFile) => ({
            type: "add",
            path: `src/eAutomation/workspace/{{workspace}}/site/${eachFile.path}`,
            templateFile: eachFile.templateFile,
            data: eachModule,
            skipIfExists: true,
          }))
        )
      )
    },
  });
}
