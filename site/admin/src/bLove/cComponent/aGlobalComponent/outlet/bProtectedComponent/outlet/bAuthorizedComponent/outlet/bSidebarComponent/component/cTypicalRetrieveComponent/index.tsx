import React from "react"
import { Link } from "react-router-dom"

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/aConnection/bShadcnConnection/components/ui/card";

import LoaderComponent from "@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent";
import ErrorComponent from "@/bLove/cComponent/aGlobalComponent/component/bErrorComponent";
import TextReadComponent from "./component/aTextReadComponent";
import RoleCheckboxReadComponent from "./component/bRoleCheckboxReadComponent";
import ImageReadComponent from "./component/cImageReadComponent";
import ByReadComponent from "./component/dByReadComponent";
import AtReadComponent from "./component/eAtReadComponent";
import HTMLReadComponent from "./component/fHTMLReadComponent";
import BadgeReadComponent from "./component/gBadgeReadComponent";


type TypicalRetrieveComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  params: any,
  APICall: any,
}

const TypicalRetrieveComponent = (props: TypicalRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* TypicalRetrieveComponent */}
      
      <div className="flex-1 px-4">
        <div className="flex items-center justify-between space-y-2 mb-8" >
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {props.header.title} {" "}
              <small className="text-sm font-normal tracking-wide italic" >({props.params.id})</small> 
            </h2>
            <p className="text-muted-foreground">{props.header.subtitle}</p>
          </div>
          <div className="flex items-center space-x-2">
            {props.header.actions.length > 0 && (
              props.header.actions.map((each, index) => (
                <Button onClick={each.onClick} key={index} >
                  {each.icon && <each.icon />}
                  {each.text}
                </Button>
              ))
            )}
            {props.header.links.length > 0 && (
              props.header.links.map((each, index) => (
                <Button asChild key={index} >
                  <Link to={each.to} >
                    {each.icon && <each.icon />}
                    {each.text}
                  </Link>
                </Button>
              ))
            )}
          </div>
        </div>

        <div className="space-y-8">
          {
            (props.APICall.retrieveAPIResponse.isLoading || props.APICall.retrieveAPIResponse.isFetching) ? <LoaderComponent /> : 
            (props.APICall.retrieveAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
            (props.APICall.retrieveAPIResponse.isSuccess) ? (
              (props.APICall.retrieveAPIResponse.data.success) ? (
                <React.Fragment>
                  {/* Section */}
                  {props.data?.filter((eachSection: any) => eachSection.display)?.map((eachSection: any, indexSection: number) => eachSection.display && (
                    <React.Fragment key={indexSection} >
                      <Card className="overflow-hidden" >
                        <CardHeader className="flex flex-row items-start bg-muted/50">
                          <div className="grid gap-0.5">
                            <CardTitle className="group flex items-center gap-2 text-lg">
                              {eachSection.title}
                            </CardTitle>
                            <CardDescription>{eachSection.subtitle}</CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4 pt-4">
                            {eachSection.fields.map((eachField: any, indexInput: any) => (
                              <React.Fragment key={indexInput} >
    
                                {/* For I/P Type: Image */}
                                {((eachField.type === "image") && 
                                  <ImageReadComponent key={indexInput} eachField={eachField} />
                                )}
    
                                {/* For I/P Type: Text, Email, Number */}
                                {((eachField.type === "text" || eachField.type === "email" || eachField.type === "number" || eachField.type === "password") && 
                                  <TextReadComponent key={indexInput} eachField={eachField} />
                                )}
    
                                {/* For I/P Type: HTML */}
                                {((eachField.type === "html") && 
                                  <HTMLReadComponent key={indexInput} eachField={eachField} />
                                )}
    
                                {/* For I/P Type: Badge */}
                                {((eachField.type === "badge") && 
                                  <BadgeReadComponent key={indexInput} eachField={eachField} />
                                )}
    
                                {/* For I/P Type: Role Checkbox */}
                                {((eachField.type === "role-checkbox") && 
                                  <RoleCheckboxReadComponent key={indexInput} eachField={eachField} />
                                )}
    
                                {/* For I/P Type: Created By & Updated By */}
                                {((eachField.type === "by") && (eachField.value) &&
                                  <ByReadComponent key={indexInput} eachField={eachField} />
                                )}
    
                                {/* For I/P Type: Created At  Updated At */}
                                {((eachField.type === "at") && (eachField.value) && 
                                  <AtReadComponent key={indexInput} eachField={eachField} />
                                )}
    
                              </React.Fragment>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ) : []
            ) : []
          }
        </div>

      </div>
    </React.Fragment>
  )
}

export default TypicalRetrieveComponent
