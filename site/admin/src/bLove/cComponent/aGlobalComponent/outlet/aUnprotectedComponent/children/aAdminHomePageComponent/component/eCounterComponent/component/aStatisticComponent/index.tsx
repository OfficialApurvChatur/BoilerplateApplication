import { RocketIcon, UsersIcon, LightbulbIcon, GlobeIcon, TrophyIcon } from "lucide-react";
import { ReactNode } from "react";

export const StatisticComponent = () => {
  interface statsProps {
    icon: ReactNode; // or ReactNode if you'll use icon components
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
  {
    icon: <RocketIcon color="#00ff80" />,
    quantity: "120+",
    description: "Projects Delivered",
  },
  {
    icon: <UsersIcon color="#00bfff" />,
    quantity: "75+",
    description: "Global Clients",
  },
  {
    icon: <LightbulbIcon color="#ffcc00" />,
    quantity: "50+",
    description: "Innovative Solutions",
  },
  {
    icon: <GlobeIcon color="#ff6b6b" />,
    quantity: "10+",
    description: "Countries Served",
  },
  {
    icon: <TrophyIcon color="#ff8c00" />,
    quantity: "15+",
    description: "Industry Recognitions",
  },
];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-center">
        {stats.map(({ icon, quantity, description }: statsProps) => (
          <div
            key={description}
            className="flex flex-col items-center justify-center text-center gap-2 space-y-2"
          >
            <h2 className="font-myPrimaryFont text-4xl sm:text-5xl font-bold ">{icon}</h2>
            <p className="font-mySecondaryFont text-4xl text-muted-foreground">{quantity}</p>
            <p className="font-mySecondaryFont text-base text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
