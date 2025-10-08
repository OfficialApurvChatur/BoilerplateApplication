const endpointRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {
      aAdminHomePageRoute: "",
      bAdminAboutPageRoute: "admin-about-page",
      cAdminContactPageRoute: "admin-contact-page",
    },
    bProtectedRoute: {
      aAutheticatedRoute: {
        aSignInRoute: "sign-in",
        bSignUpRoute: "sign-up",
        cForgotPasswordRoute: "forgot-password",
        dResetPasswordRoute: "reset-password",
      },
      bAuthorizedRoute: {
        aTopbarRoute: {
          aAccountRetrieveRoute: "account-retrieve-primary",
          bAccountUpdateRoute: "account-update-primary",
          cAccountEmailUpdateRoute: "account-email-update-primary",
          dAccountPasswordUpdateRoute: "account-password-update-primary",
          eAccountDeleteRoute: "account-delete-primary",
        },
        bSidebarRoute: {
          aSettingRoute: {
            aBaseRoute: {
              aListRoute: "base-list",
              bCreateRoute: "base-create",
              cRetrieveRoute: "base-retrieve",
              dUpdateRoute: "base-update",
              eDeleteRoute: "base-delete",
            },
            bAPILogRoute: {
              aListRoute: "api-log-list",
              bCreateRoute: "api-log-create",
              cRetrieveRoute: "api-log-retrieve",
              dUpdateRoute: "api-log-update",
              eDeleteRoute: "api-log-delete",
            },
            cActivityLogRoute: {
              aListRoute: "activity-log-list",
              bCreateRoute: "activity-log-create",
              cRetrieveRoute: "activity-log-retrieve",
              dUpdateRoute: "activity-log-update",
              eDeleteRoute: "activity-log-delete",
            },
          },
          bUserAdministrationRoute: {
            aAccessPointRoute: {
              aListRoute: "access-point-list",
              bCreateRoute: "access-point-create",
              cRetrieveRoute: "access-point-retrieve",
              dUpdateRoute: "access-point-update",
              eDeleteRoute: "access-point-delete",
            },
            bMenuRoute: {
              aListRoute: "menu-list",
              bCreateRoute: "menu-create",
              cRetrieveRoute: "menu-retrieve",
              dUpdateRoute: "menu-update",
              eDeleteRoute: "menu-delete",
            },
            cPermissionRoute: {
              aListRoute: "permission-list",
              bCreateRoute: "permission-create",
              cRetrieveRoute: "permission-retrieve",
              dUpdateRoute: "permission-update",
              eDeleteRoute: "permission-delete",
            },
            dRoleRoute: {
              aListRoute: "role-list",
              bCreateRoute: "role-create",
              cRetrieveRoute: "role-retrieve",
              dUpdateRoute: "role-update",
              eDeleteRoute: "role-delete",
            },
            eUserRoute: {
              aListRoute: "user-list",
              bCreateRoute: "user-create",
              cRetrieveRoute: "user-retrieve",
              dUpdateRoute: "user-update",
              eDeleteRoute: "user-delete",
            },
            fProfileRoute: {
              aListRoute: "profile-list",
              bCreateRoute: "profile-create",
              cRetrieveRoute: "profile-retrieve",
              dUpdateRoute: "profile-update",
              eDeleteRoute: "profile-delete",
            },
            gAccountRoute: {
              aListRoute: "account-list",
              bCreateRoute: "account-create",
              cRetrieveRoute: "account-retrieve",
              dUpdateRoute: "account-update",
              eDeleteRoute: "account-delete",
            },
          },
          cUserAuthenticationRoute: {
            aSignInRoute: {
              aListRoute: "sign-in-list",
              bCreateRoute: "sign-in-create",
              cRetrieveRoute: "sign-in-retrieve",
              dUpdateRoute: "sign-in-update",
              eDeleteRoute: "sign-in-delete",
            },
            bSignUpRoute: {
              aListRoute: "sign-up-list",
              bCreateRoute: "sign-up-create",
              cRetrieveRoute: "sign-up-retrieve",
              dUpdateRoute: "sign-up-update",
              eDeleteRoute: "sign-up-delete",
            },
            cSignOutRoute: {
              aListRoute: "sign-out-list",
              bCreateRoute: "sign-out-create",
              cRetrieveRoute: "sign-out-retrieve",
              dUpdateRoute: "sign-out-update",
              eDeleteRoute: "sign-out-delete",
            },
            dForgotPasswordRoute: {
              aListRoute: "forgot-password-list",
              bCreateRoute: "forgot-password-create",
              cRetrieveRoute: "forgot-password-retrieve",
              dUpdateRoute: "forgot-password-update",
              eDeleteRoute: "forgot-password-delete",
            },
            eResetPasswordRoute: {
              aListRoute: "reset-password-list",
              bCreateRoute: "reset-password-create",
              cRetrieveRoute: "reset-password-retrieve",
              dUpdateRoute: "reset-password-update",
              eDeleteRoute: "reset-password-delete",
            },
          },
          dFileStorageRoute: {
            aImageStorageRoute: {
              aListRoute: "image-storage-list",
              bCreateRoute: "image-storage-create",
              cRetrieveRoute: "image-storage-retrieve",
              dUpdateRoute: "image-storage-update",
              eDeleteRoute: "image-storage-delete",
            },
            bVideoStorageRoute: {
              aListRoute: "video-storage-list",
              bCreateRoute: "video-storage-create",
              cRetrieveRoute: "video-storage-retrieve",
              dUpdateRoute: "video-storage-update",
              eDeleteRoute: "video-storage-delete",
            },
          },
          eContentOperationRoute: {
            aStaticContentRoute: {
              aListRoute: "static-content-list",
              bCreateRoute: "static-content-create",
              cRetrieveRoute: "static-content-retrieve",
              dUpdateRoute: "static-content-update",
              eDeleteRoute: "static-content-delete",
            },
            bSocialMediaContentRoute: {
              aListRoute: "social-media-content-list",
              bCreateRoute: "social-media-content-create",
              cRetrieveRoute: "social-media-content-retrieve",
              dUpdateRoute: "social-media-content-update",
              eDeleteRoute: "social-media-content-delete",
            },
          },
          fAdminLandingRoute: {
            aAdminHeroRoute: {
              aListRoute: "admin-hero-list",
              bCreateRoute: "admin-hero-create",
              cRetrieveRoute: "admin-hero-retrieve",
              dUpdateRoute: "admin-hero-update",
              eDeleteRoute: "admin-hero-delete",
            },
            bAdminAboutCompanyRoute: {
              aListRoute: "admin-about-company-list",
              bCreateRoute: "admin-about-company-create",
              cRetrieveRoute: "admin-about-company-retrieve",
              dUpdateRoute: "admin-about-company-update",
              eDeleteRoute: "admin-about-company-delete",
            },
            cAdminAboutApplicationRoute: {
              aListRoute: "admin-about-application-list",
              bCreateRoute: "admin-about-application-create",
              cRetrieveRoute: "admin-about-application-retrieve",
              dUpdateRoute: "admin-about-application-update",
              eDeleteRoute: "admin-about-application-delete",
            },
            dAdminContactFormRoute: {
              aListRoute: "admin-contact-form-list",
              bCreateRoute: "admin-contact-form-create",
              cRetrieveRoute: "admin-contact-form-retrieve",
              dUpdateRoute: "admin-contact-form-update",
              eDeleteRoute: "admin-contact-form-delete",
            },
            eAdminContactInfoRoute: {
              aListRoute: "admin-contact-info-list",
              bCreateRoute: "admin-contact-info-create",
              cRetrieveRoute: "admin-contact-info-retrieve",
              dUpdateRoute: "admin-contact-info-update",
              eDeleteRoute: "admin-contact-info-delete",
            },
          },
          gFrontendLandingRoute: {
            aHeroRoute: {
              aListRoute: "hero-list",
              bCreateRoute: "hero-create",
              cRetrieveRoute: "hero-retrieve",
              dUpdateRoute: "hero-update",
              eDeleteRoute: "hero-delete",
            },
            bAboutCompanyRoute: {
              aListRoute: "about-company-list",
              bCreateRoute: "about-company-create",
              cRetrieveRoute: "about-company-retrieve",
              dUpdateRoute: "about-company-update",
              eDeleteRoute: "about-company-delete",
            },
            cAboutApplicationRoute: {
              aListRoute: "about-application-list",
              bCreateRoute: "about-application-create",
              cRetrieveRoute: "about-application-retrieve",
              dUpdateRoute: "about-application-update",
              eDeleteRoute: "about-application-delete",
            },
            dContactFormRoute: {
              aListRoute: "contact-form-list",
              bCreateRoute: "contact-form-create",
              cRetrieveRoute: "contact-form-retrieve",
              dUpdateRoute: "contact-form-update",
              eDeleteRoute: "contact-form-delete",
            },
            eContactInfoRoute: {
              aListRoute: "contact-info-list",
              bCreateRoute: "contact-info-create",
              cRetrieveRoute: "contact-info-retrieve",
              dUpdateRoute: "contact-info-update",
              eDeleteRoute: "contact-info-delete",
            },
          },
          hMainRoute: {
            aDashboardRoute: "dashboard",
          }
        }
      }
    }
  },
  zSampleRoute: {}
}

export default endpointRoute;
