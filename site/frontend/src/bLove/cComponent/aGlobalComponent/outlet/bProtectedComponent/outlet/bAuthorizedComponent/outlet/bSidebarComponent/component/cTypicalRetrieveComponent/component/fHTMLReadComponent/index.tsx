import htmlParsedUtility from "@/bLove/dUtility/cHtmlParserUtility";
import React from "react"


const HTMLReadComponent = (props: any) => {
  // Destructure Props
  const { eachField } = props;

  // JSX
  return (
    <React.Fragment>
      {/* HTMLReadComponent */}

      <div className="grid text-sm gap-0.5" >
        <span className="font-medium" >{eachField.label} :</span>
        {eachField.value && <span>{htmlParsedUtility(eachField.value || "")}</span>}
      </div>

    </React.Fragment>
  )
}

export default HTMLReadComponent;
