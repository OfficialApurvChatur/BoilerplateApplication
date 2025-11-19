"use client";

// import { Tabs } from "@/aConnection/bShadcnConnection/components/ui/tabs";
// import { TimelineComponent } from "../bTimelineComponent";
// import { PointerHighlight } from "@/aConnection/bShadcnConnection/components/ui/pointer-highlight";
// import { Typewriter } from "@/aConnection/bShadcnConnection/components/ui/typewriter";
import { BranchGroupComponentDataType } from "../../../..";
// import { GlowingEffect } from "@/aConnection/bShadcnConnection/components/ui/glowing-effect";


type AnimatedTabComponentType = {
  reduxCall: any,
  apiResponse: BranchGroupComponentDataType[],
}

export function AnimatedTabComponent(_props: AnimatedTabComponentType) {
  // Destructure Props
  // const { reduxCall, apiResponse } = props;

  // const tabs = apiResponse?.map((each: BranchGroupComponentDataType) => {
  //   const highlightWord = "minimal effort";
  //   const subtitle = each?.aSubtitle || "";
  //   const parts = subtitle.split(new RegExp(`(${highlightWord})`, "gi"));

  //   return ({
  //     aTitle: each.aTitle,
  //     aSubtitle: each.aSubtitle,
  //     aSlug: each.aTitle,
  //     cBranches: (
  //       <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
  //         <GlowingEffect
  //           blur={0}
  //           borderWidth={1}
  //           spread={80}
  //           glow={true}
  //           disabled={false}
  //           proximity={64}
  //           inactiveZone={0.01}
  //         />
  //         <div className="w-full overflow-hidden relative h-fit rounded-2xl p-10 text-white bg-primary-foreground">
  //           <div className="flex flex-col flex-1 justify-center items-center gap-10" >
  //             <PointerHighlight>
  //               <h2 className="font-myPrimaryFont text-4xl md:text-5xl font-bold">
  //                 <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
  //                   {each.aTitle}
  //                 </span>
  //               </h2>     
  //             </PointerHighlight>

  //             <div className="font-mySecondaryFont mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base text-center">
  //               {parts.map((part, index) =>
  //                 part.toLowerCase() === highlightWord.toLowerCase() ? (
  //                   <PointerHighlight
  //                     key={index}
  //                     rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 leading-loose"
  //                     pointerClassName="text-yellow-500 h-3 w-3"
  //                     containerClassName="inline-block mr-1"
  //                   >
  //                     <span className="relative z-10">{part}</span>
  //                   </PointerHighlight>
  //                 ) : (
  //                   <span key={index}>{part}</span>
  //                 )
  //               )}
  //             </div>

  //             <Typewriter 
  //               text={each.aDescription} 
  //               renderMarkdown 
  //               className="prose font-mySecondaryFont text-lg text-muted-foreground text-center" 
  //             /> 

  //             {each.cBranches?.length > 0 && (
  //               <TimelineComponent
  //                 reduxCall={reduxCall}
  //                 apiResponse={(each.cBranches as BranchComponentDataType[])} 
  //               />)
  //             }
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   })
  // })

  return (
    <div className=" h-auto [perspective:1000px] relative b flex flex-col w-full items-center justify-center">

      {/* {JSON.stringify(apiResponse)} */}

      {/* <Tabs 
        tabs={tabs} 
        apiResponse={tabs as {
          aTitle: string;
          aSubtitle: string;
          cBranches?: string | React.ReactNode | any;
        }[]}
        reduxCall={reduxCall}
      /> */}
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <img
//       src={RandomModel}
//       alt="dummy image"
//       width="1000"
//       height="1000"
//       className="object-cover h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//     />
//   );
// };
