import React from 'react'
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { GalleryVerticalEnd, RocketIcon } from 'lucide-react';

import backgroundImage from "@/bLove/hAsset/auth-model.jpg";

import { cn } from "@/aConnection/bShadcnConnection/lib/utils"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import { Card, CardContent } from "@/aConnection/bShadcnConnection/components/ui/card"
import { Input } from "@/aConnection/bShadcnConnection/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from '@/aConnection/bShadcnConnection/components/ui/alert';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/aConnection/bShadcnConnection/components/ui/form';

import brandConnection from '@/aConnection/eBrandConnection';


type TypicalAuthFormComponentType = {
  formHeader: any,
  formInput: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any
  apiCall: any, // For Loading Only
}

const TypicalAuthFormComponent = (props: TypicalAuthFormComponentType) => {
  // Destructure Props
  const { formHeader, formInput, formValueSchema, formValueDefault, apiHandler, apiCall } = props;

  // Form
  const form = useForm<z.infer<typeof formValueSchema>>({
    resolver: zodResolver(formValueSchema),
    mode: "onChange",
    defaultValues: formValueDefault
  })

  // Submit Handler
  const onSubmit = async (submittedData: z.infer<typeof formValueSchema>) => {
    // console.log(submittedData)

    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(submittedData, null, 2)}</code>
    //     </pre>
    //   ),
    // })

    apiHandler(form)(submittedData)
  } 

  // JSX
  return (
    <React.Fragment>
      {/* TypicalAuthFormComponent */}

      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm md:max-w-3xl flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 self-center font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            {brandConnection.dAdministrationApplicationName}
          </Link>

          <div className={cn("flex flex-col gap-6")}>
            <Card className="overflow-hidden">
              <CardContent className="grid p-0 md:grid-cols-2">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="p-6 md:p-8">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold">{formHeader.title}</h1>
                        <p className="text-balance text-muted-foreground">{formHeader.subtitle}</p>
                      </div>

                      {formHeader.showSampleCredential && (
                        <div>
                          <Alert>
                            <RocketIcon className="h-4 w-4" />
                            <AlertTitle>Sample User!</AlertTitle>
                            <AlertDescription>
                              <p><b>Email:</b> shraddha.kapoor{brandConnection.iEmailName}</p> 
                              <p><b>Password:</b> Shraddha@123</p>
                              <p><b>Role:</b> Super Admin</p>
                            </AlertDescription>
                          </Alert>
                        </div>
                      )}

                      {formInput?.map((eachInput: any, indexInput: number) => (
                        <React.Fragment key={indexInput} >
                          <div className="grid gap-2">
                            <FormField
                              control={form.control}
                              name={eachInput.name}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{eachInput.label} :</FormLabel>
                                  <FormControl>
                                    <Input placeholder={eachInput.placeholder} type={eachInput.type} {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </React.Fragment>
                      ))}

                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={apiCall.submitAPIResponse.isLoading || apiCall?.userAccountRetrieveAPIResponse?.isLoading}
                      >
                        {(apiCall.submitAPIResponse.isLoading || apiCall?.userAccountRetrieveAPIResponse?.isLoading) ? "Loading..." : formHeader.submitButtonText}
                      </Button>

                      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                        <span className="relative z-10 bg-background px-2 text-muted-foreground">
                          OR
                        </span>
                      </div>

                      <div className="flex flex-col flex-1 gap-2" >
                        {formHeader.links.length > 0 && (
                          formHeader.links.map((each: any, index: number) => (
                            <div className="text-center text-sm" key={index} >
                              {each?.note}{" "}
                              <Link to={each.to} className="underline underline-offset-4" >
                                {each.text}
                              </Link>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </form>
                </Form>

                <div className="relative hidden bg-muted md:block">
                  <img
                    src={backgroundImage}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
              By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TypicalAuthFormComponent
