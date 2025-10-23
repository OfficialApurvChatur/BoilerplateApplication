import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";

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
import Rutuja_Bhoyar from '@/bLove/hAsset/Avatar/Rutuja_Bhoyar.png'
import Saloni_Meshram from '@/bLove/hAsset/Avatar/Saloni_Meshram.png'
import Sanaa from '@/bLove/hAsset/Avatar/Sanaa.png'


interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface TechnologyComponentProps {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

const TechnologyComponent = ({
  heading = "Technologies Used",
  subheading = "We're hiring",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  members = [
    {
      id: "Anisha_Wase",
      name: "Anisha_Wase",
      role: "Admin",
      avatar: Anisha_Wase,
    },
    {
      id: "Anushree_Mandape",
      name: "Anushree_Mandape",
      role: "Admin",
      avatar: Anushree_Mandape,
    },
    {
      id: "Ashlesha_Wase",
      name: "Ashlesha_Wase",
      role: "Admin",
      avatar: Ashlesha_Wase,
    },
    {
      id: "Astha_Jain",
      name: "Astha_Jain",
      role: "Admin",
      avatar: Astha_Jain,
    },
    {
      id: "Avrutti_Hadke",
      name: "Avrutti_Hadke",
      role: "Costomer",
      avatar: Avrutti_Hadke,
    },
    {
      id: "Dhruvika_Khinvasara",
      name: "Dhruvika_Khinvasara",
      role: "Admin",
      avatar: Dhruvika_Khinvasara,
    },
    {
      id: "Geeta_Kulkarni",
      name: "Geeta_Kulkarni",
      role: "Costomer",
      avatar: Geeta_Kulkarni,
    },
    {
      id: "Hema_Kalsha",
      name: "Hema_Kalsha",
      role: "Costomer",
      avatar: Hema_Kalsha,
    },
    {
      id: "Kanak_Kshirsagar",
      name: "Kanak_Kshirsagar",
      role: "Costomer",
      avatar: Kanak_Kshirsagar,
    },
    {
      id: "Kirti_Turkar",
      name: "Kirti_Turkar",
      role: "Costomer",
      avatar: Kirti_Turkar,
    },
    {
      id: "Mayuri_Sangidwar",
      name: "Mayuri_Sangidwar",
      role: "Costomer",
      avatar: Mayuri_Sangidwar,
    },
    {
      id: "Nayan_Choudhari",
      name: "Nayan_Choudhari",
      role: "Costomer",
      avatar: Nayan_Choudhari,
    },
    {
      id: "Priti_Bokade",
      name: "Priti_Bokade",
      role: "Costomer",
      avatar: Priti_Bokade,
    },
    {
      id: "Purva_Ukey",
      name: "Purva_Ukey",
      role: "Costomer",
      avatar: Purva_Ukey,
    },
    {
      id: "Rashi_Suryawanshi",
      name: "Rashi_Suryawanshi",
      role: "Costomer",
      avatar: Rashi_Suryawanshi,
    },
    {
      id: "Rutuja_Bhoyar",
      name: "Rutuja_Bhoyar",
      role: "Costomer",
      avatar: Rutuja_Bhoyar,
    },
    {
      id: "Saloni_Meshram",
      name: "Saloni_Meshram",
      role: "Costomer",
      avatar: Saloni_Meshram,
    },
    {
      id: "Sanaa",
      name: "Sanaa",
      role: "Costomer",
      avatar: Sanaa,
    },
  ],
}: TechnologyComponentProps) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <p className="semibold">{subheading}</p>
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          {heading}
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          {description}
        </p>
      </div>
      <div className="container mt-16 grid gap-x-8 gap-y-16 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {members.map((person) => (
          <div key={person.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={person.avatar} />
              <AvatarFallback>{person.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{person.name}</p>
            <p className="text-center text-muted-foreground">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { TechnologyComponent };
