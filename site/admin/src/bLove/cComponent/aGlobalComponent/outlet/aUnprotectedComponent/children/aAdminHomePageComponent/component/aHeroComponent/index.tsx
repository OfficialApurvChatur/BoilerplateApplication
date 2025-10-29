import React from "react";
// import { ArrowDownRight, Star } from "lucide-react";

// import { Avatar, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";
// import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";

// import FuchsiaRaspberry_06 from '@/bLove/hAsset/fuchsia-raspberry-006.jpg'
// import Swati_Patil from '@/bLove/hAsset/Avatar/Swati_Patil.png'
// import Urvashi_Gupta from '@/bLove/hAsset/Avatar/Urvashi_Gupta.png'
// import Vasupradha_Agrawal from '@/bLove/hAsset/Avatar/Vasupradha_Agrawal.png'
// import Anisha_Wase from '@/bLove/hAsset/Avatar/Anisha_Wase.png'
// import Anushree_Mandape from '@/bLove/hAsset/Avatar/Anushree_Mandape.png'


type HeroComponentType = {
  reduxCall: any,
  apiCall: any,
}

// type Hero = {
//   aImage: string;
//   aTitle: string;
//   aSubtitle: string;
//   aDescription: string;
//   dTag: string;
//   dWebLinks?: {
//     aLinkLabel: string;
//     bLinkURL: string;
//   }[];
//   dSocialLinks?: {
//     aLinkLabel: string;
//     bLinkURL: string;
//   }[];
//   dGalleryImages?: string[];
// }

// type AboutCompany = {
//   aImage: string;
//   aTitle: string;
//   aSubtitle: string;
//   aDescription: string;
//   aDetail: string;
//   dTag: string;
// }

// type AboutApplication = {
//   aTitle?: string;
//   aSubtitle?: string;
//   aDescription?: string;
//   [key: string]: any;
// }

// type ContactInfo = {
//   aImage: string;
//   aTitle: string;
//   aSubtitle: string;
//   dPhone: string;
//   dEmail: string;
//   dAddress: string;
// }

// type Service = {
//   aImage: string;
//   aTitle: string;
//   aSubtitle: string;
//   aDescription: string;
//   aDetail: string;
// }

// type Counter = {
//   aImage: string;
//   aTitle: string;
//   aSubtitle: string;
//   aDescription: string;
//   aDetail: string;
// }

// type Project = {
//   aImage: string;
//   aTitle: string;
//   aSubtitle: string;
//   aDescription: string;
//   dSocialLinks: string[];
//   dWebLinks: string[];
// }

// type ProjectGroup = {
//   aTitle: string;
//   aSubtitle: string;
//   aDescription: string;
//   cProjects: Project[];
// }

// type ProjectSection = {
//   aTitle: string;
//   aSubtitle: string;
//   aDescription: string;
//   cProjectGroups: ProjectGroup[];
// }

// type BranchSection = {
//   aTitle: string;
//   aSubtitle: string;
//   aDescription: string;
//   cBranchGroups: ProjectGroup[];
// }

// type HomePageData = {
//   hero: Hero;
//   aboutCompany: {
//     actually: AboutCompany;
//     comparative: AboutCompany;
//   };
//   aboutApplication: AboutApplication;
//   contactInfo: ContactInfo;
//   services: Service[];
//   counters: Counter[];
//   projectSections: ProjectSection;
//   branchSections: BranchSection;
// }

// type DataType = {
//   heroImage?: any;
//   heading?: string;
//   description?: string;
//   buttons?: {
//     primary?: {
//       text: string;
//       url: string;
//     };
//     secondary?: {
//       text: string;
//       url: string;
//     };
//   };
//   reviews?: {
//     count: number;
//     avatars: {
//       src: any;
//       alt: string;
//     }[];
//     rating?: number;
//   };
// }

const HeroComponent = (_props: HeroComponentType) => {
  // Destructure Props
  // const { apiCall } = props;

  // Destructure Data
  // const { hero, aboutCompa } = apiCall

  // const data: DataType = {
  //   heroImage: FuchsiaRaspberry_06,
  //   heading: `${brandConnection.bBrandName}`,
  //   description: `We build full-stack web applications and maintain their brand identity — 
  //           merging innovation with timeless digital craftsmanship.`,
  //   buttons: {
  //     primary: {
  //       text: "Sign Up",
  //       url: "https://www.shadcnblocks.com",
  //     },
  //     secondary: {
  //       text: "Get Started",
  //       url: "https://www.shadcnblocks.com",
  //     },
  //   },
  //   reviews: {
  //     count: 200,
  //     rating: 5.0,
  //     avatars: [
  //       {
  //         src: Swati_Patil,
  //         alt: "Swati_Patil",
  //       },
  //       {
  //         src: Urvashi_Gupta,
  //         alt: "Urvashi_Gupta",
  //       },
  //       {
  //         src: Vasupradha_Agrawal,
  //         alt: "Vasupradha_Agrawal",
  //       },
  //       {
  //         src: Anisha_Wase,
  //         alt: "Anisha_Wase",
  //       },
  //       {
  //         src: Anushree_Mandape,
  //         alt: "Anushree_Mandape",
  //       },
  //     ],
  //   },
  // }

  // JSX
  return (
    <React.Fragment>

      <div>
        <p>
          Title:
        </p>
        <p>
          Subtitle:
        </p>
        <p>
          Description:
        </p>
        <p>
          Tag:
        </p>
        <p>
          Social Links:
        </p>
        <p>
          Web Links:
        </p>
      </div>

      {/* <section>
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="flex">
            <img
              src={data.heroImage}
              alt="placeholder hero"
              className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[650px]"
            />
          </div>
          <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
            <h1 className="font-myPrimaryFont my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl">
              {data.heading}
            </h1>
            <p className="font-mySecondaryFont text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {data.description}
            </p>
            <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
              <span className="inline-flex items-center -space-x-4">
                {data.reviews?.avatars.map((avatar, index) => (
                  <Avatar key={index} className="size-12 border">
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                  </Avatar>
                ))}
              </span>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="size-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="mr-1 font-semibold">
                    {data.reviews?.rating?.toFixed(1)}
                  </span>
                </div>
                <p className="text-muted-foreground text-left font-medium">
                  from {data.reviews?.count}+ reviews
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {data.buttons?.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={data.buttons?.primary.url}>{data.buttons?.primary.text}</a>
                </Button>
              )}
              {data.buttons?.secondary && (
                <Button asChild variant="outline">
                  <a href={data.buttons?.secondary.url}>
                    {data.buttons?.secondary.text}
                    <ArrowDownRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section> */}
    </React.Fragment>
  );
};

export { HeroComponent };