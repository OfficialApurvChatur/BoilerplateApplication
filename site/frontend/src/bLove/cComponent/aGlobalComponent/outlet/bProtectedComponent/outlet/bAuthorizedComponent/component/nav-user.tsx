"use client"

import React from "react"
import { Link } from "react-router-dom"

import {
  BookmarkX,
  ChevronsUpDown,
  FolderKey,
  KeyRound,
  LogIn,
  LogOut,
  MailIcon,
  Rat,
  User2,
  UserPen,
  UserPlus,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/aConnection/bShadcnConnection/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/aConnection/bShadcnConnection/components/ui/sidebar"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"

import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility"
import fullRoute from "@/bLove/gRoute/bFullRoute"

export function NavUser({ reduxCall, apiHandler }: { reduxCall: any, apiHandler: any }) {
  // Variable
  const { isMobile } = useSidebar()

  // JSX
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {
                (reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                  <React.Fragment>
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={reduxCall.state.receivedObject?.AccountRetrieve?.aImage} />
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
                  </React.Fragment>
                ) : 
                (reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <User2 className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                ) : "Loading..."
              }
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              {
                (reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={reduxCall.state.receivedObject?.AccountRetrieve?.aImage} />
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
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {
              (reduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && reduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                <DropdownMenuGroup>
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
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
