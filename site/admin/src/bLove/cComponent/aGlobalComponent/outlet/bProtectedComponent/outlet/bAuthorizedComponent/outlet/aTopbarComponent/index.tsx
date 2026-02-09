import React from "react"
import { useLocation, useNavigate } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/aConnection/bShadcnConnection/components/ui/tabs";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const TopbarComponent = ({ children }: { children: React.ReactNode }) => {
  // Variable
  const navigate = useNavigate()
  const { pathname } = useLocation();

  // JSX
  return (
    <React.Fragment>
      {/* TopbarComponent */}

      {(
        pathname === fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.fAccountRetrieveSecondaryRoute || 
        pathname === fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.gAccountUpdateSecondaryRoute || 
        pathname === fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.hAccountEmailUpdateSecondaryRoute || 
        pathname === fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.iAccountPasswordUpdateSecondaryRoute || 
        pathname === fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.jAccountDeleteSecondaryRoute
      ) ? (
        <React.Fragment>
          {children}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="h-full flex-1 flex-col space-y-8 md:flex px-4">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">{"Account"}</h2>
                <p className="text-muted-foreground">{"props.header.subtitle"}</p>
              </div>
            </div>

            <Tabs defaultValue="accountRetrieve" className="space-y-4">
              <TabsList>
                <TabsTrigger value="accountRetrieve" onClick={() => navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.aAccountRetrieveRoute)} >
                  Account
                </TabsTrigger>
                <TabsTrigger value="accountUpdate" onClick={() => navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.bAccountUpdateRoute)} >
                  Update Account
                </TabsTrigger>
                <TabsTrigger value="accountEmailUpdate" onClick={() => navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.cAccountEmailUpdateRoute)} >
                  Change Email
                </TabsTrigger>
                <TabsTrigger value="accountPasswordUpdate" onClick={() => navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.dAccountPasswordUpdateRoute)} >
                  Change Password
                </TabsTrigger>
                <TabsTrigger value="accountDelete" onClick={() => navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.eAccountDeleteRoute)} >
                  Delete Account
                </TabsTrigger>
              </TabsList>
              <TabsContent value="accountRetrieve" className="space-y-4">
                {/* accountRetrieve */}
                { children }
              </TabsContent>
              <TabsContent value="accountUpdate" className="space-y-4">
                {/* accountUpdate */}
                { children }
              </TabsContent>
              <TabsContent value="accountEmailUpdate" className="space-y-4">
                {/* accountEmailUpdate */}
                { children }
              </TabsContent>
              <TabsContent value="accountPasswordUpdate" className="space-y-4">
                {/* accountPasswordUpdate */}
                { children }
              </TabsContent>
              <TabsContent value="accountDelete" className="space-y-4">
                {/* accountDelete */}
                { children }
              </TabsContent>
            </Tabs>
          </div>
        </React.Fragment>
      )}

    </React.Fragment>
  )
}

export default TopbarComponent;
