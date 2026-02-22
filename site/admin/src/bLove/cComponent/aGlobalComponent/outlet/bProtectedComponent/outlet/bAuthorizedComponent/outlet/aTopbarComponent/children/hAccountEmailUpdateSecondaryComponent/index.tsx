import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/aConnection/bShadcnConnection/components/ui/form'
import { toast } from '@/aConnection/bShadcnConnection/hooks/use-toast'
import { Button } from '@/aConnection/bShadcnConnection/components/ui/button'
import { Input } from '@/aConnection/bShadcnConnection/components/ui/input'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent'
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent'

import coverImage from "@/bLove/hAsset/default-landscape.png";


type AccountEmailUpdateSecondaryComponentType = {
  formSchema: any,
  formDefaultValue: any,
  previousValue: any,
  reduxCall: any
  apiCall: any
  submitHandler: any
}

const AccountEmailUpdateSecondaryComponent = (props: AccountEmailUpdateSecondaryComponentType) => {
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

    props.submitHandler(data, form, props.reduxCall, props.apiCall, navigate)
  } 

  // All Render
  // 1. First Render
  useEffect(() => {
    props.apiCall.retrieveAPIResponse.isLoading ? null : 
    props.apiCall.retrieveAPIResponse.isError ? null :
    props.apiCall.retrieveAPIResponse.isSuccess ? (
      props.apiCall.retrieveAPIResponse.data.success ? (
        props.previousValue(form, props.apiCall)
      ) : null
    ) : null
  }, [props.apiCall.retrieveAPIResponse])    
 
  // JSX
  return (
    <React.Fragment>
      {/* AccountEmailUpdateSecondaryComponent */}

      <div className="space-y-8">
        {
          (props.apiCall.retrieveAPIResponse.isLoading || props.apiCall.retrieveAPIResponse.isFetching) ? <LoaderComponent /> : 
          (props.apiCall.retrieveAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
          (props.apiCall.retrieveAPIResponse.isSuccess) ? (
            (props.apiCall.retrieveAPIResponse.data.success) ? (
              <React.Fragment>
                <div>
                  <div className="bg-gradient-to-r from-muted to-muted-foreground w-full h-72">
                    <img 
                      src={
                        props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.eImage || 
                        coverImage
                      } 
                      alt="Banner Image" 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  <div className="-mt-28 mb-14 px-4">
                    <div className="mx-auto max-w-6xl shadow-lg md:p-8 relative bg-muted rounded-sm">
                      {/* Banner Content */}
                      <h2 className="text-xl text-foreground font-semibold py-6 text-center uppercase">Email Update Section</h2>

                      {/* <div className="grid md:grid-cols-2 items-center gap-12 max-w-5xl max-md:max-w-md mx-auto p-4">
                        <div className="bg-muted-foreground rounded-md">
                          <img src={props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aImage} className="w-full aspect-[7/7] object-contain rounded-md" />
                        </div>

                        <div>
                          <h2 className="text-2xl font-semibold text-foreground !leading-tight uppercase">
                            {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aTitle}
                          </h2>
                          <p className="mt-2 text-md text-muted-foreground font-medium leading-relaxed uppercase">
                            {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aSubtitle}
                          </p>
                          <p className="mt-6 text-md text-muted-foreground font-medium leading-relaxed">
                            {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.aDescription}
                          </p>

                          <div className="space-x-4 flex mt-6">
                            {props.apiCall.retrieveAPIResponse.data?.user_account_retrieve?.dLinks?.map((each: any, index: any) => (
                              <React.Fragment key={each.aLinkTitle} >
                                <a 
                                  href={each.bLinkURL} 
                                  className="bg-foreground h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {each.aLinkTitle === "Linkedin" && <LinkedInLogoIcon />}
                                  {each.aLinkTitle === "X" && <TwitterLogoIcon />}
                                  {each.aLinkTitle === "Threads" && <ThreadsLogoIcon />}
                                  {each.aLinkTitle === "Instagram" && <InstagramLogoIcon />}
                                  {each.aLinkTitle === "Github" && <GitHubLogoIcon />}
                                </a>
                              </React.Fragment>
                            ))}
                          </div>

                          <p className="mt-6 text-md text-muted-foreground font-medium leading-relaxed">
                            Swipe below to view your complete profile...
                          </p>
                        </div>
                      </div> */}

                      {/* Main Content */}
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="mt-8 grid gap-6">
                          {/* Critical Information */}
                          <div className="mx-2 p-4 rounded-md border flex flex-col gap-6 bg-background">
                            <h3 className="text-lg font-bold text-foreground">Critical Information</h3>

                            <div>
                              <FormField
                                control={form.control}
                                name="eEmail"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-foreground text-sm font-medium block mb-2">
                                      Email :
                                    </FormLabel>
                                    <FormControl>
                                      <Input 
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter email..." 
                                        type="email" 
                                        {...field} 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          <div className="mx-2 p-4 rounded-md border flex flex-col gap-6 col-span-full">
                            <Button 
                              type="submit"
                              disabled={props.apiCall.updateAPIResponse.isLoading}
                            >
                              {props.apiCall.updateAPIResponse.isLoading ? "Loading..." : "Update Email"}
                            </Button>
                          </div>

                        </form>
                      </Form>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ) : []
          ) : []
        }
      </div>
    </React.Fragment>
  )
}

export default AccountEmailUpdateSecondaryComponent;
