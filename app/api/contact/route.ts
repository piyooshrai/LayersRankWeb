import { NextRequest, NextResponse } from 'next/server';

/* ── Validation ───────────────────────────────────────── */

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ── SES sender ───────────────────────────────────────── */

async function sendViaSES(to: string, subject: string, htmlBody: string) {
  const region = process.env.AWS_SES_REGION;
  const accessKeyId = process.env.AWS_SES_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SES_SECRET_ACCESS_KEY;
  const fromEmail = process.env.AWS_SES_FROM_EMAIL || 'info@the-algo.com';

  if (!region || !accessKeyId || !secretAccessKey) {
    console.log('[Contact] SES not configured — logging instead');
    console.log(`[Contact] To: ${to}, Subject: ${subject}`);
    return { sent: false };
  }

  const { SESClient, SendEmailCommand } = await import('@aws-sdk/client-ses');

  const client = new SESClient({
    region,
    credentials: { accessKeyId, secretAccessKey },
  });

  const command = new SendEmailCommand({
    Source: `LayersRank <${fromEmail}>`,
    Destination: { ToAddresses: [to] },
    Message: {
      Subject: { Data: subject },
      Body: { Html: { Data: htmlBody } },
    },
  });

  await client.send(command);
  return { sent: true };
}

/* ── Email templates ──────────────────────────────────── */

const DESTINATION = 'info@the-algo.com';

function contactEmailHtml(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
<h2>New Contact Form Submission</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;">
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.name}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Subject</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.subject}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;white-space:pre-wrap;">${data.message}</td></tr>
</table>`;
}

function demoEmailHtml(data: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
}) {
  return `
<h2>New Demo Request</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;">
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.firstName} ${data.lastName}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.company}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Team Size</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.teamSize}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;white-space:pre-wrap;">${data.message || '(none)'}</td></tr>
</table>`;
}

function newsletterEmailHtml(email: string) {
  return `
<h2>New Newsletter Subscription</h2>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
<p>Add this address to the mailing list.</p>`;
}

/* ── API route ────────────────────────────────────────── */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType } = body as { formType?: string };

    if (!formType) {
      return NextResponse.json({ error: 'Missing formType' }, { status: 400 });
    }

    switch (formType) {
      case 'contact': {
        const { name, email, subject, message } = body;
        if (!name || !email || !subject || !message) {
          return NextResponse.json(
            { error: 'All fields are required' },
            { status: 400 },
          );
        }
        if (!isValidEmail(email)) {
          return NextResponse.json(
            { error: 'Please enter a valid email' },
            { status: 400 },
          );
        }
        await sendViaSES(
          DESTINATION,
          `[LayersRank Contact] ${subject} — ${name}`,
          contactEmailHtml({ name, email, subject, message }),
        );
        return NextResponse.json({ success: true, message: 'Message sent. We\'ll get back to you within one business day.' });
      }

      case 'demo': {
        const { firstName, lastName, email, company, teamSize, message } = body;
        if (!firstName || !lastName || !email || !company) {
          return NextResponse.json(
            { error: 'Please fill in all required fields' },
            { status: 400 },
          );
        }
        if (!isValidEmail(email)) {
          return NextResponse.json(
            { error: 'Please enter a valid email' },
            { status: 400 },
          );
        }
        await sendViaSES(
          DESTINATION,
          `[LayersRank Demo] ${company} — ${firstName} ${lastName}`,
          demoEmailHtml({ firstName, lastName, email, company, teamSize: teamSize || 'Not specified', message: message || '' }),
        );
        return NextResponse.json({ success: true, message: 'Demo request received. We\'ll reach out within one business day.' });
      }

      case 'newsletter': {
        const { email } = body;
        if (!email || !isValidEmail(email)) {
          return NextResponse.json(
            { error: 'Please enter a valid email' },
            { status: 400 },
          );
        }
        await sendViaSES(
          DESTINATION,
          `[LayersRank Newsletter] New subscriber: ${email}`,
          newsletterEmailHtml(email),
        );
        return NextResponse.json({ success: true, message: 'You\'re subscribed! Check your inbox.' });
      }

      default:
        return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }
  } catch (err) {
    console.error('[Contact API] Error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
