import databaseConnection from "./aConnection/cDatabaseConnection";
import brandConnection from "./aConnection/jBrandConnection";
import { UserModel } from "./bLove/aMCVR/aModel/aDatabaseManagement/bUserAdministration/eUserModel";
import { MenuModel } from "./bLove/aMCVR/aModel/aDatabaseManagement/bUserAdministration/bMenuModel";
import { AccessPointModel } from "./bLove/aMCVR/aModel/aDatabaseManagement/bUserAdministration/aAccessPointModel";
import { PermissionModel } from "./bLove/aMCVR/aModel/aDatabaseManagement/bUserAdministration/cPermissionModel";
import { RoleModel } from "./bLove/aMCVR/aModel/aDatabaseManagement/bUserAdministration/dRoleModel";

const seeder = async () => {
  try {
    await databaseConnection();

    // --- Clear previous data ---
    await UserModel.deleteMany({});
    await MenuModel.deleteMany({});
    await AccessPointModel.deleteMany({});
    await PermissionModel.deleteMany({});
    await RoleModel.deleteMany({});
    console.log("🗑️ Cleared Users, Menus, AccessPoints, Permissions, Roles");

    // --- Create User ---
    const user = await UserModel.create({
      eFirstname: "Lucky",
      eLastname: "Guy",
      eEmail: `lucky.guy${brandConnection.iEmailName}`,
      ePassword: "Lucky@123",
    });
    console.log("✅ User 'Lucky Guy' created");

    const shraddha = await UserModel.create({
      eFirstname: "Shraddha",
      eLastname: "Kapoor",
      eEmail: `shraddha.kapoor${brandConnection.iEmailName}`,
      ePassword: "Shraddha@123",
    });
    console.log("✅ User 'Shraddha Kapoor' created");

    // --- Create AccessPoints ---
    const accessPoints = ["List", "Create", "Retrieve", "Update", "Delete"];
    const accessPointDocs: any = {};

    for (const title of accessPoints) {
      const ap = await AccessPointModel.create({
        aTitle: title,
        aSlug: title.toLowerCase(),
        aStatus: true,
        bCreatedBy: user._id,
      });
      accessPointDocs[title] = ap;
      console.log(`✅ AccessPoint '${title}' created`);
    }

    const accessPointIds = Object.values(accessPointDocs).map((ap: any) => ap._id);

    // --- Create Menus ---
    const menuTitles = [
      "Base", "APILog", "ActivityLog", "AccessPoint", "Menu", "Permission", "Role",
      "User", "Profile", "Account", "SignIn", "SignUp", "SignOut",
      "ForgotPassword", "ResetPassword", "ImageStorage", "VideoStorage",
      "StaticContent", "SocialMediaContent",
      "AdminHero", "AdminAboutCompany", "AdminAboutApplication", "AdminContactForm", "AdminContactInfo",
      "Hero", "AboutCompany", "AboutApplication", "ContactForm", "ContactInfo"
    ];

    const menuDocs: any = {};

    for (const title of menuTitles) {
      const menu = await MenuModel.create({
        aTitle: title,
        aSlug: title.toLowerCase().replace(/\s+/g, "-"),
        aStatus: true,
        bCreatedBy: user._id,
        cAccessPoint: accessPointIds,
      });
      menuDocs[title] = menu;
      console.log(`✅ Menu '${title}' created`);
    }

    // --- Create Admin Permissions (all access points) ---
    const adminPermissions = await PermissionModel.create({
      aTitle: "Admin",
      aSlug: "admin",
      aStatus: true,
      bCreatedBy: user._id,
      cMenu: Object.values(menuDocs).map((menu: any) => ({
        menu: menu._id,
        access: accessPointIds.map((apId: any) => ({
          accessPoint: apId,
          hasAccess: true,
        })),
      })),
    });
    console.log("✅ Admin Permissions created");

    // --- Create Customer Permissions (List + Retrieve true, others false) ---
    const customerPermissions = await PermissionModel.create({
      aTitle: "Customer",
      aSlug: "customer",
      aStatus: true,
      bCreatedBy: user._id,
      cMenu: Object.values(menuDocs).map((menu: any) => ({
        menu: menu._id,
        access: Object.values(accessPointDocs).map((ap: any) => ({
          accessPoint: ap._id,
          hasAccess: ap.aTitle === "List" || ap.aTitle === "Retrieve", // true only for List & Retrieve
        })),
      })),
    });
    console.log("✅ Customer Permissions created");

    // --- Create Roles ---
    const adminRole = await RoleModel.create({
      aTitle: "Admin",
      bCreatedBy: user._id,
      cPermission: adminPermissions._id,
    });

    const customerRole = await RoleModel.create({
      aTitle: "Customer",
      bCreatedBy: user._id,
      cPermission: customerPermissions._id,
    });

    console.log("✅ Roles created");

    // --- Assign Admin role to users using findOneAndUpdate ---
    await UserModel.findOneAndUpdate(
      { eEmail: `lucky.guy${brandConnection.iEmailName}` },
      { cRole: adminRole._id }
    );

    await UserModel.findOneAndUpdate(
      { eEmail: `shraddha.kapoor${brandConnection.iEmailName}` },
      { cRole: adminRole._id }
    );

    console.log("✅ Admin role assigned to Lucky Guy and Shraddha Kapoor");

    // --- Create Multiple Users ---
    const userList = [
      { 
        eFirstname: "Ashlesha", 
        eLastname: "Wase", 
        eEmail: `ashlesha.wase${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Anisha", 
        eLastname: "Wase", 
        eEmail: `anisha.wase${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Kirti", 
        eLastname: "Turkar", 
        eEmail: `kirti.turkar${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Rashi", 
        eLastname: "Suryavanshi", 
        eEmail: `rashi.suryavanshi${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Shivani", 
        eLastname: "Dangore", 
        eEmail: `shivani.dangore${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Priti", 
        eLastname: "Bokade", 
        eEmail: `priti.bokade${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Sunaina", 
        eLastname: "Jaiswal", 
        eEmail: `sunaina.jaiswal${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Sharanya", 
        eLastname: "Palli", 
        eEmail: `sharanya.palli${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Mayuri", 
        eLastname: "Sangidwar", 
        eEmail: `mayuri.sangidwar${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Mayuri", 
        eLastname: "Dhurve", 
        eEmail: `mayuri.dhurve${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Saloni", 
        eLastname: "Meshram", 
        eEmail: `saloni.meshram${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Rama", 
        eLastname: "Mitkari", 
        eEmail: `rama.mitkari${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Anushree", 
        eLastname: "Mandape", 
        eEmail: `anushree.mandape${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Neha", 
        eLastname: "Chourasia", 
        eEmail: `neha.chourasia${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Geeta", 
        eLastname: "Kulkarni", 
        eEmail: `geeta.kulkarni${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Nayan", 
        eLastname: "Choudhari", 
        eEmail: `nayan.choudhari${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Golden", 
        eLastname: "Bhringree", 
        eEmail: `golden.bhringree${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Hema", 
        eLastname: "Kalsha", 
        eEmail: `hema.kalsha${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Ashi", 
        eLastname: "Jain", 
        eEmail: `ashi.jain${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Kamini", 
        eLastname: "Patel", 
        eEmail: `kamini.patel${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Kanak", 
        eLastname: "Kshirsagar", 
        eEmail: `kanak.kshirsagar${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Rutuja", 
        eLastname: "Bhoyar", 
        eEmail: `rutuja.bhoyar${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Dhruvika", 
        eLastname: "Khinvasara", 
        eEmail: `dhruvika.khinvasara${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Shilpa", 
        eLastname: "Awale", 
        eEmail: `shilpa.awale${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Swati", 
        eLastname: "Patil", 
        eEmail: `swati.patil${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Rutuja", 
        eLastname: "Pethe", 
        eEmail: `rutuja.pethe${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Shruti", 
        eLastname: "Gupta", 
        eEmail: `shruti.gupta${brandConnection.iEmailName}` 
      },
      { 
        eFirstname: "Charushila", 
        eLastname: "Sahare", 
        eEmail: `charushila.sahare${brandConnection.iEmailName}` 
      },
    ];

    for (const u of userList) {
      await UserModel.create({
        ...u,
        ePassword: `${u.eFirstname}@123`, // ✅ Password = Firstname@123
        cRole: customerRole._id,          // ✅ Assign Customer role
      });
      console.log(`✅ User '${u.eFirstname} ${u.eLastname}' created`);
    }

    process.exit(0);

  } catch (error) {
    console.error("❌ Permission seeding failed:", error);
    process.exit(1);
  }
};

seeder();

