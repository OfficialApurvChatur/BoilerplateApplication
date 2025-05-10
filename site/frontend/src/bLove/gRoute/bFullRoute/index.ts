import endpointRoute from "../aEndpointRoute";


const fullRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {
      aHomePageRoute: `/${endpointRoute.aGlobalRoute.aUnprotectedRoute.aHomePageRoute}`,
      bAboutPageRoute: `/${endpointRoute.aGlobalRoute.aUnprotectedRoute.bAboutPageRoute}`,
      cContactPageRoute: `/${endpointRoute.aGlobalRoute.aUnprotectedRoute.cContactPageRoute}`,
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
        bSidebarRoute: {}
      }
    }
  },
  zSampleRoute: {}
}

export default fullRoute;
