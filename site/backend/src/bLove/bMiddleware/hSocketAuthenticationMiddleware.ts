import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';

import ErrorUtility from "../cUtility/aErrorUtility";

import { UserModel } from '../aMCVR/aModel/admin/bUserAdministration/dUserModel';


const socketAuthenticationMiddleware = async (socket: any, next: any) => {
  try {
    // Get Token from Cookie
    const { MAIN_AUTHENTICATION_TOKEN: token } = socket.request.cookies;

    // Not Found
    if (!token || token === "j:null") {
      return next(new ErrorUtility("Please login to access this resource", 401));
    }

    // Decode Token 
    const decodedData: JwtPayload | string = jsonwebtoken.verify(
      token,
      "THIS_IS_SOME_SECRET_KEY"
    );

    // Ensure decodedData is a JwtPayload and has an id
    let userId: string | undefined;
    if (typeof decodedData !== 'string' && decodedData.id) {
      userId = decodedData.id as string;
    } else {
      return next(new ErrorUtility("Invalid token", 401));
    }
    
    // Retrieve User
    const user = await UserModel.findById(userId);

    // console.log("Helllo...", user?.eEmail)

    if (!user) {
      return next(new ErrorUtility("User is removed", 401));
    }

    // Save User in Socket Request
    socket.user = user;

    return next();

  } catch (err) {
    console.error("Socket authentication error:", err);
    return next(new ErrorUtility("Socket authentication error...", 401));
  }
};

export default socketAuthenticationMiddleware;
