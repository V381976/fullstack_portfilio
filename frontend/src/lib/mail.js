import nodemailer from "nodemailer";
import { assertSmtpConfig, env } from "./env";

let transporter;

export function getTransporter() {
  assertSmtpConfig();

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.smtp.host,
      port: env.smtp.port,
      secure: env.smtp.secure,
      auth: {
        user: env.smtp.user,
        pass: env.smtp.pass,
      },
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 20000,
      tls: {
        minVersion: "TLSv1.2",
        // Local antivirus/proxy often injects a self-signed cert into the chain
        rejectUnauthorized: false,
      },
    });
  }

  return transporter;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getFromAddress() {
  return env.mailFrom || `"Devendra Saini" <${env.smtp.user}>`;
}

function getInquiryInbox() {
  const primary = env.mailTo || env.smtp.user;
  const smtpUser = env.smtp.user;
  if (primary && smtpUser && primary.toLowerCase() !== smtpUser.toLowerCase()) {
    return [primary, smtpUser];
  }
  return primary;
}

function emailShell({ title, preheader, bodyHtml }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#e8f1f8;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    ${escapeHtml(preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e8f1f8;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(15,76,117,0.12);">
          <tr>
            <td style="background:linear-gradient(135deg,#0ea5a4 0%,#38bdf8 55%,#8b5cf6 100%);padding:28px 28px 24px 28px;text-align:center;">
              <p style="margin:0;color:#ecfeff;font-size:13px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">
                D.Saini Portfolio
              </p>
              <h1 style="margin:10px 0 0;color:#ffffff;font-size:26px;line-height:1.3;font-weight:700;">
                ${escapeHtml(title)}
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 28px 12px 28px;color:#1e293b;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 28px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:14px;">
                <tr>
                  <td style="padding:16px 18px;">
                    <p style="margin:0;font-size:14px;color:#0f766e;font-weight:700;">Devendra Saini</p>
                    <p style="margin:4px 0 0;font-size:13px;color:#475569;line-height:1.5;">
                      Full-Stack Developer · Available for freelance projects
                    </p>
                    <p style="margin:10px 0 0;font-size:13px;">
                      <a href="mailto:30dsaini@gmail.com" style="color:#0284c7;text-decoration:none;margin-right:12px;">Email</a>
                      <a href="https://www.linkedin.com/in/devendra-saini-502042253/" style="color:#0284c7;text-decoration:none;margin-right:12px;">LinkedIn</a>
                      <a href="https://github.com/V381976/" style="color:#0284c7;text-decoration:none;">GitHub</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;padding:16px 28px;text-align:center;border-top:1px solid #e2e8f0;">
              <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.5;">
                This is an automated message from the portfolio contact form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendInquiryToOwner(inquiry) {
  const transporter = getTransporter();
  const to = getInquiryInbox();
  const subjectPrefix =
    inquiry.type === "HIRE" ? "Hire Inquiry" : "New Contact Inquiry";

  const bodyHtml = `
    <p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#334155;">
      Someone submitted your portfolio contact form. Details below:
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 8px;margin-bottom:18px;">
      <tr>
        <td style="width:110px;padding:10px 12px;background:#f8fafc;border-radius:10px 0 0 10px;font-size:13px;font-weight:700;color:#0f766e;">Name</td>
        <td style="padding:10px 12px;background:#f8fafc;border-radius:0 10px 10px 0;font-size:14px;color:#1e293b;">${escapeHtml(inquiry.name)}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px;background:#f8fafc;border-radius:10px 0 0 10px;font-size:13px;font-weight:700;color:#0f766e;">Email</td>
        <td style="padding:10px 12px;background:#f8fafc;border-radius:0 10px 10px 0;font-size:14px;">
          <a href="mailto:${escapeHtml(inquiry.email)}" style="color:#0284c7;text-decoration:none;">${escapeHtml(inquiry.email)}</a>
        </td>
      </tr>
      ${
        inquiry.phone
          ? `<tr>
              <td style="padding:10px 12px;background:#f8fafc;border-radius:10px 0 0 10px;font-size:13px;font-weight:700;color:#0f766e;">Phone</td>
              <td style="padding:10px 12px;background:#f8fafc;border-radius:0 10px 10px 0;font-size:14px;color:#1e293b;">${escapeHtml(inquiry.phone)}</td>
            </tr>`
          : ""
      }
      ${
        inquiry.service
          ? `<tr>
              <td style="padding:10px 12px;background:#f8fafc;border-radius:10px 0 0 10px;font-size:13px;font-weight:700;color:#0f766e;">Service</td>
              <td style="padding:10px 12px;background:#f8fafc;border-radius:0 10px 10px 0;font-size:14px;color:#1e293b;">${escapeHtml(inquiry.service)}</td>
            </tr>`
          : ""
      }
      <tr>
        <td style="padding:10px 12px;background:#f8fafc;border-radius:10px 0 0 10px;font-size:13px;font-weight:700;color:#0f766e;">Type</td>
        <td style="padding:10px 12px;background:#f8fafc;border-radius:0 10px 10px 0;font-size:14px;color:#1e293b;">${escapeHtml(inquiry.type)}</td>
      </tr>
    </table>
    <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#0f766e;text-transform:uppercase;letter-spacing:1px;">Message</p>
    <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;padding:16px;font-size:15px;line-height:1.6;color:#334155;white-space:pre-wrap;">
${escapeHtml(inquiry.message)}
    </div>
    <p style="margin:22px 0 0;text-align:center;">
      <a href="mailto:${escapeHtml(inquiry.email)}" style="display:inline-block;background:linear-gradient(135deg,#0ea5a4,#38bdf8);color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 22px;border-radius:999px;">
        Reply to ${escapeHtml(inquiry.name)}
      </a>
    </p>
  `;

  const html = emailShell({
    title: subjectPrefix,
    preheader: `New inquiry from ${inquiry.name}`,
    bodyHtml,
  });

  return transporter.sendMail({
    from: getFromAddress(),
    to,
    replyTo: inquiry.email,
    subject: `[Portfolio] ${subjectPrefix} — ${inquiry.name}`,
    html,
    text: [
      subjectPrefix,
      `Name: ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      inquiry.phone ? `Phone: ${inquiry.phone}` : null,
      inquiry.service ? `Service: ${inquiry.service}` : null,
      `Type: ${inquiry.type}`,
      "",
      "Message:",
      inquiry.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });
}

export async function sendThankYouToSender(inquiry) {
  const transporter = getTransporter();
  const name = escapeHtml(inquiry.name);

  const bodyHtml = `
    <div style="text-align:center;margin-bottom:22px;">
      <div style="display:inline-block;width:64px;height:64px;line-height:64px;border-radius:50%;background:linear-gradient(135deg,#14b8a6,#38bdf8);color:#ffffff;font-size:30px;font-weight:700;">
        ✓
      </div>
    </div>
    <h2 style="margin:0 0 12px;text-align:center;font-size:24px;line-height:1.3;color:#0f172a;">
      Thank you, ${name}!
    </h2>
    <p style="margin:0 0 18px;text-align:center;font-size:16px;line-height:1.7;color:#475569;">
      Your message was sent <strong style="color:#0f766e;">successfully</strong>.
      I have received your inquiry and will get back to you soon.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
      <tr>
        <td style="padding:14px 16px;background:#ecfeff;border:1px solid #99f6e4;border-radius:12px;">
          <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#0f766e;">What happens next?</p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#334155;">
            I usually reply within <strong>24 hours</strong>. Please check your inbox
            (and spam folder just in case).
          </p>
        </td>
      </tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 8px;">
      <tr>
        <td style="padding:14px 16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
          <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#64748b;">Your submitted email</p>
          <p style="margin:0;font-size:14px;color:#0f172a;">${escapeHtml(inquiry.email)}</p>
        </td>
      </tr>
    </table>
    <p style="margin:24px 0 0;text-align:center;font-size:14px;color:#64748b;line-height:1.6;">
      Looking forward to connecting with you.<br />
      <span style="color:#0f172a;font-weight:700;">— Devendra Saini</span>
    </p>
  `;

  const html = emailShell({
    title: "Message Received Successfully",
    preheader: `Thanks ${inquiry.name}! Your inquiry was received successfully.`,
    bodyHtml,
  });

  return transporter.sendMail({
    from: getFromAddress(),
    to: inquiry.email,
    subject: "✅ Message received — thanks for contacting Devendra",
    html,
    text: [
      `Thank you, ${inquiry.name}!`,
      "",
      "Your message was sent successfully. I have received your inquiry and will get back to you soon.",
      "",
      "What happens next?",
      "I usually reply within 24 hours. Please check your inbox (and spam folder just in case).",
      "",
      `Your submitted email: ${inquiry.email}`,
      "",
      "— Devendra Saini",
    ].join("\n"),
  });
}
