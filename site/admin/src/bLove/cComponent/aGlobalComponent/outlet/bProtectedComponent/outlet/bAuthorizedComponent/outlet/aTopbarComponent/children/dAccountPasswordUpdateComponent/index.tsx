import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/aConnection/bShadcnConnection/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/aConnection/bShadcnConnection/components/ui/form'
import { toast } from '@/aConnection/bShadcnConnection/hooks/use-toast'
import { Button } from '@/aConnection/bShadcnConnection/components/ui/button'
import { Input } from '@/aConnection/bShadcnConnection/components/ui/input'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent'
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent'


type AccountPasswordUpdateComponentType = {
  formSchema: any,
  formDefaultValue: any,
  ReduxCall: any
  APICall: any
  submitHandler: any
}

const AccountPasswordUpdateComponent = (props: AccountPasswordUpdateComponentType) => {
  // Variable
  const navigate = useNavigate();

  // Form
  const form = useForm<z.infer<typeof props.formSchema>>({
    resolver: zodResolver(props.formSchema),
    mode: "onChange",
    defaultValues: props.formDefaultValue
  })

  // Submit Handler
  const onSubmit = async (data: z.infer<typeof props.formSchema>) => {
    // console.log(data)

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    props.submitHandler(data, form, props.ReduxCall, props.APICall, navigate)
  } 

  // JSX
  return (
    <React.Fragment>
      {/* AccountPasswordUpdateComponent */}

      {
        (props.APICall.retrieveAPIResponse.isLoading || props.APICall.retrieveAPIResponse.isFetching) ? <LoaderComponent /> : 
        (props.APICall.retrieveAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
        (props.APICall.retrieveAPIResponse.isSuccess) ? (
          (props.APICall.retrieveAPIResponse.data.success) ? (
            <React.Fragment>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate >

                  {/* Critical Information */}
                  <Card className="overflow-hidden" >
                    <CardHeader className="flex flex-row items-start bg-muted/50">
                      <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg">
                          Critical Information
                        </CardTitle>
                        <CardDescription>This section contains critical information like first name, last name, etc.</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 pt-4">
                        
                        {/* Old Password */}
                        <div className="grid gap-3" >
                          <FormField
                            control={form.control}
                            name="eOldPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Old Password :</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter old password..." type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                                                
                        {/* New Password */}
                        <div className="grid gap-3" >
                          <FormField
                            control={form.control}
                            name="eNewPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>New Password :</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter new password..." type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                                                
                        {/* Confirm Password */}
                        <div className="grid gap-3" >
                          <FormField
                            control={form.control}
                            name="eConfirmPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Confirm Password :</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter confirm password..." type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                                                
                      </div>
                    </CardContent>
                  </Card>

                  <Button 
                    type="submit"
                    disabled={props.APICall.updateAPIResponse.isLoading}
                  >{props.APICall.updateAPIResponse.isLoading ? "Loading..." : "Update"}</Button>
                </form>
              </Form>
            </React.Fragment>
          ) : []
        ) : []
      }

    </React.Fragment>
  )
}

export default AccountPasswordUpdateComponent;
