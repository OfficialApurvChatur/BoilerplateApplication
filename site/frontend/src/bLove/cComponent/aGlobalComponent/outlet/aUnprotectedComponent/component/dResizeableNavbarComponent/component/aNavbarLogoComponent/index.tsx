import brandConnection from "@/aConnection/eBrandConnection";
import fullRoute from "@/bLove/gRoute/bFullRoute";
import Logo from "@/bLove/hAsset/HeroBanner/Logo.png"


export const NavbarLogo = () => {
  return (
    <a
      href={fullRoute.aGlobalRoute.aUnprotectedRoute.aAdminHomePageRoute}
      className="relative z-20 flex items-center space-x-2 px-2 py-1 text-base font-normal"
    >
      <img
        src={Logo}
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-bold font-myPrimaryFont truncate">{brandConnection.bBrandName}</span>
    </a>
  );
};
