import React, { useEffect } from "react"
import { Helmet } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";

import { Toaster } from "../bShadcnConnection/components/ui/toaster";

import endpointRoute from "@/bLove/gRoute/aEndpointRoute";

// Component
const PageNotFoundComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/aPageNotFoundComponent"));

// Layout
const GlobalLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout"));
const UnprotectedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/aUnprotectedLayout"));
const ProtectedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout"));
const AuthenticatedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/aAuthenticatedLayout"));
const AuthorizedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizedLayout"));
const TopbarLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizedLayout/outlet/aTopbarLayout"));
const SidebarLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizedLayout/outlet/bSidebarLayout"));

// Pages
const SignInPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticatedPage/page/aSignInPage"));
const SignUpPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticatedPage/page/bSignUpPage"));
const ForgotPasswordPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticatedPage/page/cForgotPasswordPage"));
const ResetPasswordPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticatedPage/page/dResetPasswordPage"));

const HomePagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/aHomePagePage"));
const AboutPagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/bAboutPagePage"));
const ContactPagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/cContactPagePage"));

const AccountRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/aAccountRetrievePage"));
const AccountUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/bAccountUpdatePage"));
const AccountEmailUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/cAccountEmailUpdatePage"));
const AccountPasswordUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/dAccountPasswordUpdatePage"));
const AccountDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/eAccountDeletePage"));


const AppConnection = () => {
  // Variable
  const { pathname } = useLocation();
  
  // All Render
  // 1. First Render
  useEffect(() => {
    const scrollElement = document.scrollingElement || document.documentElement;
    scrollElement.scrollTop = 0;
  }, [pathname]);

  // JSX
  return (
    <React.Fragment>
      {/* AppConnection */}
      
      <Helmet><title>Boilerplate</title></Helmet>
      <Toaster />

      <Routes>
        <Route element={<GlobalLayout />} >
          <Route element={<UnprotectedLayout />} >
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.aHomePageRoute}`} element={<HomePagePage />} />
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.bAboutPageRoute}`} element={<AboutPagePage />} />
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.cContactPageRoute}`} element={<ContactPagePage />} />
          </Route>
          <Route element={<ProtectedLayout />} >
            <Route element={<AuthenticatedLayout />} >
              <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute}`} element={<SignInPage />} />
              <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.bSignUpRoute}`} element={<SignUpPage />} />
              <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.cForgotPasswordRoute}`} element={<ForgotPasswordPage />} />
              <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.dResetPasswordRoute}`} element={<ResetPasswordPage />} />
            </Route>
            <Route element={<AuthorizedLayout />} >
              <Route element={<TopbarLayout />} >
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.aAccountRetrieveRoute}`} element={<AccountRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.bAccountUpdateRoute}`} element={<AccountUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.cAccountEmailUpdateRoute}`} element={<AccountEmailUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.dAccountPasswordUpdateRoute}`} element={<AccountPasswordUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.eAccountDeleteRoute}`} element={<AccountDeletePage />} />
              </Route>
              <Route element={<SidebarLayout />} ></Route>
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<PageNotFoundComponent />} />
      </Routes>

    </React.Fragment>
  )
}

export default AppConnection;
