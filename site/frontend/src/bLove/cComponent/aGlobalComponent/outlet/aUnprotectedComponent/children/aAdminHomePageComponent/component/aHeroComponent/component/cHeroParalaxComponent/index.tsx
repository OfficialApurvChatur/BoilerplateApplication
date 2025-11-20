"use client";

import { HeroParallax } from "@/aConnection/bShadcnConnection/components/ui/hero-parallax";
import { HeroComponentDataType } from "../../../..";

import Anisha_Wase from '@/bLove/hAsset/Avatar/Anisha_Wase.png'
import Anushree_Mandape from '@/bLove/hAsset/Avatar/Anushree_Mandape.png'
import Ashlesha_Wase from '@/bLove/hAsset/Avatar/Ashlesha_Wase.png'
import Astha_Jain from '@/bLove/hAsset/Avatar/Astha_Jain.png'
import Avrutti_Hadke from '@/bLove/hAsset/Avatar/Avrutti_Hadke.png'
import Dhruvika_Khinvasara from '@/bLove/hAsset/Avatar/Dhruvika_Khinvasara.png'
import Geeta_Kulkarni from '@/bLove/hAsset/Avatar/Geeta_Kulkarni.png'
import Hema_Kalsha from '@/bLove/hAsset/Avatar/Hema_Kalsha.png'
import Kanak_Kshirsagar from '@/bLove/hAsset/Avatar/Kanak_Kshirsagar.png'
import Kirti_Turkar from '@/bLove/hAsset/Avatar/Kirti_Turkar.png'
import Mayuri_Sangidwar from '@/bLove/hAsset/Avatar/Mayuri_Sangidwar.png'
import Nayan_Choudhari from '@/bLove/hAsset/Avatar/Nayan_Choudhari.png'
import Priti_Bokade from '@/bLove/hAsset/Avatar/Priti_Bokade.png'
import Purva_Ukey from '@/bLove/hAsset/Avatar/Purva_Ukey.png'
import Rashi_Suryawanshi from '@/bLove/hAsset/Avatar/Rashi_Suryawanshi.png'


type HeroParallaxDemoType = {
  reduxCall: any,
  apiResponse: HeroComponentDataType,
}

export function HeroParallaxDemo(props: HeroParallaxDemoType) {
  return <HeroParallax 
    products={products} 
    reduxCall={props.reduxCall}
    apiResponse={props.apiResponse}  
  />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: Anisha_Wase,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: Anushree_Mandape,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: Ashlesha_Wase,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: Astha_Jain,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: Avrutti_Hadke,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: Dhruvika_Khinvasara,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: Geeta_Kulkarni,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: Hema_Kalsha,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: Kanak_Kshirsagar,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: Kirti_Turkar,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: Mayuri_Sangidwar,
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: Nayan_Choudhari,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: Priti_Bokade,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: Purva_Ukey,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: Rashi_Suryawanshi,
  },
];
