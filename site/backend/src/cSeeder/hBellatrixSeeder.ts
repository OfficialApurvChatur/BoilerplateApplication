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

    for (const each of userList) {
      const userInstance = await UserModel.create({
        ...each,
        aTitle: `${each.eFirstname} ${each.eLastname}`,
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
      aDetail: `
---
### Hero Section

- <details>
  <summary><strong>Latest Instance</strong></summary>

  - **Title:** Bellatrix Enterprise
  - **Subtitle:** Navigating Beyond Horizon  
  - **Description:** 
    A proficient organization specializing in developing bespoke web applications for fostering personal innovation with Beehive Corporation.

  - **Tag:** ✨ The Beta Star (σC:γG:βS) 
  
  - **Social Links:**
      a. **Instagram:** [https://www.google.com/](https://www.google.com/)  
      b. **X (Twitter):** [https://www.google.com/](https://www.google.com/)  
      c. **Threads:** [https://www.google.com/](https://www.google.com/)  
      d. **LinkedIn:** [https://www.google.com/](https://www.google.com/)  
      e. **GitHub:** [https://www.google.com/](https://www.google.com/)

  - **Web Links:**
      a. **Visit Administration:** [https://www.google.com/](https://www.google.com/)  
      b. **Visit Application:** [https://www.google.com/](https://www.google.com/)

  - **Gallery Images:**
      a. **Image 1:** *N/A* 
      b. **Image 2:** *N/A* 

</details>

---
### About Company Section

- <details>
  <summary><strong>Truly Instance</strong></summary>

  - **Title:** Truly About Company 
  - **Subtitle:** *N/A*  
  - **Description:** *N/A*
  - **Detail:** 
      Bellatrix is the Beta Enterprise of Tadpole Organisation. 
      This enterprise consists of two small companies. These companies are:
      1) Techfolio Firm (α Company)
      2) Blogify Firm (β Company)

</details>

- <details>
  <summary><strong>Relatively Instance</strong></summary>

  - **Title:** Relatively About Company  
  - **Subtitle:** *N/A*  
  - **Description:** *N/A*
  - **Detail:** 
      Bellatrix is the Beta Star of Tadpole Galaxy. 
      This star consists of two planets around. These planets are:
      1) Techfolio Planet (α Planet)
      2) Blogify Planet (β Planet)

</details>

---
### About Application Section

- <details>
  <summary><strong>Backend Instance</strong></summary>

  - **Title:** About Backend Application  
  - **Subtitle:** *N/A*  
  - **Description:** *N/A*
  - **Detail:** 
      The Backend Application is built using NodeJS and ExpressJS, forming the core API layer of the MERN stack system. It handles business logic, authentication, authorization, database interactions, and secure communication with the frontend. This service exposes RESTful APIs, manages real-time events using Socket.io (if required), integrates with MongoDB through Mongoose, and ensures optimized performance with features like Redis caching, middleware pipelines, and structured error handling. It is designed for scalability, modularity, and high availability.

</details>

- <details>
  <summary><strong>Adminstration Instance</strong></summary>

  - **Title:** About Administration Application 
  - **Subtitle:** *N/A*  
  - **Description:** *N/A*
  - **Detail:** 
      The Administration Application is a dedicated ReactJS dashboard designed for managing platform-wide data and configurations. This panel enables administrators to control users, roles, permissions, content, analytics, and operational workflows. Built with reusable React components, secure routes, and state management (Redux Toolkit / RTK Query), it offers a fast, responsive, and intuitive interface. The admin panel communicates with the backend through protected API endpoints, ensuring that sensitive operations remain secure and traceable.

</details>

- <details>
  <summary><strong>Frontend Instance</strong></summary>

  - **Title:** About Frontend Application  
  - **Subtitle:** *N/A*  
  - **Description:** *N/A*
  - **Detail:** 
      The Frontend Application is the user-facing interface developed with ReactJS, providing a seamless, dynamic, and responsive experience. It integrates clean UI/UX design, optimized routing, and state management to render content fetched from the backend APIs. This application supports Progressive Web App (PWA) capabilities, offers fast load times through code splitting and caching strategies, and ensures smooth interactions with features like form validations, animations, and real-time updates. It focuses on delivering a polished experience to end-users across all devices.

</details>

---
### Service Section

- <details>
  <summary><strong>Instance 1</strong></summary>

  - **Title:** Open Source Code
  - **Subtitle:** Transparency • Flexibility • Complete Freedom  
  - **Details:**  
      Open source code embodies the spirit of collaboration, transparency, and community-driven innovation. By embracing open source principles on a personal level, you have access to a wealth of shared knowledge, resources, and codebases that can enrich your digital projects. This service enables you to tap into a vibrant ecosystem of developers, enthusiasts, and contributors, empowering you to customize, extend, and improve upon existing software solutions to better suit your personal needs and preferences. It's about embracing the ethos of sharing and giving back, contributing to a collective pool of knowledge and creativity that benefits everyone involved in the digital community.

</details>

- <details>
  <summary><strong>Instance 2</strong></summary>

  - **Title:** User-Centered Design  
  - **Subtitle:** Reliable Architecture • High Security • Peak Performance  
  - **Details:**  
      At its core, user-centered design is about putting your own needs, preferences, and experiences front and center in the creation process. It's about designing digital interfaces and experiences that resonate with you on a personal level, making interactions intuitive, seamless, and satisfying. This service prioritizes your perspective and feedback, ensuring that every aspect of the web applications you use is crafted with your personal comfort, convenience, and enjoyment in mind.

</details>

- <details>
  <summary><strong>Instance 3</strong></summary>

  - **Title:** Innovation-Focused Approach
  - **Subtitle:** Effortless Control • Zero Additional Cost  
  - **Details:**  
      Embracing an innovation-focused approach on a personal level means committing to continuous exploration and experimentation. It's about cultivating a mindset of curiosity and creativity, leveraging technology to push the boundaries of what's possible in your personal endeavors. This service empowers you to embark on a journey of self-discovery and invention, harnessing digital solutions to spark new ideas, solve problems, and uncover untapped opportunities in your personal projects and pursuits.

</details>

- <details>
  <summary><strong>Instance 4</strong></summary>

  - **Title:** Custom Web Application  
  - **Subtitle:** Tailored Solutions Built With Precision  
  - **Details:**  
      As a personal endeavor, crafting custom web applications involves tailoring digital solutions to your unique aspirations and needs. This service revolves around translating your individual vision into reality through the creation of personalized online tools and platforms. Whether you're envisioning a digital workspace to fuel your creative pursuits or a specialized application to streamline your daily activities, custom web application development is dedicated to bringing your personal projects to life in the digital realm.

</details>

---
### Counter Section

- <details>
  <summary><strong>Instance 1</strong></summary>

  - **Title:** 08+ 
  - **Subtitle:** Frontend Application Deployed
  - **Details:**  
      User-friendly interfaces for seamless interaction. Deployed applications designed to engage and satisfy users. Demonstrated success in deployment.

</details>

- <details>
  <summary><strong>Instance 2</strong></summary>

  - **Title:** 08+
  - **Subtitle:** Backend Applications Established  
  - **Details:**  
      Robust systems for data processing. Established solutions to support your application's functionality. Proven reliability in deployment.

</details>

- <details>
  <summary><strong>Instance 3</strong></summary>

  - **Title:** 08+  
  - **Subtitle:** Admin Applications Published 
  - **Details:**  
      Custom-made panels for easy management. Tailored solutions to handle tasks efficiently. Trusted track record in deployment.

</details>

---      
      `,
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Static Content Created");

    // --- Create Admin Hero ---
    await AdminHeroModel.create({
      aTitle: "Bellatrix Enterprise",
      aSubtitle: "Navigating Beyond Horizon",
      aDescription: "A proficient organization specializing in developing bespoke web applications for fostering personal innovation with Beehive Corporation.",
      aDetail: "",
      dTag: "✨ The Beta Star (σC:γG:βS)",
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
Bellatrix is the Beta Enterprise of Tadpole Organisation. 
This enterprise consists of two small companies. These companies are:
1) Techfolio Firm (α Company)
2) Blogify Firm (β Company)
      `,
      dTag: "truly",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminAboutCompanyModel.create({
      aTitle: "🧬 Relatively About Company",
      aDetail: `
Bellatrix is the Beta Star of Tadpole Galaxy. 
This star consists of two planets around. These planets are:
1) Techfolio Planet (α Planet)
2) Blogify Planet (β Planet)
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
      aDescription: "Open source code embodies the spirit of collaboration, transparency, and community-driven innovation. By embracing open source principles on a personal level, you have access to a wealth of shared knowledge, resources, and codebases that can enrich your digital projects. This service enables you to tap into a vibrant ecosystem of developers, enthusiasts, and contributors, empowering you to customize, extend, and improve upon existing software solutions to better suit your personal needs and preferences. It's about embracing the ethos of sharing and giving back, contributing to a collective pool of knowledge and creativity that benefits everyone involved in the digital community.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminServiceModel.create({
      aTitle: "User-Centered Design",
      aDescription: "At its core, user-centered design is about putting your own needs, preferences, and experiences front and center in the creation process. It's about designing digital interfaces and experiences that resonate with you on a personal level, making interactions intuitive, seamless, and satisfying. This service prioritizes your perspective and feedback, ensuring that every aspect of the web applications you use is crafted with your personal comfort, convenience, and enjoyment in mind.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminServiceModel.create({
      aTitle: "Innovation-Focused Approach",
      aDescription: "Embracing an innovation-focused approach on a personal level means committing to continuous exploration and experimentation. It's about cultivating a mindset of curiosity and creativity, leveraging technology to push the boundaries of what's possible in your personal endeavors. This service empowers you to embark on a journey of self-discovery and invention, harnessing digital solutions to spark new ideas, solve problems, and uncover untapped opportunities in your personal projects and pursuits.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminServiceModel.create({
      aTitle: "Custom Web Applications",
      aDescription: "As a personal endeavor, crafting custom web applications involves tailoring digital solutions to your unique aspirations and needs. This service revolves around translating your individual vision into reality through the creation of personalized online tools and platforms. Whether you're envisioning a digital workspace to fuel your creative pursuits or a specialized application to streamline your daily activities, custom web application development is dedicated to bringing your personal projects to life in the digital realm.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Admin Service Created");

    // --- Create Admin Counter ---
    await AdminCounterModel.create({
      aTitle: "08+",
      aSubtitle: "Frontend Application Deployed",
      aDescription: "User-friendly interfaces for seamless interaction. Deployed applications designed to engage and satisfy users. Demonstrated success in deployment.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminCounterModel.create({
      aTitle: "08+",
      aSubtitle: "Backend Applications Established",
      aDescription: "Robust systems for data processing. Established solutions to support your application's functionality. Proven reliability in deployment.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AdminCounterModel.create({
      aTitle: "08+",
      aSubtitle: "Admin Applications Published",
      aDescription: "Custom-made panels for easy management. Tailored solutions to handle tasks efficiently. Trusted track record in deployment.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Admin Counter Created");
    
    // --- Create Hero ---
    await HeroModel.create({
      aTitle: "Bellatrix Enterprise",
      aSubtitle: "Navigating Beyond Horizon",
      aDescription: "A proficient organization specializing in developing bespoke web applications for fostering personal innovation with Beehive Corporation.",
      aDetail: "",
      dTag: "✨ The Beta Star (σC:γG:βS)",
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
Bellatrix is the Beta Enterprise of Tadpole Organisation. 
This enterprise consists of two small companies. These companies are:
1) Techfolio Firm (α Company)
2) Blogify Firm (β Company)
      `,
      dTag: "truly",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await AboutCompanyModel.create({
      aTitle: "🧬 Relatively About Company",
      aDetail: `
Bellatrix is the Beta Star of Tadpole Galaxy. 
This star consists of two planets around. These planets are:
1) Techfolio Planet (α Planet)
2) Blogify Planet (β Planet)
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
      aDescription: "Open source code embodies the spirit of collaboration, transparency, and community-driven innovation. By embracing open source principles on a personal level, you have access to a wealth of shared knowledge, resources, and codebases that can enrich your digital projects. This service enables you to tap into a vibrant ecosystem of developers, enthusiasts, and contributors, empowering you to customize, extend, and improve upon existing software solutions to better suit your personal needs and preferences. It's about embracing the ethos of sharing and giving back, contributing to a collective pool of knowledge and creativity that benefits everyone involved in the digital community.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await ServiceModel.create({
      aTitle: "User-Centered Design",
      aDescription: "At its core, user-centered design is about putting your own needs, preferences, and experiences front and center in the creation process. It's about designing digital interfaces and experiences that resonate with you on a personal level, making interactions intuitive, seamless, and satisfying. This service prioritizes your perspective and feedback, ensuring that every aspect of the web applications you use is crafted with your personal comfort, convenience, and enjoyment in mind.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await ServiceModel.create({
      aTitle: "Innovation-Focused Approach",
      aDescription: "Embracing an innovation-focused approach on a personal level means committing to continuous exploration and experimentation. It's about cultivating a mindset of curiosity and creativity, leveraging technology to push the boundaries of what's possible in your personal endeavors. This service empowers you to embark on a journey of self-discovery and invention, harnessing digital solutions to spark new ideas, solve problems, and uncover untapped opportunities in your personal projects and pursuits.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await ServiceModel.create({
      aTitle: "Custom Web Applications",
      aDescription: "As a personal endeavor, crafting custom web applications involves tailoring digital solutions to your unique aspirations and needs. This service revolves around translating your individual vision into reality through the creation of personalized online tools and platforms. Whether you're envisioning a digital workspace to fuel your creative pursuits or a specialized application to streamline your daily activities, custom web application development is dedicated to bringing your personal projects to life in the digital realm.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Service Created");

    // --- Create Counter ---
    await CounterModel.create({
      aTitle: "08+",
      aSubtitle: "Frontend Application Deployed",
      aDescription: "User-friendly interfaces for seamless interaction. Deployed applications designed to engage and satisfy users. Demonstrated success in deployment.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await CounterModel.create({
      aTitle: "08+",
      aSubtitle: "Backend Applications Established",
      aDescription: "Robust systems for data processing. Established solutions to support your application's functionality. Proven reliability in deployment.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    await CounterModel.create({
      aTitle: "08+",
      aSubtitle: "Admin Applications Published",
      aDescription: "Custom-made panels for easy management. Tailored solutions to handle tasks efficiently. Trusted track record in deployment.",
      bCreatedAt: new Date(Date.now()),
      bCreatedBy: shraddha._id,
    });

    console.log("✅ Counter Created");

    process.exit(0);

  } catch (error) {
    console.error("❌ Permission seeding failed:", error);
    process.exit(1);
  }
};

seeder();

