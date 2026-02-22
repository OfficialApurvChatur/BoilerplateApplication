import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Loader2Icon, MinusIcon, PlusIcon } from 'lucide-react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/aConnection/bShadcnConnection/components/ui/form'
import { toast } from '@/aConnection/bShadcnConnection/hooks/use-toast'
import { Button } from '@/aConnection/bShadcnConnection/components/ui/button'
import { Input } from '@/aConnection/bShadcnConnection/components/ui/input'
import { Textarea } from '@/aConnection/bShadcnConnection/components/ui/textarea'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent'
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent'

import handleImageUpdateForObject from '@/bLove/dUtility/aImageForObject/bHandleImageUpdateForObject'
import handleImageDeleteForObject from '@/bLove/dUtility/aImageForObject/cHandleImageDeleteForObject'
import handleImageCreateForObject from '@/bLove/dUtility/aImageForObject/aHandleImageCreateForObject'

import profileImage from "@/bLove/hAsset/defaultImage.png";
import coverImage from "@/bLove/hAsset/default-landscape.png";
import brandConnection from '@/aConnection/eBrandConnection'


type AccountUpdateSecondaryComponentType = {
  formSchema: any,
  formDefaultValue: any,
  previousValue: any,
  reduxCall: any
  apiCall: any
  submitHandler: any
}

const onAdd = ({ form, fieldName, inputs }: any) => {
  const updated = [
    ...inputs,
    {
      aLinkTitle: "Instagra:X:Threads:Linkedin:Github",
      bLinkURL: brandConnection.jInstagramURL,
    },
  ];
  form.setValue(fieldName, updated, { shouldValidate: true });
}

const onRemove = ({ form, fieldName, inputs, index }: any) => {
  const updated = inputs.filter((_: any, i: number) => i !== index);
  form.setValue(fieldName, updated, { shouldValidate: true });
}

const AccountUpdateSecondaryComponent = (props: AccountUpdateSecondaryComponentType) => {
  // Variable
  const navigate = useNavigate();
  const [fileLoading, setFileLoading] = useState(false);

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
 
  // Extra 
  const inputs = useWatch({
    control: form.control,
    name: "dLinks",
  }) || [];

  // JSX
  return (
    <React.Fragment>
      {/* AccountUpdateSecondaryComponent */}

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
                      <h2 className="text-xl text-foreground font-semibold py-6 text-center uppercase">Profile Update Section</h2>

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
                        <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="mt-8 grid sm:grid-cols-2 gap-6">
                          {/* Critical Information */}
                          <div className="mx-2 p-4 rounded-md border flex flex-col gap-6 bg-background">
                            <h3 className="text-lg font-bold text-foreground">Critical Information</h3>

                            <div>
                              <FormField
                                control={form.control}
                                name="eImage"
                                render={() => (
                                  <FormItem>
                                    <FormLabel className="text-foreground text-sm font-medium block mb-2">
                                      Cover Image :
                                    </FormLabel>
                                    <FormControl>
                                      <div className="flex items-center gap-4 rounded-lg">
                                        <div className="rounded-md flex items-center justify-center w-52 h-28 overflow-hidden">
                                          {fileLoading ? <Loader2Icon className="w-10 h-10 animate-spin" /> : (
                                            <img
                                              src={form?.watch("eImage") || coverImage}
                                              className="rounded-md object-cover w-full h-full"
                                              alt="Uploaded Preview"
                                            />
                                          )}
                                        </div>

                                        <div className="flex flex-col gap-2">
                                          {form.watch("eImage") ? (
                                            <React.Fragment>
                                              <Button
                                                type="button"
                                                onClick={() => document.getElementById(`cover-picture-update`)?.click()}
                                                className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700"
                                              >
                                                Edit Image
                                              </Button>
                                              
                                              <Input
                                                id={`cover-picture-update`}
                                                type="file"
                                                className="hidden"
                                                onChange={(event: any) => handleImageUpdateForObject(event, { name: "eImage", folderName: "user" }, form, setFileLoading, form.watch("eImage"))} 
                                              />

                                              <Button
                                                type="button"
                                                onClick={() => handleImageDeleteForObject({ name: "eImage", folderName: "user" }, form, setFileLoading, form.watch("eImage"))} 
                                                className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600"
                                              >
                                                Remove Image
                                              </Button>
                                            </React.Fragment>
                                          ) : (
                                            <React.Fragment>
                                              <Button
                                                type="button"
                                                onClick={() => document.getElementById(`cover-picture-create`)?.click()}
                                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                              >
                                                Choose Image
                                              </Button>
                          
                                              <Input
                                                id={`cover-picture-create`}
                                                type="file"
                                                className="hidden"
                                                onChange={(event: any) => handleImageCreateForObject(event, { name: "eImage", folderName: "user" }, form, setFileLoading)}
                                              />
                                            </React.Fragment>
                                          )}                    
                                        </div>
                                      </div>              
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name="eFirstname"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-foreground text-sm font-medium block mb-2">
                                      First Name :
                                    </FormLabel>
                                    <FormControl>
                                      <Input 
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter first name..." 
                                        type="text" 
                                        {...field} 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name="eLastname"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-foreground text-sm font-medium block mb-2">
                                      Last Name :
                                    </FormLabel>
                                    <FormControl>
                                      <Input 
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter last name..." 
                                        type="text" 
                                        {...field} 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
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
                                        disabled
                                        {...field} 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name="eMobile"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-foreground text-sm font-medium block mb-2">
                                      Mobile :
                                    </FormLabel>
                                    <FormControl>
                                      <Input 
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter mobile..." 
                                        type="text" 
                                        {...field} 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          {/* Basic Information */}
                          <div className="mx-2 p-4 rounded-md border flex flex-col gap-6 bg-background">
                            <h3 className="text-lg font-bold text-foreground">Basic Information</h3>

                            <div>
                              <FormField
                                control={form.control}
                                name="aImage"
                                render={() => (
                                  <FormItem>
                                    <FormLabel className="text-foreground text-sm font-medium block mb-2">
                                      Profile Image :
                                    </FormLabel>
                                    <FormControl>
                                      <div className="flex items-center gap-4 rounded-lg">
                                        <div className="rounded-md flex items-center justify-center w-28 h-28 overflow-hidden">
                                          {fileLoading ? <Loader2Icon className="w-10 h-10 animate-spin" /> : (
                                            <img
                                              src={form?.watch("aImage") || profileImage}
                                              className="rounded-md object-cover w-full h-full"
                                              alt="Uploaded Preview"
                                            />
                                          )}
                                        </div>

                                        <div className="flex flex-col gap-2">
                                          {form.watch("aImage") ? (
                                            <React.Fragment>
                                              <Button
                                                type="button"
                                                onClick={() => document.getElementById(`profile-image-update`)?.click()}
                                                className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700"
                                              >
                                                Edit Image
                                              </Button>
                                              
                                              <Input
                                                id={`profile-image-update`}
                                                type="file"
                                                className="hidden"
                                                onChange={(event: any) => handleImageUpdateForObject(event, { name: "aImage", folderName: "user" }, form, setFileLoading, form.watch("aImage"))} 
                                              />

                                              <Button
                                                type="button"
                                                onClick={() => handleImageDeleteForObject({ name: "aImage", folderName: "user" }, form, setFileLoading, form.watch("aImage"))} 
                                                className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600"
                                              >
                                                Remove Image
                                              </Button>
                                            </React.Fragment>
                                          ) : (
                                            <React.Fragment>
                                              <Button
                                                type="button"
                                                onClick={() => document.getElementById(`profile-image-create`)?.click()}
                                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                              >
                                                Choose Image
                                              </Button>
                          
                                              <Input
                                                id={`profile-image-create`}
                                                type="file"
                                                className="hidden"
                                                onChange={(event: any) => handleImageCreateForObject(event, { name: "aImage", folderName: "user" }, form, setFileLoading)}
                                              />
                                            </React.Fragment>
                                          )}                    
                                        </div>
                                      </div>              
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name="aTitle"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-foreground text-sm font-medium block mb-2">
                                      Title :
                                    </FormLabel>
                                    <FormControl>
                                      <Input 
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter title..." 
                                        type="text" 
                                        {...field} 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name="aSubtitle"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-foreground text-sm font-medium block mb-2">
                                      Sub Title :
                                    </FormLabel>
                                    <FormControl>
                                      <Input 
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter subtitle..." 
                                        type="text" 
                                        {...field} 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name="aDescription"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-foreground text-sm font-medium block mb-2">
                                      Description :
                                    </FormLabel>
                                    <FormControl>
                                      <Textarea 
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter description..." 
                                        rows={5}
                                        {...field} 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name="aDetail"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-foreground text-sm font-medium block mb-2">
                                      Detail :
                                    </FormLabel>
                                    <FormControl>
                                      <Textarea 
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter title..." 
                                        rows={5} 
                                        {...field} 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          {/* More Information */}
                          <div className="mx-2 p-4 rounded-md border flex flex-col gap-6 bg-background">
                            <h3 className="text-lg font-bold text-foreground">More Information</h3>

                            <div>
                              <FormField
                                control={form.control}
                                name="dAddress.aLane"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-foreground text-sm font-medium block mb-2">
                                      Address :
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter lane..."
                                        type="text"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name="dAddress.bStreet"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter street..."
                                        type="text"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name="dAddress.cCity"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter city..."
                                        type="text"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name="dAddress.dState"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter state..."
                                        type="text"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name="dAddress.eCountry"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter country..."
                                        type="text"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name="dAddress.fPinCode"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                        placeholder="Enter pin code..."
                                        type="text"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <div className="grid gap-3">
                                <div className="flex w-full items-center justify-start space-x-2">
                                  <Button variant="secondary" size="sm" 
                                    onClick={() => onAdd({
                                      form,
                                      fieldName: "dLinks",
                                      inputs
                                    })} 
                                    type="button" 
                                  >
                                    <PlusIcon className="h-3 w-3" />
                                  </Button>
                                  <FormLabel>Links :</FormLabel>
                                </div>

                                {inputs?.map((each: any, index: number) => (
                                  <div key={index} className="p-4 border rounded-md">

                                    {/* Card Header */}
                                    <div className="flex w-full items-center justify-start space-x-2 mb-2">
                                      <Button 
                                        variant="destructive" 
                                        size="sm" 
                                        onClick={() => onRemove({
                                          form,
                                          fieldName: "dLinks",
                                          inputs,
                                          index: index
                                        })} 
                                        type="button" 
                                      >
                                        <MinusIcon className="h-5 w-5" />
                                      </Button>
                                    </div>

                                    {/* Card Content */}
                                    <div className="grid gap-4">
                                      {Object.keys(each).map((each2, index2) => {
                                        if (each2 === "_id") return null;

                                        // Handle normal fields
                                        const fieldName = `dLinks.${index}.${each2}`;

                                        return (
                                          <div>
                                            <FormField
                                              control={form.control}
                                              name={fieldName}
                                              render={({ field }) => (
                                                <FormItem>
                                                  <FormLabel className="text-foreground text-sm font-medium block mb-2">
                                                    Link {index2 + 1} :
                                                  </FormLabel>
                                                  <FormControl>
                                                    <Input 
                                                      className="w-full rounded-sm py-2.5 px-4 border border-muted-foreground bg-muted text-sm focus:border-foreground outline-none"
                                                      placeholder="Enter first name..." 
                                                      type="text" 
                                                      {...field} 
                                                    />
                                                  </FormControl>
                                                  <FormMessage />
                                                </FormItem>
                                              )}
                                            />
                                          </div>
                                        );
                                      })}
                                    </div>

                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mx-2 p-4 rounded-md border flex flex-col gap-6 col-span-full">
                            <Button 
                              type="submit"
                              disabled={props.apiCall.updateAPIResponse.isLoading}
                            >
                              {props.apiCall.updateAPIResponse.isLoading ? "Loading..." : "Update Profile"}
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

export default AccountUpdateSecondaryComponent;
