import '@/styles/globals.css';
import c from 'clsx';
import { Inter } from 'next/font/google'
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Water Jug Solver',
  description: 'An app to solve the water jug problem'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={c('scroll-smooth', inter.className)}>
      <body className="text-sm text-primary antialiased dark:bg-primary dark:text-primary-dark md:text-base lg:text-base">
        <main className="container mx-auto min-h-full max-w-3xl pb-page-bottom-mobile pt-page-top-mobile md:pb-page-bottom md:pt-page-top">
          {children}
        </main>
      </body>
    </html>
  );
}
