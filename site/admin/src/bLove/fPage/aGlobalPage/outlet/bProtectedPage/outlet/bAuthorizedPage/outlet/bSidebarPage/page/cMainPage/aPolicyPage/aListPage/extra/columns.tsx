import { Link } from "react-router-dom"
import { ColumnDef } from "@tanstack/react-table"
import moment from 'moment';

import fullRoute from "@/bLove/gRoute/bFullRoute"
import { DataTableColumnHeader } from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/component/aTypicalListComponent/components/data-table-column-header"
import { ListSchema } from "./schema"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"


export const columns: ColumnDef<ListSchema>[] = [
  // {
  //   accessorKey: "_id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="ID" />
  //   ),
  //   cell: ({ row }) => <div className="w-[80px]">{row.getValue("_id")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "dPolicyNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Policy Number" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate font-normal hover:underline">
            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.bPolicyRoute.cRetrieveRoute}/${row.getValue("_id")}`} >
              {row.getValue("dPolicyNumber")}
            </Link>
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "dPolicyType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Policy Type" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-normal">
            {row.getValue("dPolicyType")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "dPolicyStartDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-normal flex flex-col">
            <span>{moment(row.getValue("dPolicyStartDate")).format("ddd, Do MMM YY")}</span>
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "dPolicyEndDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="End Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-normal flex flex-col text-sm">
            <span>{moment(row.getValue("dPolicyEndDate")).format("ddd, Do MMM YY")}</span>
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "dPremiumAmount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Premium" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[50px] truncate font-normal">
            {row.getValue("dPremiumAmount")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "dDeductibleAmount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deductible" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[50px] truncate font-normal">
            {row.getValue("dDeductibleAmount")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "dCoverageDetails",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Coverage Datails" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate font-normal">
            {row.getValue("dCoverageDetails")}
          </span>
        </div>
      )
    },
  },
  // {
  //   accessorKey: "aTitle",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Title" />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[450px] truncate font-normal hover:underline">
  //           <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.bPolicyRoute.cRetrieveRoute}/${row.getValue("_id")}`} >
  //             {row.getValue("aTitle")}
  //           </Link>
  //         </span>
  //       </div>
  //     )
  //   },
  // },
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted" >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem asChild>
            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.bPolicyRoute.cRetrieveRoute}/${row.getValue("_id")}`} >
              Retrieve
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.bPolicyRoute.dUpdateRoute}/${row.getValue("_id")}`} >
              Update
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.bPolicyRoute.eDeleteRoute}/${row.getValue("_id")}`} >
              Delete
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]
