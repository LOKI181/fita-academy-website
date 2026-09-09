import nodemailer, { type Transporter } from "nodemailer";

let transporter: Transporter | null = null;

/**
 * Sends an email via SMTP (defaults to Gmail). If no SMTP credentials are
 * configured, it silently no-ops so the app still works in local/demo mode.
 * Returns true if sent, false if skipped.
 */
export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

  if (!host || !user || !pass) {
    // No SMTP configured — log quietly and skip.
    console.log("[mail:skip] SMTP not configured. Would send to", opts.to);
    return false;
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user, pass },
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || user,
      to: opts.to,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
    });
    return true;
  } catch (err) {
    console.error("[mail:error]", err);
    return false;
  }
}