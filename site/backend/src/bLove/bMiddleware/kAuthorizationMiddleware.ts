import express from 'express';
import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';

import catchAsyncMiddleware from './bCatchAsyncMiddleware';
import ErrorUtility from '../cUtility/aErrorUtility';

import { UserModel } from '../aMCVR/aModel/admin/bUserAdministration/dUserModel';


const authorizationMiddleware = (props: { menu: string, accessPoint: string[]}) => (
  catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {
      // Retrieve User
      const user = await UserModel.findById((request as any).user)
        .populate({
          path: 'cRole',
          select: "aTitle cMenu",
          populate: {
            path: 'cMenu.menu',
            select: "aTitle cAccessPoint",
            populate: {
              path: 'cAccessPoint',
              select: 'aTitle',
            },  
          }
        });

      // Not Found
      if (!user) {
        return next(new ErrorUtility("User is removed", 401));
      }
      
      // Role Not Found
      if (!user.cRole) {
        return next(new ErrorUtility("No Assigned Role", 401));
      }
            
      // Populate And Update Menu
      const cMenu = (user?.cRole as any)?.cMenu?.
        filter((each: any) => each.menu)?.
        map((each: any) => {
          let itsMenu;
          let itsAccess: any[] = []; 

          if (each.menu._id) itsMenu = each.menu;

          itsAccess = each.menu.cAccessPoint.map((eachPoint: any) => {
            const access = each.access.find((access: any) => String(access.accessPoint) === String(eachPoint._id));
            
            return {
              accessPoint: eachPoint,
              hasAccess: access ? access.hasAccess : false 
            };
          });

          // Return the menu and its updated access
          return {
            menu: itsMenu,
            access: itsAccess
          };
        });

      // Find Menu
      const selectedMenu = cMenu?.find((each: any) => {
        return each?.menu?.aTitle === props.menu
      })

      // Find Access Point
      const selectedAccessPoint = selectedMenu?.access?.find((each: any) => {
        return props.accessPoint?.includes(each?.accessPoint?.aTitle)
      })

      // Access Denied
      if (!selectedAccessPoint?.hasAccess) return next(new ErrorUtility('You are not authorized to access this route', 403));

      // Access Approved
      return next();
    }
  )
);

export default authorizationMiddleware;
