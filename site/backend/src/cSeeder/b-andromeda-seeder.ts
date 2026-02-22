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
  "src/cSeeder/b-andromeda-static-content.md"
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
      aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
      aDescription: "Dreamer. Coffee lover. Believer in kindness and late-night conversations. Trying to collect moments, not things. If you love dogs and good food, we’ll get along just fine.",
      aDetail: "I’m a 25-year-old professional currently working in the marketing field and based in Mumbai. I consider myself friendly, optimistic, and family-oriented. In my free time, I enjoy reading, traveling, trying new cafés, and spending quality time with close friends. I value honesty, kindness, and meaningful conversations. I’m looking for someone mature, understanding, and ambitious, who believes in mutual respect and growing together in life.",
      bCreatedAt: new Date(Date.now()),
      dAddress: {
        aLane: "5th Cross Lane",
        bStreet: "MG Road",
        cCity: "Mumbai",
        dState: "Maharashtra",
        eCountry: "India",
        fPinCode: "400069",
      },
      dLinks: [
        {
          aLinkTitle: "Instagram",
          bLinkURL: "https://www.instagram.com/shraddhakapoor/",
        },
        {
          aLinkTitle: "X",
          bLinkURL: "https://x.com/ShraddhaKapoor",
        },
        {
          aLinkTitle: "Linkedin",
          bLinkURL: "https://www.linkedin.com/posts/shraddha-kapoor-6a9228380_for-a-while-now-ive-felt-the-urge-to-share-activity-7365306712066560000-iKZR/?utm_source=chatgpt.com",
        }
      ],
      eFirstname: "Shraddha",
      eLastname: "Kapoor",
      eEmail: `shraddha.kapoor${brandConnection.iEmailName}`,
      ePassword: "Shraddha@123",
      eMobile: "9146504664"
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

      aDetail: string;

      dAddress: {
        aLane: string;
        bStreet: string;
        cCity: string;
        dState: string;
        eCountry: string;
        fPinCode: string;
      };

      dLinks: {
        aLinkTitle: string;
        bLinkURL: string;
      }[];
    }

    const userList: IUser[] = [
      { 
        eFirstname: "Aarav", eLastname: "Sharma", eEmail: `aarav.sharma${brandConnection.iEmailName}`,
        aTitle: "Welcome Aarav",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Aarav is exploring the core features of the platform and setting up his personalized workspace for daily productivity.",
        aDetail: "I’m a working professional who enjoys maintaining a healthy balance between career and personal life. I value sincerity, open communication, and continuous self-improvement. In my free time, I like exploring new places, reading, and staying active. I’m looking for someone kind, grounded, and supportive to share meaningful experiences with.",
        dAddress: {
          aLane: "Sector 18",
          bStreet: "Noida Main Road",
          cCity: "Noida",
          dState: "Uttar Pradesh",
          eCountry: "India",
          fPinCode: "201301",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/taylorswift/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/taylorswift13" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/taylor-swift/" }
        ],
      },
      { 
        eFirstname: "Vivaan", eLastname: "Mehta", eEmail: `vivaan.mehta${brandConnection.iEmailName}`,
        aTitle: "Vivaan’s Dashboard",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Vivaan’s dashboard provides insights into recent actions, updates, and performance indicators across modules.",
        aDetail: "I consider myself easygoing, practical, and focused on personal growth. I enjoy simple pleasures like good conversations, music, and outdoor activities. Family and close friendships mean a lot to me. I’m hoping to meet someone genuine, understanding, and positive-minded for a long-term connection.",
        dAddress: {
          aLane: "Park Street",
          bStreet: "Camac Road",
          cCity: "Kolkata",
          dState: "West Bengal",
          eCountry: "India",
          fPinCode: "700016",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/selenagomez/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/selenagomez" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/selena-gomez/" }
        ],
      },
      { 
        eFirstname: "Aditya", eLastname: "Verma", eEmail: `aditya.verma${brandConnection.iEmailName}`,
        aTitle: "Aditya’s Profile Setup",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Aditya is completing profile information to unlock advanced features and personalized recommendations.",
        aDetail: "I am a curious and ambitious individual who believes in learning something new every day. I enjoy traveling, trying different cuisines, and spending time in nature. I value honesty and mutual respect and would love to connect with someone who shares similar outlooks on life.",
        dAddress: {
          aLane: "Indiranagar 2nd Stage",
          bStreet: "100 Feet Road",
          cCity: "Bengaluru",
          dState: "Karnataka",
          eCountry: "India",
          fPinCode: "560038",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/arianagrande/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/ArianaGrande" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/ariana-grande/" }
        ],
      },
      { 
        eFirstname: "Krishna", eLastname: "Iyer", eEmail: `krishna.iyer${brandConnection.iEmailName}`,
        aTitle: "Krishna’s First Login",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Krishna has successfully logged in and is familiarizing himself with navigation, tools, and system workflows.",
        aDetail: "I’m a calm and optimistic person who values stability and meaningful relationships. My interests include fitness, movies, and exploring creative hobbies. I believe in supporting each other’s dreams and growing together. Looking for someone thoughtful and mature to build a future with.",
        dAddress: {
          aLane: "Anna Nagar",
          bStreet: "2nd Avenue",
          cCity: "Chennai",
          dState: "Tamil Nadu",
          eCountry: "India",
          fPinCode: "600040",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/beyonce/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/Beyonce" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/beyonce/" }
        ],
      },
      { 
        eFirstname: "Arjun", eLastname: "Patel", eEmail: `arjun.patel${brandConnection.iEmailName}`,
        aTitle: "Arjun’s Activity Feed",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Arjun’s activity feed displays real-time updates and helps monitor ongoing tasks and engagements.",
        aDetail: "I enjoy living a balanced lifestyle that includes work, hobbies, and quality time with loved ones. I appreciate good humor, kindness, and authenticity. I’m hoping to meet someone responsible, caring, and open-minded who believes in partnership and teamwork.",
        dAddress: {
          aLane: "Banjara Hills",
          bStreet: "Road No 12",
          cCity: "Hyderabad",
          dState: "Telangana",
          eCountry: "India",
          fPinCode: "500034",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/kimkardashian/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/KimKardashian" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/kim-kardashian/" }
        ],
      },

      { 
        eFirstname: "Ishaan", eLastname: "Kapoor", eEmail: `ishaan.kapoor${brandConnection.iEmailName}`,
        aTitle: "Ishaan’s Preferences",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Ishaan is adjusting preferences to tailor notifications, themes, and visibility settings.",
        aDetail: "I am passionate about my career while also making time for personal interests like reading, music, and travel. I believe in treating people with respect and empathy. I’m looking for a genuine person who values trust, understanding, and meaningful companionship.",
        dAddress: {
          aLane: "Viman Nagar",
          bStreet: "Nagar Road",
          cCity: "Pune",
          dState: "Maharashtra",
          eCountry: "India",
          fPinCode: "411014",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/aliaabhatt/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/aliaa08" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/alia-bhatt/" }
        ],
      },
      { 
        eFirstname: "Rohan", eLastname: "Malhotra", eEmail: `rohan.malhotra${brandConnection.iEmailName}`,
        aTitle: "Rohan’s Workspace",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Rohan’s workspace focuses on clarity and structure to enhance task execution and collaboration.",
        aDetail: "I would describe myself as practical, family-oriented, and emotionally mature. I enjoy peaceful weekends, exploring new cafés, and engaging in thoughtful conversations. I hope to meet someone supportive and grounded who believes in mutual growth.",
        dAddress: {
          aLane: "Ashram Road",
          bStreet: "Ellis Bridge",
          cCity: "Ahmedabad",
          dState: "Gujarat",
          eCountry: "India",
          fPinCode: "380009",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/priyankachopra/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/priyankachopra" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/priyanka-chopra/" }
        ],
      },
      { 
        eFirstname: "Kunal", eLastname: "Joshi", eEmail: `kunal.joshi${brandConnection.iEmailName}`,
        aTitle: "Kunal’s Recent Actions",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Kunal’s recent actions log helps track interactions and maintain transparency within the system.",
        aDetail: "I’m someone who values simplicity, honesty, and positivity. I enjoy learning new skills and meeting new people. I believe relationships thrive on communication and respect. I’m looking for a like-minded individual to build a happy and balanced life with.",
        dAddress: {
          aLane: "Civil Lines",
          bStreet: "Mall Road",
          cCity: "Delhi",
          dState: "Delhi",
          eCountry: "India",
          fPinCode: "110054",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/deepikapadukone/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/deepikapadukone" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/deepika-padukone/" }
        ],
      },
      { 
        eFirstname: "Siddharth", eLastname: "Bansal", eEmail: `siddharth.bansal${brandConnection.iEmailName}`,
        aTitle: "Siddharth’s Overview",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Siddharth uses the overview panel to quickly assess system status, alerts, and upcoming priorities.",
        aDetail: "I have a cheerful personality and a curious mind. I like staying active, discovering new hobbies, and spending time with family. I value loyalty and kindness and hope to connect with someone who shares similar principles and life goals.",
        dAddress: {
          aLane: "Model Town",
          bStreet: "GT Road",
          cCity: "Amritsar",
          dState: "Punjab",
          eCountry: "India",
          fPinCode: "143001",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/kyliejenner/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/KylieJenner" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/kylie-jenner/" }
        ],
      },
      { 
        eFirstname: "Manav", eLastname: "Chauhan", eEmail: `manav.chauhan${brandConnection.iEmailName}`,
        aTitle: "Manav’s Task Board",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Manav organizes tasks using the board to ensure timely completion and clear accountability.",
        aDetail: "I believe in leading a meaningful and responsible life. I enjoy traveling, photography, and spending time with close friends. I’m looking for someone mature, understanding, and emotionally available for a serious and respectful relationship.",
        dAddress: {
          aLane: "Lalbagh Road",
          bStreet: "Ashoka Circle",
          cCity: "Mysuru",
          dState: "Karnataka",
          eCountry: "India",
          fPinCode: "570001",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/katyperry/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/katyperry" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/katy-perry/" }
        ],
      },

      { 
        eFirstname: "Ananya", eLastname: "Agarwal", eEmail: `ananya.agarwal${brandConnection.iEmailName}`,
        aTitle: "Ananya’s Insights",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Ananya reviews analytical insights to make informed decisions and optimize workflows.",
        aDetail: "I’m an independent and career-focused person who also enjoys relaxing with good books and movies. I value deep conversations and genuine connections. I hope to meet someone who is compassionate, confident, and ready for a committed partnership.",
        dAddress: {
          aLane: "Salt Lake Sector 5",
          bStreet: "IT Park Road",
          cCity: "Kolkata",
          dState: "West Bengal",
          eCountry: "India",
          fPinCode: "700091",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/ladygaga/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/ladygaga" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/lady-gaga/" }
        ],
      },
      { 
        eFirstname: "Aditi", eLastname: "Kulkarni", eEmail: `aditi.kulkarni${brandConnection.iEmailName}`,
        aTitle: "Aditi’s Notifications",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Aditi monitors notifications to stay updated on system events and important messages.",
        aDetail: "I enjoy a balanced lifestyle filled with work, family time, and personal hobbies. I appreciate honesty, patience, and a good sense of humor. I’m looking for a partner who believes in shared values and mutual encouragement.",
        dAddress: {
          aLane: "Alkapuri",
          bStreet: "RC Dutt Road",
          cCity: "Vadodara",
          dState: "Gujarat",
          eCountry: "India",
          fPinCode: "390007",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/emmawatson/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/EmmaWatson" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/emma-watson/" }
        ],
      },
      { 
        eFirstname: "Pooja", eLastname: "Deshmukh", eEmail: `pooja.deshmukh${brandConnection.iEmailName}`,
        aTitle: "Pooja’s Activity Summary",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Pooja’s summary highlights recent participation, changes, and interactions within the platform.",
        aDetail: "I consider myself thoughtful and optimistic with a love for learning and exploring. I enjoy music, road trips, and quiet evenings at home. I’m hoping to meet someone sincere and respectful who believes in long-term commitment.",
        dAddress: {
          aLane: "Hazratganj",
          bStreet: "Vidhan Sabha Marg",
          cCity: "Lucknow",
          dState: "Uttar Pradesh",
          eCountry: "India",
          fPinCode: "226001",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/gal_gadot/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/GalGadot" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/gal-gadot/" }
        ],
      },
      { 
        eFirstname: "Sneha", eLastname: "Rao", eEmail: `sneha.rao${brandConnection.iEmailName}`,
        aTitle: "Sneha’s Dashboard",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Sneha relies on the dashboard to maintain control over her tasks and system interactions.",
        aDetail: "I’m a responsible and fun-loving individual who values relationships and personal growth. I enjoy cooking, traveling, and meeting new people. I’m seeking someone kind-hearted and understanding to build a strong future together.",
        dAddress: {
          aLane: "Whitefield",
          bStreet: "ITPL Main Road",
          cCity: "Bengaluru",
          dState: "Karnataka",
          eCountry: "India",
          fPinCode: "560066",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/scarlettjohanssonworld/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/Scarlett_Jo" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/scarlett-johansson/" }
        ],
      },
      { 
        eFirstname: "Kavya", eLastname: "Nair", eEmail: `kavya.nair${brandConnection.iEmailName}`,
        aTitle: "Kavya’s Workspace Setup",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Kavya structures her workspace to align with her daily workflow and priorities.",
        aDetail: "I’m someone who believes in kindness, hard work, and positivity. I enjoy spending time with family, staying active, and exploring new interests. I’m looking for a supportive and mature person who values companionship and trust.",
        dAddress: {
          aLane: "Thane West",
          bStreet: "Ghodbunder Road",
          cCity: "Thane",
          dState: "Maharashtra",
          eCountry: "India",
          fPinCode: "400607",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/emiliaclarke/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/emiliaclarke" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/emilia-clarke/" }
        ],
      },

      { 
        eFirstname: "Neha", eLastname: "Singh", eEmail: `neha.singh${brandConnection.iEmailName}`,
        aTitle: "Neha’s System Access",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Neha reviews her assigned roles and permissions to ensure proper access to platform features.",
        aDetail: "I lead a simple and fulfilling life centered around career goals and close relationships. I enjoy reading, fitness, and learning new things. I hope to find someone genuine and emotionally grounded to share life’s journey with.",
        dAddress: {
          aLane: "Gomti Nagar",
          bStreet: "Patrakar Puram",
          cCity: "Lucknow",
          dState: "Uttar Pradesh",
          eCountry: "India",
          fPinCode: "226010",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/zendaya/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/Zendaya" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/zendaya/" }
        ],
      },
      { 
        eFirstname: "Riya", eLastname: "Mishra", eEmail: `riya.mishra${brandConnection.iEmailName}`,
        aTitle: "Riya’s Onboarding",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Riya is completing onboarding steps to understand system capabilities and best practices.",
        aDetail: "I’m an easygoing person who loves meaningful conversations and new experiences. I value integrity and emotional maturity. I’m hoping to connect with someone who believes in partnership, respect, and personal growth.",
        dAddress: {
          aLane: "Raja Park",
          bStreet: "Jawahar Nagar Road",
          cCity: "Jaipur",
          dState: "Rajasthan",
          eCountry: "India",
          fPinCode: "302004",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/dualipa/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/DUALIPA" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/dua-lipa/" }
        ],
      },
      { 
        eFirstname: "Tanvi", eLastname: "Gokhale", eEmail: `tanvi.gokhale${brandConnection.iEmailName}`,
        aTitle: "Tanvi’s Settings",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Tanvi configures system settings to enhance usability and streamline daily interactions.",
        aDetail: "I enjoy staying productive and positive while also making time for relaxation and hobbies. I appreciate honesty and clear communication. I’m looking for a partner who is thoughtful, ambitious, and family-oriented.",
        dAddress: {
          aLane: "Marine Drive",
          bStreet: "Netaji Subhash Road",
          cCity: "Kochi",
          dState: "Kerala",
          eCountry: "India",
          fPinCode: "682031",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/billieeilish/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/billieeilish" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/billie-eilish/" }
        ],
      },
      { 
        eFirstname: "Sakshi", eLastname: "Jadhav", eEmail: `sakshi.jadhav${brandConnection.iEmailName}`,
        aTitle: "Sakshi’s Activity Log",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Sakshi uses the activity log to review actions and maintain accountability.",
        aDetail: "I believe in living life with purpose and gratitude. I enjoy creative activities, exploring new destinations, and spending time with loved ones. I hope to meet someone who is kind, supportive, and shares similar values.",
        dAddress: {
          aLane: "DLF Phase 3",
          bStreet: "Cyber City Road",
          cCity: "Gurgaon",
          dState: "Haryana",
          eCountry: "India",
          fPinCode: "122002",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/mileycyrus/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/MileyCyrus" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/miley-cyrus/" }
        ],
      },
      { 
        eFirstname: "Isha", eLastname: "Pandey", eEmail: `isha.pandey${brandConnection.iEmailName}`,
        aTitle: "Isha’s Overview Panel",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Isha checks the overview panel for a quick understanding of current system status.",
        aDetail: "I’m a calm and practical individual who enjoys a mix of adventure and routine. I value meaningful relationships and open communication. I’m seeking someone respectful and understanding for a long-term connection.",
        dAddress: {
          aLane: "Kalyani Nagar",
          bStreet: "North Avenue",
          cCity: "Pune",
          dState: "Maharashtra",
          eCountry: "India",
          fPinCode: "411006",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/shakira/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/shakira" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/shakira/" }
        ],
      },

      { 
        eFirstname: "Rahul", eLastname: "Yadav", eEmail: `rahul.yadav${brandConnection.iEmailName}`,
        aTitle: "Rahul’s Workflow",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Rahul optimizes workflows to improve efficiency and reduce operational friction.",
        aDetail: "I would describe myself as friendly, patient, and goal-oriented. I enjoy reading, music, and spending time outdoors. I’m looking for someone sincere and emotionally mature to build a stable and happy future.",
        dAddress: {
          aLane: "Dwarka Sector 10",
          bStreet: "Central Market Road",
          cCity: "Delhi",
          dState: "Delhi",
          eCountry: "India",
          fPinCode: "110075",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/adele/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/Adele" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/adele/" }
        ],
      },
      { 
        eFirstname: "Amit", eLastname: "Kumar", eEmail: `amit.kumar${brandConnection.iEmailName}`,
        aTitle: "Amit’s Daily Tasks",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Amit tracks daily tasks to ensure consistent progress and clear outcomes.",
        aDetail: "I enjoy keeping a positive outlook on life and focusing on personal development. I value trust and mutual respect in relationships. I hope to meet someone who is compassionate, responsible, and supportive.",
        dAddress: {
          aLane: "Shivaji Nagar",
          bStreet: "FC Road",
          cCity: "Pune",
          dState: "Maharashtra",
          eCountry: "India",
          fPinCode: "411005",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/natalieportman/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/NataliePortman" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/natalie-portman/" }
        ],
      },
      { 
        eFirstname: "Nikhil", eLastname: "Rastogi", eEmail: `nikhil.rastogi${brandConnection.iEmailName}`,
        aTitle: "Nikhil’s Reports",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Nikhil reviews reports to evaluate performance metrics and identify improvement areas.",
        aDetail: "I’m a hardworking and optimistic person who enjoys balancing career and personal interests. I appreciate honesty and loyalty. I’m looking for someone genuine and understanding to share life experiences with.",
        dAddress: {
          aLane: "Malviya Nagar",
          bStreet: "Main Market Road",
          cCity: "Jaipur",
          dState: "Rajasthan",
          eCountry: "India",
          fPinCode: "302017",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/reesewitherspoon/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/ReeseW" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/reese-witherspoon/" }
        ],
      },
      { 
        eFirstname: "Saurabh", eLastname: "Tripathi", eEmail: `saurabh.tripathi${brandConnection.iEmailName}`,
        aTitle: "Saurabh’s Insights",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Saurabh uses insights to support strategic planning and informed decision-making.",
        aDetail: "I like living a simple and organized life filled with meaningful connections. My interests include travel, fitness, and learning new skills. I hope to find someone kind and ambitious for a long-term relationship.",
        dAddress: {
          aLane: "Koramangala",
          bStreet: "7th Block Road",
          cCity: "Bengaluru",
          dState: "Karnataka",
          eCountry: "India",
          fPinCode: "560095",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/jenniferaniston/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/JenniferAnnistn" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/jennifer-aniston/" }
        ],
      },
      { 
        eFirstname: "Deepak", eLastname: "Rawat", eEmail: `deepak.rawat${brandConnection.iEmailName}`,
        aTitle: "Deepak’s Activity Review",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Deepak reviews engagement data to understand usage patterns and system adoption.",
        aDetail: "I’m a thoughtful and independent person who values family and friendships. I enjoy exploring new places and having good conversations. I’m looking for a mature and caring partner who believes in mutual growth.",
        dAddress: {
          aLane: "Bandra West",
          bStreet: "Hill Road",
          cCity: "Mumbai",
          dState: "Maharashtra",
          eCountry: "India",
          fPinCode: "400050",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/oprah/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/Oprah" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/oprahwinfrey/" }
        ],
      },

      { 
        eFirstname: "Priya", eLastname: "Bhatt", eEmail: `priya.bhatt${brandConnection.iEmailName}`,
        aTitle: "Priya’s Dashboard",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Priya’s dashboard presents information in a balanced layout for easy comprehension.",
        aDetail: "I enjoy a balanced lifestyle with a mix of work, hobbies, and relaxation. I value transparency and emotional stability. I’m hoping to meet someone positive-minded and respectful to build a future together.",
        dAddress: {
          aLane: "Saket",
          bStreet: "PVR Complex Road",
          cCity: "Delhi",
          dState: "Delhi",
          eCountry: "India",
          fPinCode: "110017",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/gigihadid/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/GiGiHadid" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/gigi-hadid/" }
        ],
      },
      { 
        eFirstname: "Nisha", eLastname: "Khandelwal", eEmail: `nisha.khandelwal${brandConnection.iEmailName}`,
        aTitle: "Nisha’s Profile Update",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Nisha updates profile details to ensure accuracy and consistency across the platform.",
        aDetail: "I’m a practical and cheerful individual who believes in kindness and hard work. I enjoy spending time with loved ones and trying new activities. I’m looking for someone supportive and genuine for a meaningful connection.",
        dAddress: {
          aLane: "RS Puram",
          bStreet: "DB Road",
          cCity: "Coimbatore",
          dState: "Tamil Nadu",
          eCountry: "India",
          fPinCode: "641002",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/kendalljenner/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/KendallJenner" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/kendall-jenner/" }
        ],
      },
      { 
        eFirstname: "Megha", eLastname: "Saxena", eEmail: `megha.saxena${brandConnection.iEmailName}`,
        aTitle: "Megha’s Workspace",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Megha’s workspace emphasizes simplicity and clarity for focused work.",
        aDetail: "I like staying curious and open to new experiences. I value honesty, patience, and good communication. I’m hoping to meet someone who is understanding, ambitious, and ready for a serious relationship.",
        dAddress: {
          aLane: "Patliputra Colony",
          bStreet: "Boring Road",
          cCity: "Patna",
          dState: "Bihar",
          eCountry: "India",
          fPinCode: "800013",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/chrissyteigen/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/chrissyteigen" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/chrissy-teigen/" }
        ],
      },
      { 
        eFirstname: "Pallavi", eLastname: "Kulshrestha", eEmail: `pallavi.kulshrestha${brandConnection.iEmailName}`,
        aTitle: "Pallavi’s System Overview",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Pallavi monitors system metrics to stay aligned with performance goals.",
        aDetail: "I’m a career-oriented person who also enjoys relaxing weekends and creative hobbies. I believe relationships should be built on trust and mutual respect. I’m looking for a like-minded and caring partner.",
        dAddress: {
          aLane: "City Center",
          bStreet: "MG Road",
          cCity: "Indore",
          dState: "Madhya Pradesh",
          eCountry: "India",
          fPinCode: "452001",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/nicki_minaj/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/NICKIMINAJ" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/nicki-minaj/" }
        ],
      },
      { 
        eFirstname: "Ritika", eLastname: "Mathur", eEmail: `ritika.mathur${brandConnection.iEmailName}`,
        aTitle: "Ritika’s Task Flow",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Ritika follows a structured task flow to manage responsibilities effectively.",
        aDetail: "I enjoy living a peaceful and purposeful life. My interests include reading, traveling, and spending time with family. I’m hoping to connect with someone sincere and emotionally mature for a lasting bond.",
        dAddress: {
          aLane: "Gachibowli",
          bStreet: "Financial District Road",
          cCity: "Hyderabad",
          dState: "Telangana",
          eCountry: "India",
          fPinCode: "500032",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/ritaora/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/RitaOra" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/rita-ora/" }
        ],
      },

      { 
        eFirstname: "Varun", eLastname: "Khanna", eEmail: `varun.khanna${brandConnection.iEmailName}`,
        aTitle: "Varun’s Activity Stream",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Varun uses the activity stream to stay aware of ongoing changes and events.",
        aDetail: "I’m someone who believes in continuous learning and personal development. I enjoy meaningful conversations and simple joys of life. I’m looking for a partner who is kind, honest, and supportive.",
        dAddress: {
          aLane: "Bistupur",
          bStreet: "Main Road",
          cCity: "Jamshedpur",
          dState: "Jharkhand",
          eCountry: "India",
          fPinCode: "831001",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/annehathaway/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/AnneHathaway" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/anne-hathaway/" }
        ],
      },
      { 
        eFirstname: "Mohit", eLastname: "Arora", eEmail: `mohit.arora${brandConnection.iEmailName}`,
        aTitle: "Mohit’s Preferences",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Mohit personalizes controls to match his working style and preferences.",
        aDetail: "I consider myself calm, responsible, and optimistic. I enjoy fitness, movies, and exploring new cultures. I’m hoping to meet someone grounded and understanding who values companionship.",
        dAddress: {
          aLane: "Kankurgachi",
          bStreet: "VIP Road",
          cCity: "Kolkata",
          dState: "West Bengal",
          eCountry: "India",
          fPinCode: "700054",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/margotrobbie/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/MargotRobbie" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/margot-robbie/" }
        ],
      },
      { 
        eFirstname: "Harsh", eLastname: "Vardhan", eEmail: `harsh.vardhan${brandConnection.iEmailName}`,
        aTitle: "Harsh’s Performance",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Harsh reviews performance indicators to assess productivity and efficiency.",
        aDetail: "I like maintaining a healthy balance between work and personal life. I value empathy, respect, and clear communication. I’m looking for someone mature and genuine to share a happy future with.",
        dAddress: {
          aLane: "Panampilly Nagar",
          bStreet: "Main Avenue",
          cCity: "Kochi",
          dState: "Kerala",
          eCountry: "India",
          fPinCode: "682036",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/halleberry/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/halleberry" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/halle-berry/" }
        ],
      },
      { 
        eFirstname: "Akash", eLastname: "Soni", eEmail: `akash.soni${brandConnection.iEmailName}`,
        aTitle: "Akash’s Workspace",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Akash structures his workspace to minimize distractions and enhance focus.",
        aDetail: "I enjoy learning new things and spending quality time with close people. I believe in honesty and mutual understanding. I hope to find someone caring and dependable for a meaningful relationship.",
        dAddress: {
          aLane: "BHEL Township",
          bStreet: "Lingampally Road",
          cCity: "Hyderabad",
          dState: "Telangana",
          eCountry: "India",
          fPinCode: "502032",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/demilovato/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/ddlovato" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/demi-lovato/" }
        ],
      },
      { 
        eFirstname: "Rakesh", eLastname: "Lal", eEmail: `rakesh.lal${brandConnection.iEmailName}`,
        aTitle: "Rakesh’s Activity Summary",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Rakesh’s summary presents essential activity information in a concise format.",
        aDetail: "I’m an optimistic and practical person who values relationships and personal goals. I enjoy traveling, music, and good conversations. I’m looking for a partner who believes in trust and teamwork.",
        dAddress: {
          aLane: "Shastri Nagar",
          bStreet: "Main Bazaar Road",
          cCity: "Jodhpur",
          dState: "Rajasthan",
          eCountry: "India",
          fPinCode: "342003",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/meganfox/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/meganfox" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/megan-fox/" }
        ],
      },

      { 
        eFirstname: "Simran", eLastname: "Kaur", eEmail: `simran.kaur${brandConnection.iEmailName}`,
        aTitle: "Simran’s Dashboard",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Simran uses a clean dashboard layout to stay organized and productive.",
        aDetail: "I believe in leading a balanced and respectful life. I enjoy outdoor activities, reading, and spending time with family. I hope to meet someone sincere and kind-hearted for a long-term connection.",
        dAddress: {
          aLane: "Andheri East",
          bStreet: "Chakala Road",
          cCity: "Mumbai",
          dState: "Maharashtra",
          eCountry: "India",
          fPinCode: "400093",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/angelinajolie/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/angelinajolie" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/angelina-jolie/" }
        ],
      },
      { 
        eFirstname: "Navneet", eLastname: "Gill", eEmail: `navneet.gill${brandConnection.iEmailName}`,
        aTitle: "Navneet’s Insights",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Navneet analyzes engagement data to improve collaboration and usage.",
        aDetail: "I’m a positive and open-minded individual who enjoys new experiences and challenges. I value emotional maturity and loyalty. I’m seeking someone who is understanding and ready for commitment.",
        dAddress: {
          aLane: "Navrangpura",
          bStreet: "CG Road",
          cCity: "Ahmedabad",
          dState: "Gujarat",
          eCountry: "India",
          fPinCode: "380009",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/camila_cabello/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/Camila_Cabello" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/camila-cabello/" }
        ],
      },
      { 
        eFirstname: "Jaspreet", eLastname: "Sandhu", eEmail: `jaspreet.sandhu${brandConnection.iEmailName}`,
        aTitle: "Jaspreet’s Overview",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Jaspreet monitors progress through system overviews and task updates.",
        aDetail: "I enjoy a simple lifestyle focused on growth and meaningful relationships. I appreciate honesty and thoughtful communication. I’m looking for someone supportive and responsible to share life with.",
        dAddress: {
          aLane: "KPHB Colony",
          bStreet: "Main Road",
          cCity: "Hyderabad",
          dState: "Telangana",
          eCountry: "India",
          fPinCode: "500085",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/kristenstewartx/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/KStewartNews" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/kristen-stewart/" }
        ],
      },
      { 
        eFirstname: "Gurpreet", eLastname: "Brar", eEmail: `gurpreet.brar${brandConnection.iEmailName}`,
        aTitle: "Gurpreet’s Workflow",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Gurpreet refines workflows to ensure efficient execution and smooth operations.",
        aDetail: "I’m a friendly and goal-driven person who enjoys staying active and learning new skills. I value trust and mutual encouragement. I hope to meet someone genuine and caring for a lasting relationship.",
        dAddress: {
          aLane: "Lajpat Nagar",
          bStreet: "Central Market",
          cCity: "Delhi",
          dState: "Delhi",
          eCountry: "India",
          fPinCode: "110024",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/haileybieber/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/haileybieber" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/hailey-bieber/" }
        ],
      },
      { 
        eFirstname: "Harleen", eLastname: "Sidhu", eEmail: `harleen.sidhu${brandConnection.iEmailName}`,
        aTitle: "Harleen’s System Setup",
        aSubtitle: `I'm using ${brandConnection.bBrandName.split(" ")[0]} application`,
        aDescription: "Harleen completes system setup to begin productive engagement with platform tools.",
        aDetail: "I believe in kindness, balance, and lifelong learning. I enjoy exploring new places, meeting people, and spending time with family. I’m looking for a partner who is respectful, mature, and ready to grow together.",
        dAddress: {
          aLane: "Electronic City Phase 1",
          bStreet: "Hosur Road",
          cCity: "Bengaluru",
          dState: "Karnataka",
          eCountry: "India",
          fPinCode: "560100",
        },
        dLinks: [
          { aLinkTitle: "Instagram", bLinkURL: "https://www.instagram.com/sofiavergara/" },
          { aLinkTitle: "X", bLinkURL: "https://x.com/SofiaVergara" },
          { aLinkTitle: "Linkedin", bLinkURL: "https://www.linkedin.com/in/sofia-vergara/" }
        ]
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
      aTitle: "Andromeda Organisation",
      aSubtitle: "Where Vision Meets Velocity",
      aDescription: "A proficient organization specializing in crafting sophisticated development and communication tools tailored for diverse web applications, under Beehive Corporation.",
      aDetail: "",
      dTag: "🌌 The Alpha Galaxy (σC:αG)",
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
          aLinkTitle: "Visit Frontend",
          bLinkURL: "https://andromeda-frontend-v02.netlify.app/"
        },
        {
          aLinkTitle: "Visit Backend",
          bLinkURL: "https://andromeda-backend-v02.netlify.app/"
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
Andromeda is the Alpha Organisation of Beehive Corporation. 
Right now, this organisation consists of two enterprises. These enterprises are:
- Acrux Enterprise (α Enterprise)
- Anser Enterprise (β Enterprise)
      `,
      dTag: "truly",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminAboutCompanyModel.create({
      aTitle: "🧬 Relatively About Company",
      aDetail: `
Andromeda is the Alpha Galaxy of Beehive Cluster. 
Till now, this galaxy consists of two stars. These stars are:
- Acrux Star (α Star)
- Anser Star (β Star)
      `,
      dTag: "relatively",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Admin About Company Created");

    // --- Create Admin About Application ---
    await AdminAboutApplicationModel.create({
      aTitle: "About Andromeda Application",
      aDetail: `

### ANDROMEDA APPLICATION

Andromeda Application is a project aims to develop a dynamic landing page application for Andromeda Organisation, mainly using MERN stack, TypeScript and SocketIO. 
Key features include a dedicated admin panel for content management, real-time interaction via SocketIO, and a custom role-based authentication system. 
The application will effectively showcase Andromeda Organisation's identity, projects, and more, enhancing user engagement and administrative efficiency. 
Backend Application - The brain powering logic, data, and communication

### THE POWER INGREDIENTS OF ANDROMEDA APPLICATION 
Andromeda Application is crafted with these few technologies: 
1. Core Technologies — 
    MongoDB • ExpressJS • ReactJS • NodeJS • TypeScript • SocketIO
2. Other Technologies — 
    ReduxJS • RedisDB • Tailwind CSS • Shadcn UI • Axios • JSON Web Token • Cookie Parser • Cloudinary • Node Mailer • CORS

### THE THREE PILLARS OF ANDROMEDA APPLICATION
Andromeda Application is structured around three core applications: 
1. Frontend Application — 
    - The public-facing experience
    - [andromeda-frontend-v02.netlify.app](https://andromeda-frontend-v02.netlify.app)
2. Admin Application — 
    - Internal control, content, and operations
    - [andromeda-admin-v02.netlify.app](https://andromeda-admin-v02.netlify.app)
3. Backend Application — 
    - The brain powering logic, data, and communication 
    - [andromeda-backend-v02.netlify.app](https://andromeda-backend-v02.netlify.app)

Each app is independently deployable, yet designed to feel like one organism. 
      `,
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminAboutApplicationModel.create({
      aTitle: "About Andromeda Application (Frontend)",
      aSubtitle: "The public-facing experience",
      aDetail: `

### FRONTEND APPLICATION — THE PUBLIC-FACING EXPERIENCE

Andromeda Frontend Application is the user-facing interface developed with ReactJS, providing a seamless, dynamic, and responsive experience. 
It integrates clean UI/UX design, optimized routing, and state management to render content fetched from the backend APIs. 
This application supports Progressive Web App (PWA) capabilities, offers fast load times through code splitting and caching strategies, and ensures smooth interactions with features like form validations, animations, and real-time updates. 
It focuses on delivering a polished experience to end-users across all devices.
 
[andromeda-frontend-v02.netlify.app](https://andromeda-frontend-v02.netlify.app)

### 🔧 TECH STACK
- React 18 + TypeScript
- Vite for lightning-fast builds
- Tailwind CSS
- Shadcn UI (accessible, headless UI components)
- Redux Toolkit for state and cache management
- React Router v7
- SocketIO Client for real-time features
- Zod + React Hook Form for validation
-   React Helmet Async for SEO

### ✨ KEY FEATURES
- ⚡ High-performance UI with Vite
- 🎨 Consistent design system using Shadcn + Tailwind
- 🔐 Secure form handling and validation
- 🔄 Real-time updates via WebSockets
- 🧠 SEO-friendly metadata handling
- 📱 Fully responsive, mobile-first design
      `,
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminAboutApplicationModel.create({
      aTitle: "About Andromeda Application (Admin)",
      aSubtitle: "Internal control, content, and operations",
      aDetail: `

### ADMIN APPLICATION — INTERNAL CONTROL, CONTENT, AND OPERATIONS

Andromeda Admin Application is a dedicated ReactJS dashboard designed for managing platform-wide data and configurations. 
This panel enables administrators to control users, roles, permissions, content, analytics, and operational workflows. 
Built with reusable React components, secure routes, and state management (Redux Toolkit / RTK Query), it offers a fast, responsive, and intuitive interface. 
The admin panel communicates with the backend through protected API endpoints, ensuring that sensitive operations remain secure and traceable.

[andromeda-admin-v02.netlify.app](https://andromeda-admin-v02.netlify.app)

### 🔧 TECH STACK
- React 18 + TypeScript
- Vite for lightning-fast builds
- Tailwind CSS
- Shadcn UI (accessible, headless UI components)
- Redux Toolkit for state and cache management
- React Router v7
- Zod + React Hook Form for validation
- SocketIO Client for real-time features

### ✨ KEY FEATURES
- 👥 User & role management
- 📝 Content & data CRUD operations
- 📊 Admin-level analytics dashboards
- 🔔 Real-time system notifications
- 🧩 Reusable, scalable UI components
- 🛡️ Secure access-controlled routes
- ⚙️ Configuration-driven layouts
      `,
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });
    
    await AdminAboutApplicationModel.create({
      aTitle: "About Andromeda Application (Backend)",
      aSubtitle: "The brain powering logic, data, and communication",
      aDetail: `

### BACKEND APPLICATION — THE BRAIN POWERING LOGIC, DATA, AND COMMUNICATION

Andromeda Backend Application is built using NodeJS and ExpressJS, forming the core API layer of the MERN stack system. 
It handles business logic, authentication, authorization, database interactions, and secure communication with the frontend. 
This service exposes RESTful APIs, manages real-time events using SocketIO (if required), integrates with MongoDB through Mongoose, and ensures optimized performance with features like Redis caching, middleware pipelines, and structured error handling. 
It is designed for scalability, modularity, and high availability. 

[andromeda-backend-v02.netlify.app](https://andromeda-backend-v02.netlify.app)

### 🔧 TECH STACK
- NodeJS + TypeScript
- Express 5
- MongoDB + Mongoose
- Redis (ioredis) for caching
- SocketIO for real-time events
- JWT Authentication
- Winston for logging
- Cloudinary for media handling
- Multer for file uploads
- Cron Jobs for background tasks
- Nodemailer for email services
- GeoIP for location-based logic

### ✨ KEY FEATURES
- 🔐 Secure authentication & authorization
- 🧠 Centralized business logic
- ⚡ Redis-based caching for performance
- 🔄 Real-time data sync with SocketIO
- 🗂️ Scalable MongoDB schema design
- 📩 Email & notification services
- 🕒 Scheduled background jobs
- 📜 Structured logging & monitoring
- 🌍 Geo-aware request handling
      `,
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
   soup.beehive.corporation@gmail.com  

2) **Phone (Direct Line)**  
   +91 83298 84344  

3) **Headquarters (Physical Address)**  
   Pune, Maharashtra, India
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

    // --- Create Admin Project ---
    const adminProjectInstance10 = await AdminProjectModel.create({
      aTitle: "Arion Application",
      aSubtitle: "arion-frontend-v02.netlify.app",
      aDescription: `
Arion Application is a project aims to develop a dynamic landing page application for Arion, mainly using MERN stack, TypeScript and SocketIO. 
Key features include a dedicated admin panel for content management, real-time interaction via SocketIO, and a custom role-based authentication system. 
The application will effectively showcase Arion's identity, projects, and more, enhancing user engagement and administrative efficiency.
      `,
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

    const adminProjectInstance11 = await AdminProjectModel.create({
      aTitle: "Ankas Application",
      aSubtitle: "ankas-frontend-v02.netlify.app",
      aDescription: `
Ankas Application is a project aims to develop a dynamic landing page application for Ankas, mainly using MERN stack, TypeScript and SocketIO. 
Key features include a dedicated admin panel for content management, real-time interaction via SocketIO, and a custom role-based authentication system. 
The application will effectively showcase Ankas's identity, projects, and more, enhancing user engagement and administrative efficiency.
      `,
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

    const adminProjectInstance12 = await AdminProjectModel.create({
      aTitle: "Abol Application",
      aSubtitle: "abol-frontend-v02.netlify.app",
      aDescription: `
Abol Application is a project aims to develop a dynamic landing page application for Abol, mainly using MERN stack, TypeScript and SocketIO. 
Key features include a dedicated admin panel for content management, real-time interaction via SocketIO, and a custom role-based authentication system. 
The application will effectively showcase Abol's identity, projects, and more, enhancing user engagement and administrative efficiency.
      `,
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

    const adminProjectInstance13 = await AdminProjectModel.create({
      aTitle: "Boilerplate Application",
      aSubtitle: "boilerplate-frontend-v02.netlify.app",
      aDescription: `
Boilerplate Application is a project aims to develop a dynamic landing page application for Boilerplate, mainly using MERN stack, TypeScript and SocketIO. 
Key features include a dedicated admin panel for content management, real-time interaction via SocketIO, and a custom role-based authentication system. 
The application will effectively showcase Boilerplate's identity, projects, and more, enhancing user engagement and administrative efficiency.
      `,
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

    const adminProjectInstance14 = await AdminProjectModel.create({
      aTitle: "Chattrix Application",
      aSubtitle: "chattrix-frontend-v02.netlify.app",
      aDescription: `
Chattrix Application is a project aims to develop a dynamic landing page application for Chattrix, mainly using MERN stack, TypeScript and SocketIO. 
Key features include a dedicated admin panel for content management, real-time interaction via SocketIO, and a custom role-based authentication system. 
The application will effectively showcase Chattrix's identity, projects, and more, enhancing user engagement and administrative efficiency.
      `,
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

    console.log("✅ Admin Project Created");

    // --- Create Admin Project Group ---
    const adminProjectGroupInstance02 = await AdminProjectGroupModel.create({
      aTitle: "Acrux Enterprise",
      aSubtitle: "Feeling Ambitions, Igniting Growth",
      aDescription: "A proficient enterprise specializing in crafting sophisticated development tools tailored for diverse web applications, under Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cProjects: [
        adminProjectInstance10._id,
        adminProjectInstance11._id,
        adminProjectInstance12._id,
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

    const adminProjectGroupInstance03 = await AdminProjectGroupModel.create({
      aTitle: "Anser Enterprise",
      aSubtitle: "Building Bridges, Creating Values",
      aDescription: "A proficient enterprise specializing in crafting sophisticated communication tools tailored for diverse web applications, under Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cProjects: [
        adminProjectInstance13._id,
        adminProjectInstance14._id,
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

    console.log("✅ Admin Project Group Created");
    
    // --- Create Admin Project Section ---
    await AdminProjectSectionModel.create({
      aTitle: "Andromeda Organisation",
      aSubtitle: "Where Vision Meets Velocity",
      aDescription: "A proficient organization specializing in crafting sophisticated development and communication tools tailored for diverse web applications, under Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cProjectGroups: [
        adminProjectGroupInstance02._id,
        adminProjectGroupInstance03._id,
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
    
    console.log("✅ Admin Project Section Created");

    // --- Create Hero ---
    await HeroModel.create({
      aTitle: "Andromeda Organisation",
      aSubtitle: "Where Vision Meets Velocity",
      aDescription: "A proficient organization specializing in crafting sophisticated development and communication tools tailored for diverse web applications, under Beehive Corporation.",
      aDetail: "",
      dTag: "🌌 The Alpha Galaxy (σC:αG)",
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
          aLinkTitle: "Visit Admin",
          bLinkURL: "https://andromeda-admin-v02.netlify.app/"
        },
        {
          aLinkTitle: "Visit Backend",
          bLinkURL: "https://andromeda-backend-v02.netlify.app/"
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
Andromeda is the Alpha Organisation of Beehive Corporation. 
Right now, this organisation consists of two enterprises. These enterprises are:
- Acrux Enterprise (α Enterprise)
- Anser Enterprise (β Enterprise)
      `,
      dTag: "truly",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AboutCompanyModel.create({
      aTitle: "🧬 Relatively About Company",
      aDetail: `
Andromeda is the Alpha Galaxy of Beehive Cluster. 
Till now, this galaxy consists of two stars. These stars are:
- Acrux Star (α Star)
- Anser Star (β Star)
      `,
      dTag: "relatively",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ About Company Created");

    // --- Create About Application ---
    await AboutApplicationModel.create({
      aTitle: "About Andromeda Application",
      aDetail: `

### ANDROMEDA APPLICATION

Andromeda Application is a project aims to develop a dynamic landing page application for Andromeda Organisation, mainly using MERN stack, TypeScript and SocketIO. 
Key features include a dedicated admin panel for content management, real-time interaction via SocketIO, and a custom role-based authentication system. 
The application will effectively showcase Andromeda Organisation's identity, projects, and more, enhancing user engagement and administrative efficiency. 
Backend Application - The brain powering logic, data, and communication

### THE POWER INGREDIENTS OF ANDROMEDA APPLICATION 
Andromeda Application is crafted with these few technologies: 
1. Core Technologies — 
    MongoDB • ExpressJS • ReactJS • NodeJS • TypeScript • SocketIO
2. Other Technologies — 
    ReduxJS • RedisDB • Tailwind CSS • Shadcn UI • Axios • JSON Web Token • Cookie Parser • Cloudinary • Node Mailer • CORS

### THE THREE PILLARS OF ANDROMEDA APPLICATION
Andromeda Application is structured around three core applications: 
1. Frontend Application — 
    - The public-facing experience
    - [andromeda-frontend-v02.netlify.app](https://andromeda-frontend-v02.netlify.app)
2. Admin Application — 
    - Internal control, content, and operations
    - [andromeda-admin-v02.netlify.app](https://andromeda-admin-v02.netlify.app)
3. Backend Application — 
    - The brain powering logic, data, and communication 
    - [andromeda-backend-v02.netlify.app](https://andromeda-backend-v02.netlify.app)

Each app is independently deployable, yet designed to feel like one organism. 
      `,
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AboutApplicationModel.create({
      aTitle: "About Andromeda Application (Frontend)",
      aSubtitle: "The public-facing experience",
      aDetail: `

### FRONTEND APPLICATION — THE PUBLIC-FACING EXPERIENCE

Andromeda Frontend Application is the user-facing interface developed with ReactJS, providing a seamless, dynamic, and responsive experience. 
It integrates clean UI/UX design, optimized routing, and state management to render content fetched from the backend APIs. 
This application supports Progressive Web App (PWA) capabilities, offers fast load times through code splitting and caching strategies, and ensures smooth interactions with features like form validations, animations, and real-time updates. 
It focuses on delivering a polished experience to end-users across all devices.
 
[andromeda-frontend-v02.netlify.app](https://andromeda-frontend-v02.netlify.app)

### 🔧 TECH STACK
- React 18 + TypeScript
- Vite for lightning-fast builds
- Tailwind CSS
- Shadcn UI (accessible, headless UI components)
- Redux Toolkit for state and cache management
- React Router v7
- SocketIO Client for real-time features
- Zod + React Hook Form for validation
-   React Helmet Async for SEO

### ✨ KEY FEATURES
- ⚡ High-performance UI with Vite
- 🎨 Consistent design system using Shadcn + Tailwind
- 🔐 Secure form handling and validation
- 🔄 Real-time updates via WebSockets
- 🧠 SEO-friendly metadata handling
- 📱 Fully responsive, mobile-first design
      `,
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AboutApplicationModel.create({
      aTitle: "About Andromeda Application (Admin)",
      aSubtitle: "Internal control, content, and operations",
      aDetail: `

### ADMIN APPLICATION — INTERNAL CONTROL, CONTENT, AND OPERATIONS

Andromeda Admin Application is a dedicated ReactJS dashboard designed for managing platform-wide data and configurations. 
This panel enables administrators to control users, roles, permissions, content, analytics, and operational workflows. 
Built with reusable React components, secure routes, and state management (Redux Toolkit / RTK Query), it offers a fast, responsive, and intuitive interface. 
The admin panel communicates with the backend through protected API endpoints, ensuring that sensitive operations remain secure and traceable.

[andromeda-admin-v02.netlify.app](https://andromeda-admin-v02.netlify.app)

### 🔧 TECH STACK
- React 18 + TypeScript
- Vite for lightning-fast builds
- Tailwind CSS
- Shadcn UI (accessible, headless UI components)
- Redux Toolkit for state and cache management
- React Router v7
- Zod + React Hook Form for validation
- SocketIO Client for real-time features

### ✨ KEY FEATURES
- 👥 User & role management
- 📝 Content & data CRUD operations
- 📊 Admin-level analytics dashboards
- 🔔 Real-time system notifications
- 🧩 Reusable, scalable UI components
- 🛡️ Secure access-controlled routes
- ⚙️ Configuration-driven layouts
      `,
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });
    
    await AboutApplicationModel.create({
      aTitle: "About Andromeda Application (Backend)",
      aSubtitle: "The brain powering logic, data, and communication",
      aDetail: `

### BACKEND APPLICATION — THE BRAIN POWERING LOGIC, DATA, AND COMMUNICATION

Andromeda Backend Application is built using NodeJS and ExpressJS, forming the core API layer of the MERN stack system. 
It handles business logic, authentication, authorization, database interactions, and secure communication with the frontend. 
This service exposes RESTful APIs, manages real-time events using SocketIO (if required), integrates with MongoDB through Mongoose, and ensures optimized performance with features like Redis caching, middleware pipelines, and structured error handling. 
It is designed for scalability, modularity, and high availability. 

[andromeda-backend-v02.netlify.app](https://andromeda-backend-v02.netlify.app)

### 🔧 TECH STACK
- NodeJS + TypeScript
- Express 5
- MongoDB + Mongoose
- Redis (ioredis) for caching
- SocketIO for real-time events
- JWT Authentication
- Winston for logging
- Cloudinary for media handling
- Multer for file uploads
- Cron Jobs for background tasks
- Nodemailer for email services
- GeoIP for location-based logic

### ✨ KEY FEATURES
- 🔐 Secure authentication & authorization
- 🧠 Centralized business logic
- ⚡ Redis-based caching for performance
- 🔄 Real-time data sync with SocketIO
- 🗂️ Scalable MongoDB schema design
- 📩 Email & notification services
- 🕒 Scheduled background jobs
- 📜 Structured logging & monitoring
- 🌍 Geo-aware request handling
      `,
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
   soup.beehive.corporation@gmail.com  

2) **Phone (Direct Line)**  
   +91 83298 84344  

3) **Headquarters (Physical Address)**  
   Pune, Maharashtra, India
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

    // --- Create Project ---
    const projectInstance10 = await ProjectModel.create({
      aTitle: "Arion Application",
      aSubtitle: "arion-frontend-v02.netlify.app",
      aDescription: `
Arion Application is a project aims to develop a dynamic landing page application for Arion, mainly using MERN stack, TypeScript and SocketIO. 
Key features include a dedicated admin panel for content management, real-time interaction via SocketIO, and a custom role-based authentication system. 
The application will effectively showcase Arion's identity, projects, and more, enhancing user engagement and administrative efficiency.
      `,
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

    const projectInstance11 = await ProjectModel.create({
      aTitle: "Ankas Application",
      aSubtitle: "ankas-frontend-v02.netlify.app",
      aDescription: `
Ankas Application is a project aims to develop a dynamic landing page application for Ankas, mainly using MERN stack, TypeScript and SocketIO. 
Key features include a dedicated admin panel for content management, real-time interaction via SocketIO, and a custom role-based authentication system. 
The application will effectively showcase Ankas's identity, projects, and more, enhancing user engagement and administrative efficiency.
      `,
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

    const projectInstance12 = await ProjectModel.create({
      aTitle: "Abol Application",
      aSubtitle: "abol-frontend-v02.netlify.app",
      aDescription: `
Abol Application is a project aims to develop a dynamic landing page application for Abol, mainly using MERN stack, TypeScript and SocketIO. 
Key features include a dedicated admin panel for content management, real-time interaction via SocketIO, and a custom role-based authentication system. 
The application will effectively showcase Abol's identity, projects, and more, enhancing user engagement and administrative efficiency.
      `,
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

    const projectInstance13 = await ProjectModel.create({
      aTitle: "Boilerplate Application",
      aSubtitle: "boilerplate-frontend-v02.netlify.app",
      aDescription: `
Boilerplate Application is a project aims to develop a dynamic landing page application for Boilerplate, mainly using MERN stack, TypeScript and SocketIO. 
Key features include a dedicated admin panel for content management, real-time interaction via SocketIO, and a custom role-based authentication system. 
The application will effectively showcase Boilerplate's identity, projects, and more, enhancing user engagement and administrative efficiency.
      `,
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

    const projectInstance14 = await ProjectModel.create({
      aTitle: "Chattrix Application",
      aSubtitle: "chattrix-frontend-v02.netlify.app",
      aDescription: `
Chattrix Application is a project aims to develop a dynamic landing page application for Chattrix, mainly using MERN stack, TypeScript and SocketIO. 
Key features include a dedicated admin panel for content management, real-time interaction via SocketIO, and a custom role-based authentication system. 
The application will effectively showcase Chattrix's identity, projects, and more, enhancing user engagement and administrative efficiency.
      `,
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

    console.log("✅ Project Created");

    // --- Create Project Group ---
    const projectGroupInstance02 = await ProjectGroupModel.create({
      aTitle: "Acrux Enterprise",
      aSubtitle: "Feeling Ambitions, Igniting Growth",
      aDescription: "A proficient enterprise specializing in crafting sophisticated development tools tailored for diverse web applications, under Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cProjects: [
        projectInstance10._id,
        projectInstance11._id,
        projectInstance12._id,
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

    const projectGroupInstance03 = await ProjectGroupModel.create({
      aTitle: "Anser Enterprise",
      aSubtitle: "Building Bridges, Creating Values",
      aDescription: "A proficient enterprise specializing in crafting sophisticated communication tools tailored for diverse web applications, under Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cProjects: [
        projectInstance13._id,
        projectInstance14._id,
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

    console.log("✅ Project Group Created");
    
    // --- Create Project Section ---
    await ProjectSectionModel.create({
      aTitle: "Andromeda Organisation",
      aSubtitle: "Where Vision Meets Velocity",
      aDescription: "A proficient organization specializing in crafting sophisticated development and communication tools tailored for diverse web applications, under Beehive Corporation.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
      cProjectGroups: [
        projectGroupInstance02._id,
        projectGroupInstance03._id,
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
    
    console.log("✅ Project Section Created");

    process.exit(0);

  } catch (error) {
    console.error("❌ Permission seeding failed:", error);
    process.exit(1);
  }
};

seeder();

