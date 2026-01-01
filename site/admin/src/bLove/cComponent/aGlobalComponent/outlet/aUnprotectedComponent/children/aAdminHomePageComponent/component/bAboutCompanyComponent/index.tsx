import React from 'react'
import { AboutCompanyComponentDataType } from '../../';

// import Anisha_Wase from "@/bLove/hAsset/Avatar/Anisha_Wase.png";
// import Ashlesha_Wase from "@/bLove/hAsset/Avatar/Ashlesha_Wase.png";
// import Astha_Jain from "@/bLove/hAsset/Avatar/Astha_Jain.png";
// import Avrutti_Hadke from "@/bLove/hAsset/Avatar/Avrutti_Hadke.png";
// import Dhruvika_Khinvasara from "@/bLove/hAsset/Avatar/Dhruvika_Khinvasara.png";
// import Geeta_Kulkarni from "@/bLove/hAsset/Avatar/Geeta_Kulkarni.png";
// import Hema_Kalsha from "@/bLove/hAsset/Avatar/Hema_Kalsha.png";
// import Kanak_Kshirsagar from "@/bLove/hAsset/Avatar/Kanak_Kshirsagar.png";
// import Kirti_Turkar from "@/bLove/hAsset/Avatar/Kirti_Turkar.png";
// import Mayuri_Sangidwar from "@/bLove/hAsset/Avatar/Mayuri_Sangidwar.png";
// import Nayan_Choudhari from "@/bLove/hAsset/Avatar/Nayan_Choudhari.png";
// import Priti_Bokade from "@/bLove/hAsset/Avatar/Priti_Bokade.png";
// import Purva_Ukey from "@/bLove/hAsset/Avatar/Purva_Ukey.png";
// import Rashi_Suryawanshi from "@/bLove/hAsset/Avatar/Rashi_Suryawanshi.png";
// import Rutuja_Bhoyar from "@/bLove/hAsset/Avatar/Rutuja_Bhoyar.png";


type AboutCompanyComponentType = {
  reduxCall: any,
  apiResponse: {
    truly: AboutCompanyComponentDataType;
    relatively: AboutCompanyComponentDataType;
  },
}

const AboutCompanyComponent = (props: AboutCompanyComponentType) => {
  // Destructure Props
  const { apiResponse } = props;

  // JSX
  return (
    <React.Fragment>
      {/* AboutCompanyComponent */}

      <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Truly About Company Section
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Image: {apiResponse.truly.aImage}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Title: {apiResponse.truly.aTitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Subtitle: {apiResponse.truly.aSubtitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Description: {apiResponse.truly.aDescription}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Tag: {apiResponse.truly.dTag}
        </p>
      </div>

      <div className="py-8" >
        <p className="font-myPrimaryFont text-2xl" >
          Relatively About Company Section
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Image: {apiResponse.relatively.aImage}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Title: {apiResponse.relatively.aTitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Subtitle: {apiResponse.relatively.aSubtitle}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Description: {apiResponse.relatively.aDescription}
        </p>
        <p className="font-mySecondaryFont text-sm" >
          Tag: {apiResponse.relatively.dTag}
        </p>
      </div>
    </React.Fragment>
  )
}

export default AboutCompanyComponent;
