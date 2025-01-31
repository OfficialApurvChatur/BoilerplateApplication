import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const listSchema = z.object({
  _id: z.string(),
  aTitle: z.string(),

  dPolicyNumber: z.optional(z.string()),
  dPolicyType: z.optional(z.string()),
  dPolicyStartDate: z.optional(z.string()),
  dPolicyEndDate: z.optional(z.string()),
  dPremiumAmount: z.optional(z.number()),
  dDeductibleAmount: z.optional(z.number()),
  dCoverageDetails: z.optional(z.string()),
})

export type ListSchema = z.infer<typeof listSchema>
