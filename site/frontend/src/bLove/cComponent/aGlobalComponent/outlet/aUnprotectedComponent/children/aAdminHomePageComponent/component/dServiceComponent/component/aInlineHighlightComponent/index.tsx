import { ServiceComponentDataType } from "../../../..";


type ServiceComponentType = {
  reduxCall: any,
  apiResponse: ServiceComponentDataType[],
}

export function InlineHighlightComponent(props: ServiceComponentType) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">

      {props.apiResponse.map((each, index) => (
        <div className="rounded-md p-6" key={index} >
          <div className="h-60 w-full rounded-lg bg-sky-200" />
          <div className="font-mySecondaryFont mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            {each.aTitle}
          </div>
          <p className="font-mySecondaryFont mt-4 text-sm text-muted-foreground">
            {each.aDescription}
          </p>
        </div>
      ))}
      
      {/* <div className="rounded-md p-6">
        <div className="h-60 w-full rounded-lg bg-purple-200" />
        <div className="font-mySecondaryFont mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
          Discover our
          <PointerHighlight
            rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
            pointerClassName="text-blue-500 h-3 w-3"
            containerClassName="inline-block mx-1"
          >
            <span className="relative z-10">innovative </span>
          </PointerHighlight>
          solutions for your business needs.
        </div>
        <p className="font-mySecondaryFont mt-4 text-sm text-neutral-500">
          Transforming ideas into reality with cutting-edge technology and
          expert guidance.
        </p>
      </div> */}

      {/* <div className="rounded-md p-6">
        <div className="h-60 w-full rounded-lg bg-yellow-200" />
        <div className="font-mySecondaryFont mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
          Experience the future with our
          <PointerHighlight
            rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
            pointerClassName="text-green-500 h-3 w-3"
            containerClassName="inline-block ml-1"
          >
            <span className="relative z-10">sustainable technology</span>
          </PointerHighlight>
          .
        </div>
        <p className="font-mySecondaryFont mt-4 text-sm text-neutral-500">
          Eco-friendly solutions designed for a better tomorrow and reduced
          environmental impact.
        </p>
      </div> */}
    </div>
  );
}
