import React from "react"
import ImageReadComponent from "../cImageReadComponent";
import TextReadComponent from "../aTextReadComponent";
import URLReadComponent from "../iURLReadComponent";


const DynamicReadComponent = (props: any) => {
  // Destructure Props
  const { eachField } = props;

  // JSX
  return (
    <React.Fragment>
      {/* DynamicReadComponent */}

      <div className="grid text-sm gap-0.5" >
        <span className="font-medium" >{eachField.label} :</span>
        {/* <span>{eachField.value}</span> */}

        {eachField.value?.map((each: any, index: number) => (
          <React.Fragment key={index} >

            {/* String Array Read */}
            {eachField.children?.type === "string-array-read" && (
              <div className="flex flex-col mx-6 my-2">

                {/* Text Read */}
                {eachField.children?.readType === "url-read" && (
                  <TextReadComponent eachField={{
                    label: `${eachField.children?.label} ${index+1}`,
                    value: each,
                  }}/>
                )}

                {/* Image Read */}
                {eachField.children?.readType === "image-read" && (
                  <ImageReadComponent eachField={{
                    label: `${eachField.children?.label} ${index+1}`,
                    value: each,
                  }} />
                )}

              </div>
            )}

            {/* Object Array Read */}
            {eachField.children?.type === "object-array-read" && (
              <div className="flex flex-col mx-6 my-2" >

                {/* Text Read */}
                {eachField.children?.readType === "url-read" && (
                  <URLReadComponent eachField={{
                    label: `${index+1}. ${each[eachField.children.label]}`,
                    value: each[eachField.children.value],
                  }}/>
                )}

                {/* Image Read */}
                {/* {eachField.children?.readType === "image-read" && (
                  <ImageReadComponent eachField={{
                    label: `${eachField.children?.label} ${index+1}`,
                    value: each,
                  }} />
                )} */}
                
              </div>
            )}
          </React.Fragment>
        ))}

      </div>

    </React.Fragment>
  )
}

export default DynamicReadComponent;
