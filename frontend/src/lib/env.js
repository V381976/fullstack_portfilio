import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

function required(name) {
  const value = process.env[name];
  if (!value || value.includes("your-") || value.includes("xxxxx")) {
    return null;
  }
  return value.trim();
}

export const env = {
  smtp: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    user: required("SMTP_USER"),
    pass: (process.env.SMTP_PASS || "").replace(/\s+/g, ""),
  },
  mailTo: process.env.MAIL_TO?.trim() || required("SMTP_USER"),
  mailFrom: process.env.MAIL_FROM?.includes("your-email")
    ? null
    : process.env.MAIL_FROM?.trim() || null,
};

export function assertSmtpConfig() {
  if (!env.smtp.user || !env.smtp.pass) {
    throw new Error(
      "SMTP not configured. Set SMTP_USER and SMTP_PASS (Gmail App Password) in .env"
    );
  }
}
