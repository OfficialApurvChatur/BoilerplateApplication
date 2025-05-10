const endpointRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {
      aHomePageRoute: "",
      bAboutPageRoute: "about-page",
      cContactPageRoute: "contact-page",
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
        bSidebarRoute: {}
      }
    }
  },
  zSampleRoute: {}
}

export default endpointRoute;
