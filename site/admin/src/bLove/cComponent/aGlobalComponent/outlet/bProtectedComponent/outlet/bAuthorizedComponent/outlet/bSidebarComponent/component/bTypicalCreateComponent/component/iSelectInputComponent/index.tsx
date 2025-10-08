import React from "react"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/aConnection/bShadcnConnection/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/aConnection/bShadcnConnection/components/ui/select";


const SelectInputComponent = (props: any) => {
  // Destructure Props
  const { form, eachInput } = props;

  // JSX
  return (
    <React.Fragment>
      {/* SelectInputComponent */}

      <div className="grid gap-3" >
        <FormField
          control={form.control}
          name={eachInput.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{eachInput.label} :</FormLabel>
              <Select onValueChange={field.onChange} >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={eachInput.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>{
                  eachInput.options?.map((eachOption: any, indexOption: number) => (
                    <SelectItem key={indexOption} value={eachOption.value}>{eachOption.label}</SelectItem>
                  ))
                }</SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />      
      </div>

    </React.Fragment>
  )
}

export default SelectInputComponent;
