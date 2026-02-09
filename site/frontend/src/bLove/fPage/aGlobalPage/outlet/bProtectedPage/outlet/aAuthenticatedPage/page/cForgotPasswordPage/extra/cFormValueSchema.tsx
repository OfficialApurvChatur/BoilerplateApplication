import { z } from "zod";


const formValueSchema = z.object({
  eEmail: z.string()
    .email({ message: "Please enter a valid email address" })
    .max(50, { message: "Email must not exceed 50 characters" }),
});

export default formValueSchema;
