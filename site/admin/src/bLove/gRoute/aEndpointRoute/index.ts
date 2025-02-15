const endpointRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {
      aHomeRoute: ""
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
          aAccountRetrieveRoute: "account-retrieve",
          bAccountUpdateRoute: "account-update",
          cAccountEmailUpdateRoute: "account-email-update",
          dAccountPasswordUpdateRoute: "account-password-update",
          eAccountDeleteRoute: "account-delete",
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
            bActivityLogRoute: {
              aListRoute: "activity-log-list",
              bCreateRoute: "activity-log-create",
              cRetrieveRoute: "activity-log-retrieve",
              dUpdateRoute: "activity-log-update",
              eDeleteRoute: "activity-log-delete",
            },
            cAPILogRoute: {
              aListRoute: "api-log-list",
              bCreateRoute: "api-log-create",
              cRetrieveRoute: "api-log-retrieve",
              dUpdateRoute: "api-log-update",
              eDeleteRoute: "api-log-delete",
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
            cRoleRoute: {
              aListRoute: "role-list",
              bCreateRoute: "role-create",
              cRetrieveRoute: "role-retrieve",
              dUpdateRoute: "role-update",
              eDeleteRoute: "role-delete",
            },
            dUserRoute: {
              aListRoute: "user-list",
              bCreateRoute: "user-create",
              cRetrieveRoute: "user-retrieve",
              dUpdateRoute: "user-update",
              eDeleteRoute: "user-delete",
            },
            eProfileRoute: {
              aListRoute: "profile-list",
              bCreateRoute: "profile-create",
              cRetrieveRoute: "profile-retrieve",
              dUpdateRoute: "profile-update",
              eDeleteRoute: "profile-delete",
            },
          },
          cAdminLanding: {
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
            cAdminContactFormRoute: {
              aListRoute: "admin-contact-form-list",
              bCreateRoute: "admin-contact-form-create",
              cRetrieveRoute: "admin-contact-form-retrieve",
              dUpdateRoute: "admin-contact-form-update",
              eDeleteRoute: "admin-contact-form-delete",
            },
          },
          dFrontendLanding: {
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
            cContactFormRoute: {
              aListRoute: "contact-form-list",
              bCreateRoute: "contact-form-create",
              cRetrieveRoute: "contact-form-retrieve",
              dUpdateRoute: "contact-form-update",
              eDeleteRoute: "contact-form-delete",
            },
          },
          cMainRoute: {
            aDashboardRoute: "dashboard",
          }
        }
      }
    }
  },
  zSampleRoute: {}
}

export default endpointRoute;
