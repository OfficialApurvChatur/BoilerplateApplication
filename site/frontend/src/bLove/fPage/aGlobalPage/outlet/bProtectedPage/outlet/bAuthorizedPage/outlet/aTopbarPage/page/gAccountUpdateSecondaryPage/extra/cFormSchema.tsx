import { z } from "zod";


const formSchema = z.object({
  aImage: z.string()
    .min(3, { message: "Please select cover image" }),
  aTitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
  aSubtitle: z.string()
    .optional()
    .refine(val => !val || val.length >= 3, { message: "Please enter at least 3 characters" })
    .refine(val => !val || val.length <= 250, { message: "Please enter at most 250 characters" }),
  aDescription: z.string()
    .optional()
    .refine(val => !val || val.length >= 3, { message: "Please enter at least 3 characters" })
    .refine(val => !val || val.length <= 1000, { message: "Please enter at most 1000 characters" }),
  aDetail: z.string()
    .optional()
    .refine(val => !val || val.length >= 3, { message: "Please enter at least 3 characters" })
    .refine(val => !val || val.length <= 50000, { message: "Please enter at most 5000 characters" }),

  dAddress: z
    .object({
      aLane: z
        .string()
        .optional()
        .refine(val => !val || val.trim().length > 0, {
          message: "Lane cannot be empty",
        }),

      bStreet: z
        .string()
        .optional()
        .refine(val => !val || val.trim().length > 0, {
          message: "Street cannot be empty",
        }),

      cCity: z
        .string()
        .optional()
        .refine(val => !val || val.trim().length > 0, {
          message: "City cannot be empty",
        }),

      dState: z
        .string()
        .optional()
        .refine(val => !val || val.trim().length > 0, {
          message: "State cannot be empty",
        }),

      eCountry: z
        .string()
        .optional()
        .refine(val => !val || val.trim().length > 0, {
          message: "Country cannot be empty",
        }),

      fPinCode: z
        .string()
        .optional()
        .refine(val => !val || /^[0-9]{4,10}$/.test(val), {
          message: "Pin Code must be numeric and between 4 to 10 digits",
        }),
    })
    .optional(),
  dLinks: z
    .array(
      z.object({
        aLinkTitle: z
          .string()
          .optional()
          .refine(val => !val || val.trim().length > 0, {
            message: "Title cannot be empty",
          }),
        bLinkURL: z
          .string()
          .optional()
          .refine(val => !val || /^https?:\/\/.+/.test(val), {
            message: "Please provide a valid URL (starting with http or https)",
          }),
      })
    )
    .optional(),

  eImage: z.string()
    .min(3, { message: "Please select profile image" }),
  eFirstname: z.string()
    .min(3, { message: "First name must be at least 3 characters long" })
    .max(50, { message: "First name must not exceed 50 characters" }),
  eLastname: z.string()
    .min(3, { message: "Last name must be at least 3 characters long" })
    .max(50, { message: "Last name must not exceed 50 characters" }),
  eMobile: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number" })
    .max(15, { message: "Mobile number must not exceed 15 digits" }),
});

export default formSchema;
