import { z } from "zod";


export const acceptMessage = z.object({
    isAccepting: z.boolean()
})