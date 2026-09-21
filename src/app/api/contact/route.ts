import { NextResponse } from 'next/server';
import { SITE } from 'src/lib/site';
import { deliverViaNoundry } from 'src/lib/email';

const SERVICE_ID = process.env.EMAILJS_SERVICE_ID ?? 'service_192u0r9';
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID ?? 'template_u2g1ok7';
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY ?? 'ubLfcy2BLMSoiD07t';
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function deliverViaEmailJs(name: string, email: string, message: string) {
  const emailjsBody: Record<string, unknown> = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: {
      from_name: name,
      from_email: email,
      message,
      reply_to: email,
      to_email: SITE.email,
      to_name: SITE.name,
    },
  };
  if (PRIVATE_KEY) {
    emailjsBody.accessToken = PRIVATE_KEY;
  }

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: SITE.url,
    },
    body: JSON.stringify(emailjsBody),
    signal: AbortSignal.timeout(10_000),
  });
  return response.ok;
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
    // Gmail OAuth on EmailJS is often disconnected; try Noundry next.
  }

  try {
    if (await deliverViaNoundry(name, email, message)) {
      return NextResponse.json({ ok: true });
    }
  } catch {
    // fall through
  }

  return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 });
}
