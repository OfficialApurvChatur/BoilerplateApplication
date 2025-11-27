"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/aConnection/bShadcnConnection/components/ui/resizable-navbar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";
import React, { useState } from "react";
import { NavbarLogo } from "./component/aNavbarLogoComponent";
import { NavbarUtilityComponent } from "./component/bNavbarMenuComponent";
import { ModeToggle } from "@/aConnection/bShadcnConnection/components/mode-toggle";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "@/aConnection/bShadcnConnection/components/ui/button";
import { BookmarkX, ClapperboardIcon, Code2Icon, FolderKey, KeyRound, LogIn, LogOut, MailIcon, PaletteIcon, Rat, SearchIcon, ShieldCheckIcon, StarIcon, User2, UserPen, UserPlus } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";
import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility";
import {
  HomeIcon,
  InfoIcon,
  AppWindowIcon,
  BriefcaseIcon,
  GaugeIcon,
  FolderOpenIcon,
  Building2Icon,
  PhoneIcon,
} from "lucide-react";
import brandConnection from "@/aConnection/eBrandConnection";


type NavbarComponentType = {
  reduxCall: any
  apiHandler: any 
}

export function ResizeableNavbarComponent(props: NavbarComponentType) {
const navItems = [
  { name: "Hero", link: "#", icon: <HomeIcon className="w-5 h-5" />,
    subItems: [
      { name: `About ${brandConnection.bBrandName}`, link: "#about-company", icon: <Code2Icon className="w-5 h-5" /> },
      { name: `About ${brandConnection.dAdministrationApplicationName}`, link: "#about-application", icon: <PaletteIcon className="w-5 h-5" /> },
      { name: "Our Services", link: "#service", icon: <SearchIcon className="w-5 h-5" /> },
      { name: "Our Statistics", link: "#counter", icon: <StarIcon className="w-5 h-5" /> },
      { name: "Branches Section", link: "#branch-section", icon: <StarIcon className="w-5 h-5" /> },
      { name: "Projects Section", link: "#project-section", icon: <StarIcon className="w-5 h-5" /> },
      { name: "Contact Us", link: "#contact", icon: <StarIcon className="w-5 h-5" /> },
    ],
  },
  { name: "About", link: "#about-company", icon: <InfoIcon className="w-5 h-5" />,
    subItems: [
      { name: "Web Development", link: "#web-dev", icon: <Code2Icon className="w-5 h-5" /> },
      { name: "Interface Design", link: "#ui-design", icon: <PaletteIcon className="w-5 h-5" /> },
      { name: "SEO Optimization", link: "#seo", icon: <SearchIcon className="w-5 h-5" /> },
      { name: "Branding", link: "#branding", icon: <StarIcon className="w-5 h-5" /> },
    ],
  },
  { name: "Contact", link: "#about-application", icon: <AppWindowIcon className="w-5 h-5" />,
    subItems: [
      { name: "Web Development", link: "#web-dev", icon: <Code2Icon className="w-5 h-5" /> },
      { name: "Interface Design", link: "#ui-design", icon: <PaletteIcon className="w-5 h-5" /> },
      { name: "SEO Optimization", link: "#seo", icon: <SearchIcon className="w-5 h-5" /> },
      { name: "Branding", link: "#branding", icon: <StarIcon className="w-5 h-5" /> },
    ],
  },
  {
    name: "Services",
    link: "#services",
    icon: <BriefcaseIcon className="w-5 h-5" />,
    subItems: [
      { name: "Web Development", link: "#web-dev", icon: <Code2Icon className="w-5 h-5" /> },
      { name: "Interface Design", link: "#ui-design", icon: <PaletteIcon className="w-5 h-5" /> },
      { name: "SEO Optimization", link: "#seo", icon: <SearchIcon className="w-5 h-5" /> },
      { name: "Branding", link: "#branding", icon: <StarIcon className="w-5 h-5" /> },
    ],
  },
  { name: "Counters", link: "#counter", icon: <GaugeIcon className="w-5 h-5" />,
    subItems: [
      { name: "Web Development", link: "#web-dev", icon: <Code2Icon className="w-5 h-5" /> },
      { name: "Interface Design", link: "#ui-design", icon: <PaletteIcon className="w-5 h-5" /> },
      { name: "SEO Optimization", link: "#seo", icon: <SearchIcon className="w-5 h-5" /> },
      { name: "Branding", link: "#branding", icon: <StarIcon className="w-5 h-5" /> },
    ],
  },
  { name: "Projects", link: "#projects", icon: <FolderOpenIcon className="w-5 h-5" />,
    subItems: [
      { name: "Web Development", link: "#web-dev", icon: <Code2Icon className="w-5 h-5" /> },
      { name: "Interface Design", link: "#ui-design", icon: <PaletteIcon className="w-5 h-5" /> },
      { name: "SEO Optimization", link: "#seo", icon: <SearchIcon className="w-5 h-5" /> },
      { name: "Branding", link: "#branding", icon: <StarIcon className="w-5 h-5" /> },
    ],
  },
  { name: "Branches", link: "#branches", icon: <Building2Icon className="w-5 h-5" />,
    subItems: [
      { name: "Web Development", link: "#web-dev", icon: <Code2Icon className="w-5 h-5" /> },
      { name: "Interface Design", link: "#ui-design", icon: <PaletteIcon className="w-5 h-5" /> },
      { name: "SEO Optimization", link: "#seo", icon: <SearchIcon className="w-5 h-5" /> },
      { name: "Branding", link: "#branding", icon: <StarIcon className="w-5 h-5" /> },
    ],
  },
  { name: "Contact", link: "#contact-info", icon: <PhoneIcon className="w-5 h-5" />,
    subItems: [
      { name: "Web Development", link: "#web-dev", icon: <Code2Icon className="w-5 h-5" /> },
      { name: "Interface Design", link: "#ui-design", icon: <PaletteIcon className="w-5 h-5" /> },
      { name: "SEO Optimization", link: "#seo", icon: <SearchIcon className="w-5 h-5" /> },
      { name: "Branding", link: "#branding", icon: <StarIcon className="w-5 h-5" /> },
    ],
  },
];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <Navbar className="top-0">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavbarUtilityComponent navItems={navItems} type="desktop" />
          <div className="flex items-center gap-2">
            <Link
              to="/#"
              className={`${buttonVariants({ variant: "secondary", size: "icon" })}`}
            >
              <ClapperboardIcon />
            </Link>
            <Link
              to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hMainRoute.aDashboardRoute}
              className={`${buttonVariants({ variant: "secondary", size: "icon" })}`}
            >
              <ShieldCheckIcon />
            </Link>
            <ModeToggle />
            {/* <NavbarButton variant="gradient">Login</NavbarButton>
            <NavbarButton variant="primary">Book</NavbarButton> */}
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
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex gap-2 items-center" >
              <Link
                to="/#"
                className={`border ${buttonVariants({ variant: "secondary", size: "icon" })}`}
              >
                <ClapperboardIcon className="w-5 h-5" />
              </Link>
              <Link
                to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hMainRoute.aDashboardRoute}
                className={`border ${buttonVariants({ variant: "secondary", size: "icon" })}`}
              >
                <ShieldCheckIcon className="w-5 h-5" />
              </Link>
              <ModeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {
                  (props.reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && props.reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                      <Avatar className="cursor-pointer">
                        <AvatarImage src={props.reduxCall.state.receivedObject?.AccountRetrieve?.aImage} />
                        <AvatarFallback>{getInitialsUtility(
                          props.reduxCall.state.receivedObject?.AccountRetrieve?.eFirstname, 
                          props.reduxCall.state.receivedObject?.AccountRetrieve?.eLastname
                        )}</AvatarFallback>
                      </Avatar>
                  ) : 
                  (props.reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !props.reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <User2 className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  ) : null
                }
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
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
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <User2 className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
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

            <NavbarUtilityComponent navItems={navItems} type="mobile" />

            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* <NavbarMenuComponent /> */}
    </React.Fragment>
  );
}
