import { z } from "zod";

export const standardSchema = z.object({
  username: z.string(),
  password: z.string(),
  schoolCode: z.string(),
});
