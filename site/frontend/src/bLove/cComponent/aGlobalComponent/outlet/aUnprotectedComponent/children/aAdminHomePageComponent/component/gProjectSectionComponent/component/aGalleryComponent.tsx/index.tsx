"use client";

import { Carousel, Card } from "@/aConnection/bShadcnConnection/components/ui/apple-cards-carousel";

import FancyPink_01 from '@/bLove/hAsset/fancy-pink-001.jpg'
// import FancyPink_02 from '@/bLove/hAsset/fancy-pink-002.jpg'
// import FancyPink_03 from '@/bLove/hAsset/fancy-pink-003.jpg'
// import FancyPink_04 from '@/bLove/hAsset/fancy-pink-004.jpg'
import Navy_01 from '@/bLove/hAsset/navy-001.jpg'
// import Navy_02 from '@/bLove/hAsset/navy-002.jpg'
// import Navy_03 from '@/bLove/hAsset/navy-003.jpg'
import FuchsiaRaspberry_01 from '@/bLove/hAsset/fuchsia-raspberry-001.jpg'
// import FuchsiaRaspberry_02 from '@/bLove/hAsset/fuchsia-raspberry-002.jpg'
// import FuchsiaRaspberry_03 from '@/bLove/hAsset/fuchsia-raspberry-003.jpg'
// import FuchsiaRaspberry_04 from '@/bLove/hAsset/fuchsia-raspberry-004.jpg'
// import FuchsiaRaspberry_05 from '@/bLove/hAsset/fuchsia-raspberry-005.jpg'
// import FuchsiaRaspberry_06 from '@/bLove/hAsset/fuchsia-raspberry-006.jpg'
// import FuchsiaRaspberry_07 from '@/bLove/hAsset/fuchsia-raspberry-007.jpg'
import Camouflage_01 from '@/bLove/hAsset/camouflage-001.jpg'
// import Camouflage_02 from '@/bLove/hAsset/camouflage-002.jpg'
import Camouflage_03 from '@/bLove/hAsset/camouflage-003.jpg'
// import Camouflage_04 from '@/bLove/hAsset/camouflage-004.jpg'
// import Camouflage_05 from '@/bLove/hAsset/camouflage-005.jpg'
import AuthModel_01 from '@/bLove/hAsset/auth-model.jpg'


export function GalleryComponent() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  const dummyContentData = [
    {
      aTitle: "The first rule of Apple club is that you boast about Apple club.",
      aDescription:
        "Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem — Langotiya Jeetu ka mara hua yaar is ready to capture every thought.",
      aImage: FancyPink_01,
    },
    {
      aTitle: "Creativity starts when you stop copying others.",
      aDescription:
        "Discover your original spark. Whether it's art, code, or coffee recipes — your ideas deserve a unique voice.",
      aImage: Navy_01,
    },
    {
      aTitle: "Design is intelligence made visible.",
      aDescription:
        "Transform your concepts into experiences. Our minimal layouts highlight clarity, precision, and purpose.",
      aImage: FuchsiaRaspberry_01,
    },
    {
      aTitle: "Innovation is born from frustration.",
      aDescription:
        "Turn every 'why doesn’t this work' moment into an opportunity for invention. That’s the spirit of creation.",
      aImage: Camouflage_01,
    },
    {
      aTitle: "Simplicity is the ultimate sophistication.",
      aDescription:
        "Strip away the unnecessary. Focus on what matters most — seamless function wrapped in elegance.",
      aImage: AuthModel_01,
    },
    {
      aTitle: "Every pixel tells a story.",
      aDescription:
        "From color to contrast, every design decision crafts emotion. Make every detail intentional.",
      aImage: Camouflage_03,
    },
  ];

  return (
    <>
      {dummyContentData.map((each, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src={each.aImage}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: FancyPink_01,
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: Navy_01,
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: FuchsiaRaspberry_01,
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: Camouflage_01,
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: AuthModel_01,
    content: <DummyContent />,
  },
];
