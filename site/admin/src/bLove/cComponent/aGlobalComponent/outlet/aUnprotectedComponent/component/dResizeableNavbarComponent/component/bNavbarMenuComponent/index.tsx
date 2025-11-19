"use client";
import React, { ReactNode, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/aConnection/bShadcnConnection/components/ui/navbar-menu";
import { PointerHighlight } from "@/aConnection/bShadcnConnection/components/ui/pointer-highlight";


type NavbarUtilityComponentType = {
  navItems: {
    name: string;
    link: string;
    icon?: ReactNode;
    subItems?: {
      name: string;
      link: string;
      icon?: ReactNode;
    }[];
  }[];
  type: "desktop" | "mobile";
}

export function NavbarUtilityComponent(props: NavbarUtilityComponentType) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <React.Fragment>
      {props.type === "desktop" && (
        <React.Fragment>
          <Menu 
            setActive={setActive}
            link={"/#"}
          >

            {props.navItems.filter((each) => each.name !== "").map((each, index) => (
              <React.Fragment>
                <MenuItem setActive={setActive} active={active} item={each.icon} key={index}>
                  <div className="text-sm flex flex-col flex-1 gap-10 p-4">

                    <PointerHighlight>
                      <h2 className="font-myPrimaryFont text-4xl md:text-5xl font-bold">
                        <HoveredLink href={each.link}>
                          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            {each.name}
                          </span>
                        </HoveredLink>
                      </h2>     
                    </PointerHighlight>

                    <div className="flex flex-col col-span-2 space-y-4 text-sm">
                      {each.subItems?.map((subItem, subIndex) => (
                        <React.Fragment>
                          <HoveredLink key={subIndex} href={subItem.link}>
                            <span className="flex items-center gap-2">
                              {subItem.icon}
                              {subItem.name}
                            </span>
                          </HoveredLink>
                        </React.Fragment>
                      ))}
                    </div>


                    {/* <ProductItem
                      title="Andromeda Application"
                      href="#about-company"
                      src={ProductImage_001}
                      description="Learn more about the story, mission, and people behind the brand."
                    /> */}

                    {/* <ProductItem
                      title="About Application"
                      href="#about-application"
                      src={ProductImage_001}
                      description="Discover how our application empowers users to achieve more."
                    /> */}

                    {/* <ProductItem
                      title="Services"
                      href="#services"
                      src={ProductImage_001}
                      description="Explore our diverse range of professional services."
                    /> */}

                    {/* <ProductItem
                      title="Counters"
                      href="#counters"
                      src={ProductImage_001}
                      description="Showcase your company’s milestones and achievements in numbers."
                    /> */}

                    {/* <ProductItem
                      title="Project Section"
                      href="#projects"
                      src={ProductImage_001}
                      description="Display curated highlights of your best work and collaborations."
                    /> */}

                    {/* <ProductItem
                      title="Project Groups"
                      href="#project-groups"
                      src={ProductImage_001}
                      description="Organize projects into meaningful groups and categories."
                    /> */}

                    {/* <ProductItem
                      title="Projects"
                      href="#projects"
                      src={ProductImage_001}
                      description="A detailed look at each individual project we’ve crafted."
                    /> */}

                    {/* <ProductItem
                      title="Branches"
                      href="#branches"
                      src={ProductImage_001}
                      description="Explore our global or regional branch locations and teams."
                    /> */}

                    {/* <ProductItem
                      title="Contact Info"
                      href="#contact-info"
                      src={ProductImage_001}
                      description="Get in touch with us through various communication channels."
                    /> */}

                    {/* <ProductItem
                      title="Rogue"
                      href="https://userogue.com"
                      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                      description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                    /> */}
                  </div>
                </MenuItem>
              </React.Fragment>
            ))}

          </Menu>
        </React.Fragment>
      )}

      {props.type === "mobile" && (
        <React.Fragment>
          {props.navItems.map((each, index) => (
            <a
              key={`mobile-link-${index}`}
              href={each.link}
              // onClick={() => setIsMobileMenuOpen(false)}
              className="relative"
            >
              <span className="block">{each.name}</span>
            </a>
          ))}

        </React.Fragment>
      )}

    </React.Fragment>
  );
}
