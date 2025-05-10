import React from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import { Form } from "@/aConnection/bShadcnConnection/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/aConnection/bShadcnConnection/components/ui/card"
import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast"

import TextInputComponent from "./component/aTextInputComponent"
import DateInputComponent from "./component/bDateInputComponent"
import NumberInputComponent from "./component/cNumberInputComponent"
import CheckboxInputComponent from "./component/dCheckboxInputComponent"
import RoleCheckboxInputComponent from "./component/eRoleCheckboxInputComponent"
import RadioInputComponent from "./component/fRadioInputComponent"
import ImageInputComponent from "./component/gImageInputComponent"
import TextAreaInputComponent from "./component/hTextAreaInputComponent"
import SelectInputComponent from "./component/iSelectInputComponent"
import RichTextEditorInputComponent from "./component/jRichTextEditorInpitComponent"


type TypicalCreateComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  formSchema: any,
  formDefaultValue: any,
  apiCall: any,
  submitHandler: any
}

const TypicalCreateComponent = (props: TypicalCreateComponentType) => {
  // Destructure Props
  const { header, data, formSchema, formDefaultValue, apiCall, submitHandler } = props;

  // Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: formDefaultValue
  })

  // Submit Handler
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // console.log(data)

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    submitHandler(form)(data)
  } 

  // JSX
  return (
    <React.Fragment>
      {/* TypicalCreateComponent */}

      <div className="flex-1 px-4 pb-4">
        <div className="flex items-center justify-between space-y-2 mb-8" >
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {header.title} {" "}
            </h2>
            <p className="text-muted-foreground">{header.subtitle}</p>
          </div>
          <div className="flex items-center space-x-2">
            {header.actions.length > 0 && (
              header.actions.map((each, index) => (
                <Button onClick={each.onClick} key={index} >
                  {each.icon && <each.icon />}
                  {each.text}
                </Button>
              ))
            )}
            {header.links.length > 0 && (
              header.links.map((each, index) => (
                <Button asChild key={index} >
                  <Link to={each.to} >
                    {each.icon && <each.icon />}
                    {each.text}
                  </Link>
                </Button>
              ))
            )}
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate >

            {/* Section */}
            {data?.filter((eachSection: any) => eachSection.display)?.map((eachSection: any, indexSection: number) => eachSection.display && (
              <React.Fragment key={indexSection} >
                <Card className="overflow-hidden" >
                  <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                      <CardTitle className="group flex items-center gap-2 text-lg">
                        {eachSection.title}
                      </CardTitle>
                      <CardDescription>{eachSection.subtitle}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 pt-4">
                      {eachSection.inputs.map((eachInput: any, indexInput: any) => (
                        <React.Fragment>

                          {/* For I/P Type: Image */}
                          {((eachInput.type === "image") && 
                            <ImageInputComponent key={indexInput}  form={form} eachInput={eachInput} />
                          )}

                          {/* For I/P Type: Text, Email, Number */}
                          {((eachInput.type === "text" || eachInput.type === "email" || eachInput.type === "password") && 
                            <TextInputComponent key={indexInput}  form={form} eachInput={eachInput} />
                          )}

                          {/* For I/P Type: Text Area */}
                          {((eachInput.type === "text-box") && 
                            <TextAreaInputComponent key={indexInput}  form={form} eachInput={eachInput} />
                          )}

                          {/* For I/P Type: Rich Text Editor */}
                          {((eachInput.type === "rich-text-editor") && 
                            <RichTextEditorInputComponent key={indexInput}  form={form} eachInput={eachInput} />
                          )}

                          {/* For I/P Type: Number */}
                          {((eachInput.type === "number") && 
                            <NumberInputComponent key={indexInput}  form={form} eachInput={eachInput} />
                          )}

                          {/* For I/P Type: Date */}
                          {((eachInput.type === "date") && 
                            <DateInputComponent key={indexInput}  form={form} eachInput={eachInput} />
                          )}

                          {/* For I/P Type: Checkbox */}
                          {((eachInput.type === "checkbox") &&
                            <CheckboxInputComponent key={indexInput}  form={form} eachInput={eachInput} />
                          )}

                          {/* For I/P Type: Role Checkbox */}
                          {((eachInput.type === "role-checkbox") &&
                            <RoleCheckboxInputComponent key={indexInput}  form={form} eachInput={eachInput} />
                          )}

                          {/* For I/P Type: Radio */}
                          {((eachInput.type === "radio") &&
                            <RadioInputComponent key={indexInput}  form={form} eachInput={eachInput} />
                          )}

                          {/* For I/P Type: Select */}
                          {((eachInput.type === "select") &&
                            <SelectInputComponent key={indexInput}  form={form} eachInput={eachInput} />
                          )}

                        </React.Fragment>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </React.Fragment>
            ))}

            <Button 
              type="submit"
              disabled={apiCall.createAPIResponse.isLoading}
            >{apiCall.createAPIResponse.isLoading ? "Loading..." : "Create"}</Button>
          </form>
        </Form>

      </div>
    </React.Fragment>
  )
}

export default TypicalCreateComponent;
