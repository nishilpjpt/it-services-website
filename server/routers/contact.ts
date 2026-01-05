import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { notifyOwner } from "../_core/notification";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const contactRouter = router({
  submit: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      try {
        // Notify the owner about the new contact form submission
        const emailContent = `
New Contact Form Submission:

Name: ${input.name}
Email: ${input.email}
Phone: ${input.phone || "Not provided"}
Company: ${input.company || "Not provided"}
Service: ${input.service}

Message:
${input.message}

---
Reply to: ${input.email}
        `;

        await notifyOwner({
          title: `New Contact Form Submission from ${input.name}`,
          content: emailContent,
        });

        return {
          success: true,
          message: "Thank you for your inquiry! We'll get back to you soon.",
        };
      } catch (error) {
        console.error("[Contact Form] Submission error:", error);
        throw new Error("Failed to submit contact form. Please try again.");
      }
    }),
});
