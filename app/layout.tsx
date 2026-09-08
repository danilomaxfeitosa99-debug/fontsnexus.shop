import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-body', subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ variable: '--font-display', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fonts Nexus | Marketing de Performance',
  description: 'Estratégia e operação de direct response em Google Ads, Meta Ads e Native Ads.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body></html>;
}
