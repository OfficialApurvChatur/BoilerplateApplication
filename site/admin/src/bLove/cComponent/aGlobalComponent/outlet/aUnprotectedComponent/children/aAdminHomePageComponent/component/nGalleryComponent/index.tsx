import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/aConnection/bShadcnConnection/components/ui/carousel";

import FancyPink_01 from '@/bLove/hAsset/fancy-pink-001.jpg'
import FancyPink_02 from '@/bLove/hAsset/fancy-pink-002.jpg'
import FancyPink_03 from '@/bLove/hAsset/fancy-pink-003.jpg'
import FancyPink_04 from '@/bLove/hAsset/fancy-pink-004.jpg'
import Navy_01 from '@/bLove/hAsset/navy-001.jpg'
import Navy_02 from '@/bLove/hAsset/navy-002.jpg'
import Navy_03 from '@/bLove/hAsset/navy-003.jpg'
import FuchsiaRaspberry_01 from '@/bLove/hAsset/fuchsia-raspberry-001.jpg'
import FuchsiaRaspberry_02 from '@/bLove/hAsset/fuchsia-raspberry-002.jpg'
import FuchsiaRaspberry_03 from '@/bLove/hAsset/fuchsia-raspberry-003.jpg'
import FuchsiaRaspberry_04 from '@/bLove/hAsset/fuchsia-raspberry-004.jpg'
import FuchsiaRaspberry_05 from '@/bLove/hAsset/fuchsia-raspberry-005.jpg'
import FuchsiaRaspberry_06 from '@/bLove/hAsset/fuchsia-raspberry-006.jpg'
import FuchsiaRaspberry_07 from '@/bLove/hAsset/fuchsia-raspberry-007.jpg'
import Camouflage_01 from '@/bLove/hAsset/camouflage-001.jpg'
import Camouflage_02 from '@/bLove/hAsset/camouflage-002.jpg'
import Camouflage_03 from '@/bLove/hAsset/camouflage-003.jpg'
import Camouflage_04 from '@/bLove/hAsset/camouflage-004.jpg'
import Camouflage_05 from '@/bLove/hAsset/camouflage-005.jpg'


export interface GalleryComponentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface GalleryComponentProps {
  title?: string;
  description?: string;
  items?: GalleryComponentItem[];
}

const data = [
  {
    id: "Fancy Pink Floral Print",
    title: "Fancy Pink Floral Print",
    description: "Enhanced Cut Triangle Top & Brazilian Cheeky Thong Bikini Bottom",
    href: "https://teenyb.com/products/enhanced-cut-triangle-top-in-fancy-pink-floral-print",
    image: FancyPink_01,
  },
  {
    id: "Navy Floral",
    title: "Navy Floral",
    description: "Enhanced Cut Triangle Bikini Top & Cheeky Thong Bikini Bottom",
    href: "https://teenyb.com/products/floral-navy-cheeky-thong-bikini-bottom",
    image: Navy_01
  },
  {
    id: "Camouflage",
    title: "Camouflage",
    description: "Black Enhanced Cut Triangle Bikini Top & Black Printed Mid Rise Cheeky Thong Bikini Bottom",
    href: "https://teenyb.com/products/camouflage-print-with-black-thong-bikini-bottom",
    image: Camouflage_01
  },
  {
    id: "Fuchsia Raspberry",
    title: "Fuchsia Raspberry",
    description: "Enhanced Cut Triangle Top & Brazilian Cheeky Thong Bikini Bottom",
    href: "https://teenyb.com/products/enhanced-cut-triangle-top-in-fancy-pink-floral-print",
    image: FancyPink_01
  },
  // {
  //   id: "nextjs",
  //   title: "Next.js: The React Framework for Production",
  //   description:
  //     "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
  //   href: "https://nextjs.org",
  //   image: FuchsiaRaspberry_05
  // },
  // {
  //   id: "nextjss",
  //   title: "Next.js: The React Framework for Production",
  //   description:
  //     "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
  //   href: "https://nextjs.org",
  //   image: FuchsiaRaspberry_06
  // },
  // {
  //   id: "nextjss",
  //   title: "Next.js: The React Framework for Production",
  //   description:
  //     "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
  //   href: "https://nextjs.org",
  //   image: FuchsiaRaspberry_07
  // },
];

const slides1 = [
  {
    img: FancyPink_01,
    quote: "Smooth, secure, and irresistible — logging in has never felt this good.",
    author: "Veronica Blaze",
  },
  {
    img: FancyPink_02,
    quote: "This design makes every click feel like a luxury experience.",
    author: "Lola Monroe",
  },
  {
    img: FancyPink_03,
    quote: "Strong security, stunning style — a perfect seduction of design.",
    author: "Scarlett Vane",
  },
  {
    img: FancyPink_04,
    quote: "Strong security, stunning style — a perfect seduction of design.",
    author: "Scarlett Vane",
  },
];

const slides2 = [
  {
    img: Navy_01,
    quote: "Smooth, secure, and irresistible — logging in has never felt this good.",
    author: "Veronica Blaze",
  },
  {
    img: Navy_02,
    quote: "This design makes every click feel like a luxury experience.",
    author: "Lola Monroe",
  },
  {
    img: Navy_03,
    quote: "Strong security, stunning style — a perfect seduction of design.",
    author: "Scarlett Vane",
  },
];

const slides3 = [
  {
    img: FuchsiaRaspberry_01,
    quote: "Smooth, secure, and irresistible — logging in has never felt this good.",
    author: "Veronica Blaze",
  },
  {
    img: FuchsiaRaspberry_02,
    quote: "This design makes every click feel like a luxury experience.",
    author: "Lola Monroe",
  },
  {
    img: FuchsiaRaspberry_03,
    quote: "Strong security, stunning style — a perfect seduction of design.",
    author: "Scarlett Vane",
  },
  {
    img: FuchsiaRaspberry_04,
    quote: "Confidence starts with the first screen. This one oozes charm and safety.",
    author: "Carmen Noir",
  },
  {
    img: FuchsiaRaspberry_05,
    quote: "Seamless, sleek, and oh-so tempting — I could log in all day.",
    author: "Isabella Rose",
  },
  {
    img: FuchsiaRaspberry_06,
    quote: "It’s not just a login… it’s an invitation you can’t resist.",
    author: "Roxanne Wilde",
  },
  {
    img: FuchsiaRaspberry_07,
    quote: "Bold, beautiful, and secure — the kind of screen that turns heads.",
    author: "Selena Storm",
  },
];


const slides4 = [
  {
    img: Camouflage_01,
    quote: "Smooth, secure, and irresistible — logging in has never felt this good.",
    author: "Veronica Blaze",
  },
  {
    img: Camouflage_02,
    quote: "This design makes every click feel like a luxury experience.",
    author: "Lola Monroe",
  },
  {
    img: Camouflage_03,
    quote: "Strong security, stunning style — a perfect seduction of design.",
    author: "Scarlett Vane",
  },
  {
    img: Camouflage_04,
    quote: "Strong security, stunning style — a perfect seduction of design.",
    author: "Scarlett Vane",
  },
  {
    img: Camouflage_05,
    quote: "Strong security, stunning style — a perfect seduction of design.",
    author: "Scarlett Vane",
  },
];


const GalleryComponent = ({
  title = "Our Gallery",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items = data,
}: GalleryComponentProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides2.length);
    }, 5000); // switch every 5s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              {title}
            </h2>
            {/* <p className="max-w-lg text-muted-foreground">{description}</p> */}
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-[calc(theme(container.padding)-20px)] mr-[calc(theme(container.padding))] 2xl:ml-[calc(50vw-700px+theme(container.padding)-20px)] 2xl:mr-[calc(50vw-700px+theme(container.padding))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    {/* <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    /> */}

                    {
                      item.title === "Fancy Pink Floral Print" ? (
                        <React.Fragment>
                          {slides1.map((slide, i) => (
                            <img
                              key={i}
                              src={slide.img}
                              alt={`slide-${i}`}
                              className={`absolute h-full w-full object-cover object-center 
                                transition-all duration-1000 ease-in-out 
                                ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`
                              }
                            />
                            )
                          )}
                        </React.Fragment>
                      ) : 
                      item.title === "Navy Floral" ? (
                        <React.Fragment>
                          {slides2.map((slide, i) => (
                            <img
                              key={i}
                              src={slide.img}
                              alt={`slide-${i}`}
                              className={`absolute h-full w-full object-cover object-center 
                                transition-all duration-1000 ease-in-out 
                                ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`
                              }
                            />
                            )
                          )}
                        </React.Fragment>
                      ) :
                      item.title === "Camouflage" ? (
                        <React.Fragment>
                          {slides3.map((slide, i) => (
                            <img
                              key={i}
                              src={slide.img}
                              alt={`slide-${i}`}
                              className={`absolute h-full w-full object-cover object-center 
                                transition-all duration-1000 ease-in-out 
                                ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`
                              }
                            />
                            )
                          )}
                        </React.Fragment>
                      ) :
                      item.title === "Fuchsia Raspberry" ? (
                        <React.Fragment>
                          {slides4.map((slide, i) => (
                            <img
                              key={i}
                              src={slide.img}
                              alt={`slide-${i}`}
                              className={`absolute h-full w-full object-cover object-center 
                                transition-all duration-1000 ease-in-out 
                                ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`
                              }
                            />
                            )
                          )}
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          {slides2.map((slide, i) => (
                            <img
                              key={i}
                              src={slide.img}
                              alt={`slide-${i}`}
                              className={`absolute h-full w-full object-cover object-center 
                                transition-all duration-1000 ease-in-out 
                                ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`
                              }
                            />
                            )
                          )}
                        </React.Fragment>
                      )
                    }

                    {/* {slides2.map((slide, i) => (
                      <img
                        key={i}
                        src={slide.img}
                        alt={`slide-${i}`}
                        className={`absolute h-full w-full object-cover object-center 
                          transition-all duration-1000 ease-in-out 
                          ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`
                        }
                      />
                      )
                    )} */}

                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { GalleryComponent };
