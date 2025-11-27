import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/aConnection/bShadcnConnection/components/ui/draggable-card";

import RandomModel_01 from "@/bLove/hAsset/RandomModel/pexels-achi-murusidze-2064615248-33202628.jpg";
import RandomModel_02 from "@/bLove/hAsset/RandomModel/pexels-airamdphoto-32580910.jpg";
import RandomModel_03 from "@/bLove/hAsset/RandomModel/pexels-anthony-dalesandro-1601290757-33135568.jpg";
import RandomModel_04 from "@/bLove/hAsset/RandomModel/pexels-armin-rimoldi-5269452.jpg";
import RandomModel_05 from "@/bLove/hAsset/RandomModel/pexels-edurawpro-30980130.jpg";
import RandomModel_06 from "@/bLove/hAsset/RandomModel/pexels-fran-bertucci-117223268-11279346.jpg";
import RandomModel_07 from "@/bLove/hAsset/RandomModel/pexels-larry-jenkins-517655117-33130523.jpg";
import RandomModel_08 from "@/bLove/hAsset/RandomModel/pexels-omega-edicion-1981515491-30955548.jpg";
import RandomModel_09 from "@/bLove/hAsset/RandomModel/pexels-omega-edicion-1981515491-30955549.jpg";
import RandomModel_10 from "@/bLove/hAsset/RandomModel/pexels-soldiervip-20617325.jpg";
import RandomModel_11 from "@/bLove/hAsset/RandomModel/pexels-tugrulkurnaz-12730952.jpg";
import RandomModel_12 from "@/bLove/hAsset/RandomModel/pexels-vanngo-ng-105653827-19284933.jpg";

import { AboutApplicationComponentDataType } from "../../../..";


type DraggableCardComponentType = {
  reduxCall: any,
  apiResponse: AboutApplicationComponentDataType,
}

export function DraggableCardComponent(props: DraggableCardComponentType) {
  const positions = [
    "absolute top-10 left-[10%] rotate-[-6deg]",
    "absolute top-28 left-[25%] rotate-[4deg]",
    "absolute top-5 left-[40%] rotate-[7deg]",
    "absolute top-36 left-[55%] rotate-[-8deg]",
    "absolute top-16 left-[70%] rotate-[5deg]",
    "absolute top-52 left-[15%] rotate-[9deg]",
    "absolute top-72 left-[30%] rotate-[-5deg]",
    "absolute top-44 left-[50%] rotate-[3deg]",
    "absolute top-64 left-[65%] rotate-[-4deg]",
    "absolute top-24 left-[80%] rotate-[6deg]",
    "absolute top-80 left-[40%] rotate-[-9deg]",
    "absolute top-60 left-[10%] rotate-[8deg]",
  ];

  const images = [
    RandomModel_01,
    RandomModel_02,
    RandomModel_03,
    RandomModel_04,
    RandomModel_05,
    RandomModel_06,
    RandomModel_07,
    RandomModel_08,
    RandomModel_09,
    RandomModel_10,
    RandomModel_11,
    RandomModel_12,
  ];

  const items = props.apiResponse.dTechIcon.map((each, index) => ({
    title: each.bIconValue,
    image: images[index % images.length],
    className: positions[index % positions.length], 
  }));

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If its your first day at Fight Club, you have to fight.
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
