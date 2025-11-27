import React, { useEffect } from "react"
import { Helmet } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";

import { Toaster } from "../bShadcnConnection/components/ui/toaster";

import brandConnection from "../eBrandConnection";
import endpointRoute from "@/bLove/gRoute/aEndpointRoute";

// Component
const PageNotFoundComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/aPageNotFoundComponent"));
const LoaderComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/bLoaderComponent"));
const NoInternetConnectionComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/cNoInternetConnectionComponent"));

const DashboardOneComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/eDashboardComponent/aDashboardOneComponent"));

const DataTableOneComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/fDataTableComponent/aDataTableOneComponent"));

const DataFormOneComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/gDataFormComponent/aDataFormOneComponent"));

const DataReadOneComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/hDataReadComponent/aDataReadOneComponent"));

const AuthenticationOneComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/iAuthenticationComponent/aAuthenticationOneComponent"));

const AreaChartListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/aAreaChartListComponent"));
const BarChartListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/bBarChartListComponent"));
const LineChartListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/cLineChartListComponent"));
const PieChartListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/dPieChartListComponent"));
const RadarChartListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/eRadarChartListComponent"));
const RadialChartListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/fRadialChartListComponent"));
const TooltipListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/gTooltipListComponent"));

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

const AdminHomePagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/aAdminHomePagePage"));
const AdminAboutCompanyPagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/bAdminAboutCompanyPagePage"));
const AdminAboutApplicationPagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/cAdminAboutApplicationPagePage"));
const AdminContactPagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/dAdminContactPagePage"));
const AdminServicePagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/eAdminServicePagePage"));
const AdminBranchSectionPagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/fAdminBranchSectionPagePage"));
const AdminBranchGroupPagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/gAdminBranchGroupPagePage"));
const AdminBranchPagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/hAdminBranchPagePage"));
const AdminProjectSectionPagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/iAdminProjectSectionPagePage"));
const AdminProjectGroupPagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/jAdminProjectGroupPagePage"));
const AdminProjectPagePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/kAdminProjectPagePage"));

const AccountRetrievePrimaryPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/aAccountRetrievePrimaryPage"));
const AccountUpdatePrimaryPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/bAccountUpdatePrimaryPage"));
const AccountEmailUpdatePrimaryPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/cAccountEmailUpdatePrimaryPage"));
const AccountPasswordUpdatePrimaryPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/dAccountPasswordUpdatePrimaryPage"));
const AccountDeletePrimaryPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/eAccountDeletePrimaryPage"));

const BaseListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/aListPage"));
const BaseCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/bCreatePage"));
const BaseRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/cRetrievePage"));
const BaseUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/dUpdatePage"));
const BaseDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/eDeletePage"));

const APILogListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/bAPILogPage/aListPage"));
const APILogCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/bAPILogPage/bCreatePage"));
const APILogRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/bAPILogPage/cRetrievePage"));
const APILogUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/bAPILogPage/dUpdatePage"));
const APILogDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/bAPILogPage/eDeletePage"));

const ActivityLogListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/cActivityLogPage/aListPage"));
const ActivityLogCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/cActivityLogPage/bCreatePage"));
const ActivityLogRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/cActivityLogPage/cRetrievePage"));
const ActivityLogUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/cActivityLogPage/dUpdatePage"));
const ActivityLogDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/cActivityLogPage/eDeletePage"));

const AccessPointListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/aAccessPointPage/aListPage"));
const AccessPointCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/aAccessPointPage/bCreatePage"));
const AccessPointRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/aAccessPointPage/cRetrievePage"));
const AccessPointUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/aAccessPointPage/dUpdatePage"));
const AccessPointDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/aAccessPointPage/eDeletePage"));

const MenuListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/bMenuPage/aListPage"));
const MenuCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/bMenuPage/bCreatePage"));
const MenuRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/bMenuPage/cRetrievePage"));
const MenuUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/bMenuPage/dUpdatePage"));
const MenuDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/bMenuPage/eDeletePage"));

const PermissionListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/cPermissionPage/aListPage"));
const PermissionCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/cPermissionPage/bCreatePage"));
const PermissionRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/cPermissionPage/cRetrievePage"));
const PermissionUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/cPermissionPage/dUpdatePage"));
const PermissionDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/cPermissionPage/eDeletePage"));

const RoleListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/dRolePage/aListPage"));
const RoleCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/dRolePage/bCreatePage"));
const RoleRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/dRolePage/cRetrievePage"));
const RoleUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/dRolePage/dUpdatePage"));
const RoleDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/dRolePage/eDeletePage"));

const UserListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/eUserPage/aListPage"));
const UserCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/eUserPage/bCreatePage"));
const UserRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/eUserPage/cRetrievePage"));
const UserUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/eUserPage/dUpdatePage"));
const UserDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/eUserPage/eDeletePage"));

const ProfileListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/fProfilePage/aListPage"));
const ProfileCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/fProfilePage/bCreatePage"));
const ProfileRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/fProfilePage/cRetrievePage"));
const ProfileUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/fProfilePage/dUpdatePage"));
const ProfileDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/fProfilePage/eDeletePage"));

const AccountListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/gAccountPage/aListPage"));
const AccountCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/gAccountPage/bCreatePage"));
const AccountRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/gAccountPage/cRetrievePage"));
const AccountUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/gAccountPage/dUpdatePage"));
const AccountDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/gAccountPage/eDeletePage"));

const SignInListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/aSignInPage/aListPage"));
const SignInCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/aSignInPage/bCreatePage"));
const SignInRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/aSignInPage/cRetrievePage"));
const SignInUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/aSignInPage/dUpdatePage"));
const SignInDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/aSignInPage/eDeletePage"));

const SignUpListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/bSignUpPage/aListPage"));
const SignUpCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/bSignUpPage/bCreatePage"));
const SignUpRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/bSignUpPage/cRetrievePage"));
const SignUpUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/bSignUpPage/dUpdatePage"));
const SignUpDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/bSignUpPage/eDeletePage"));

const SignOutListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/cSignOutPage/aListPage"));
const SignOutCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/cSignOutPage/bCreatePage"));
const SignOutRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/cSignOutPage/cRetrievePage"));
const SignOutUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/cSignOutPage/dUpdatePage"));
const SignOutDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/cSignOutPage/eDeletePage"));

const ForgotPasswordListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/dForgotPasswordPage/aListPage"));
const ForgotPasswordCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/dForgotPasswordPage/bCreatePage"));
const ForgotPasswordRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/dForgotPasswordPage/cRetrievePage"));
const ForgotPasswordUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/dForgotPasswordPage/dUpdatePage"));
const ForgotPasswordDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/dForgotPasswordPage/eDeletePage"));

const ResetPasswordListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/eResetPasswordPage/aListPage"));
const ResetPasswordCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/eResetPasswordPage/bCreatePage"));
const ResetPasswordRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/eResetPasswordPage/cRetrievePage"));
const ResetPasswordUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/eResetPasswordPage/dUpdatePage"));
const ResetPasswordDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/cUserAuthenticationPage/eResetPasswordPage/eDeletePage"));

const ImageStorageListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/aImageStoragePage/aListPage"));
const ImageStorageCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/aImageStoragePage/bCreatePage"));
const ImageStorageRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/aImageStoragePage/cRetrievePage"));
const ImageStorageUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/aImageStoragePage/dUpdatePage"));
const ImageStorageDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/aImageStoragePage/eDeletePage"));

const VideoStorageListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/bVideoStoragePage/aListPage"));
const VideoStorageCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/bVideoStoragePage/bCreatePage"));
const VideoStorageRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/bVideoStoragePage/cRetrievePage"));
const VideoStorageUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/bVideoStoragePage/dUpdatePage"));
const VideoStorageDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/bVideoStoragePage/eDeletePage"));

const AudioStorageListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/cAudioStoragePage/aListPage"));
const AudioStorageCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/cAudioStoragePage/bCreatePage"));
const AudioStorageRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/cAudioStoragePage/cRetrievePage"));
const AudioStorageUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/cAudioStoragePage/dUpdatePage"));
const AudioStorageDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/dFileStoragePage/cAudioStoragePage/eDeletePage"));

const StaticContentListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/eContentOperationPage/aStaticContentPage/aListPage"));
const StaticContentCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/eContentOperationPage/aStaticContentPage/bCreatePage"));
const StaticContentRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/eContentOperationPage/aStaticContentPage/cRetrievePage"));
const StaticContentUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/eContentOperationPage/aStaticContentPage/dUpdatePage"));
const StaticContentDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/eContentOperationPage/aStaticContentPage/eDeletePage"));

const SocialMediaContentListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/eContentOperationPage/bSocialMediaContentPage/aListPage"));
const SocialMediaContentCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/eContentOperationPage/bSocialMediaContentPage/bCreatePage"));
const SocialMediaContentRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/eContentOperationPage/bSocialMediaContentPage/cRetrievePage"));
const SocialMediaContentUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/eContentOperationPage/bSocialMediaContentPage/dUpdatePage"));
const SocialMediaContentDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/eContentOperationPage/bSocialMediaContentPage/eDeletePage"));

const AdminHeroListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/aAdminHeroPage/aListPage"));
const AdminHeroCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/aAdminHeroPage/bCreatePage"));
const AdminHeroRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/aAdminHeroPage/cRetrievePage"));
const AdminHeroUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/aAdminHeroPage/dUpdatePage"));
const AdminHeroDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/aAdminHeroPage/eDeletePage"));

const AdminAboutCompanyListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/bAdminAboutCompanyPage/aListPage"));
const AdminAboutCompanyCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/bAdminAboutCompanyPage/bCreatePage"));
const AdminAboutCompanyRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/bAdminAboutCompanyPage/cRetrievePage"));
const AdminAboutCompanyUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/bAdminAboutCompanyPage/dUpdatePage"));
const AdminAboutCompanyDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/bAdminAboutCompanyPage/eDeletePage"));

const AdminAboutApplicationListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/cAdminAboutApplicationPage/aListPage"));
const AdminAboutApplicationCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/cAdminAboutApplicationPage/bCreatePage"));
const AdminAboutApplicationRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/cAdminAboutApplicationPage/cRetrievePage"));
const AdminAboutApplicationUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/cAdminAboutApplicationPage/dUpdatePage"));
const AdminAboutApplicationDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/cAdminAboutApplicationPage/eDeletePage"));

const AdminContactFormListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/dAdminContactFormPage/aListPage"));
const AdminContactFormCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/dAdminContactFormPage/bCreatePage"));
const AdminContactFormRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/dAdminContactFormPage/cRetrievePage"));
const AdminContactFormUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/dAdminContactFormPage/dUpdatePage"));
const AdminContactFormDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/dAdminContactFormPage/eDeletePage"));

const AdminContactInfoListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/eAdminContactInfoPage/aListPage"));
const AdminContactInfoCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/eAdminContactInfoPage/bCreatePage"));
const AdminContactInfoRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/eAdminContactInfoPage/cRetrievePage"));
const AdminContactInfoUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/eAdminContactInfoPage/dUpdatePage"));
const AdminContactInfoDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/eAdminContactInfoPage/eDeletePage"));

const AdminCounterListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/fAdminCounterPage/aListPage"));
const AdminCounterCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/fAdminCounterPage/bCreatePage"));
const AdminCounterRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/fAdminCounterPage/cRetrievePage"));
const AdminCounterUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/fAdminCounterPage/dUpdatePage"));
const AdminCounterDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/fAdminCounterPage/eDeletePage"));

const AdminServiceListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/gAdminServicePage/aListPage"));
const AdminServiceCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/gAdminServicePage/bCreatePage"));
const AdminServiceRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/gAdminServicePage/cRetrievePage"));
const AdminServiceUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/gAdminServicePage/dUpdatePage"));
const AdminServiceDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/gAdminServicePage/eDeletePage"));

const AdminBranchSectionListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/hAdminBranchSectionPage/aListPage"));
const AdminBranchSectionCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/hAdminBranchSectionPage/bCreatePage"));
const AdminBranchSectionRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/hAdminBranchSectionPage/cRetrievePage"));
const AdminBranchSectionUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/hAdminBranchSectionPage/dUpdatePage"));
const AdminBranchSectionDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/hAdminBranchSectionPage/eDeletePage"));

const AdminBranchGroupListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/iAdminBranchGroupPage/aListPage"));
const AdminBranchGroupCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/iAdminBranchGroupPage/bCreatePage"));
const AdminBranchGroupRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/iAdminBranchGroupPage/cRetrievePage"));
const AdminBranchGroupUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/iAdminBranchGroupPage/dUpdatePage"));
const AdminBranchGroupDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/iAdminBranchGroupPage/eDeletePage"));

const AdminBranchListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/jAdminBranchPage/aListPage"));
const AdminBranchCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/jAdminBranchPage/bCreatePage"));
const AdminBranchRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/jAdminBranchPage/cRetrievePage"));
const AdminBranchUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/jAdminBranchPage/dUpdatePage"));
const AdminBranchDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/jAdminBranchPage/eDeletePage"));

const AdminProjectSectionListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/kAdminProjectSectionPage/aListPage"));
const AdminProjectSectionCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/kAdminProjectSectionPage/bCreatePage"));
const AdminProjectSectionRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/kAdminProjectSectionPage/cRetrievePage"));
const AdminProjectSectionUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/kAdminProjectSectionPage/dUpdatePage"));
const AdminProjectSectionDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/kAdminProjectSectionPage/eDeletePage"));

const AdminProjectGroupListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/lAdminProjectGroupPage/aListPage"));
const AdminProjectGroupCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/lAdminProjectGroupPage/bCreatePage"));
const AdminProjectGroupRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/lAdminProjectGroupPage/cRetrievePage"));
const AdminProjectGroupUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/lAdminProjectGroupPage/dUpdatePage"));
const AdminProjectGroupDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/lAdminProjectGroupPage/eDeletePage"));

const AdminProjectListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/mAdminProjectPage/aListPage"));
const AdminProjectCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/mAdminProjectPage/bCreatePage"));
const AdminProjectRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/mAdminProjectPage/cRetrievePage"));
const AdminProjectUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/mAdminProjectPage/dUpdatePage"));
const AdminProjectDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/fAdminLandingPage/mAdminProjectPage/eDeletePage"));

const HeroListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/aHeroPage/aListPage"));
const HeroCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/aHeroPage/bCreatePage"));
const HeroRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/aHeroPage/cRetrievePage"));
const HeroUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/aHeroPage/dUpdatePage"));
const HeroDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/aHeroPage/eDeletePage"));

const AboutCompanyListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/bAboutCompanyPage/aListPage"));
const AboutCompanyCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/bAboutCompanyPage/bCreatePage"));
const AboutCompanyRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/bAboutCompanyPage/cRetrievePage"));
const AboutCompanyUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/bAboutCompanyPage/dUpdatePage"));
const AboutCompanyDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/bAboutCompanyPage/eDeletePage"));

const AboutApplicationListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/cAboutApplicationPage/aListPage"));
const AboutApplicationCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/cAboutApplicationPage/bCreatePage"));
const AboutApplicationRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/cAboutApplicationPage/cRetrievePage"));
const AboutApplicationUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/cAboutApplicationPage/dUpdatePage"));
const AboutApplicationDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/cAboutApplicationPage/eDeletePage"));

const ContactFormListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/dContactFormPage/aListPage"));
const ContactFormCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/dContactFormPage/bCreatePage"));
const ContactFormRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/dContactFormPage/cRetrievePage"));
const ContactFormUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/dContactFormPage/dUpdatePage"));
const ContactFormDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/dContactFormPage/eDeletePage"));

const ContactInfoListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/eContactInfoPage/aListPage"));
const ContactInfoCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/eContactInfoPage/bCreatePage"));
const ContactInfoRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/eContactInfoPage/cRetrievePage"));
const ContactInfoUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/eContactInfoPage/dUpdatePage"));
const ContactInfoDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/eContactInfoPage/eDeletePage"));

const CounterListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/fCounterPage/aListPage"));
const CounterCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/fCounterPage/bCreatePage"));
const CounterRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/fCounterPage/cRetrievePage"));
const CounterUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/fCounterPage/dUpdatePage"));
const CounterDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/fCounterPage/eDeletePage"));

const ServiceListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/gServicePage/aListPage"));
const ServiceCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/gServicePage/bCreatePage"));
const ServiceRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/gServicePage/cRetrievePage"));
const ServiceUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/gServicePage/dUpdatePage"));
const ServiceDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/gServicePage/eDeletePage"));

const BranchSectionListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/hBranchSectionPage/aListPage"));
const BranchSectionCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/hBranchSectionPage/bCreatePage"));
const BranchSectionRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/hBranchSectionPage/cRetrievePage"));
const BranchSectionUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/hBranchSectionPage/dUpdatePage"));
const BranchSectionDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/hBranchSectionPage/eDeletePage"));

const BranchGroupListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/iBranchGroupPage/aListPage"));
const BranchGroupCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/iBranchGroupPage/bCreatePage"));
const BranchGroupRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/iBranchGroupPage/cRetrievePage"));
const BranchGroupUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/iBranchGroupPage/dUpdatePage"));
const BranchGroupDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/iBranchGroupPage/eDeletePage"));

const BranchListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/jBranchPage/aListPage"));
const BranchCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/jBranchPage/bCreatePage"));
const BranchRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/jBranchPage/cRetrievePage"));
const BranchUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/jBranchPage/dUpdatePage"));
const BranchDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/jBranchPage/eDeletePage"));

const ProjectSectionListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/kProjectSectionPage/aListPage"));
const ProjectSectionCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/kProjectSectionPage/bCreatePage"));
const ProjectSectionRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/kProjectSectionPage/cRetrievePage"));
const ProjectSectionUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/kProjectSectionPage/dUpdatePage"));
const ProjectSectionDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/kProjectSectionPage/eDeletePage"));

const ProjectGroupListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/lProjectGroupPage/aListPage"));
const ProjectGroupCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/lProjectGroupPage/bCreatePage"));
const ProjectGroupRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/lProjectGroupPage/cRetrievePage"));
const ProjectGroupUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/lProjectGroupPage/dUpdatePage"));
const ProjectGroupDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/lProjectGroupPage/eDeletePage"));

const ProjectListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/mProjectPage/aListPage"));
const ProjectCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/mProjectPage/bCreatePage"));
const ProjectRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/mProjectPage/cRetrievePage"));
const ProjectUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/mProjectPage/dUpdatePage"));
const ProjectDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/gFrontendLandingPage/mProjectPage/eDeletePage"));

const ChatListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/aChatPage/aListPage"));
const ChatCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/aChatPage/bCreatePage"));
const ChatRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/aChatPage/cRetrievePage"));
const ChatUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/aChatPage/dUpdatePage"));
const ChatDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/aChatPage/eDeletePage"));

const MessageListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/bMessagePage/aListPage"));
const MessageCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/bMessagePage/bCreatePage"));
const MessageRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/bMessagePage/cRetrievePage"));
const MessageUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/bMessagePage/dUpdatePage"));
const MessageDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/bMessagePage/eDeletePage"));

const RequestListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/cRequestPage/aListPage"));
const RequestCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/cRequestPage/bCreatePage"));
const RequestRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/cRequestPage/cRetrievePage"));
const RequestUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/cRequestPage/dUpdatePage"));
const RequestDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/hChatManagementPage/cRequestPage/eDeletePage"));


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
      
      <Helmet><title>{brandConnection.bBrandName} - {brandConnection.uTagName}</title></Helmet>
      <Toaster />

      <Routes>
        <Route element={<GlobalLayout />} >
          <Route element={<UnprotectedLayout />} >
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.aAdminHomePageRoute}`} element={<AdminHomePagePage />} />
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.bAdminAboutCompanyPageRoute}`} element={<AdminAboutCompanyPagePage />} />
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.cAdminAboutApplicationPageRoute}`} element={<AdminAboutApplicationPagePage />} />
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.dAdminContactPageRoute}`} element={<AdminContactPagePage />} />
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.eAdminServicePageRoute}`} element={<AdminServicePagePage />} />
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.fAdminBranchSectionPageRoute}`} element={<AdminBranchSectionPagePage />} />
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.gAdminBranchGroupPageRoute}`} element={<AdminBranchGroupPagePage />} />
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.hAdminBranchPageRoute}`} element={<AdminBranchPagePage />} />
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.iAdminProjectSectionPageRoute}`} element={<AdminProjectSectionPagePage />} />
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.jAdminProjectGroupPageRoute}`} element={<AdminProjectGroupPagePage />} />
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.kAdminProjectPageRoute}`} element={<AdminProjectPagePage />} />
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
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.aAccountRetrieveRoute}`} element={<AccountRetrievePrimaryPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.bAccountUpdateRoute}`} element={<AccountUpdatePrimaryPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.cAccountEmailUpdateRoute}`} element={<AccountEmailUpdatePrimaryPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.dAccountPasswordUpdateRoute}`} element={<AccountPasswordUpdatePrimaryPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.eAccountDeleteRoute}`} element={<AccountDeletePrimaryPage />} />
              </Route>
              <Route element={<SidebarLayout />} >

                {/* Setting */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.aListRoute}`} element={<BaseListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.bCreateRoute}`} element={<BaseCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.cRetrieveRoute}/:id`} element={<BaseRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.dUpdateRoute}/:id`} element={<BaseUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.eDeleteRoute}/:id`} element={<BaseDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.bAPILogRoute.aListRoute}`} element={<APILogListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.bAPILogRoute.bCreateRoute}`} element={<APILogCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.bAPILogRoute.cRetrieveRoute}/:id`} element={<APILogRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.bAPILogRoute.dUpdateRoute}/:id`} element={<APILogUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.bAPILogRoute.eDeleteRoute}/:id`} element={<APILogDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cActivityLogRoute.aListRoute}`} element={<ActivityLogListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cActivityLogRoute.bCreateRoute}`} element={<ActivityLogCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cActivityLogRoute.cRetrieveRoute}/:id`} element={<ActivityLogRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cActivityLogRoute.dUpdateRoute}/:id`} element={<ActivityLogUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cActivityLogRoute.eDeleteRoute}/:id`} element={<ActivityLogDeletePage />} />

                {/* User Administration */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.aListRoute}`} element={<AccessPointListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.bCreateRoute}`} element={<AccessPointCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.cRetrieveRoute}/:id`} element={<AccessPointRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.dUpdateRoute}/:id`} element={<AccessPointUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.eDeleteRoute}/:id`} element={<AccessPointDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.aListRoute}`} element={<MenuListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.bCreateRoute}`} element={<MenuCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.cRetrieveRoute}/:id`} element={<MenuRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.dUpdateRoute}/:id`} element={<MenuUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.eDeleteRoute}/:id`} element={<MenuDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cPermissionRoute.aListRoute}`} element={<PermissionListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cPermissionRoute.bCreateRoute}`} element={<PermissionCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cPermissionRoute.cRetrieveRoute}/:id`} element={<PermissionRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cPermissionRoute.dUpdateRoute}/:id`} element={<PermissionUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cPermissionRoute.eDeleteRoute}/:id`} element={<PermissionDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dRoleRoute.aListRoute}`} element={<RoleListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dRoleRoute.bCreateRoute}`} element={<RoleCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dRoleRoute.cRetrieveRoute}/:id`} element={<RoleRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dRoleRoute.dUpdateRoute}/:id`} element={<RoleUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dRoleRoute.eDeleteRoute}/:id`} element={<RoleDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eUserRoute.aListRoute}`} element={<UserListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eUserRoute.bCreateRoute}`} element={<UserCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eUserRoute.cRetrieveRoute}/:id`} element={<UserRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eUserRoute.dUpdateRoute}/:id`} element={<UserUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eUserRoute.eDeleteRoute}/:id`} element={<UserDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.fProfileRoute.aListRoute}`} element={<ProfileListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.fProfileRoute.bCreateRoute}`} element={<ProfileCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.fProfileRoute.cRetrieveRoute}/:id`} element={<ProfileRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.fProfileRoute.dUpdateRoute}/:id`} element={<ProfileUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.fProfileRoute.eDeleteRoute}/:id`} element={<ProfileDeletePage />} />
                
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.gAccountRoute.aListRoute}`} element={<AccountListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.gAccountRoute.bCreateRoute}`} element={<AccountCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.gAccountRoute.cRetrieveRoute}/:id`} element={<AccountRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.gAccountRoute.dUpdateRoute}/:id`} element={<AccountUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.gAccountRoute.eDeleteRoute}/:id`} element={<AccountDeletePage />} />
                
                {/* User Authentication */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.aSignInRoute.aListRoute}`} element={<SignInListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.aSignInRoute.bCreateRoute}`} element={<SignInCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.aSignInRoute.cRetrieveRoute}/:id`} element={<SignInRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.aSignInRoute.dUpdateRoute}/:id`} element={<SignInUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.aSignInRoute.eDeleteRoute}/:id`} element={<SignInDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.bSignUpRoute.aListRoute}`} element={<SignUpListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.bSignUpRoute.bCreateRoute}`} element={<SignUpCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.bSignUpRoute.cRetrieveRoute}/:id`} element={<SignUpRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.bSignUpRoute.dUpdateRoute}/:id`} element={<SignUpUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.bSignUpRoute.eDeleteRoute}/:id`} element={<SignUpDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.cSignOutRoute.aListRoute}`} element={<SignOutListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.cSignOutRoute.bCreateRoute}`} element={<SignOutCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.cSignOutRoute.cRetrieveRoute}/:id`} element={<SignOutRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.cSignOutRoute.dUpdateRoute}/:id`} element={<SignOutUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.cSignOutRoute.eDeleteRoute}/:id`} element={<SignOutDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.dForgotPasswordRoute.aListRoute}`} element={<ForgotPasswordListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.dForgotPasswordRoute.bCreateRoute}`} element={<ForgotPasswordCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.dForgotPasswordRoute.cRetrieveRoute}/:id`} element={<ForgotPasswordRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.dForgotPasswordRoute.dUpdateRoute}/:id`} element={<ForgotPasswordUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.dForgotPasswordRoute.eDeleteRoute}/:id`} element={<ForgotPasswordDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.eResetPasswordRoute.aListRoute}`} element={<ResetPasswordListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.eResetPasswordRoute.bCreateRoute}`} element={<ResetPasswordCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.eResetPasswordRoute.cRetrieveRoute}/:id`} element={<ResetPasswordRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.eResetPasswordRoute.dUpdateRoute}/:id`} element={<ResetPasswordUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.eResetPasswordRoute.eDeleteRoute}/:id`} element={<ResetPasswordDeletePage />} />
                
                {/* File Storage */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.aImageStorageRoute.aListRoute}`} element={<ImageStorageListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.aImageStorageRoute.bCreateRoute}`} element={<ImageStorageCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.aImageStorageRoute.cRetrieveRoute}/:id`} element={<ImageStorageRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.aImageStorageRoute.dUpdateRoute}/:id`} element={<ImageStorageUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.aImageStorageRoute.eDeleteRoute}/:id`} element={<ImageStorageDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.bVideoStorageRoute.aListRoute}`} element={<VideoStorageListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.bVideoStorageRoute.bCreateRoute}`} element={<VideoStorageCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.bVideoStorageRoute.cRetrieveRoute}/:id`} element={<VideoStorageRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.bVideoStorageRoute.dUpdateRoute}/:id`} element={<VideoStorageUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.bVideoStorageRoute.eDeleteRoute}/:id`} element={<VideoStorageDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.cAudioStorageRoute.aListRoute}`} element={<AudioStorageListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.cAudioStorageRoute.bCreateRoute}`} element={<AudioStorageCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.cAudioStorageRoute.cRetrieveRoute}/:id`} element={<AudioStorageRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.cAudioStorageRoute.dUpdateRoute}/:id`} element={<AudioStorageUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.cAudioStorageRoute.eDeleteRoute}/:id`} element={<AudioStorageDeletePage />} />

                {/* Content Operation */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.eContentOperationRoute.aStaticContentRoute.aListRoute}`} element={<StaticContentListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.eContentOperationRoute.aStaticContentRoute.bCreateRoute}`} element={<StaticContentCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.eContentOperationRoute.aStaticContentRoute.cRetrieveRoute}/:id`} element={<StaticContentRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.eContentOperationRoute.aStaticContentRoute.dUpdateRoute}/:id`} element={<StaticContentUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.eContentOperationRoute.aStaticContentRoute.eDeleteRoute}/:id`} element={<StaticContentDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.eContentOperationRoute.bSocialMediaContentRoute.aListRoute}`} element={<SocialMediaContentListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.eContentOperationRoute.bSocialMediaContentRoute.bCreateRoute}`} element={<SocialMediaContentCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.eContentOperationRoute.bSocialMediaContentRoute.cRetrieveRoute}/:id`} element={<SocialMediaContentRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.eContentOperationRoute.bSocialMediaContentRoute.dUpdateRoute}/:id`} element={<SocialMediaContentUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.eContentOperationRoute.bSocialMediaContentRoute.eDeleteRoute}/:id`} element={<SocialMediaContentDeletePage />} />

                {/* Admin Landing */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.aAdminHeroRoute.aListRoute}`} element={<AdminHeroListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.aAdminHeroRoute.bCreateRoute}`} element={<AdminHeroCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.aAdminHeroRoute.cRetrieveRoute}/:id`} element={<AdminHeroRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.aAdminHeroRoute.dUpdateRoute}/:id`} element={<AdminHeroUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.aAdminHeroRoute.eDeleteRoute}/:id`} element={<AdminHeroDeletePage />} />
                
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.bAdminAboutCompanyRoute.aListRoute}`} element={<AdminAboutCompanyListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.bAdminAboutCompanyRoute.bCreateRoute}`} element={<AdminAboutCompanyCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.bAdminAboutCompanyRoute.cRetrieveRoute}/:id`} element={<AdminAboutCompanyRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.bAdminAboutCompanyRoute.dUpdateRoute}/:id`} element={<AdminAboutCompanyUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.bAdminAboutCompanyRoute.eDeleteRoute}/:id`} element={<AdminAboutCompanyDeletePage />} />
                
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.cAdminAboutApplicationRoute.aListRoute}`} element={<AdminAboutApplicationListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.cAdminAboutApplicationRoute.bCreateRoute}`} element={<AdminAboutApplicationCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.cAdminAboutApplicationRoute.cRetrieveRoute}/:id`} element={<AdminAboutApplicationRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.cAdminAboutApplicationRoute.dUpdateRoute}/:id`} element={<AdminAboutApplicationUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.cAdminAboutApplicationRoute.eDeleteRoute}/:id`} element={<AdminAboutApplicationDeletePage />} />
                
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.dAdminContactFormRoute.aListRoute}`} element={<AdminContactFormListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.dAdminContactFormRoute.bCreateRoute}`} element={<AdminContactFormCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.dAdminContactFormRoute.cRetrieveRoute}/:id`} element={<AdminContactFormRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.dAdminContactFormRoute.dUpdateRoute}/:id`} element={<AdminContactFormUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.dAdminContactFormRoute.eDeleteRoute}/:id`} element={<AdminContactFormDeletePage />} />
                
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.eAdminContactInfoRoute.aListRoute}`} element={<AdminContactInfoListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.eAdminContactInfoRoute.bCreateRoute}`} element={<AdminContactInfoCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.eAdminContactInfoRoute.cRetrieveRoute}/:id`} element={<AdminContactInfoRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.eAdminContactInfoRoute.dUpdateRoute}/:id`} element={<AdminContactInfoUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.eAdminContactInfoRoute.eDeleteRoute}/:id`} element={<AdminContactInfoDeletePage />} />
                
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.fAdminCounterRoute.aListRoute}`} element={<AdminCounterListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.fAdminCounterRoute.bCreateRoute}`} element={<AdminCounterCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.fAdminCounterRoute.cRetrieveRoute}/:id`} element={<AdminCounterRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.fAdminCounterRoute.dUpdateRoute}/:id`} element={<AdminCounterUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.fAdminCounterRoute.eDeleteRoute}/:id`} element={<AdminCounterDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.gAdminServiceRoute.aListRoute}`} element={<AdminServiceListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.gAdminServiceRoute.bCreateRoute}`} element={<AdminServiceCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.gAdminServiceRoute.cRetrieveRoute}/:id`} element={<AdminServiceRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.gAdminServiceRoute.dUpdateRoute}/:id`} element={<AdminServiceUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.gAdminServiceRoute.eDeleteRoute}/:id`} element={<AdminServiceDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.hAdminBranchSectionRoute.aListRoute}`} element={<AdminBranchSectionListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.hAdminBranchSectionRoute.bCreateRoute}`} element={<AdminBranchSectionCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.hAdminBranchSectionRoute.cRetrieveRoute}/:id`} element={<AdminBranchSectionRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.hAdminBranchSectionRoute.dUpdateRoute}/:id`} element={<AdminBranchSectionUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.hAdminBranchSectionRoute.eDeleteRoute}/:id`} element={<AdminBranchSectionDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.iAdminBranchGroupRoute.aListRoute}`} element={<AdminBranchGroupListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.iAdminBranchGroupRoute.bCreateRoute}`} element={<AdminBranchGroupCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.iAdminBranchGroupRoute.cRetrieveRoute}/:id`} element={<AdminBranchGroupRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.iAdminBranchGroupRoute.dUpdateRoute}/:id`} element={<AdminBranchGroupUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.iAdminBranchGroupRoute.eDeleteRoute}/:id`} element={<AdminBranchGroupDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.jAdminBranchRoute.aListRoute}`} element={<AdminBranchListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.jAdminBranchRoute.bCreateRoute}`} element={<AdminBranchCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.jAdminBranchRoute.cRetrieveRoute}/:id`} element={<AdminBranchRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.jAdminBranchRoute.dUpdateRoute}/:id`} element={<AdminBranchUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.jAdminBranchRoute.eDeleteRoute}/:id`} element={<AdminBranchDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.kAdminProjectSectionRoute.aListRoute}`} element={<AdminProjectSectionListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.kAdminProjectSectionRoute.bCreateRoute}`} element={<AdminProjectSectionCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.kAdminProjectSectionRoute.cRetrieveRoute}/:id`} element={<AdminProjectSectionRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.kAdminProjectSectionRoute.dUpdateRoute}/:id`} element={<AdminProjectSectionUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.kAdminProjectSectionRoute.eDeleteRoute}/:id`} element={<AdminProjectSectionDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.lAdminProjectGroupRoute.aListRoute}`} element={<AdminProjectGroupListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.lAdminProjectGroupRoute.bCreateRoute}`} element={<AdminProjectGroupCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.lAdminProjectGroupRoute.cRetrieveRoute}/:id`} element={<AdminProjectGroupRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.lAdminProjectGroupRoute.dUpdateRoute}/:id`} element={<AdminProjectGroupUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.lAdminProjectGroupRoute.eDeleteRoute}/:id`} element={<AdminProjectGroupDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.mAdminProjectRoute.aListRoute}`} element={<AdminProjectListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.mAdminProjectRoute.bCreateRoute}`} element={<AdminProjectCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.mAdminProjectRoute.cRetrieveRoute}/:id`} element={<AdminProjectRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.mAdminProjectRoute.dUpdateRoute}/:id`} element={<AdminProjectUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.mAdminProjectRoute.eDeleteRoute}/:id`} element={<AdminProjectDeletePage />} />

                {/* Frontend Landing */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.aHeroRoute.aListRoute}`} element={<HeroListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.aHeroRoute.bCreateRoute}`} element={<HeroCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.aHeroRoute.cRetrieveRoute}/:id`} element={<HeroRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.aHeroRoute.dUpdateRoute}/:id`} element={<HeroUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.aHeroRoute.eDeleteRoute}/:id`} element={<HeroDeletePage />} />
                
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.bAboutCompanyRoute.aListRoute}`} element={<AboutCompanyListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.bAboutCompanyRoute.bCreateRoute}`} element={<AboutCompanyCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.bAboutCompanyRoute.cRetrieveRoute}/:id`} element={<AboutCompanyRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.bAboutCompanyRoute.dUpdateRoute}/:id`} element={<AboutCompanyUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.bAboutCompanyRoute.eDeleteRoute}/:id`} element={<AboutCompanyDeletePage />} />
                
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.cAboutApplicationRoute.aListRoute}`} element={<AboutApplicationListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.cAboutApplicationRoute.bCreateRoute}`} element={<AboutApplicationCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.cAboutApplicationRoute.cRetrieveRoute}/:id`} element={<AboutApplicationRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.cAboutApplicationRoute.dUpdateRoute}/:id`} element={<AboutApplicationUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.cAboutApplicationRoute.eDeleteRoute}/:id`} element={<AboutApplicationDeletePage />} />
                
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.dContactFormRoute.aListRoute}`} element={<ContactFormListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.dContactFormRoute.bCreateRoute}`} element={<ContactFormCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.dContactFormRoute.cRetrieveRoute}/:id`} element={<ContactFormRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.dContactFormRoute.dUpdateRoute}/:id`} element={<ContactFormUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.dContactFormRoute.eDeleteRoute}/:id`} element={<ContactFormDeletePage />} />
                
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.eContactInfoRoute.aListRoute}`} element={<ContactInfoListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.eContactInfoRoute.bCreateRoute}`} element={<ContactInfoCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.eContactInfoRoute.cRetrieveRoute}/:id`} element={<ContactInfoRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.eContactInfoRoute.dUpdateRoute}/:id`} element={<ContactInfoUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.eContactInfoRoute.eDeleteRoute}/:id`} element={<ContactInfoDeletePage />} />
                
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.fCounterRoute.aListRoute}`} element={<CounterListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.fCounterRoute.bCreateRoute}`} element={<CounterCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.fCounterRoute.cRetrieveRoute}/:id`} element={<CounterRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.fCounterRoute.dUpdateRoute}/:id`} element={<CounterUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.fCounterRoute.eDeleteRoute}/:id`} element={<CounterDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.gServiceRoute.aListRoute}`} element={<ServiceListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.gServiceRoute.bCreateRoute}`} element={<ServiceCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.gServiceRoute.cRetrieveRoute}/:id`} element={<ServiceRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.gServiceRoute.dUpdateRoute}/:id`} element={<ServiceUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.gServiceRoute.eDeleteRoute}/:id`} element={<ServiceDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.hBranchSectionRoute.aListRoute}`} element={<BranchSectionListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.hBranchSectionRoute.bCreateRoute}`} element={<BranchSectionCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.hBranchSectionRoute.cRetrieveRoute}/:id`} element={<BranchSectionRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.hBranchSectionRoute.dUpdateRoute}/:id`} element={<BranchSectionUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.hBranchSectionRoute.eDeleteRoute}/:id`} element={<BranchSectionDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.iBranchGroupRoute.aListRoute}`} element={<BranchGroupListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.iBranchGroupRoute.bCreateRoute}`} element={<BranchGroupCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.iBranchGroupRoute.cRetrieveRoute}/:id`} element={<BranchGroupRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.iBranchGroupRoute.dUpdateRoute}/:id`} element={<BranchGroupUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.iBranchGroupRoute.eDeleteRoute}/:id`} element={<BranchGroupDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.jBranchRoute.aListRoute}`} element={<BranchListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.jBranchRoute.bCreateRoute}`} element={<BranchCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.jBranchRoute.cRetrieveRoute}/:id`} element={<BranchRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.jBranchRoute.dUpdateRoute}/:id`} element={<BranchUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.jBranchRoute.eDeleteRoute}/:id`} element={<BranchDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.kProjectSectionRoute.aListRoute}`} element={<ProjectSectionListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.kProjectSectionRoute.bCreateRoute}`} element={<ProjectSectionCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.kProjectSectionRoute.cRetrieveRoute}/:id`} element={<ProjectSectionRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.kProjectSectionRoute.dUpdateRoute}/:id`} element={<ProjectSectionUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.kProjectSectionRoute.eDeleteRoute}/:id`} element={<ProjectSectionDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.lProjectGroupRoute.aListRoute}`} element={<ProjectGroupListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.lProjectGroupRoute.bCreateRoute}`} element={<ProjectGroupCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.lProjectGroupRoute.cRetrieveRoute}/:id`} element={<ProjectGroupRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.lProjectGroupRoute.dUpdateRoute}/:id`} element={<ProjectGroupUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.lProjectGroupRoute.eDeleteRoute}/:id`} element={<ProjectGroupDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.mProjectRoute.aListRoute}`} element={<ProjectListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.mProjectRoute.bCreateRoute}`} element={<ProjectCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.mProjectRoute.cRetrieveRoute}/:id`} element={<ProjectRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.mProjectRoute.dUpdateRoute}/:id`} element={<ProjectUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.mProjectRoute.eDeleteRoute}/:id`} element={<ProjectDeletePage />} />

                {/* Chat Management */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.aChatRoute.aListRoute}`} element={<ChatListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.aChatRoute.bCreateRoute}`} element={<ChatCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.aChatRoute.cRetrieveRoute}/:id`} element={<ChatRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.aChatRoute.dUpdateRoute}/:id`} element={<ChatUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.aChatRoute.eDeleteRoute}/:id`} element={<ChatDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.bMessageRoute.aListRoute}`} element={<MessageListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.bMessageRoute.bCreateRoute}`} element={<MessageCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.bMessageRoute.cRetrieveRoute}/:id`} element={<MessageRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.bMessageRoute.dUpdateRoute}/:id`} element={<MessageUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.bMessageRoute.eDeleteRoute}/:id`} element={<MessageDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.cRequestRoute.aListRoute}`} element={<RequestListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.cRequestRoute.bCreateRoute}`} element={<RequestCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.cRequestRoute.cRetrieveRoute}/:id`} element={<RequestRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.cRequestRoute.dUpdateRoute}/:id`} element={<RequestUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.cRequestRoute.eDeleteRoute}/:id`} element={<RequestDeletePage />} />

                {/* Dashboard */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hMainRoute.aDashboardRoute}`} element={<DashboardOneComponent />} />

                {/* Components */}
                <Route path="/dashboard-one" element={<DashboardOneComponent />} />

                <Route path="/area-chart" element={<AreaChartListComponent />} />
                <Route path="/bar-chart" element={<BarChartListComponent />} />
                <Route path="/line-chart" element={<LineChartListComponent />} />
                <Route path="/pie-chart" element={<PieChartListComponent />} />
                <Route path="/radar-chart" element={<RadarChartListComponent />} />
                <Route path="/radial-chart" element={<RadialChartListComponent />} />
                <Route path="/tooltip" element={<TooltipListComponent />} />

                <Route path="/data-table-one" element={<DataTableOneComponent />} />

                <Route path="/data-form-one" element={<DataFormOneComponent />} />

                <Route path="/data-read-one" element={<DataReadOneComponent />} />

                <Route path="/authentication-one" element={<AuthenticationOneComponent />} />

                <Route path="/loader" element={<LoaderComponent />} />
                <Route path="/no-internet-connection" element={<NoInternetConnectionComponent />} />
                <Route path="/page-not-found" element={<PageNotFoundComponent />} />

              </Route>
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<PageNotFoundComponent />} />
      </Routes>

    </React.Fragment>
  )
}

export default AppConnection;
