import { z } from "zod";

export const profileSchema = z.object({
  first_name: z
    .string("First name is required.")
    .nonempty("First name is required.")
    .min(2, "Must be at least 2 characters."),
  last_name: z
    .string("Last name is required.")
    .nonempty("Last name is required.")
    .min(2, "Must be at least 2 characters."),
  email: z
    .string("Email is required.")
    .nonempty("Email is required.")
    .email("Wrong email format."),
  birth: z
    .date({
      error: "Birth date is required.",
    })
    .refine((date) => !isNaN(date.getTime()), {
      message: "Invalid date.",
    }),
  avatar: z.string().optional(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
