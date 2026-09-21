import { NextResponse } from 'next/server';
import { SITE } from 'src/lib/site';

const SERVICE_ID = process.env.EMAILJS_SERVICE_ID ?? 'service_192u0r9';
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID ?? 'template_u2g1ok7';
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY ?? 'ubLfcy2BLMSoiD07t';
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
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
  if (name.length < 2 || !isEmail(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: 'invalid_fields' }, { status: 400 });
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    message,
    reply_to: email,
    to_email: SITE.email,
    to_name: SITE.name,
  };

  const emailjsBody: Record<string, unknown> = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: templateParams,
  };
  if (PRIVATE_KEY) {
    emailjsBody.accessToken = PRIVATE_KEY;
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Origin: SITE.url,
      },
      body: JSON.stringify(emailjsBody),
    });

    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json(
        { ok: false, error: 'emailjs_failed', detail: detail.slice(0, 300) },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'network' }, { status: 502 });
  }
}
