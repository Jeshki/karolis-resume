import { SITE } from 'src/lib/site';

const RETIRED_PUBLIC_KEY = 'ubLfcy2BLMSoiD07t';
const PUBLIC_KEY = '_IIcLKrzrT4e6tMvp';

function pickPublicKey() {
  for (const value of [process.env.EMAILJS_PUBLIC_KEY, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY]) {
    if (value && value !== RETIRED_PUBLIC_KEY) return value;
  }
  return PUBLIC_KEY;
}

export const EMAILJS = {
  serviceId: process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_192u0r9',
  templateId: process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_u2g1ok7',
  publicKey: pickPublicKey(),
} as const;

export function inquiryMailto(name: string, email: string, message: string) {
  const subject = `Užklausa iš ${name}`;
  const body = `${message}\n\n— ${name}\n${email}`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function inquiryTemplateParams(name: string, email: string, message: string) {
  return {
    from_name: name,
    from_email: email,
    message,
    reply_to: email,
    to_email: SITE.email,
    to_name: SITE.name,
  };
}
