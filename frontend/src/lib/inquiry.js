import prisma from "./prisma.js";
import { sendInquiryToOwner, sendThankYouToSender } from "./mail.js";

export async function createInquiryRecord(data) {
  return prisma.inquiry.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      type: data.type,
      service: data.service || null,
      budget: data.budget || null,
      timeline: data.timeline || null,
      message: data.message,
    },
  });
}

export async function processInquiryEmails(inquiry) {
  await sendInquiryToOwner(inquiry);

  try {
    await sendThankYouToSender(inquiry);
  } catch (error) {
    console.error("Thank-you email failed:", error.message);
  }

  return prisma.inquiry.update({
    where: { id: inquiry.id },
    data: { emailSent: true },
  });
}
