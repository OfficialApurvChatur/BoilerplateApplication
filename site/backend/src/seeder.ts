import databaseConnection from "./aConnection/cDatabaseConnection";
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
      eEmail: "lucky.guy@boilerplate.com",
      ePassword: "Lucky@123",
    });
    console.log("✅ User 'Lucky Guy' created");

    const shraddha = await UserModel.create({
      eFirstname: "Shraddha",
      eLastname: "Kapoor",
      eEmail: "shraddha.kapoor@boilerplate.com",
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
      { eEmail: "lucky.guy@boilerplate.com" },
      { cRole: adminRole._id }
    );

    await UserModel.findOneAndUpdate(
      { eEmail: "shraddha.kapoor@boilerplate.com" },
      { cRole: adminRole._id }
    );

    console.log("✅ Admin role assigned to Lucky Guy and Shraddha Kapoor");

    // --- Create Multiple Users ---
    const userList = [
      { eFirstname: "Ashlesha", eLastname: "Wase", eEmail: "ashlesha.wase@boilerplate.com" },
      { eFirstname: "Anisha", eLastname: "Wase", eEmail: "anisha.wase@boilerplate.com" },
      { eFirstname: "Kirti", eLastname: "Turkar", eEmail: "kirti.turkar@boilerplate.com" },
      { eFirstname: "Rashi", eLastname: "Suryavanshi", eEmail: "rashi.suryavanshi@boilerplate.com" },
      { eFirstname: "Shivani", eLastname: "Dangore", eEmail: "shivani.dangore@boilerplate.com" },
      { eFirstname: "Priti", eLastname: "Bokade", eEmail: "priti.bokade@boilerplate.com" },
      { eFirstname: "Sunaina", eLastname: "Jaiswal", eEmail: "sunaina.jaiswal@boilerplate.com" },
      { eFirstname: "Sharanya", eLastname: "Palli", eEmail: "sharanya.palli@boilerplate.com" },
      { eFirstname: "Mayuri", eLastname: "Sangidwar", eEmail: "mayuri.sangidwar@boilerplate.com" },
      { eFirstname: "Mayuri", eLastname: "Dhurve", eEmail: "mayuri.dhurve@boilerplate.com" },
      { eFirstname: "Saloni", eLastname: "Meshram", eEmail: "saloni.meshram@boilerplate.com" },
      { eFirstname: "Rama", eLastname: "Mitkari", eEmail: "rama.mitkari@boilerplate.com" },
      { eFirstname: "Anushree", eLastname: "Mandape", eEmail: "anushree.mandape@boilerplate.com" },
      { eFirstname: "Neha", eLastname: "Chourasia", eEmail: "neha.chourasia@boilerplate.com" },
      { eFirstname: "Geeta", eLastname: "Kulkarni", eEmail: "geeta.kulkarni@boilerplate.com" },
      { eFirstname: "Nayan", eLastname: "Choudhari", eEmail: "nayan.choudhari@boilerplate.com" },
      { eFirstname: "Golden", eLastname: "Bhringree", eEmail: "golden.bhringree@boilerplate.com" },
      { eFirstname: "Hema", eLastname: "Kalsha", eEmail: "hema.kalsha@boilerplate.com" },
      { eFirstname: "Ashi", eLastname: "Jain", eEmail: "ashi.jain@boilerplate.com" },
      { eFirstname: "Kamini", eLastname: "Patel", eEmail: "kamini.patel@boilerplate.com" },
      { eFirstname: "Kanak", eLastname: "Kshirsagar", eEmail: "kanak.kshirsagar@boilerplate.com" },
      { eFirstname: "Rutuja", eLastname: "Bhoyar", eEmail: "rutuja.bhoyar@boilerplate.com" },
      { eFirstname: "Dhruvika", eLastname: "Khinvasara", eEmail: "dhruvika.khinvasara@boilerplate.com" },

      // Newly added users
      { eFirstname: "Shilpa", eLastname: "Awale", eEmail: "shilpa.awale@boilerplate.com" },
      { eFirstname: "Swati", eLastname: "Patil", eEmail: "swati.patil@boilerplate.com" },
      { eFirstname: "Rutuja", eLastname: "Pethe", eEmail: "rutuja.pethe@boilerplate.com" },
      { eFirstname: "Shruti", eLastname: "Gupta", eEmail: "shruti.gupta@boilerplate.com" },
      { eFirstname: "Charushila", eLastname: "Sahare", eEmail: "charushila.sahare@boilerplate.com" },
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

