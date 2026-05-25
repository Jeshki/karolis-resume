import { IconCopyright } from '@tabler/icons-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <p className="inline-flex items-center gap-2 justify-center">
        <IconCopyright size={16} className="text-white/80" />
        2025 Karolis Čibiras. Visos teisės saugomos.
      </p>
    </footer>
  );
}
