import pilot from "@/bLove/hAsset/Avatar/Geeta_Kulkarni.png";
import { StatisticComponent } from "./component/aStatisticComponent";
import { Typewriter } from "@/aConnection/bShadcnConnection/components/ui/typewriter";


interface AboutComponentProps {
  reduxCall: any;
  // apiCall: any;
}

const DEMO_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
amet, consectetur adipiscing elit. 
`;

export const AboutComponent = (_props: AboutComponentProps) => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="font-myPrimaryFont text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Truly{" "}
                </span>
                About Company
              </h2>
              {/* <p className="text-xl text-muted-foreground mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. 
              </p> */}
              <Typewriter text={DEMO_TEXT} renderMarkdown className="prose font-mySecondaryFont text-lg text-muted-foreground mt-4" />
            </div>
            <StatisticComponent />
          </div>
        </div>
      </div>
    </section>
  );
};
