import { NextRequest, NextResponse } from 'next/server';

/* ── Personal email domains to reject ──────────────────── */

const PERSONAL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.in',
  'yahoo.co.uk',
  'hotmail.com',
  'hotmail.co.uk',
  'outlook.com',
  'live.com',
  'msn.com',
  'aol.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'mail.com',
  'protonmail.com',
  'proton.me',
  'tutanota.com',
  'zoho.com',
  'yandex.com',
  'rediffmail.com',
  'gmx.com',
  'gmx.net',
  'fastmail.com',
  'hey.com',
  'inbox.com',
]);

/* ── Lead magnet types ─────────────────────────────────── */

type LeadMagnetType = 'roi' | 'questions' | 'scorecard' | 'bias';

const LEAD_MAGNETS: Record<
  LeadMagnetType,
  { subject: string; filename: string; displayName: string }
> = {
  roi: {
    subject: 'Your Hiring Cost Calculator from LayersRank',
    filename: 'roi-calculator.pdf',
    displayName: 'Hiring Cost Calculator',
  },
  questions: {
    subject: 'Your Interview Question Bank from LayersRank',
    filename: 'question-bank.pdf',
    displayName: '50 Behavioral Interview Questions',
  },
  scorecard: {
    subject: 'Your Hiring Scorecard Template from LayersRank',
    filename: 'hiring-scorecard.pdf',
    displayName: 'Engineering Hiring Scorecard',
  },
  bias: {
    subject: 'Your Bias Audit Checklist from LayersRank',
    filename: 'bias-audit-checklist.pdf',
    displayName: 'Interview Bias Audit Checklist',
  },
};

/* ── Validation helpers ────────────────────────────────── */

function isWorkEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) return false;
  return !PERSONAL_DOMAINS.has(domain);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ── SES email sender ──────────────────────────────────── */

async function sendEmailViaSES({
  to,
  subject,
  htmlBody,
  pdfPath,
}: {
  to: string;
  subject: string;
  htmlBody: string;
  pdfPath: string;
}) {
  const region = process.env.AWS_SES_REGION;
  const accessKeyId = process.env.AWS_SES_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SES_SECRET_ACCESS_KEY;
  const fromEmail = process.env.AWS_SES_FROM_EMAIL || 'info@the-algo.com';

  if (!region || !accessKeyId || !secretAccessKey) {
    console.log('[Lead Magnet] SES not configured — logging lead instead');
    console.log(`[Lead Magnet] To: ${to}, Subject: ${subject}, PDF: ${pdfPath}`);
    return { messageId: 'local-dev-stub', sent: false };
  }

  // Dynamic import to avoid bundling issues when SES is not configured
  const { SESClient, SendRawEmailCommand } = await import('@aws-sdk/client-ses');
  const { readFile } = await import('fs/promises');
  const { join } = await import('path');

  const client = new SESClient({
    region,
    credentials: { accessKeyId, secretAccessKey },
  });

  // Read PDF file
  const pdfFullPath = join(process.cwd(), 'public', 'downloads', pdfPath);
  let pdfBuffer: Buffer;
  try {
    pdfBuffer = await readFile(pdfFullPath);
  } catch {
    console.error(`[Lead Magnet] PDF not found: ${pdfFullPath}`);
    // Send email without attachment if PDF is missing
    return sendPlainEmailViaSES(client, fromEmail, to, subject, htmlBody);
  }

  const pdfBase64 = pdfBuffer.toString('base64');
  const boundary = `----=_Part_${Date.now()}_${Math.random().toString(36).slice(2)}`;

  const rawMessage = [
    `From: LayersRank <${fromEmail}>`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: 7bit',
    '',
    htmlBody,
    '',
    `--${boundary}`,
    `Content-Type: application/pdf; name="${pdfPath}"`,
    'Content-Transfer-Encoding: base64',
    `Content-Disposition: attachment; filename="${pdfPath}"`,
    '',
    pdfBase64,
    '',
    `--${boundary}--`,
  ].join('\r\n');

  const command = new SendRawEmailCommand({
    RawMessage: { Data: new TextEncoder().encode(rawMessage) },
  });

  const result = await client.send(command);
  return { messageId: result.MessageId, sent: true };
}

async function sendPlainEmailViaSES(
  client: InstanceType<typeof import('@aws-sdk/client-ses').SESClient>,
  fromEmail: string,
  to: string,
  subject: string,
  htmlBody: string,
) {
  const { SendEmailCommand } = await import('@aws-sdk/client-ses');
  const command = new SendEmailCommand({
    Source: `LayersRank <${fromEmail}>`,
    Destination: { ToAddresses: [to] },
    Message: {
      Subject: { Data: subject },
      Body: { Html: { Data: htmlBody } },
    },
  });
  const result = await client.send(command);
  return { messageId: result.MessageId, sent: true };
}

/* ── Email template ────────────────────────────────────── */

function buildEmailHtml(displayName: string, company: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2D3436;background:#f9fafb;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <img src="https://www.layersrank.com/images/LayersRank%20By%20The%20Algorithm%20Logo%20Transparent.png" alt="LayersRank" width="160" style="display:inline-block;" />
    </div>
    <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:32px;">
      <h1 style="font-size:20px;font-weight:700;margin:0 0 8px;">${displayName}</h1>
      <p style="font-size:14px;color:#636e72;margin:0 0 20px;">
        Thanks for downloading this resource. Your PDF is attached to this email.
      </p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
      <p style="font-size:14px;color:#636e72;margin:0 0 20px;">
        Want to see how LayersRank can automate structured hiring for ${company}?
      </p>
      <div style="text-align:center;margin:24px 0;">
        <a href="https://www.layersrank.com/demo" style="display:inline-block;background:#F7C948;color:#2D3436;font-size:14px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:8px;">
          Book a Demo
        </a>
      </div>
    </div>
    <div style="text-align:center;margin-top:24px;">
      <p style="font-size:12px;color:#b2bec3;">
        LayersRank by The Algorithm<br/>
        Indore, India &middot; London, UK &middot; Denver, CO<br/>
        <a href="https://www.layersrank.com" style="color:#b2bec3;">www.layersrank.com</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

/* ── API Route ─────────────────────────────────────────── */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, company, volume, phone, type } = body as {
      email?: string;
      company?: string;
      volume?: string;
      phone?: string;
      type?: string;
    };

    // Validate required fields
    if (!email || !company || !type) {
      return NextResponse.json(
        { error: 'Missing required fields: email, company, type' },
        { status: 400 },
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 },
      );
    }

    // Reject personal email domains
    if (!isWorkEmail(email)) {
      return NextResponse.json(
        { error: 'Please use your work email address' },
        { status: 422 },
      );
    }

    // Validate lead magnet type
    if (!(type in LEAD_MAGNETS)) {
      return NextResponse.json(
        { error: 'Invalid lead magnet type' },
        { status: 400 },
      );
    }

    const magnet = LEAD_MAGNETS[type as LeadMagnetType];

    // Log lead (replace with database insert when ready)
    console.log('[Lead Magnet] New lead:', {
      email,
      company,
      volume: volume || 'not provided',
      phone: phone || 'not provided',
      type,
      timestamp: new Date().toISOString(),
    });

    // Send email with PDF
    const result = await sendEmailViaSES({
      to: email,
      subject: magnet.subject,
      htmlBody: buildEmailHtml(magnet.displayName, company),
      pdfPath: magnet.filename,
    });

    return NextResponse.json({
      success: true,
      message: result.sent
        ? 'Check your email for the PDF'
        : 'Your request has been recorded',
      messageId: result.messageId,
    });
  } catch (err) {
    console.error('[Lead Magnet] Error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
