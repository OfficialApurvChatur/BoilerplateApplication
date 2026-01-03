import { z } from "zod"


const listSchema = z.object({
  _id: z.string(),
  aImage: z.string().optional(),
  aTitle: z.string(),

  bCreatedAt: z.string().optional(),
  bCreatedBy: z.any().optional(),
  bUpdatedAt: z.string().optional(),
  bUpdatedBy: z.any().optional(),

  cAccessPoint: z.array(z.object({
    _id: z.string(),
    aTitle: z.string()
  })),

})

export default listSchema;
export type ListSchema = z.infer<typeof listSchema>
