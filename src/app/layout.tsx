import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Shivansh Tiwari - Software Engineer',
  description:
    'Portfolio of Shivansh Tiwari - Full Stack Architect and Software Engineer building scalable backend systems, AI-integrated apps, and full-stack products end-to-end.',
  keywords:
    'Shivansh Tiwari, Software Engineer, Software Developer, Full Stack Developer, Node.js, Express.js, React, Next.js, RESTful APIs, WebSockets, AI, System Architecture, Portfolio',
  openGraph: {
    title: 'Shivansh Tiwari - Full Stack Engineer',
    description:
      'Building scalable, production-grade systems end-to-end across backends, AI-integrated apps, and polished frontends.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
