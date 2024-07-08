import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(4, "Must be 4 characters")
  .max(10, "Can't be more than 10")
  .regex(/^[a-zA-Z0-9]{5,10}$/, "Can't contain Special characters");


export const signUpSchema = z.object({
    username:usernameValidation,
    email: z.string().email({
        message: "Invalid email address"
    }),
    password: z.string().min(8, {message: "password must be 8 characters"}).max(16, "Can't be 16")
})
