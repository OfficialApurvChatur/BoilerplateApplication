import { useState } from "react";
import { Link } from "react-router-dom";

import { BookmarkX, ClapperboardIcon, FolderKey, KeyRound, LogIn, LogOut, MailIcon, Menu, Rat, ShieldCheckIcon, User2, UserPen, UserPlus } from "lucide-react";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/aConnection/bShadcnConnection/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";
import { ModeToggle } from "@/aConnection/bShadcnConnection/components/mode-toggle";
import { Button, buttonVariants } from "@/aConnection/bShadcnConnection/components/ui/button";

import { LogoIcon } from "@/bLove/hAsset/Icons";
import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility";
import fullRoute from "@/bLove/gRoute/bFullRoute";
import { Separator } from "@/aConnection/bShadcnConnection/components/ui/separator";
import brandConnection from "@/aConnection/eBrandConnection";


interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: fullRoute.aGlobalRoute.aUnprotectedRoute.aAdminHomePageRoute,
    label: "Home",
  },
  {
    href: fullRoute.aGlobalRoute.aUnprotectedRoute.iAdminProjectSectionPageRoute,
    label: "Projects",
  },
  {
    href: fullRoute.aGlobalRoute.aUnprotectedRoute.fAdminBranchSectionPageRoute,
    label: "Branches",
  },
  {
    href: fullRoute.aGlobalRoute.aUnprotectedRoute.eAdminServicePageRoute,
    label: "Services",
  },
  {
    href: fullRoute.aGlobalRoute.aUnprotectedRoute.cAdminAboutApplicationPageRoute,
    label: "About Application",
  },
  {
    href: fullRoute.aGlobalRoute.aUnprotectedRoute.bAdminAboutCompanyPageRoute,
    label: "About Company",
  },
  {
    href: fullRoute.aGlobalRoute.aUnprotectedRoute.dAdminContactPageRoute,
    label: "Contact",
  },
];

type NavbarComponentType = {
  reduxCall: any
  apiHandler: any 
}

export const NavbarComponent = (props: NavbarComponentType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              to={fullRoute.aGlobalRoute.aUnprotectedRoute.aAdminHomePageRoute}
              className="ml-2 font-myPrimaryFont font-semibold text-xl flex items-center"
            >
              <LogoIcon />
              <div className="grid flex-1 text-left text-xl leading-tight">
                <span className="truncate font-semibold">
                  {brandConnection.bBrandName}
                </span>
              </div>
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex lg:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex lg:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-myPrimaryFont font-bold text-xl">
                    {brandConnection.bBrandName}
                  </SheetTitle>
                </SheetHeader>
                <Separator />
                <nav className="font-mySecondaryFont text-sm flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      key={label}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    to="/#"
                    className={`border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <ClapperboardIcon className="w-5 h-5" />
                    Visit Application
                  </Link>
                  <Link
                    to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hMainRoute.aDashboardRoute}
                    className={`border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <ShieldCheckIcon className="w-5 h-5" />
                    Get Started
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="font-mySecondaryFont hidden lg:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                to={route.href}
                key={i}
                className={`text-xs ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/#"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <ClapperboardIcon className="w-5 h-5" />
            </Link>
            <Link
              to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hMainRoute.aDashboardRoute}
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <ShieldCheckIcon className="w-5 h-5" />
            </Link>

            <ModeToggle />

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

          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
