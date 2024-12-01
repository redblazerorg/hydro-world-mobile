import { z } from "zod";

export const SpeciesDetailsSchema = z.object({
  id: z.number(),
  common_name: z.string(),
  name_bm: z.string(),
  family: z.string(),
  description: z.string(),
  diet: z.string(),
  image_url: z.string(),
  type: z.number(),
});

export const SpeciesSchema = z.object({
  current_page: z.number(),
  // testing_it: z.string(),
  data: z.array(SpeciesDetailsSchema),
});

export type SpeciesDetails = z.infer<typeof SpeciesDetailsSchema>;
export type Species = z.infer<typeof SpeciesSchema>;
