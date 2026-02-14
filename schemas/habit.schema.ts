import * as z from "zod";

export const habitSchema = z.object({
  name: z.string().min(2, "Habit name must be at least 2 characters"),
  description: z.string().optional(),
  emoji: z.string().min(1, "Select an emoji"),
  color: z.string().min(1, "Select a color"),
});

export type HabitFormData = z.infer<typeof habitSchema>;
