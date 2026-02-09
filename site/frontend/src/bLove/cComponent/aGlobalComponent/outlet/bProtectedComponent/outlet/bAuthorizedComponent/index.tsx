import React from "react"
import { Link, useLocation } from "react-router-dom";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/aConnection/bShadcnConnection/components/ui/sidebar";

import { BookmarkX, ClapperboardIcon, FolderKey, HomeIcon, KeyRound, LogIn, LogOut, MailIcon, Rat, User2, UserPen, UserPlus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { ModeToggle } from "@/aConnection/bShadcnConnection/components/mode-toggle";

import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility";
import brandConnection from "@/aConnection/eBrandConnection";
import fullRoute from "@/bLove/gRoute/bFullRoute";

import { AppSidebar } from "./component/app-sidebar";
import { NotificationComponent } from "./component/notification";

import NavbarComponent from "../../../aUnprotectedComponent/component/aNavbarComponent";
import FooterComponent from "../../../aUnprotectedComponent/component/bFooterComponent";
import ScrollToTopComponent from "../../../aUnprotectedComponent/component/cScrollToTopComponent";


const AuthorizedComponent = ({ children, reduxCall, apiHandler }: { children: React.ReactNode, reduxCall: any, apiHandler: any }) => {
  // Variable
  const { pathname } = useLocation();

  // JSX
  return (
    <React.Fragment>
      {/* AuthorizedComponent */}

      {(
        pathname === fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.fAccountRetrieveSecondaryRoute || 
        pathname === fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.gAccountUpdateSecondaryRoute || 
        pathname === fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.hAccountEmailUpdateSecondaryRoute || 
        pathname === fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.iAccountPasswordUpdateSecondaryRoute || 
        pathname === fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.jAccountDeleteSecondaryRoute
      ) ? (
        <React.Fragment>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');

              .protected-authorized-topbar-scope,
              .protected-authorized-topbar-scope * {
                font-family: 'Roboto Slab', serif;
              }
            `}
          </style>

          <div className="relative w-full protected-authorized-topbar-scope" >
            <NavbarComponent 
              apiHandler={apiHandler}
              reduxCall={reduxCall}
            />
            { children }
            <FooterComponent />
            <ScrollToTopComponent />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <SidebarProvider>
            <AppSidebar reduxCall={reduxCall} apiHandler={apiHandler} />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  {/* <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                          Building Your Application
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb> */}
                </div>
                
                <div className="ml-auto px-2 flex items-center gap-2">
                  <ModeToggle />

                  <Button asChild size="icon" variant="outline" >
                    <Link to={brandConnection.rFrontendBaseURL[1]} target="_blank" rel="noopener noreferrer" >
                      <ClapperboardIcon />
                    </Link>
                  </Button>

                  <Button asChild size="icon" variant="outline" >
                    <Link to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomePageRoute} >
                      <HomeIcon />
                    </Link>
                  </Button>

                  {
                    reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && 
                    reduxCall.state.receivedObject?.AccountRetrieve?._id && 
                    <NotificationComponent />
                  }

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      {
                        (reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                          <Button variant="secondary" size="icon" className="rounded-full">
                            <Avatar>
                              <AvatarImage src={reduxCall.state.receivedObject?.AccountRetrieve?.aImage} />
                              <AvatarFallback>{getInitialsUtility(
                                reduxCall.state.receivedObject?.AccountRetrieve?.eFirstname, 
                                reduxCall.state.receivedObject?.AccountRetrieve?.eLastname
                              )}</AvatarFallback>
                            </Avatar>
                          </Button>
                        ) : 
                        (reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                          <Button variant="secondary" size="icon" className="rounded-full">
                            <User2 className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                          </Button>
                        ) : null
                      }
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {
                        (reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                            <Avatar className="h-8 w-8 rounded-lg">
                              <AvatarImage src={reduxCall.state.receivedObject?.AccountRetrieve?.eImage} />
                              <AvatarFallback className="rounded-lg">{getInitialsUtility(
                                reduxCall.state.receivedObject?.AccountRetrieve?.eFirstname, 
                                reduxCall.state.receivedObject?.AccountRetrieve?.eLastname
                              )}</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                              <span className="truncate font-semibold">{`
                                ${reduxCall.state.receivedObject?.AccountRetrieve?.eFirstname} 
                                ${reduxCall.state.receivedObject?.AccountRetrieve?.eLastname}
                              `}</span>
                              <span className="truncate text-xs">{reduxCall.state.receivedObject?.AccountRetrieve?.eEmail}</span>
                            </div>
                          </div>
                        ) : 
                        (reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                          <Button variant="secondary" size="icon" className="rounded-full">
                            <User2 className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                          </Button>
                        ) : null
                      }

                      {
                        (reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                          <DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild >
                              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.aAccountRetrieveRoute} >
                                <Rat /> View Profile
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild >
                              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.bAccountUpdateRoute} >
                                <UserPen /> Edit Profile
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild >
                              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.cAccountEmailUpdateRoute} >
                                <MailIcon /> Change Email
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild >
                              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.dAccountPasswordUpdateRoute} >
                                <FolderKey /> Change Password
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild >
                              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.eAccountDeleteRoute} >
                                <BookmarkX /> Delete Profile
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild >
                              <span onClick={() => apiHandler()} >
                                <LogOut /> Sign Out
                              </span>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        ) : 
                        (reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                          <DropdownMenuGroup>
                            <DropdownMenuItem asChild >
                              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute} >
                                <LogIn /> Sign In
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild >
                              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.bSignUpRoute} >
                                <UserPlus /> Sign Up
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild >
                              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.cForgotPasswordRoute} >
                              <KeyRound /> Forgot Password
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        ) : null
                      }
                    </DropdownMenuContent>
                  </DropdownMenu>

                </div>
              </header>
              {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                  <div className="aspect-video rounded-xl bg-muted/50" />
                  <div className="aspect-video rounded-xl bg-muted/50" />
                  <div className="aspect-video rounded-xl bg-muted/50" />
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div> */}
              { children }
            </SidebarInset>
          </SidebarProvider>
        </React.Fragment>
      )}

    </React.Fragment>
  )
}

export default AuthorizedComponent;
