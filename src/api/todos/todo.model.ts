import * as z from "zod";

const todo = z.object({
  content: z.string().min(1),
  done: z.boolean(),
});
