import { Resend } from 'resend';

let resend: Resend | null = null;

function getResend(): Resend {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY not configured');
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log('[mail:skip] RESEND_API_KEY not configured. Would send to', opts.to);
    return false;
  }

  try {
    const client = getResend();
    await client.emails.send({
      from: process.env.EMAIL_FROM || 'FITA Academy <enquiries@fitaacademy.in>',
      to: opts.to,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
    });
    return true;
  } catch (err) {
    console.error('[mail:error]', err);
    return false;
  }
}

export async function sendEnquiryNotification(enquiry: {
  name: string;
  email: string;
  phone: string;
  course?: string;
  branch?: string;
  message?: string;
  pagePath?: string;
}): Promise<void> {
  const ownerEmail = process.env.EMAIL_TO_OWNER;
  if (!ownerEmail) return;

  const html = `
    <h2>New Enquiry Received</h2>
    <p><strong>Name:</strong> ${enquiry.name}</p>
    <p><strong>Email:</strong> ${enquiry.email}</p>
    <p><strong>Phone:</strong> ${enquiry.phone}</p>
    ${enquiry.course ? `<p><strong>Course:</strong> ${enquiry.course}</p>` : ''}
    ${enquiry.branch ? `<p><strong>Branch:</strong> ${enquiry.branch}</p>` : ''}
    ${enquiry.message ? `<p><strong>Message:</strong> ${enquiry.message}</p>` : ''}
    ${enquiry.pagePath ? `<p><strong>Page:</strong> ${enquiry.pagePath}</p>` : ''}
  `;

  await sendEmail({
    to: ownerEmail,
    subject: `New Enquiry: ${enquiry.name} - ${enquiry.course || 'General'}`,
    html,
  });
}

export async function sendBookingConfirmation(enquiry: {
  name: string;
  email: string;
  phone: string;
  course?: string;
  branch?: string;
}): Promise<void> {
  const html = `
    <h2>Thank you for your enquiry, ${enquiry.name}!</h2>
    <p>We have received your request${enquiry.course ? ` for <strong>${enquiry.course}</strong>` : ''}${enquiry.branch ? ` at <strong>${enquiry.branch}</strong>` : ''}.</p>
    <p>Our team will contact you within 24 hours at <strong>${enquiry.phone}</strong>.</p>
    <br>
    <p>Best regards,<br>FITA Academy Team</p>
  `;

  await sendEmail({
    to: enquiry.email,
    subject: 'Enquiry Received - FITA Academy',
    html,
  });
}