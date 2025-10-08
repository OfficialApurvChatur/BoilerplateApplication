import { Link } from "react-router-dom"
import { ColumnDef } from "@tanstack/react-table"

import fullRoute from "@/bLove/gRoute/bFullRoute"
import backgroundImage from "@/bLove/hAsset/defaultImage.png";
import { DataTableColumnHeader } from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/component/aTypicalListComponent/components/data-table-column-header"
import { ListSchema } from "./bListSchema"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import UserInfoComponent from "@/bLove/cComponent/aGlobalComponent/component/cUserInfoComponent";


const listColumn: ColumnDef<ListSchema>[] = [
  {
    accessorKey: "aImage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => {
      return (
        <div className="rounded-md flex items-center justify-center w-14 h-14 overflow-hidden">
          <img
            src={row.getValue("aImage") || backgroundImage}
            className="rounded-md object-cover w-full h-full"
            alt="Uploaded Preview"
          />
        </div>
      )
    },
  },
  {
    accessorKey: "aTitle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate font-normal hover:underline">
            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cActivityLogRoute.cRetrieveRoute}/${row.original._id}`} >
              {row.getValue("aTitle")}
            </Link>
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "bCreatedBy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created" />
    ),
    cell: ({ row }) => {
      return (
        row.getValue("bCreatedBy") ? (
          <UserInfoComponent user={row.getValue("bCreatedBy")} time={row.original?.bCreatedAt} />
        ) : "-"
      )
    },
  },
  {
    accessorKey: "bUpdatedBy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated" />
    ),
    cell: ({ row }) => {
      return (
        row.getValue("bUpdatedBy") ? (
          <UserInfoComponent user={row.getValue("bUpdatedBy")} time={row.original?.bUpdatedAt} />
        ) : "-"
      )
    },
  },
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
            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cActivityLogRoute.cRetrieveRoute}/${row.original._id}`} >
              Retrieve
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cActivityLogRoute.dUpdateRoute}/${row.original._id}`} >
              Update
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cActivityLogRoute.eDeleteRoute}/${row.original._id}`} >
              Delete
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]

export default listColumn;
