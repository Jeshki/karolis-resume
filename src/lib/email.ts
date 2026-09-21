import { SITE } from 'src/lib/site';

export const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_192u0r9',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_u2g1ok7',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'ubLfcy2BLMSoiD07t',
} as const;

export function inquiryMailto(name: string, email: string, message: string) {
  const subject = `Užklausa iš ${name}`;
  const body = `${message}\n\n— ${name}\n${email}`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
