import { z } from "zod";


const formSchema = z.object({
  eOldPassword: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(50, { message: "Password must not exceed 50 characters" }),
  eNewPassword: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(50, { message: "Password must not exceed 50 characters" }),
  eConfirmPassword: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(50, { message: "Password must not exceed 50 characters" }),
})
.refine((data) => data.eNewPassword === data.eConfirmPassword, {
  message: "Passwords do not match",
  path: ["eConfirmPassword"],
});

export default formSchema;
