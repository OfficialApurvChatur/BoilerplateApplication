import { FloatingDock } from "@/aConnection/bShadcnConnection/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";
import { HeroComponentDataType } from "../../../..";


type HeroFloatingDockComponentType = {
  reduxCall: any,
  apiResponse: HeroComponentDataType,
}

export function HeroFloatingDockComponent(props: HeroFloatingDockComponentType) {

  const iconMapping: Record<string, JSX.Element> = {
    Instagram: <IconBrandInstagram className="h-full w-full" />,
    "X (Twitter)": <IconBrandX className="h-full w-full" />,
    Threads: <IconBrandThreads className="h-full w-full" />,
    LinkedIn: <IconBrandLinkedin className="h-full w-full" />,
    GitHub: <IconBrandGithub className="h-full w-full" />,

    // fallback if title doesn't match
    Default: <IconHome className="h-full w-full" />,
  };

  const links = props.apiResponse.dSocialLinks.map(each => ({
    title: each.aLinkTitle,
    icon: iconMapping[each.aLinkTitle] || iconMapping.Default,
    href: each.bLinkURL,
  }))

  return (
    <div className="flex items-center justify-center h-[12rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
