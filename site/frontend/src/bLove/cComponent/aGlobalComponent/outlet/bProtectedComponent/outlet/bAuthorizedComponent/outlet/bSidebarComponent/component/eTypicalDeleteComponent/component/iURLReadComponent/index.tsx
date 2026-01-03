import React from "react"


const URLReadComponent = (props: any) => {
  // Destructure Props
  const { eachField } = props;

  // JSX
  return (
    <React.Fragment>
      {/* URLReadComponent */}

      <div className="grid text-sm gap-0.5" >
        <span className="font-medium" >{eachField.label} :</span>
        <a className="underline" target="_blank" href={eachField.value} >{eachField.value}</a>
      </div>

    </React.Fragment>
  )
}

export default URLReadComponent;
