import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ModeToggle } from "@/aConnection/bShadcnConnection/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu";
import { BookmarkX, ClapperboardIcon, FolderKey, KeyRound, LogIn, LogOut, MailIcon, Rat, ShieldCheckIcon, User2, UserPen, UserPlus } from "lucide-react";

import fullRoute from "@/bLove/gRoute/bFullRoute";
import LOGO from "@/bLove/hAsset/HeroBanner/Logo.png";
import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility";
import brandConnection from "@/aConnection/eBrandConnection";
import NotificationComponent from "./component/aNotificationComponent";


// interface RouteProps {
//   href: string;
//   label: string;
// }

// const routeList: RouteProps[] = [
//   {
//     href: fullRoute.aGlobalRoute.aUnprotectedRoute.aAdminHomePageRoute,
//     label: "Home",
//   },
//   {
//     href: fullRoute.aGlobalRoute.aUnprotectedRoute.iAdminProjectSectionPageRoute,
//     label: "Projects",
//   },
//   {
//     href: fullRoute.aGlobalRoute.aUnprotectedRoute.fAdminBranchSectionPageRoute,
//     label: "Branches",
//   },
//   {
//     href: fullRoute.aGlobalRoute.aUnprotectedRoute.eAdminServicePageRoute,
//     label: "Services",
//   },
//   {
//     href: fullRoute.aGlobalRoute.aUnprotectedRoute.cAdminAboutApplicationPageRoute,
//     label: "About Application",
//   },
//   {
//     href: fullRoute.aGlobalRoute.aUnprotectedRoute.bAdminAboutCompanyPageRoute,
//     label: "About Company",
//   },
//   {
//     href: fullRoute.aGlobalRoute.aUnprotectedRoute.dAdminContactPageRoute,
//     label: "Contact",
//   },
// ];

type NavbarComponentType = {
  reduxCall: any
  apiHandler: any 
}

const NavbarComponent = (props: NavbarComponentType) => {
  // State Variable
  const [ isOpen, setIsOpen ] = useState(false)

  // JSX
  return (
    <React.Fragment>
      {/* NavbarComponent */}

      <section className="py-3 px-10 bg-muted text-muted-foreground text-center border-b border-muted-foreground tracking-wide relative z-50">
        <p className="text-sm">Recent Activity: Shraddha Kapoor created a new project instance • Dec 29, 2025</p>
      </section>

      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-muted min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          {/* Logo */}
          <a href={brandConnection.rFrontendBaseURL[0]} className="flex items-center gap-3 shrink-0">
            <img
              src={LOGO}
              alt="logo"
              className="h-10 w-auto object-contain"
            />

            <div className="hidden md:flex flex-col leading-none">
              <span className="text-lg font-bold uppercase leading-tight">
                {brandConnection.bBrandName.split(" ")[0]}
              </span>
              <span className="text-lg font-bold uppercase leading-tight">
                {brandConnection.bBrandName.split(" ")[1]}
              </span>
            </div>
          </a>

          <div 
            className={`
              ${isOpen ? "block" : "hidden max-lg:hidden lg:!block"}
              max-lg:before:fixed max-lg:before:bg-muted max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50
            `}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="
                lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-foreground 
                w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-background" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"></path>
              </svg>
            </button>

            {/* Logo & Items */}
            <ul 
              className="
                lg:flex gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-background 
                max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full 
                max-lg:shadow-md max-lg:overflow-auto z-50
              "
            >
              {/* Logo */}
              <li className="mb-6 hidden max-lg:block">
                <a href={brandConnection.rFrontendBaseURL[0]} className="flex items-center gap-3 shrink-0" >
                  <img 
                    src={LOGO} 
                    alt="logo" 
                    className="h-10 w-auto object-contain" 
                  />

                  <div className="flex flex-col leading-none">
                    <span className="text-lg font-bold uppercase leading-tight">
                      {brandConnection.bBrandName.split(" ")[0]}
                    </span>
                    <span className="text-lg font-bold uppercase leading-tight">
                      {brandConnection.bBrandName.split(" ")[1]}
                    </span>
                  </div>
                </a>
              </li>

              {/* Items */}
              <li className="max-lg:border-b max-lg:border-muted-foreground max-lg:py-3 px-3">
                <Link 
                  to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomePageRoute}
                  className="hover:text-foreground text-foreground block font-medium text-[15px]"
                >
                  Home
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:border-muted-foreground max-lg:py-3 px-3">
                <Link 
                  to={fullRoute.aGlobalRoute.aUnprotectedRoute.bAboutCompanyPageRoute}
                  className="hover:text-foreground text-muted-foreground block font-medium text-[15px]"
                >
                  About
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:border-muted-foreground max-lg:py-3 px-3">
                <Link 
                  to={fullRoute.aGlobalRoute.aUnprotectedRoute.eServicePageRoute}
                  className="hover:text-foreground text-muted-foreground block font-medium text-[15px]"
                >
                  Service
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:border-muted-foreground max-lg:py-3 px-3">
                <Link 
                  to={fullRoute.aGlobalRoute.aUnprotectedRoute.fBranchSectionPageRoute}
                  className="hover:text-foreground text-muted-foreground block font-medium text-[15px]"
                >
                  Branch
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:border-muted-foreground max-lg:py-3 px-3">
                <Link 
                  to={fullRoute.aGlobalRoute.aUnprotectedRoute.gBranchGroupPageRoute}
                  className="hover:text-foreground text-muted-foreground block font-medium text-[15px]"
                >
                  Project
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:border-muted-foreground max-lg:py-3 px-3">
                <Link 
                  to={fullRoute.aGlobalRoute.aUnprotectedRoute.dContactPageRoute}
                  className="hover:text-foreground text-muted-foreground block font-medium text-[15px]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex max-lg:ml-auto space-x-2">
            <ModeToggle />

            <Button asChild size="icon" variant="outline" >
              <Link to={brandConnection.rFrontendBaseURL[1]} target="_blank" rel="noopener noreferrer" >
                <ClapperboardIcon />
              </Link>
            </Button>

            <Button asChild size="icon" variant="outline" >
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hMainRoute.aDashboardRoute} >
                <ShieldCheckIcon />
              </Link>
            </Button>
            
            {
              props.reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && 
              props.reduxCall.state.receivedObject?.AccountRetrieve?._id && 
              <NotificationComponent />
            }

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {
                  (props.reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && props.reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <Avatar>
                        <AvatarImage src={props.reduxCall.state.receivedObject?.AccountRetrieve?.aImage} />
                        <AvatarFallback>{getInitialsUtility(
                          props.reduxCall.state.receivedObject?.AccountRetrieve?.eFirstname, 
                          props.reduxCall.state.receivedObject?.AccountRetrieve?.eLastname
                        )}</AvatarFallback>
                      </Avatar>
                    </Button>
                  ) : 
                  (props.reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !props.reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <User2 className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  ) : null
                }
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {
                  (props.reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && props.reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={props.reduxCall.state.receivedObject?.AccountRetrieve?.eImage} />
                        <AvatarFallback className="rounded-lg">{getInitialsUtility(
                          props.reduxCall.state.receivedObject?.AccountRetrieve?.eFirstname, 
                          props.reduxCall.state.receivedObject?.AccountRetrieve?.eLastname
                        )}</AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{`
                          ${props.reduxCall.state.receivedObject?.AccountRetrieve?.eFirstname} 
                          ${props.reduxCall.state.receivedObject?.AccountRetrieve?.eLastname}
                        `}</span>
                        <span className="truncate text-xs">{props.reduxCall.state.receivedObject?.AccountRetrieve?.eEmail}</span>
                      </div>
                    </div>
                  ) : 
                  (props.reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !props.reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                    null
                  ) : null
                }

                {
                  (props.reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && props.reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
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
                        <span onClick={() => props.apiHandler()} >
                          <LogOut /> Sign Out
                        </span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  ) : 
                  (props.reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !props.reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
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

            <button 
              onClick={() => setIsOpen(true)} 
              className="lg:hidden cursor-pointer"
            >
              <svg className="w-7 h-7 fill-foreground" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

    </React.Fragment>
  );
};

export default NavbarComponent;
