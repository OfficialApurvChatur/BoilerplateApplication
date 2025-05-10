import React from "react"
import { Link } from "react-router-dom"

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"

import { DataTable } from "./components/data-table"


type TypicalListComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  columns: any,
  apiCall: any,
}

const TypicalListComponent = (props: TypicalListComponentType) => {
  // Destructure Props
  const { header, data, columns, apiCall } = props;

  // JSX
  return (
    <React.Fragment>
      {/* TypicalListComponent */}
      
      <div className="h-full flex-1 flex-col space-y-8 md:flex px-4">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{header.title}</h2>
            <p className="text-muted-foreground">{header.subtitle}</p>
          </div>
          <div className="flex items-center space-x-2">
            {header.actions.length > 0 && (
              header.actions.map((each, index) => (
                <Button onClick={each.onClick} key={index} >
                  {each.icon && <each.icon />}
                  {each.text}
                </Button>
              ))
            )}
            {header.links.length > 0 && (
              header.links.map((each, index) => (
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

        <DataTable data={data} columns={columns} apiCall={apiCall} />
      </div>
    </React.Fragment>
  )
}

export default TypicalListComponent
