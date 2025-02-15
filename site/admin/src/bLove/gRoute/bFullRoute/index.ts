import endpointRoute from "../aEndpointRoute";


const fullRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {
      aHomeRoute: `/${endpointRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}`,
    },
    bProtectedRoute: {
      aAutheticatedRoute: {
        aSignInRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute}`,
        bSignUpRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.bSignUpRoute}`,
        cForgotPasswordRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.cForgotPasswordRoute}`,
        dResetPasswordRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.dResetPasswordRoute}`,
      },
      bAuthorizedRoute: {
        aTopbarRoute: {
          aAccountRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.aAccountRetrieveRoute}`,
          bAccountUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.bAccountUpdateRoute}`,
          cAccountEmailUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.cAccountEmailUpdateRoute}`,
          dAccountPasswordUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.dAccountPasswordUpdateRoute}`,
          eAccountDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.eAccountDeleteRoute}`,
        },
        bSidebarRoute: {
          aSettingRoute: {
            aBaseRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.eDeleteRoute}`,
            },
            bActivityLogRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.bActivityLogRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.bActivityLogRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.bActivityLogRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.bActivityLogRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.bActivityLogRoute.eDeleteRoute}`,
            },
            cAPILogRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cAPILogRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cAPILogRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cAPILogRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cAPILogRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cAPILogRoute.eDeleteRoute}`,
            },
          },
          bUserAdministrationRoute: {
            aAccessPointRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.eDeleteRoute}`,
            },
            bMenuRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.eDeleteRoute}`,
            },
            cRoleRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.eDeleteRoute}`,
            },
            dUserRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.eDeleteRoute}`,
            },
            eProfileRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.eDeleteRoute}`,
            },
          },
          cAdminLanding: {
            aAdminHeroRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.aAdminHeroRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.aAdminHeroRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.aAdminHeroRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.aAdminHeroRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.aAdminHeroRoute.eDeleteRoute}`,
            },
            bAdminAboutCompanyRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.bAdminAboutCompanyRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.bAdminAboutCompanyRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.bAdminAboutCompanyRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.bAdminAboutCompanyRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.bAdminAboutCompanyRoute.eDeleteRoute}`,
            },
            cAdminContactFormRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.cAdminContactFormRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.cAdminContactFormRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.cAdminContactFormRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.cAdminContactFormRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.cAdminContactFormRoute.eDeleteRoute}`,
            },
          },
          dFrontendLanding: {
            aHeroRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.aHeroRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.aHeroRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.aHeroRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.aHeroRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.aHeroRoute.eDeleteRoute}`,
            },
            bAboutCompanyRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.bAboutCompanyRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.bAboutCompanyRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.bAboutCompanyRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.bAboutCompanyRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.bAboutCompanyRoute.eDeleteRoute}`,
            },
            cContactFormRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.cContactFormRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.cContactFormRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.cContactFormRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.cContactFormRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.cContactFormRoute.eDeleteRoute}`,
            },
          },
          cMainRoute: {
            aDashboardRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.aDashboardRoute}`,
          }
        }
      }
    }
  },
  zSampleRoute: {}
}

export default fullRoute;
