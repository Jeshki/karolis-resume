import { SITE } from 'src/lib/site';

export const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_192u0r9',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_u2g1ok7',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'ubLfcy2BLMSoiD07t',
} as const;

export const NOUNDRY_FORM_URL = `https://forms.noundry.com/f/${SITE.email}`;

export function inquiryMailto(name: string, email: string, message: string) {
  const subject = `Užklausa iš ${name}`;
  const body = `${message}\n\n— ${name}\n${email}`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function inquiryFields(name: string, email: string, message: string) {
  return {
    name,
    email,
    message,
    source: SITE.url,
    subject: `Užklausa iš ${name}`,
  };
}

export async function deliverViaNoundry(name: string, email: string, message: string) {
  const response = await fetch(NOUNDRY_FORM_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inquiryFields(name, email, message)),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) return false;
  const data = (await response.json().catch(() => null)) as { success?: boolean } | null;
  return data?.success === true;
}
