import { NextResponse } from "next/server";
import { z } from "zod";
import { createInquiryRecord, processInquiryEmails } from "@/lib/inquiry";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("Valid email is required"),
  phone: z.string().trim().optional().or(z.literal("")),
  type: z.enum(["GENERAL", "HIRE"]).default("GENERAL"),
  service: z.string().trim().optional().or(z.literal("")),
  budget: z.string().trim().optional().or(z.literal("")),
  timeline: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill the form correctly",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const inquiry = await createInquiryRecord(parsed.data);

    try {
      await processInquiryEmails(inquiry);
    } catch (mailError) {
      console.error("SMTP send failed:", mailError.message);
      return NextResponse.json(
        {
          success: false,
          message:
            "Could not send email right now. Please try again in a moment.",
          data: { id: inquiry.id, emailSent: false },
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message was sent successfully. I will reply soon.",
        data: { id: inquiry.id, emailSent: true },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("createInquiry error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your message",
      },
      { status: 500 }
    );
  }
}
