'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Send,
  MessageCircle,
  User,
  AtSign,
  MessageSquare,
  Phone,
  Clock,
  Check,
  CircleAlert,
  ListChecks,
} from 'lucide-react';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import { SITE } from 'src/lib/site';
import { EMAILJS, inquiryMailto, inquiryTemplateParams } from 'src/lib/email';
import { Reveal } from 'src/components/Reveal';

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '', privacy: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error' | 'mailto'>('idle');
  const [mailtoHref, setMailtoHref] = useState(`mailto:${SITE.email}`);

  const markSent = () => {
    setStatus('sent');
    setFormData({ name: '', email: '', message: '', privacy: false });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const privacyBox = form.elements.namedItem('privacy') as HTMLInputElement | null;
    const privacy = privacyBox?.checked ?? formData.privacy;
    if (!privacy) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    const href = inquiryMailto(formData.name, formData.email, formData.message);
    setMailtoHref(href);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          privacy: true,
        }),
        signal: AbortSignal.timeout(12_000),
      });
      if (response.ok) {
        markSent();
        return;
      }
    } catch {
      // Fall through to EmailJS in the browser, then mailto.
    }

    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        inquiryTemplateParams(formData.name, formData.email, formData.message),
        { publicKey: EMAILJS.publicKey }
      );
      markSent();
      return;
    } catch {
      // Open the visitor's mail app only if EmailJS also failed.
    }

    setStatus('mailto');
    window.location.assign(href);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 inline-flex items-center gap-2 justify-center w-full">
            <MessageCircle size={24} strokeWidth={1.5} />
            {t('Susisiekime', 'Get in Touch')}
          </h1>
          <p className="text-center text-gray-700 mb-10 max-w-xl mx-auto inline-flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
            <span className="inline-flex items-center gap-2 font-medium">
              <Clock size={18} strokeWidth={1.5} />
              {t('Atsakau per 24 val.', 'I reply within 24 hours.')}
            </span>
            <span className="hidden sm:inline text-gray-300">·</span>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 hover:underline underline-offset-4">
              <Phone size={18} strokeWidth={1.5} />
              {SITE.phoneDisplay}
            </a>
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            {status === 'sent' ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-green-900" role="status">
                <p className="font-semibold inline-flex items-center gap-2 mb-2">
                  <Check size={20} strokeWidth={1.5} />
                  {t('Žinutė išsiųsta', 'Message sent')}
                </p>
                <p className="text-sm mb-4">
                  {t(
                    'Ačiū. Atsakysiu per 24 valandas šiuo el. paštu.',
                    'Thanks. I will reply within 24 hours at this email.'
                  )}
                </p>
                <button
                  type="button"
                  className="text-sm font-medium underline underline-offset-4"
                  onClick={() => setStatus('idle')}
                >
                  {t('Siųsti kitą žinutę', 'Send another message')}
                </button>
              </div>
            ) : status === 'mailto' ? (
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-900" role="status">
                <p className="font-semibold inline-flex items-center gap-2 mb-2">
                  <Mail size={20} strokeWidth={1.5} />
                  {t('Žinutė paruošta el. pašte', 'Message ready in your email app')}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  {t(
                    'Automatinis siuntimas šiuo metu neveikia. Paspauskite mygtuką — laiškas bus užpildytas ir adresuotas ',
                    'Automatic sending is currently down. Tap the button — the email is filled in and addressed to '
                  )}
                  <a className="underline underline-offset-4 font-medium" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                  .
                </p>
                <a
                  href={mailtoHref}
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors mb-3"
                >
                  {t('Atidaryti el. paštą', 'Open email app')}
                  <Send size={18} strokeWidth={1.5} />
                </a>
                <button
                  type="button"
                  className="text-sm font-medium underline underline-offset-4"
                  onClick={() => setStatus('idle')}
                >
                  {t('Grįžti prie formos', 'Back to the form')}
                </button>
              </div>
            ) : (
              <form onSubmit={sendEmail} className="space-y-4" noValidate={false}>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-1">
                    {t('Vardas', 'Name')} <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <User size={18} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder={t('Jūsų vardas', 'Your name')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-1">
                    {t('El. paštas', 'Email')} <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <AtSign size={18} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="vardas@imone.lt"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-1">
                    {t('Žinutė', 'Message')} <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare size={18} strokeWidth={1.5} className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      id="contact-message"
                      name="message"
                      autoComplete="off"
                      placeholder={t('Trumpai apie projektą ir terminus', 'A short note about the project and timeline')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="contact-privacy"
                    name="privacy"
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                    required
                    className="mt-1 h-4 w-4 accent-black"
                  />
                  <label htmlFor="contact-privacy" className="text-sm text-gray-700">
                    {t('Sutinku, kad šie duomenys būtų naudojami atsakymui pagal', 'I agree that this data is used to reply, as described in the')}{' '}
                    <Link href="/privatumas" className="underline underline-offset-4 font-medium">
                      {t('privatumo politiką', 'privacy policy')}
                    </Link>
                    . <span className="text-red-600">*</span>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-70 transition-colors"
                >
                  {status === 'sending' ? t('Siunčiama...', 'Sending...') : t('Siųsti', 'Send')}
                  <Send size={18} strokeWidth={1.5} />
                </button>
                {status === 'error' ? (
                  <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm inline-flex items-center gap-2 w-full" role="alert">
                    <CircleAlert size={18} strokeWidth={1.5} className="shrink-0" />
                    {t(
                      'Pažymėkite privatumo sutikimą. Jei forma vis tiek neveikia, rašykite ',
                      'Please accept the privacy policy. If the form still fails, email '
                    )}
                    <a className="underline underline-offset-4" href={`mailto:${SITE.email}`}>
                      {SITE.email}
                    </a>
                    .
                  </p>
                ) : null}
              </form>
            )}
          </Reveal>

          <Reveal delay={0.08}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 h-full">
              <h2 className="font-bold text-xl mb-4">{t('Kontaktai ir kanalai', 'Contact channels')}</h2>
              <ul className="space-y-4 mb-8">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-lg hover:text-primary transition"
                  >
                    <Mail size={22} strokeWidth={1.5} /> {SITE.email}
                  </a>
                </li>
                <li>
                  <a href={SITE.phoneHref} className="flex items-center gap-3 text-lg hover:text-primary transition">
                    <Phone size={22} strokeWidth={1.5} /> {SITE.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg hover:text-primary transition"
                  >
                    <IconBrandLinkedin size={22} strokeWidth={1.5} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg hover:text-primary transition"
                  >
                    <IconBrandGithub size={22} strokeWidth={1.5} /> GitHub · {SITE.githubHandle}
                  </a>
                </li>
              </ul>
              <div>
                <h3 className="font-semibold mb-3 inline-flex items-center gap-2">
                  <ListChecks size={18} strokeWidth={1.5} />
                  {t('Kaip vyksta pirmas žingsnis', 'How the first step works')}
                </h3>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>{t('Trumpas briefing’as (forma, el. paštas ar skambutis).', 'A short briefing (form, email, or call).')}</li>
                  <li>{t('Pasiūlymas su fiksuota kaina ir terminu.', 'A quote with a fixed price and timeline.')}</li>
                  <li>{t('Startas, kai apimtis sutarta.', 'Kickoff once the scope is agreed.')}</li>
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
