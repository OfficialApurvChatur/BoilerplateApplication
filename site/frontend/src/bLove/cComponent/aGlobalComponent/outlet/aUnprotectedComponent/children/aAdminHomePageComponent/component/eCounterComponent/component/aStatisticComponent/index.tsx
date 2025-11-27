import { RocketIcon, UsersIcon, LightbulbIcon } from "lucide-react";
import { ReactNode } from "react";
import { CounterComponentDataType } from "../../../..";


type StatisticComponentType = {
  reduxCall: any,
  apiResponse: CounterComponentDataType[],
}

export const StatisticComponent = (props: StatisticComponentType) => {
  interface statsProps {
    icon: ReactNode; // or ReactNode if you'll use icon components
    title: string;
    subtitle: string;
    description: string;
  }

  const stats: statsProps[] = props.apiResponse.map((each, index) => ({
    icon: (
      index === 0 ? <RocketIcon color="#00ff80" /> :
      index === 1 ? <UsersIcon color="#00bfff" /> :
      index === 2 ? <LightbulbIcon color="#ffcc00" /> :
      <RocketIcon color="#00ff80" />
    ),
    title: each.aTitle,
    subtitle: each.aSubtitle,
    description: each.aDescription,
  }));

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 items-center">
      {stats.map((each: statsProps) => (
        <div
          key={each.title}
          className="flex flex-col items-center justify-center text-center gap-2 space-y-2"
        >
          <h2 className="font-myPrimaryFont text-4xl sm:text-5xl font-bold ">{each.icon}</h2>
          <p className="font-mySecondaryFont text-4xl text-muted-foreground">{each.title}</p>
          <p className="font-mySecondaryFont text-lg text-foreground">{each.subtitle}</p>
          <p className="font-mySecondaryFont text-base text-muted-foreground">{each.description}</p>
        </div>
      ))}
    </div>
  );
};
