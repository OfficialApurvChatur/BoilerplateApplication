import { z } from "zod";


const formSchema = z.object({
  aTitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),

  dPolicyNumber: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),

  dPolicyType: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
    
  dPolicyStartDate: z.coerce.date(),
    
  dPolicyEndDate: z.coerce.date(),
    
  dPremiumAmount: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive()
      .min(5, { message: "Please enter minimum amount of 5" })
      .max(5000, { message: "Please enter maximum amount of 5000" }),
  ),
    
  dDeductibleAmount: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive()
      .min(5, { message: "Please enter minimum amount of 5" })
      .max(5000, { message: "Please enter maximum amount of 5000" }),
  ),
    
  dCoverageDetails: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
      
});

export default formSchema;
