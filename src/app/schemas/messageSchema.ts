import { z } from "zod";


export const MessageSchema = z.object({
    content: z.string().max(200, {message: "Content must be no longer than 300 characters"})
})