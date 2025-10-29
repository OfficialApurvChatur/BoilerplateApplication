import express from "express";
import brandConnection from "../../aConnection/jBrandConnection";


type listType = {
  Label: string
  request: express.Request
} 

type createType = {
  Label: string,
  request: express.Request
} 

type retrieveType = {
  Label: string
  request: express.Request
} 

type updateType = {
  Label: string,
  request: express.Request
} 

type deleteType = {
  Label: string,
  request: express.Request
} 

const emailToCompanyVariable = {
  baseModel: {
    list: ({ Label= "BaseModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "BaseModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "BaseModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "BaseModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "BaseModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  apiLogModel: {
    list: ({ Label= "APILogModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "APILogModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "APILogModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "APILogModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "APILogModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  activityLogModel: {
    list: ({ Label= "ActivityLogModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "ActivityLogModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "ActivityLogModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "ActivityLogModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "ActivityLogModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  accessPointModel: {
    list: ({ Label= "AccessPointModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AccessPointModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AccessPointModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AccessPointModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AccessPointModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  menuModel: {
    list: ({ Label= "MenuModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "MenuModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "MenuModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "MenuModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "MenuModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  permissionModel: {
    list: ({ Label= "PermissionModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "PermissionModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "PermissionModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "PermissionModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "PermissionModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  roleModel: {
    list: ({ Label= "RoleModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "RoleModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "RoleModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "RoleModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "RoleModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  userModel: {
    list: ({ Label= "UserModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "UserModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "UserModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "UserModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "UserModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  profileModel: {
    list: ({ Label= "ProfileModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "ProfileModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "ProfileModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "ProfileModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "ProfileModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  accountModel: {
    list: ({ Label= "AccountModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AccountModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AccountModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AccountModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AccountModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  signInModel: {
    list: ({ Label= "SignInModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "SignInModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "SignInModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "SignInModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "SignInModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  signUpModel: {
    list: ({ Label= "SignUpModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "SignUpModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "SignUpModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "SignUpModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "SignUpModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  signOutModel: {
    list: ({ Label= "SignOutModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "SignOutModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "SignOutModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "SignOutModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "SignOutModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  forgotPasswordModel: {
    list: ({ Label= "ForgotPasswordModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "ForgotPasswordModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "ForgotPasswordModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "ForgotPasswordModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "ForgotPasswordModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  resetPasswordModel: {
    list: ({ Label= "ResetPasswordModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "ResetPasswordModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "ResetPasswordModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "ResetPasswordModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "ResetPasswordModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  imageStorageModel: {
    list: ({ Label= "ImageStorageModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "ImageStorageModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "ImageStorageModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "ImageStorageModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "ImageStorageModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  videoStorageModel: {
    list: ({ Label= "VideoStorageModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "VideoStorageModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "VideoStorageModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "VideoStorageModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "VideoStorageModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  audioStorageModel: {
    list: ({ Label= "AudioStorageModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AudioStorageModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AudioStorageModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AudioStorageModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AudioStorageModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  staticContentModel: {
    list: ({ Label= "StaticContentModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "StaticContentModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "StaticContentModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "StaticContentModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "StaticContentModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  socialMediaContentModel: {
    list: ({ Label= "SocialMediaContentModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "SocialMediaContentModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "SocialMediaContentModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "SocialMediaContentModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "SocialMediaContentModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminHeroModel: {
    list: ({ Label= "AdminHeroModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminHeroModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminHeroModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminHeroModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminHeroModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminAboutCompanyModel: {
    list: ({ Label= "AdminAboutCompanyModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminAboutCompanyModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminAboutCompanyModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminAboutCompanyModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminAboutCompanyModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminAboutApplicationModel: {
    list: ({ Label= "AdminAboutApplicationModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminAboutApplicationModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminAboutApplicationModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminAboutApplicationModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminAboutApplicationModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminContactFormModel: {
    list: ({ Label= "AdminContactFormModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminContactFormModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminContactFormModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminContactFormModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminContactFormModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminContactInfoModel: {
    list: ({ Label= "AdminContactInfoModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminContactInfoModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminContactInfoModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminContactInfoModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminContactInfoModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminCounterModel: {
    list: ({ Label= "AdminCounterModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminCounterModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminCounterModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminCounterModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminCounterModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminServiceModel: {
    list: ({ Label= "AdminServiceModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminServiceModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminServiceModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminServiceModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminServiceModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminBranchSectionModel: {
    list: ({ Label= "AdminBranchSectionModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminBranchSectionModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminBranchSectionModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminBranchSectionModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminBranchSectionModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminBranchGroupModel: {
    list: ({ Label= "AdminBranchGroupModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminBranchGroupModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminBranchGroupModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminBranchGroupModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminBranchGroupModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminBranchModel: {
    list: ({ Label= "AdminBranchModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminBranchModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminBranchModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminBranchModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminBranchModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminProjectSectionModel: {
    list: ({ Label= "AdminProjectSectionModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminProjectSectionModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminProjectSectionModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminProjectSectionModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminProjectSectionModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminProjectGroupModel: {
    list: ({ Label= "AdminProjectGroupModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminProjectGroupModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminProjectGroupModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminProjectGroupModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminProjectGroupModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  adminProjectModel: {
    list: ({ Label= "AdminProjectModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AdminProjectModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AdminProjectModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AdminProjectModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AdminProjectModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  heroModel: {
    list: ({ Label= "HeroModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "HeroModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "HeroModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "HeroModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "HeroModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  aboutCompanyModel: {
    list: ({ Label= "AboutCompanyModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AboutCompanyModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AboutCompanyModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AboutCompanyModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AboutCompanyModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  aboutApplicationModel: {
    list: ({ Label= "AboutApplicationModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "AboutApplicationModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "AboutApplicationModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "AboutApplicationModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "AboutApplicationModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  contactFormModel: {
    list: ({ Label= "ContactFormModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "ContactFormModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "ContactFormModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "ContactFormModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "ContactFormModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  contactInfoModel: {
    list: ({ Label= "ContactInfoModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "ContactInfoModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "ContactInfoModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "ContactInfoModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "ContactInfoModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  counterModel: {
    list: ({ Label= "CounterModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "CounterModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "CounterModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "CounterModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "CounterModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  serviceModel: {
    list: ({ Label= "ServiceModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "ServiceModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "ServiceModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "ServiceModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "ServiceModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  branchSectionModel: {
    list: ({ Label= "BranchSectionModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "BranchSectionModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "BranchSectionModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "BranchSectionModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "BranchSectionModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  branchGroupModel: {
    list: ({ Label= "BranchGroupModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "BranchGroupModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "BranchGroupModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "BranchGroupModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "BranchGroupModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  branchModel: {
    list: ({ Label= "BranchModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "BranchModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "BranchModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "BranchModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "BranchModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  projectSectionModel: {
    list: ({ Label= "ProjectSectionModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "ProjectSectionModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "ProjectSectionModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "ProjectSectionModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "ProjectSectionModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  projectGroupModel: {
    list: ({ Label= "ProjectGroupModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "ProjectGroupModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "ProjectGroupModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "ProjectGroupModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "ProjectGroupModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  projectModel: {
    list: ({ Label= "ProjectModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "ProjectModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "ProjectModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "ProjectModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "ProjectModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  chatModel: {
    list: ({ Label= "ChatModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "ChatModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "ChatModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "ChatModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "ChatModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  requestModel: {
    list: ({ Label= "RequestModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "RequestModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "RequestModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "RequestModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "RequestModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
  messageModel: {
    list: ({ Label= "MessageModel", request }: listType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was listed successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    create: ({ Label= "MessageModel", request }: createType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was created successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    retrieve: ({ Label= "MessageModel", request }: retrieveType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was retrieved successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    update: ({ Label= "MessageModel", request }: updateType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was updated successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
    delete: ({ Label= "MessageModel", request }: deleteType) => {
      const ipAddress = request.ip || request.headers["x-forwarded-for"] || "Unknown IP";
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      return (
        `
          Hi Apurv,

          A ${Label} record was deleted successfully.

          🕒 Time: ${timestamp}
          🌐 IP: ${ipAddress}

          If this was you, no action is needed.
          If not, please check your account activity.

          — ${brandConnection.bBrandName} Team
        `.trim()
      )
    },
  },
};

export default emailToCompanyVariable;
