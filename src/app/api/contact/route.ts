import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { EMAILJS, inquiryBody, inquiryTemplateParams } from 'src/lib/email';
import { SITE } from 'src/lib/site';

const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY || 'LrlZ2MgXGztzWAs9P28pu';
const GMAIL_USER = process.env.GMAIL_USER ?? SITE.email;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function deliverViaEmailJs(name: string, email: string, message: string) {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: SITE.url,
    },
    body: JSON.stringify({
      service_id: EMAILJS.serviceId,
      template_id: EMAILJS.templateId,
      user_id: EMAILJS.publicKey,
      accessToken: PRIVATE_KEY,
      template_params: inquiryTemplateParams(name, email, message),
    }),
    signal: AbortSignal.timeout(10_000),
  });
  return response.ok;
}

async function deliverViaGmailSmtp(name: string, email: string, message: string) {
  if (!GMAIL_APP_PASSWORD) return false;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });
  await transporter.sendMail({
    from: `"${SITE.name} svetainė" <${GMAIL_USER}>`,
    to: SITE.email,
    replyTo: email,
    subject: `Užklausa iš ${name}`,
    text: `${message}\n\n— ${name}\n${email}`,
  });
  return true;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const payload = body as { name?: string; email?: string; message?: string; privacy?: boolean };
  const name = payload.name?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const message = payload.message?.trim() ?? '';

  if (!payload.privacy) {
    return NextResponse.json({ ok: false, error: 'privacy_required' }, { status: 400 });
  }
  if (name.length < 2 || !isEmail(email) || message.length < 1) {
    return NextResponse.json({ ok: false, error: 'invalid_fields' }, { status: 400 });
  }

  try {
    if (await deliverViaEmailJs(name, email, message)) {
      return NextResponse.json({ ok: true });
    }
  } catch {
    // EmailJS rejected the request; try SMTP next.
  }

  try {
    if (await deliverViaGmailSmtp(name, email, message)) {
      return NextResponse.json({ ok: true });
    }
  } catch {
    // missing or invalid app password
  }

  return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 });
}
