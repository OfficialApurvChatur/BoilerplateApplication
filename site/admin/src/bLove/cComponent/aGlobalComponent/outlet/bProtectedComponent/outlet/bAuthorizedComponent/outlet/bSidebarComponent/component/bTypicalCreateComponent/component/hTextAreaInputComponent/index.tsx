import React from "react"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/aConnection/bShadcnConnection/components/ui/form";
import { Textarea } from "@/aConnection/bShadcnConnection/components/ui/textarea";


const TextAreaInputComponent = (props: any) => {
  // Destructure Props
  const { form, eachInput } = props;

  // JSX
  return (
    <React.Fragment>
      {/* TextAreaInputComponent */}

      <div className="grid gap-3" >
        <FormField
          control={form.control}
          name={eachInput.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{eachInput.label} :</FormLabel>
              <FormControl>
                <Textarea className="min-h-24" placeholder={eachInput.placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

    </React.Fragment>
  )
}

export default TextAreaInputComponent;
