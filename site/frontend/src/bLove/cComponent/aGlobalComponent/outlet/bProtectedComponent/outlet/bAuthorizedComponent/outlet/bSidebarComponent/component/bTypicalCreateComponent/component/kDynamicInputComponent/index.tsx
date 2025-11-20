import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/aConnection/bShadcnConnection/components/ui/card";
import {
  FormLabel,
} from "@/aConnection/bShadcnConnection/components/ui/form";
import { Label } from "@/aConnection/bShadcnConnection/components/ui/label";
import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import TextInputComponent from "../aTextInputComponent";
import ImageInputComponent from "../gImageInputComponent";
import { useWatch } from "react-hook-form";


const DynamicInputComponent = (props: any) => {
  const { form, eachInput } = props;

  const inputs = useWatch({
    control: form.control,
    name: eachInput.name,
  }) || [];

  return (
    <React.Fragment>
      {/* DynamicInputComponent */}

      <div className="grid gap-3">
        <div className="flex w-full items-center justify-start space-x-2">
          <Button variant="secondary" size="sm" 
            onClick={() => eachInput?.children?.onAdd({
              form,
              fieldName: eachInput.name,
              inputs
            })} 
            type="button" 
          >
            <PlusIcon className="h-3 w-3" />
          </Button>
          <FormLabel>{eachInput.label} :</FormLabel>
        </div>

        {/* MAIN INPUT LIST */}
        {inputs?.map((each2: any, index2: number) => (
          <Card key={index2}>

            {/* Card Header */}
            <CardHeader>
              <CardTitle className="text-base">
                <div className="flex w-full items-center justify-start space-x-2">
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => eachInput?.children?.onRemove({
                      form,
                      fieldName: eachInput.name,
                      inputs,
                      index: index2
                    })} 
                    type="button" 
                  >
                    <MinusIcon className="h-5 w-5" />
                  </Button>
                  <div className="flex flex-col">
                    {eachInput.children.label && <Label htmlFor={`link-${index2}`}>{`${eachInput.children.label} ${index2 + 1} :`}</Label>}
                    {eachInput.children.description && <CardDescription>{eachInput.children.description}</CardDescription>}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>

            {/* Card Content */}
            {eachInput.children?.type === "string-array-input" && (
              <CardContent className="grid gap-4">

                {eachInput.children?.inputType === "text-input" && (                  
                  <TextInputComponent
                    key={index2}
                    form={form}
                    eachInput={{
                      name:  `${eachInput.name}.${index2}`,
                      label: each2,
                      placeholder: `Please enter ${each2}...`,
                      type: "text",
                    }}
                  />                
                )}
                
                {eachInput.children?.inputType === "image-input" && (                  
                  <ImageInputComponent
                    key={index2}
                    form={form}
                    eachInput={{
                      name:  `${eachInput.name}.${index2}`,
                      placeholder: `Please enter ${each2}...`,
                      type: "image",
                      folderName: eachInput.children?.folderName
                    }}
                  />
                )}
                
              </CardContent>
            )}

            {eachInput.children?.type === "object-array-input" && (
              <CardContent className="grid gap-4">
                {Object.keys(each2).map((each3, index3) => {
                  if (each3 === "_id") return null;

                  // Handle nested arrays (like social links or subfields)
                  if (typeof each2[each3] === "object" && Array.isArray(each2[each3])) {
                    return (
                      <div className="grid gap-2" key={index3}>
                        <div className="flex w-full items-center justify-between space-x-2">
                          <FormLabel>
                            {each3[0].toUpperCase() + each3.slice(1)} :
                          </FormLabel>
                          <Button variant="secondary" size="sm" onClick={() => eachInput?.children?.onAdd2(index2)} type="button" >
                            <PlusIcon className="h-3 w-3" />
                          </Button>
                        </div>

                        {each2[each3].map((each4: any, index4: number) => (
                          <Card key={index4}>
                            <CardHeader>
                              <CardTitle className="text-base">
                                <div className="flex w-full items-center justify-between space-x-2">
                                  <FormLabel>Title {index4 + 1}</FormLabel>
                                  <Button variant="destructive" size="sm" onClick={() => eachInput?.children?.onRemove2(index2, index4)} type="button" >
                                    <MinusIcon className="h-3 w-3" />
                                  </Button>
                                </div>
                              </CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-4">
                              {Object.keys(each4).map((each5, index5) => {
                                if (each5 === "_id") return null;

                                const fieldName = `${eachInput.name}.${index2}.${each3}.${index4}.${each5}`;

                                return (
                                  <TextInputComponent
                                    key={index5}
                                    form={form}
                                    eachInput={{
                                      name: fieldName,
                                      label:
                                        each5[0].toUpperCase() + each5.slice(1),
                                      placeholder: each5,
                                      type: "text",
                                    }}
                                  />
                                );
                              })}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    );
                  }

                  // Handle normal fields
                  const fieldName = `${eachInput.name}.${index2}.${each3}`;

                  return (
                    <TextInputComponent
                      key={index3}
                      form={form}
                      eachInput={{
                        name: fieldName,
                        label: each3,
                        placeholder: `Please enter ${each3}...`,
                        type: "text",
                      }}
                    />                
                  );
                })}
              </CardContent>
            )}

          </Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default DynamicInputComponent;
