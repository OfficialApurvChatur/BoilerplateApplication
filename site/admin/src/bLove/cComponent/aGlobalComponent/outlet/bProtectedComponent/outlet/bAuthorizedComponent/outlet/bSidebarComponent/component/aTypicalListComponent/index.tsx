import React from "react"
import { Link } from "react-router-dom"

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"

import { DataTable } from "./components/data-table"


type TypicalListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any,
}

const TypicalListComponent = (props: TypicalListComponentType) => {
  // Destructure Props
  const { listHeader, listColumn, listData, apiCall } = props;

  // JSX
  return (
    <React.Fragment>
      {/* TypicalListComponent */}
      
      <div className="h-full flex-1 flex-col space-y-8 md:flex px-4">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{listHeader.title}</h2>
            <p className="text-muted-foreground">{listHeader.subtitle}</p>
          </div>
          <div className="flex items-center space-x-2">
            {listHeader.actions.length > 0 && (
              listHeader.actions.map((each: any, index: number) => (
                <Button onClick={each.onClick} key={index} >
                  {each.icon && <each.icon />}
                  {each.text}
                </Button>
              ))
            )}
            {listHeader.links.length > 0 && (
              listHeader.links.map((each: any, index: number) => (
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

        <DataTable data={listData} columns={listColumn} apiCall={apiCall} />
      </div>
    </React.Fragment>
  )
}

export default TypicalListComponent
