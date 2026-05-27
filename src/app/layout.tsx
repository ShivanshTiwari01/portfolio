import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './contexts/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Improves font loading
  variable: '--font-inter', // Optional: if you want to use it as a CSS variable
});

export const metadata: Metadata = {
  title: 'Shivansh Tiwari - Software Engineer',
  description:
    'Portfolio of Shivansh Tiwari — Full Stack Architect | Software Engineer building scalable backend systems, AI-integrated apps, and full-stack products end-to-end.',
  keywords:
    'Shivansh Tiwari, Software Engineer, Software Developer, Full Stack Developer, Node.js, Express.js, React, Next.js, RESTful APIs, WebSockets, AI, System Architecture, Portfolio',
  openGraph: {
    title: 'Shivansh Tiwari - Full Stack Engineer',
    description:
      'Building scalable, production-grade systems end-to-end — backends, AI-integrated apps, and polished frontends.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
