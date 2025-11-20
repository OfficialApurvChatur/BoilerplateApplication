import { z } from "zod"


const listSchema = z.object({
  _id: z.string(),
  aImage: z.string().optional(),
  aTitle: z.string().optional(),

  bCreatedAt: z.string().optional(),
  bCreatedBy: z.any().optional(),
  bUpdatedAt: z.string().optional(),
  bUpdatedBy: z.any().optional(),
})

export default listSchema;
export type ListSchema = z.infer<typeof listSchema>
