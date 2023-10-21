import { z } from "zod";

export const authSchema = z.object({
  username: z.string(),
  password: z.string(),
  schoolCode: z.string(),
});

export const standardSchema = z.object({
  lectioCookies: z.string(),
  schoolCode: z.string(),
});
