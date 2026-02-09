import React from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { CrossCircledIcon } from '@radix-ui/react-icons'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent'
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent'

import { Avatar, AvatarFallback, AvatarImage } from '@/aConnection/bShadcnConnection/components/ui/avatar';
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, ThreadsLogoIcon, TwitterLogoIcon } from '@/bLove/hAsset/Icons';
import { Button } from '@/aConnection/bShadcnConnection/components/ui/button'

import getInitialsUtility from '@/bLove/dUtility/aGetInitialsUtility'


type AccountDeleteSecondaryComponentType = {
  reduxCall: any
  apiCall: any
  submitHandler: any
}

const AccountDeleteSecondaryComponent = (props: AccountDeleteSecondaryComponentType) => {
  // Variable
  const navigate = useNavigate();

  const cMenu = props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.cRole?.cPermission?.cMenu
    ?.filter((each: any) => each.menu)
    ?.map((each: any) => {
      let itsMenu;
      let itsAccess: any[] = []; 

      // Check if each.menu._id exists, then assign
      if (each.menu._id) itsMenu = each.menu;

      // Map over cAccessPoint to build access points
      itsAccess = each.menu.cAccessPoint.map((eachPoint: any) => {
        // Find the matching access point from previousAccess
        const access = each.access.find((access: any) => access.accessPoint === eachPoint._id);
        
        return {
          accessPoint: eachPoint,
          hasAccess: access ? access.hasAccess : false // Use default false if no match
        };
      });

      // Return the menu and its updated access
      return {
        menu: itsMenu,
        access: itsAccess
      };
    }) 

  const formatAddress = (addr: any) => {
    if (!addr) return "";

    const parts = [
      addr.aLane,
      addr.bStreet,
      addr.cCity,
      addr.dState,
      addr.eCountry
    ].filter(Boolean);

    const main = parts.join(", ");

    return addr.fPinCode ? `${main} - ${addr.fPinCode}` : main;
  };

  // JSX
  return (
    <React.Fragment>
      {/* AccountDeleteSecondaryComponent */}

      <div className="space-y-8">
        {
          (props.apiCall.retrieveAPIResponse.isLoading || props.apiCall.retrieveAPIResponse.isFetching) ? <LoaderComponent /> : 
          (props.apiCall.retrieveAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
          (props.apiCall.retrieveAPIResponse.isSuccess) ? (
            (props.apiCall.retrieveAPIResponse.data.success) ? (
              <React.Fragment>
                <div>
                  <div className="bg-gradient-to-r from-muted to-muted-foreground w-full h-60">
                    <img 
                      src={
                        props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.eImage || 
                        "https://readymadeui.com/cardImg.webp"
                      } 
                      alt="Banner Image" 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  <div className="-mt-28 mb-14 px-4">
                    <div className="mx-auto max-w-6xl shadow-lg md:p-8 relative bg-muted rounded-sm">
                      {/* Banner Content */}
                      <h2 className="text-xl text-foreground font-semibold py-6 text-center uppercase">Delete Profile Section</h2>
                      

                      <div className="mx-2 p-4 flex flex-col gap-6 col-span-full">
                        <div className="bg-background flex min-h-[60px] text-destructive border-2 border-destructive rounded-lg overflow-hidden relative" role="alert">
                          <div className="bg-destructive w-14 shrink-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 32 32">
                              <path
                                d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1zm6.36 20L21 22.36l-5-4.95-4.95 4.95L9.64 21l4.95-5-4.95-4.95 1.41-1.41L16 14.59l5-4.95 1.41 1.41-5 4.95z"
                                data-original="#ea2d3f" />
                            </svg>
                          </div>

                          <div className="flex flex-col flex-1 justify-center px-4 py-4">
                            <p className="font-semibold text-sm mr-4 mb-1">Delete Account!</p>
                            <span className="text-sm font-normal">
                              Are you sure... You want to delete this following account permanantly?
                            </span>
                            <Button 
                              type="button"
                              onClick={() => props.submitHandler(props.reduxCall, props.apiCall, navigate)}
                              disabled={props.apiCall.deleteAPIResponse.isLoading}
                              variant="destructive"
                              className="mt-4"
                            >
                              {props.apiCall.deleteAPIResponse.isLoading ? "Loading..." : "I'm Sure... Please Delete"}
                            </Button>
                          </div>

                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 items-center gap-12 max-w-5xl max-md:max-w-md mx-auto p-4 mb-4">
                        <div className="bg-muted-foreground rounded-md">
                          <img src={props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aImage} className="w-full aspect-[7/7] object-contain rounded-md" />
                        </div>

                        <div>
                          <h2 className="text-2xl font-semibold text-foreground !leading-tight uppercase">
                            {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aTitle}
                          </h2>
                          <p className="mt-2 text-md text-muted-foreground font-medium leading-relaxed uppercase">
                            {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aSubtitle}
                          </p>
                          <p className="mt-6 text-md text-muted-foreground font-medium leading-relaxed">
                            {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aDescription}
                          </p>

                          <div className="space-x-4 flex mt-6">
                            {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.dLinks?.map((each: any) => (
                              <React.Fragment key={each.aLinkTitle} >
                                <a 
                                  href={each.bLinkURL} 
                                  className="bg-foreground h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {each.aLinkTitle === "Linkedin" && <LinkedInLogoIcon />}
                                  {each.aLinkTitle === "X" && <TwitterLogoIcon />}
                                  {each.aLinkTitle === "Threads" && <ThreadsLogoIcon />}
                                  {each.aLinkTitle === "Instagram" && <InstagramLogoIcon />}
                                  {each.aLinkTitle === "Github" && <GitHubLogoIcon />}
                                </a>
                              </React.Fragment>
                            ))}
                          </div>

                          <p className="mt-6 text-md text-muted-foreground font-medium leading-relaxed">
                            Swipe below to view your complete profile...
                          </p>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="p-4">
                        <div className="bg-muted rounded-md">
                          <div className="xl:max-w-screen-xl max-w-screen-lg mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {/* Critical Information */}
                              <div className="space-y-6 bg-background rounded-md p-4 md:p-6">
                                <h3 className="text-lg font-bold text-foreground uppercase">Critical Information</h3>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Profile Image:</h3>
                                  <div className="w-32 h-32 rounded-md overflow-hidden bg-foreground inline-block mt-2">
                                    <img 
                                      src={props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.eImage} 
                                      className="w-full h-full object-cover border border-foreground rounded-md" 
                                    />
                                  </div>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">First Name:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.eFirstname}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Last Name:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.eLastname}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Email:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.eEmail}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Mobile:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.eMobile}
                                  </p>
                                </div>

                              </div>

                              {/* Basic Information */}
                              <div className="space-y-6 bg-background rounded-md p-4 md:p-6">
                                <h3 className="text-lg font-bold text-foreground uppercase">Basic Information</h3>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Cover Image:</h3>
                                  <div className="w-32 h-32 rounded-md overflow-hidden bg-foreground inline-block mt-2">
                                    <img 
                                      src={props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aImage} 
                                      className="w-full h-full object-cover border border-foreground rounded-md" 
                                    />
                                  </div>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Title:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aTitle}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Subtitle:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aSubtitle}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Description:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aDescription}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Detail:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aDetail}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Slug:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aSlug}
                                  </p>
                                </div>

                              </div>

                              {/* More Information */}
                              <div className="space-y-6 bg-background rounded-md p-4 md:p-6">
                                <h3 className="text-lg font-bold text-foreground uppercase">More Information</h3>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Address:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {formatAddress(props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.dAddress)}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Links:</h3>
                                  <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-muted-foreground">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.dLinks
                                      ?.filter((each: any) => each?.aLinkTitle && each?.bLinkURL)
                                      .map((each: any, index: number) => (
                                        <li key={index}>
                                          <a
                                            href={each.bLinkURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline text-foreground"
                                          >
                                            {each.aLinkTitle}
                                          </a>
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                              </div>

                              {/* Personal Information */}
                              <div className="space-y-6 bg-background rounded-md p-4 md:p-6">
                                <h3 className="text-lg font-bold text-foreground uppercase">Personal Information</h3>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Created By:</h3>
                                  <p className="text-sm text-muted-foreground mt-3">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bCreatedBy ? (
                                      <div className="flex items-center space-x-2">
                                        <Avatar>
                                          <AvatarImage src={props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bCreatedBy?.eImage} />
                                          <AvatarFallback>{getInitialsUtility(
                                            props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bCreatedBy?.eFirstname, 
                                            props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bCreatedBy?.eLastname
                                          )}</AvatarFallback>
                                        </Avatar>
                                        <div className='hidden sm:block' >
                                          <div className="flex items-center flex-1 gap-1 mb-1">
                                            <p className="text-sm leading-none">{`
                                              ${props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bCreatedBy?.eFirstname} 
                                              ${props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bCreatedBy?.eLastname}
                                            `}</p>
                                          </div>
                                          <p className="text-xs text-muted-foreground">{props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bCreatedBy?.eEmail}</p>
                                        </div>
                                      </div>
                                    ) : "-"}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Created At:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bCreatedAt ? moment(props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bCreatedAt).format('MMM Do YYYY, h:mm:ss a') : "-"}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Updated By:</h3>
                                  <p className="text-sm text-muted-foreground mt-3">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bUpdatedBy ? (
                                      <div className="flex items-center space-x-2">
                                        <Avatar>
                                          <AvatarImage src={props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bUpdatedBy?.eImage} />
                                          <AvatarFallback>{getInitialsUtility(
                                            props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bUpdatedBy?.eFirstname, 
                                            props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bUpdatedBy?.eLastname
                                          )}</AvatarFallback>
                                        </Avatar>
                                        <div className='hidden sm:block' >
                                          <div className="flex items-center flex-1 gap-1 mb-1">
                                            <p className="text-sm leading-none">{`
                                              ${props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bUpdatedBy?.eFirstname} 
                                              ${props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bUpdatedBy?.eLastname}
                                            `}</p>
                                          </div>
                                          <p className="text-xs text-muted-foreground">{props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bCreatedBy?.eEmail}</p>
                                        </div>
                                      </div>
                                    ) : "-"}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Updated At:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bUpdatedAt ? moment(props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.bUpdatedAt).format('MMM Do YYYY, h:mm:ss a') : "-"}
                                  </p>
                                </div>

                              </div>
                              
                              {/* Relation Information */}
                              <div className="space-y-6 bg-background rounded-md p-4 md:p-6 col-span-full">
                                <h3 className="text-lg font-bold text-foreground uppercase">Relation Information</h3>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Role:</h3>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.cRole?.aTitle}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-foreground text-sm font-semibold">Permission:</h3>
                                  {cMenu?.map((eachValue: any, indexValue: number) => (eachValue.menu &&
                                    <div className="flex flex-col items-start space-y-2 mt-2 ml-4" key={indexValue}>
                                      <h3 className="text-sm">{eachValue.menu.aTitle}</h3>

                                      <ul className="grid grid-col-1 md:grid-cols-5 gap-2 pb-4" >
                                        {eachValue?.access?.map((eachAccessPoint: any, indexAccessPoint: number) => (
                                          <li key={indexAccessPoint} className="flex flex-row items-center space-x-3 space-y-0 ml-4 px-2">
                                            <div className="flex justify-center items-center gap-2" >
                                              <span
                                                className={`${
                                                  eachAccessPoint?.hasAccess ? "text-green-500" : "text-red-500"
                                                }`}
                                              >
                                                {eachAccessPoint.hasAccess
                                                  ? <CheckCircle2 className="h-4 w-4" /> : <CrossCircledIcon className="h-4 w-4" />}
                                              </span>
                                              <span className="text-sm font-normal" >{eachAccessPoint?.accessPoint?.aTitle}</span>
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ) : []
          ) : []
        }
      </div>
    </React.Fragment>
  )
}

export default AccountDeleteSecondaryComponent;
