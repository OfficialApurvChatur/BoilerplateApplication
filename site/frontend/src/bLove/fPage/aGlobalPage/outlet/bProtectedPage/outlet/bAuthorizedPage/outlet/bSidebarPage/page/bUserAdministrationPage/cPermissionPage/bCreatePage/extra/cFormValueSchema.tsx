import { z } from "zod";


const formValueSchema = z.object({
  aImage: z.union([
    z.string().url({ message: "Please enter a valid image URL" }),
    z.literal(""),
  ]).optional(),
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
  aStatus: z.string()
    .optional()
    .refine(val => !val || val.trim().length > 0, { message: "Please select status" }),
  aState: z.string()
    .optional()
    .refine(val => !val || val.trim().length > 0, { message: "Please select state" }),

  cMenu: z.array(z.object({
    menu: z.string(),
    access: z.array(z.object({
      accessPoint: z.string(),
      hasAccess: z.boolean()
    }))
  }))
});

export default formValueSchema;
