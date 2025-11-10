'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconSend } from '@tabler/icons-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from 'src/contexts/LanguageContext';

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_192u0r9',
        'template_u2g1ok7',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'ubLfcy2BLMSoiD07t'
      );
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          {t('Susisiekime', 'Get in Touch')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder={t('Vardas', 'Name')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
            <input
              type="email"
              placeholder={t('El. paštas', 'Email')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
            <textarea
              placeholder={t('Žinutė', 'Message')}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'sending'} // PATAISYMAS: Pakeista neteisinga hover:black klasė
              className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-70 transition-colors"
            >
              {status === 'sending' ? t('Siunčiama...', 'Sending...') : t('Siųsti', 'Send')}
              <IconSend size={18} />
            </motion.button>
            {status === 'sent' && <p className="text-green-600 text-center">{t('Žinutė išsiųsta!', 'Message sent!')}</p>}
            {status === 'error' && <p className="text-red-600 text-center">{t('Klaida. Bandykite dar kartą.', 'Error. Try again.')}</p>}
          </motion.form>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-6"
          >
            <a href="mailto:karoliscibiras@gmail.com" className="flex items-center gap-3 text-lg hover:text-primary transition">
              <IconMail size={24} /> karoliscibiras@gmail.com
            </a>
            <a href="https://linkedin.com/in/karolis-cibiras" target="_blank" className="flex items-center gap-3 text-lg hover:text-primary transition">
              <IconBrandLinkedin size={24} /> LinkedIn
            </a>
            <a href="https://github.com/jogy" target="_blank" className="flex items-center gap-3 text-lg hover:text-primary transition">
              <IconBrandGithub size={24} /> GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}