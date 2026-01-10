import fs from "fs/promises";
import path from "path";

import databaseConnection from "../aConnection/cDatabaseConnection";
import brandConnection from "../aConnection/jBrandConnection";

import { UserModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/bUserAdministration/eUserModel";
import { MenuModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/bUserAdministration/bMenuModel";
import { AccessPointModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/bUserAdministration/aAccessPointModel";
import { PermissionModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/bUserAdministration/cPermissionModel";
import { RoleModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/bUserAdministration/dRoleModel";
import { ProfileModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/bUserAdministration/fProfileModel";
import { StaticContentModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/eContentOperation/aStaticContentModel";
import { AdminHeroModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/aAdminHeroModel";
import { AdminAboutCompanyModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/bAdminAboutCompanyModel";
import { AdminAboutApplicationModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/cAdminAboutApplicationModel";
import { AdminContactFormModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/dAdminContactFormModel";
import { AdminContactInfoModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/eAdminContactInfoModel";
import { AdminCounterModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/fAdminCounterModel";
import { AdminServiceModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/gAdminServiceModel";
import { AdminBranchSectionModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/hAdminBranchSectionModel";
import { AdminBranchGroupModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/iAdminBranchGroupModel";
import { AdminBranchModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/jAdminBranchModel";
import { AdminProjectSectionModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/kAdminProjectSectionModel";
import { AdminProjectGroupModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/lAdminProjectGroupModel";
import { AdminProjectModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/fAdminLanding/mAdminProjectModel";
import { HeroModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/aHeroModel";
import { AboutCompanyModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/bAboutCompanyModel";
import { AboutApplicationModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/cAboutApplicationModel";
import { ContactFormModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/dContactFormModel";
import { ContactInfoModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/eContactInfoModel";
import { CounterModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/fCounterModel";
import { ServiceModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/gServiceModel";
import { BranchSectionModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/hBranchSectionModel";
import { BranchGroupModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/iBranchGroupModel";
import { BranchModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/jBranchModel";
import { ProjectSectionModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/kProjectSectionModel";
import { ProjectGroupModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/lProjectGroupModel";
import { ProjectModel } from "../bLove/aMCVR/aModel/aDatabaseManagement/gFrontendLanding/mProjectModel";


const markdownPath = path.join(
  process.cwd(),
  "src/cSeeder/a-beehive-static-content.md"
);

const seeder = async () => {
  try {
    await databaseConnection();

    // --- Clear previous data ---
    await AccessPointModel.deleteMany({});
    await MenuModel.deleteMany({});
    await PermissionModel.deleteMany({});
    await RoleModel.deleteMany({});
    await UserModel.deleteMany({});
    await ProfileModel.deleteMany({});

    await StaticContentModel.deleteMany({});

    await AdminHeroModel.deleteMany({});
    await AdminAboutCompanyModel.deleteMany({});
    await AdminAboutApplicationModel.deleteMany({});
    await AdminContactFormModel.deleteMany({});
    await AdminContactInfoModel.deleteMany({});
    await AdminCounterModel.deleteMany({});
    await AdminServiceModel.deleteMany({});
    await AdminBranchSectionModel.deleteMany({});
    await AdminBranchGroupModel.deleteMany({});
    await AdminBranchModel.deleteMany({});
    await AdminProjectSectionModel.deleteMany({});
    await AdminProjectGroupModel.deleteMany({});
    await AdminProjectModel.deleteMany({});

    await HeroModel.deleteMany({});
    await AboutCompanyModel.deleteMany({});
    await AboutApplicationModel.deleteMany({});
    await ContactFormModel.deleteMany({});
    await ContactInfoModel.deleteMany({});
    await CounterModel.deleteMany({});
    await ServiceModel.deleteMany({});
    await BranchSectionModel.deleteMany({});
    await BranchGroupModel.deleteMany({});
    await BranchModel.deleteMany({});
    await ProjectSectionModel.deleteMany({});
    await ProjectGroupModel.deleteMany({});
    await ProjectModel.deleteMany({});

    console.log("🗑️ Cleared DB");

    // --- Create Initial User ---
    const shraddha = await UserModel.create({
      aTitle: "Shraddha Kapoor",
      aSubtitle: "I'm using this application",
      bCreatedAt: new Date(Date.now()),
      eFirstname: "Shraddha",
      eLastname: "Kapoor",
      eEmail: `shraddha.kapoor${brandConnection.iEmailName}`,
      ePassword: "Shraddha@123",
    });

    if (shraddha) {
      const createProfile = await ProfileModel.create({
        aTitle: `Profile for ${shraddha.eEmail}`,
        bCreatedAt: new Date(Date.now()),
        bCreatedBy: shraddha._id,
        cUser: shraddha._id,
      })    
      
      await UserModel.findByIdAndUpdate(
        shraddha._id, {
          cProfile: createProfile._id,
        }, {
          new: true,
          runValidators: true,
          useFindAndMidify: false
        }
      )
    }

    console.log("✅ User 'Shraddha Kapoor' Created");

    // --- Create AccessPoint ---
    const accessPointList = ["List", "Create", "Retrieve", "Update", "Delete"];
    const accessPointDocs: any = {};

    for (const each of accessPointList) {
      const accessPointInstance = await AccessPointModel.create({
        aTitle: each,
        bCreatedAt: new Date(Date.now()),
        bCreatedBy: shraddha._id,
      });
      accessPointDocs[each] = accessPointInstance;
      console.log(`✅ AccessPoint '${each}' created`);
    }

    const accessPointIds = Object.values(accessPointDocs).map((each: any) => each._id);

    // --- Create Menu ---
    const menuTitles = [
      "Base", "APILog", "ActivityLog",
      "AccessPoint", "Menu", "Permission", "Role", "User", "Profile", "Account", 
      "SignIn", "SignUp", "SignOut", "ForgotPassword", "ResetPassword",
      "ImageStorage", "VideoStorage", "AudioStorage", 
      "StaticContent", "SocialMediaContent", 
      "AdminHero", "AdminAboutCompany", "AdminAboutApplication", "AdminContactForm", "AdminContactInfo", "AdminCounter", "AdminService", "AdminBranchSection", "AdminBranchGroup", "AdminBranch", "AdminProjectSection", "AdminProjectGroup", "AdminProject",
      "Hero", "AboutCompany", "AboutApplication", "ContactForm", "ContactInfo", "Chat", "Message", "Request", "Counter", "Service", "BranchSection", "BranchGroup", "Branch", "ProjectSection", "ProjectGroup", "Project"
    ];

    const menuDocs: any = {};

    for (const each of menuTitles) {
      const menuInstance = await MenuModel.create({
        aTitle: each,
        bCreatedAt: new Date(Date.now()),
        bCreatedBy: shraddha._id,
        cAccessPoint: accessPointIds,
      });
      menuDocs[each] = menuInstance;
      console.log(`✅ Menu '${each}' created`);
    }

    // --- Create Permission ---
    const adminPermissionInstance = await PermissionModel.create({
      aTitle: "Admin",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cMenu: Object.values(menuDocs).map((each: any) => ({
        menu: each._id,
        access: accessPointIds.map((apId: any) => ({
          accessPoint: apId,
          hasAccess: true,
        })),
      })),
    });

    const customerPermissionInstance = await PermissionModel.create({
      aTitle: "Customer",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cMenu: Object.values(menuDocs).map((each: any) => ({
        menu: each._id,
        access: Object.values(accessPointDocs).map((ap: any) => ({
          accessPoint: ap._id,
          hasAccess: ap.aTitle === "List" || ap.aTitle === "Retrieve", 
        })),
      })),
    });

    console.log("✅ Permissions Created");

    // --- Create Role ---
    const adminRoleInstance = await RoleModel.create({
      aTitle: "Admin",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cPermission: adminPermissionInstance._id,
    });

    const customerRoleInstance = await RoleModel.create({
      aTitle: "Customer",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cPermission: customerPermissionInstance._id,
    });

    console.log("✅ Roles Created");

    // --- Assign Admin Role to Shraddha ---
    await UserModel.findOneAndUpdate(
      { eEmail: `shraddha.kapoor${brandConnection.iEmailName}` },
      { 
        bCreatedBy: shraddha._id,
        cRole: adminRoleInstance._id,
      }
    );

    console.log("✅ Admin Role Assigned to Shraddha Kapoor");

    // --- Create Multiple User ---
    interface IUser {
      eFirstname: string;
      eLastname: string;
      eEmail: string;
      aTitle: string;
      aSubtitle: string;
      aDescription: string;
    }

    const userList: IUser[] = [
      { 
        eFirstname: "Aarav", eLastname: "Sharma", eEmail: `aarav.sharma${brandConnection.iEmailName}`,
        aTitle: "Welcome Aarav",
        aSubtitle: "Getting started with your workspace",
        aDescription: "Aarav is exploring the core features of the platform and setting up his personalized workspace for daily productivity."
      },
      { 
        eFirstname: "Vivaan", eLastname: "Mehta", eEmail: `vivaan.mehta${brandConnection.iEmailName}`,
        aTitle: "Vivaan’s Dashboard",
        aSubtitle: "Overview of recent activity",
        aDescription: "Vivaan’s dashboard provides insights into recent actions, updates, and performance indicators across modules."
      },
      { 
        eFirstname: "Aditya", eLastname: "Verma", eEmail: `aditya.verma${brandConnection.iEmailName}`,
        aTitle: "Aditya’s Profile Setup",
        aSubtitle: "Complete your personal details",
        aDescription: "Aditya is completing profile information to unlock advanced features and personalized recommendations."
      },
      { 
        eFirstname: "Krishna", eLastname: "Iyer", eEmail: `krishna.iyer${brandConnection.iEmailName}`,
        aTitle: "Krishna’s First Login",
        aSubtitle: "Welcome to the ecosystem",
        aDescription: "Krishna has successfully logged in and is familiarizing himself with navigation, tools, and system workflows."
      },
      { 
        eFirstname: "Arjun", eLastname: "Patel", eEmail: `arjun.patel${brandConnection.iEmailName}`,
        aTitle: "Arjun’s Activity Feed",
        aSubtitle: "Tracking progress in real time",
        aDescription: "Arjun’s activity feed displays real-time updates and helps monitor ongoing tasks and engagements."
      },

      { 
        eFirstname: "Ishaan", eLastname: "Kapoor", eEmail: `ishaan.kapoor${brandConnection.iEmailName}`,
        aTitle: "Ishaan’s Preferences",
        aSubtitle: "Customize your experience",
        aDescription: "Ishaan is adjusting preferences to tailor notifications, themes, and visibility settings."
      },
      { 
        eFirstname: "Rohan", eLastname: "Malhotra", eEmail: `rohan.malhotra${brandConnection.iEmailName}`,
        aTitle: "Rohan’s Workspace",
        aSubtitle: "Organized and efficient",
        aDescription: "Rohan’s workspace focuses on clarity and structure to enhance task execution and collaboration."
      },
      { 
        eFirstname: "Kunal", eLastname: "Joshi", eEmail: `kunal.joshi${brandConnection.iEmailName}`,
        aTitle: "Kunal’s Recent Actions",
        aSubtitle: "Review system usage",
        aDescription: "Kunal’s recent actions log helps track interactions and maintain transparency within the system."
      },
      { 
        eFirstname: "Siddharth", eLastname: "Bansal", eEmail: `siddharth.bansal${brandConnection.iEmailName}`,
        aTitle: "Siddharth’s Overview",
        aSubtitle: "Everything at a glance",
        aDescription: "Siddharth uses the overview panel to quickly assess system status, alerts, and upcoming priorities."
      },
      { 
        eFirstname: "Manav", eLastname: "Chauhan", eEmail: `manav.chauhan${brandConnection.iEmailName}`,
        aTitle: "Manav’s Task Board",
        aSubtitle: "Managing daily goals",
        aDescription: "Manav organizes tasks using the board to ensure timely completion and clear accountability."
      },

      { 
        eFirstname: "Ananya", eLastname: "Agarwal", eEmail: `ananya.agarwal${brandConnection.iEmailName}`,
        aTitle: "Ananya’s Insights",
        aSubtitle: "Understanding your data",
        aDescription: "Ananya reviews analytical insights to make informed decisions and optimize workflows."
      },
      { 
        eFirstname: "Aditi", eLastname: "Kulkarni", eEmail: `aditi.kulkarni${brandConnection.iEmailName}`,
        aTitle: "Aditi’s Notifications",
        aSubtitle: "Stay informed",
        aDescription: "Aditi monitors notifications to stay updated on system events and important messages."
      },
      { 
        eFirstname: "Pooja", eLastname: "Deshmukh", eEmail: `pooja.deshmukh${brandConnection.iEmailName}`,
        aTitle: "Pooja’s Activity Summary",
        aSubtitle: "A snapshot of engagement",
        aDescription: "Pooja’s summary highlights recent participation, changes, and interactions within the platform."
      },
      { 
        eFirstname: "Sneha", eLastname: "Rao", eEmail: `sneha.rao${brandConnection.iEmailName}`,
        aTitle: "Sneha’s Dashboard",
        aSubtitle: "Clarity and control",
        aDescription: "Sneha relies on the dashboard to maintain control over her tasks and system interactions."
      },
      { 
        eFirstname: "Kavya", eLastname: "Nair", eEmail: `kavya.nair${brandConnection.iEmailName}`,
        aTitle: "Kavya’s Workspace Setup",
        aSubtitle: "Building a productive flow",
        aDescription: "Kavya structures her workspace to align with her daily workflow and priorities."
      },

      { 
        eFirstname: "Neha", eLastname: "Singh", eEmail: `neha.singh${brandConnection.iEmailName}`,
        aTitle: "Neha’s System Access",
        aSubtitle: "Permissions and roles",
        aDescription: "Neha reviews her assigned roles and permissions to ensure proper access to platform features."
      },
      { 
        eFirstname: "Riya", eLastname: "Mishra", eEmail: `riya.mishra${brandConnection.iEmailName}`,
        aTitle: "Riya’s Onboarding",
        aSubtitle: "Starting the journey",
        aDescription: "Riya is completing onboarding steps to understand system capabilities and best practices."
      },
      { 
        eFirstname: "Tanvi", eLastname: "Gokhale", eEmail: `tanvi.gokhale${brandConnection.iEmailName}`,
        aTitle: "Tanvi’s Settings",
        aSubtitle: "Fine-tuning controls",
        aDescription: "Tanvi configures system settings to enhance usability and streamline daily interactions."
      },
      { 
        eFirstname: "Sakshi", eLastname: "Jadhav", eEmail: `sakshi.jadhav${brandConnection.iEmailName}`,
        aTitle: "Sakshi’s Activity Log",
        aSubtitle: "Maintaining transparency",
        aDescription: "Sakshi uses the activity log to review actions and maintain accountability."
      },
      { 
        eFirstname: "Isha", eLastname: "Pandey", eEmail: `isha.pandey${brandConnection.iEmailName}`,
        aTitle: "Isha’s Overview Panel",
        aSubtitle: "Quick system insights",
        aDescription: "Isha checks the overview panel for a quick understanding of current system status."
      },

      { 
        eFirstname: "Rahul", eLastname: "Yadav", eEmail: `rahul.yadav${brandConnection.iEmailName}`,
        aTitle: "Rahul’s Workflow",
        aSubtitle: "Optimizing performance",
        aDescription: "Rahul optimizes workflows to improve efficiency and reduce operational friction."
      },
      { 
        eFirstname: "Amit", eLastname: "Kumar", eEmail: `amit.kumar${brandConnection.iEmailName}`,
        aTitle: "Amit’s Daily Tasks",
        aSubtitle: "Focused execution",
        aDescription: "Amit tracks daily tasks to ensure consistent progress and clear outcomes."
      },
      { 
        eFirstname: "Nikhil", eLastname: "Rastogi", eEmail: `nikhil.rastogi${brandConnection.iEmailName}`,
        aTitle: "Nikhil’s Reports",
        aSubtitle: "Analyzing results",
        aDescription: "Nikhil reviews reports to evaluate performance metrics and identify improvement areas."
      },
      { 
        eFirstname: "Saurabh", eLastname: "Tripathi", eEmail: `saurabh.tripathi${brandConnection.iEmailName}`,
        aTitle: "Saurabh’s Insights",
        aSubtitle: "Data-driven decisions",
        aDescription: "Saurabh uses insights to support strategic planning and informed decision-making."
      },
      { 
        eFirstname: "Deepak", eLastname: "Rawat", eEmail: `deepak.rawat${brandConnection.iEmailName}`,
        aTitle: "Deepak’s Activity Review",
        aSubtitle: "Monitoring engagement",
        aDescription: "Deepak reviews engagement data to understand usage patterns and system adoption."
      },

      { 
        eFirstname: "Priya", eLastname: "Bhatt", eEmail: `priya.bhatt${brandConnection.iEmailName}`,
        aTitle: "Priya’s Dashboard",
        aSubtitle: "Balanced and intuitive",
        aDescription: "Priya’s dashboard presents information in a balanced layout for easy comprehension."
      },
      { 
        eFirstname: "Nisha", eLastname: "Khandelwal", eEmail: `nisha.khandelwal${brandConnection.iEmailName}`,
        aTitle: "Nisha’s Profile Update",
        aSubtitle: "Keeping information current",
        aDescription: "Nisha updates profile details to ensure accuracy and consistency across the platform."
      },
      { 
        eFirstname: "Megha", eLastname: "Saxena", eEmail: `megha.saxena${brandConnection.iEmailName}`,
        aTitle: "Megha’s Workspace",
        aSubtitle: "Designed for clarity",
        aDescription: "Megha’s workspace emphasizes simplicity and clarity for focused work."
      },
      { 
        eFirstname: "Pallavi", eLastname: "Kulshrestha", eEmail: `pallavi.kulshrestha${brandConnection.iEmailName}`,
        aTitle: "Pallavi’s System Overview",
        aSubtitle: "Tracking key metrics",
        aDescription: "Pallavi monitors system metrics to stay aligned with performance goals."
      },
      { 
        eFirstname: "Ritika", eLastname: "Mathur", eEmail: `ritika.mathur${brandConnection.iEmailName}`,
        aTitle: "Ritika’s Task Flow",
        aSubtitle: "Structured execution",
        aDescription: "Ritika follows a structured task flow to manage responsibilities effectively."
      },

      { 
        eFirstname: "Varun", eLastname: "Khanna", eEmail: `varun.khanna${brandConnection.iEmailName}`,
        aTitle: "Varun’s Activity Stream",
        aSubtitle: "Live system updates",
        aDescription: "Varun uses the activity stream to stay aware of ongoing changes and events."
      },
      { 
        eFirstname: "Mohit", eLastname: "Arora", eEmail: `mohit.arora${brandConnection.iEmailName}`,
        aTitle: "Mohit’s Preferences",
        aSubtitle: "Personalized controls",
        aDescription: "Mohit personalizes controls to match his working style and preferences."
      },
      { 
        eFirstname: "Harsh", eLastname: "Vardhan", eEmail: `harsh.vardhan${brandConnection.iEmailName}`,
        aTitle: "Harsh’s Performance",
        aSubtitle: "Measuring effectiveness",
        aDescription: "Harsh reviews performance indicators to assess productivity and efficiency."
      },
      { 
        eFirstname: "Akash", eLastname: "Soni", eEmail: `akash.soni${brandConnection.iEmailName}`,
        aTitle: "Akash’s Workspace",
        aSubtitle: "Built for focus",
        aDescription: "Akash structures his workspace to minimize distractions and enhance focus."
      },
      { 
        eFirstname: "Rakesh", eLastname: "Lal", eEmail: `rakesh.lal${brandConnection.iEmailName}`,
        aTitle: "Rakesh’s Activity Summary",
        aSubtitle: "Clear and concise",
        aDescription: "Rakesh’s summary presents essential activity information in a concise format."
      },

      { 
        eFirstname: "Simran", eLastname: "Kaur", eEmail: `simran.kaur${brandConnection.iEmailName}`,
        aTitle: "Simran’s Dashboard",
        aSubtitle: "Simple and effective",
        aDescription: "Simran uses a clean dashboard layout to stay organized and productive."
      },
      { 
        eFirstname: "Navneet", eLastname: "Gill", eEmail: `navneet.gill${brandConnection.iEmailName}`,
        aTitle: "Navneet’s Insights",
        aSubtitle: "Understanding engagement",
        aDescription: "Navneet analyzes engagement data to improve collaboration and usage."
      },
      { 
        eFirstname: "Jaspreet", eLastname: "Sandhu", eEmail: `jaspreet.sandhu${brandConnection.iEmailName}`,
        aTitle: "Jaspreet’s Overview",
        aSubtitle: "Monitoring progress",
        aDescription: "Jaspreet monitors progress through system overviews and task updates."
      },
      { 
        eFirstname: "Gurpreet", eLastname: "Brar", eEmail: `gurpreet.brar${brandConnection.iEmailName}`,
        aTitle: "Gurpreet’s Workflow",
        aSubtitle: "Efficient execution",
        aDescription: "Gurpreet refines workflows to ensure efficient execution and smooth operations."
      },
      { 
        eFirstname: "Harleen", eLastname: "Sidhu", eEmail: `harleen.sidhu${brandConnection.iEmailName}`,
        aTitle: "Harleen’s System Setup",
        aSubtitle: "Ready to begin",
        aDescription: "Harleen completes system setup to begin productive engagement with platform tools."
      },
    ];

    for (const each of userList) {
      const userInstance = await UserModel.create({
        ...each,
        bCreatedAt: new Date(Date.now()),
        bCreatedBy: shraddha._id,
        cRole: customerRoleInstance._id, 
        ePassword: `${each.eFirstname}@123`, 
      });

      if (userInstance) {
        const createProfile = await ProfileModel.create({
          aTitle: `Profile for ${each.eEmail}`,
          bCreatedAt: new Date(Date.now()),
          bCreatedBy: shraddha._id,
          cUser: userInstance._id,
        })    
        
        await UserModel.findByIdAndUpdate(
          userInstance._id, {
            cProfile: createProfile._id,
          }, {
            new: true,
            runValidators: true,
            useFindAndMidify: false
          }
        )
      }

      console.log(`✅ User '${each.eFirstname} ${each.eLastname}' created`);
    }

    // --- Create Static Content ---
    await StaticContentModel.create({
      aTitle: "Home Page Content",
      aDetail: await fs.readFile(markdownPath, "utf-8"),
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Static Content Created");

    // --- Create Admin Hero ---
    await AdminHeroModel.create({
      aTitle: "Beehive Corporation",
      aSubtitle: "Infinite Wonder Awaits",
      aDescription: "A proficient corporation specializing in the comprehensive lifecycle management of web applications, encompassing design, development, deployment, maintenance, and scalable solutions. ",
      aDetail: "",
      dTag: "✨ The Sigma Cluster (σC)",
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://beehive-admin.netlify.app/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://beehive-frontend.netlify.app/"
        }
      ],
      dGalleryImages: [],
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Admin Hero Created");

    // --- Create Admin About Company ---
    await AdminAboutCompanyModel.create({
      aTitle: "🎯 Truly About Company",
      aDetail: `
Beehive is the Sigma Corporation. 
This corporation consists of three organisations. These organisations are:
1) Andromeda Organisation (α Organisation)
2) Pinwheel Organisation (β Organisation)
3) Tadpole Organisation (γ Organisation)
      `,
      dTag: "truly",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminAboutCompanyModel.create({
      aTitle: "🧬 Relatively About Company",
      aDetail: `
Beehive is the Sigma Cluster. 
This cluster consists of three galaxies. These galaxies are:
1) Andromeda Galaxy (α Galaxy)
2) Pinwheel Galaxy (β Galaxy)
3) Tadpole Galaxy (γ Galaxy)
      `,
      dTag: "relatively",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Admin About Company Created");

    // --- Create Admin About Application ---
    await AdminAboutApplicationModel.create({
      aTitle: "About Backend Application",
      aSubtitle: "Discover the cutting-edge technologies powering this application.",
      aDescription: "The Backend Application is built using NodeJS and ExpressJS, forming the core API layer of the MERN stack system. It handles business logic, authentication, authorization, database interactions, and secure communication with the frontend. This service exposes RESTful APIs, manages real-time events using Socket.io (if required), integrates with MongoDB through Mongoose, and ensures optimized performance with features like Redis caching, middleware pipelines, and structured error handling. It is designed for scalability, modularity, and high availability.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminAboutApplicationModel.create({
      aTitle: "About Administration Application",
      aSubtitle: "Discover the cutting-edge technologies powering this application.",
      aDescription: "The Administration Application is a dedicated ReactJS dashboard designed for managing platform-wide data and configurations. This panel enables administrators to control users, roles, permissions, content, analytics, and operational workflows. Built with reusable React components, secure routes, and state management (Redux Toolkit / RTK Query), it offers a fast, responsive, and intuitive interface. The admin panel communicates with the backend through protected API endpoints, ensuring that sensitive operations remain secure and traceable.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });
    
    await AdminAboutApplicationModel.create({
      aTitle: "About Frontend Application",
      aSubtitle: "Discover the cutting-edge technologies powering this application.",
      aDescription: "The Frontend Application is the user-facing interface developed with ReactJS, providing a seamless, dynamic, and responsive experience. It integrates clean UI/UX design, optimized routing, and state management to render content fetched from the backend APIs. This application supports Progressive Web App (PWA) capabilities, offers fast load times through code splitting and caching strategies, and ensures smooth interactions with features like form validations, animations, and real-time updates. It focuses on delivering a polished experience to end-users across all devices.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Admin About Application Created");

    // --- Create Admin Contact Info ---
    await AdminContactInfoModel.create({
      aTitle: "Contact Us",
      aDetail: `
Beehive Contact Information  
The Sigma Cluster can be reached through the following communication channels:

1) **Email (Primary Channel)**  
   contact@beehive.corp  

2) **Phone (Direct Line)**  
   +91 98765 43210  

3) **Headquarters (Physical Address)**  
   Beehive Sigma Tower, Sector 9, Tech Valley, India
      `,
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Admin Contact Info Created");

    // --- Create Admin Service ---
    await AdminServiceModel.create({
      aTitle: "Open Source Code",
      aDescription: "Transparency and flexibility are at the core of our philosophy, which is why we provide open-source code for all our web applications. By granting you access to the source code, we empower you to customize, extend, and modify your applications to suit your evolving needs. Whether you're a developer looking to fine-tune the code or a business owner seeking greater control over your digital assets, our commitment to open-source ensures that you have the freedom and flexibility to shape your online presence according to your vision.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminServiceModel.create({
      aTitle: "Strong Backend Support",
      aDescription: "Behind every successful web application lies a robust and reliable backend infrastructure, and that's where we excel. Our team of experienced developers is committed to delivering top-notch backend support to ensure the seamless operation and performance of your applications. From designing scalable architectures to implementing advanced security measures and optimizing for speed and efficiency, we've got you covered. With our unwavering backend support, you can trust that your applications are in capable hands, allowing you to focus on innovation and growth.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminServiceModel.create({
      aTitle: "Free Administration Panel",
      aDescription: "Simplify the management of your web applications with our intuitive and user-friendly administration panel, provided to you at no additional cost. Our panel empowers you to effortlessly oversee various aspects of your application, from content updates and user management to analytics and performance monitoring. With its streamlined interface and powerful features, you can stay in control of your online presence without the hassle, enabling you to focus on what matters most—growing your business.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminServiceModel.create({
      aTitle: "Custom Web Applications",
      aDescription: "Our team specializes in crafting bespoke web applications tailored to your unique needs and requirements. From conceptualization to deployment, we work closely with you to understand your vision and deliver a fully customized solution that aligns perfectly with your business objectives. Whether you need an e-commerce platform, a customer relationship management (CRM) system, or a complex data analytics tool, we have the expertise to bring your ideas to life with precision and creativity.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Admin Service Created");

    // --- Create Admin Counter ---
    await AdminCounterModel.create({
      aTitle: "21+",
      aSubtitle: "Admin Applications Published",
      aDescription: "Custom-made panels for easy management. Tailored solutions to handle tasks efficiently. Trusted track record in deployment.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminCounterModel.create({
      aTitle: "21+",
      aSubtitle: "Backend Applications Established",
      aDescription: "Robust systems for data processing. Established solutions to support your application's functionality. Proven reliability in deployment.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminCounterModel.create({
      aTitle: "21+",
      aSubtitle: "Frontend Applications Deployed",
      aDescription: "User-friendly interfaces for seamless interaction. Deployed applications designed to engage and satisfy users. Demonstrated success in deployment.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Admin Counter Created");

    // --- Create Admin Branch ---
    const adminBranchInstance1 = await AdminBranchModel.create({
      aTitle: "Acrux Enterprise",
      aSubtitle: "Feeling Ambitions, Igniting Growth",
      aDescription: "A proficient enterprise specializing in crafting sophisticated development tools tailored for diverse web applications, under Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    const adminBranchInstance2 = await AdminBranchModel.create({
      aTitle: "Anser Enterprise",
      aSubtitle: "Building Bridges, Creating Values",
      aDescription: "A proficient enterprise specializing in crafting sophisticated communication tools tailored for diverse web applications, under Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    const adminBranchInstance3 = await AdminBranchModel.create({
      aTitle: "Aquila Enterprise",
      aSubtitle: "Elevating Success Together",
      aDescription: "A proficient organization specializing in developing bespoke web applications for clients with Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    const adminBranchInstance4 = await AdminBranchModel.create({
      aTitle: "Bellatrix Enterprise",
      aSubtitle: "Navigating Beyond Horizon",
      aDescription: "A proficient organization specializing in developing bespoke web applications for fostering personal innovation with Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    const adminBranchInstance5 = await AdminBranchModel.create({
      aTitle: "Capella Enterprise",
      aSubtitle: "Innovating Bright Stars",
      aDescription: "A proficient organization specializing in developing bespoke web applications for engaging in collaborative projects with Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    console.log("✅ Admin Branch Created");

    // --- Create Admin Branch Group ---
    const adminBranchGroupInstance1 = await AdminBranchGroupModel.create({
      aTitle: "Andromeda Organisation",
      aSubtitle: "Where Vision Meets Velocity",
      aDescription: "A proficient organization specializing in crafting sophisticated development and communication tools tailored for diverse web applications, under Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cBranches: [
        adminBranchInstance1._id,
        adminBranchInstance2._id,
      ],
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    const adminBranchGroupInstance2 = await AdminBranchGroupModel.create({
      aTitle: "Pinwheel Organisation",
      aSubtitle: "Turning Compassion Into Action",
      aDescription: "A proficient organization specializing in crafting landing web applications tailored for Beehive Corporation, its affiliates, and their enterprises, ensuring optimal digital presence and functionality.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cBranches: [  ],
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    const adminBranchGroupInstance3 = await AdminBranchGroupModel.create({
      aTitle: "Tadpole Organisation",
      aSubtitle: "Where Vision Meets Velocity",
      aDescription: "A proficient organization specializing in developing bespoke web applications for clients, fostering personal innovation, and engaging in collaborative projects with Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cBranches: [
        adminBranchInstance3._id,
        adminBranchInstance4._id,
        adminBranchInstance5._id,
      ],
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    console.log("✅ Admin Branch Group Created");
    
    // --- Create Admin Branch Section ---
    await AdminBranchSectionModel.create({
      aTitle: "Beehive Corporation",
      aSubtitle: "Infinite Wonder Awaits",
      aDescription: "A proficient corporation specializing in the comprehensive lifecycle management of web applications, encompassing design, development, deployment, maintenance, and scalable solutions.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cBranchGroups: [
        adminBranchGroupInstance1._id,
        adminBranchGroupInstance2._id,
        adminBranchGroupInstance3._id,
      ],
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });
    
    console.log("✅ Admin Branch Section Created");
    
    // --- Create Hero ---
    await HeroModel.create({
      aTitle: "Beehive Corporation",
      aSubtitle: "Infinite Wonder Awaits",
      aDescription: "A proficient corporation specializing in the comprehensive lifecycle management of web applications, encompassing design, development, deployment, maintenance, and scalable solutions. ",
      aDetail: "",
      dTag: "✨ The Sigma Cluster (σC)",
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://beehive-admin.netlify.app/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://beehive-frontend.netlify.app/"
        }
      ],
      dGalleryImages: [],
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Hero Created");

    // --- Create About Company ---
    await AboutCompanyModel.create({
      aTitle: "🎯 Truly About Company",
      aDetail: `
Beehive is the Sigma Corporation. 
This corporation consists of three organisations. These organisations are:
1) Andromeda Organisation (α Organisation)
2) Pinwheel Organisation (β Organisation)
3) Tadpole Organisation (γ Organisation)
      `,
      dTag: "truly",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AboutCompanyModel.create({
      aTitle: "🧬 Relatively About Company",
      aDetail: `
Beehive is the Sigma Cluster. 
This cluster consists of three galaxies. These galaxies are:
1) Andromeda Galaxy (α Galaxy)
2) Pinwheel Galaxy (β Galaxy)
3) Tadpole Galaxy (γ Galaxy)
      `,
      dTag: "relatively",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ About Company Created");

    // --- Create About Application ---
    await AboutApplicationModel.create({
      aTitle: "About Backend Application",
      aSubtitle: "Discover the cutting-edge technologies powering this application.",
      aDescription: "The Backend Application is built using NodeJS and ExpressJS, forming the core API layer of the MERN stack system. It handles business logic, authentication, authorization, database interactions, and secure communication with the frontend. This service exposes RESTful APIs, manages real-time events using Socket.io (if required), integrates with MongoDB through Mongoose, and ensures optimized performance with features like Redis caching, middleware pipelines, and structured error handling. It is designed for scalability, modularity, and high availability.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AboutApplicationModel.create({
      aTitle: "About Administration Application",
      aSubtitle: "Discover the cutting-edge technologies powering this application.",
      aDescription: "The Administration Application is a dedicated ReactJS dashboard designed for managing platform-wide data and configurations. This panel enables administrators to control users, roles, permissions, content, analytics, and operational workflows. Built with reusable React components, secure routes, and state management (Redux Toolkit / RTK Query), it offers a fast, responsive, and intuitive interface. The admin panel communicates with the backend through protected API endpoints, ensuring that sensitive operations remain secure and traceable.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });
    
    await AboutApplicationModel.create({
      aTitle: "About Frontend Application",
      aSubtitle: "Discover the cutting-edge technologies powering this application.",
      aDescription: "The Frontend Application is the user-facing interface developed with ReactJS, providing a seamless, dynamic, and responsive experience. It integrates clean UI/UX design, optimized routing, and state management to render content fetched from the backend APIs. This application supports Progressive Web App (PWA) capabilities, offers fast load times through code splitting and caching strategies, and ensures smooth interactions with features like form validations, animations, and real-time updates. It focuses on delivering a polished experience to end-users across all devices.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ About Application Created");

    // --- Create Contact Info ---
    await ContactInfoModel.create({
      aTitle: "Contact Us",
      aDetail: `
Beehive Contact Information  
The Sigma Cluster can be reached through the following communication channels:

1) **Email (Primary Channel)**  
   contact@beehive.corp  

2) **Phone (Direct Line)**  
   +91 98765 43210  

3) **Headquarters (Physical Address)**  
   Beehive Sigma Tower, Sector 9, Tech Valley, India
      `,
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Contact Info Created");

    // --- Create Service ---
    await ServiceModel.create({
      aTitle: "Open Source Code",
      aDescription: "Transparency and flexibility are at the core of our philosophy, which is why we provide open-source code for all our web applications. By granting you access to the source code, we empower you to customize, extend, and modify your applications to suit your evolving needs. Whether you're a developer looking to fine-tune the code or a business owner seeking greater control over your digital assets, our commitment to open-source ensures that you have the freedom and flexibility to shape your online presence according to your vision.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await ServiceModel.create({
      aTitle: "Strong Backend Support",
      aDescription: "Behind every successful web application lies a robust and reliable backend infrastructure, and that's where we excel. Our team of experienced developers is committed to delivering top-notch backend support to ensure the seamless operation and performance of your applications. From designing scalable architectures to implementing advanced security measures and optimizing for speed and efficiency, we've got you covered. With our unwavering backend support, you can trust that your applications are in capable hands, allowing you to focus on innovation and growth.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await ServiceModel.create({
      aTitle: "Free Administration Panel",
      aDescription: "Simplify the management of your web applications with our intuitive and user-friendly administration panel, provided to you at no additional cost. Our panel empowers you to effortlessly oversee various aspects of your application, from content updates and user management to analytics and performance monitoring. With its streamlined interface and powerful features, you can stay in control of your online presence without the hassle, enabling you to focus on what matters most—growing your business.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await ServiceModel.create({
      aTitle: "Custom Web Applications",
      aDescription: "Our team specializes in crafting bespoke web applications tailored to your unique needs and requirements. From conceptualization to deployment, we work closely with you to understand your vision and deliver a fully customized solution that aligns perfectly with your business objectives. Whether you need an e-commerce platform, a customer relationship management (CRM) system, or a complex data analytics tool, we have the expertise to bring your ideas to life with precision and creativity.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Service Created");

    // --- Create Counter ---
    await CounterModel.create({
      aTitle: "21+",
      aSubtitle: "Admin Applications Published",
      aDescription: "Custom-made panels for easy management. Tailored solutions to handle tasks efficiently. Trusted track record in deployment.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await CounterModel.create({
      aTitle: "21+",
      aSubtitle: "Backend Applications Established",
      aDescription: "Robust systems for data processing. Established solutions to support your application's functionality. Proven reliability in deployment.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await CounterModel.create({
      aTitle: "21+",
      aSubtitle: "Frontend Applications Deployed",
      aDescription: "User-friendly interfaces for seamless interaction. Deployed applications designed to engage and satisfy users. Demonstrated success in deployment.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Counter Created");

    // --- Create Branch ---
    const branchInstance1 = await BranchModel.create({
      aTitle: "Acrux Enterprise",
      aSubtitle: "Feeling Ambitions, Igniting Growth",
      aDescription: "A proficient enterprise specializing in crafting sophisticated development tools tailored for diverse web applications, under Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    const branchInstance2 = await BranchModel.create({
      aTitle: "Anser Enterprise",
      aSubtitle: "Building Bridges, Creating Values",
      aDescription: "A proficient enterprise specializing in crafting sophisticated communication tools tailored for diverse web applications, under Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    const branchInstance3 = await BranchModel.create({
      aTitle: "Aquila Enterprise",
      aSubtitle: "Elevating Success Together",
      aDescription: "A proficient organization specializing in developing bespoke web applications for clients with Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    const branchInstance4 = await BranchModel.create({
      aTitle: "Bellatrix Enterprise",
      aSubtitle: "Navigating Beyond Horizon",
      aDescription: "A proficient organization specializing in developing bespoke web applications for fostering personal innovation with Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    const branchInstance5 = await BranchModel.create({
      aTitle: "Capella Enterprise",
      aSubtitle: "Innovating Bright Stars",
      aDescription: "A proficient organization specializing in developing bespoke web applications for engaging in collaborative projects with Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    console.log("✅ Branch Created");

    // --- Create Branch Group ---
    const branchGroupInstance1 = await BranchGroupModel.create({
      aTitle: "Andromeda Organisation",
      aSubtitle: "Where Vision Meets Velocity",
      aDescription: "A proficient organization specializing in crafting sophisticated development and communication tools tailored for diverse web applications, under Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cBranches: [
        branchInstance1._id,
        branchInstance2._id,
      ],
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    const branchGroupInstance2 = await BranchGroupModel.create({
      aTitle: "Pinwheel Organisation",
      aSubtitle: "Turning Compassion Into Action",
      aDescription: "A proficient organization specializing in crafting landing web applications tailored for Beehive Corporation, its affiliates, and their enterprises, ensuring optimal digital presence and functionality.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cBranches: [  ],
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    const branchGroupInstance3 = await BranchGroupModel.create({
      aTitle: "Tadpole Organisation",
      aSubtitle: "Where Vision Meets Velocity",
      aDescription: "A proficient organization specializing in developing bespoke web applications for clients, fostering personal innovation, and engaging in collaborative projects with Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cBranches: [
        branchInstance3._id,
        branchInstance4._id,
        branchInstance5._id,
      ],
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });

    console.log("✅ Branch Group Created");
    
    // --- Create Branch Section ---
    await BranchSectionModel.create({
      aTitle: "Beehive Corporation",
      aSubtitle: "Infinite Wonder Awaits",
      aDescription: "A proficient corporation specializing in the comprehensive lifecycle management of web applications, encompassing design, development, deployment, maintenance, and scalable solutions.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cBranchGroups: [
        branchGroupInstance1._id,
        branchGroupInstance2._id,
        branchGroupInstance3._id,
      ],
      dSocialLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "X (Twitter)",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Threads",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "LinkedIn",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "GitHub",
          bLinkURL: "https://www.google.com/"
        }
      ],
      dWebLinks: [
        {
          aLinkTitle: "Visit Administration",
          bLinkURL: "https://www.google.com/"
        },
        {
          aLinkTitle: "Visit Application",
          bLinkURL: "https://www.google.com/"
        }
      ],
    });
    
    console.log("✅ Branch Section Created");

    process.exit(0);

  } catch (error) {
    console.error("❌ Permission seeding failed:", error);
    process.exit(1);
  }
};

seeder();

