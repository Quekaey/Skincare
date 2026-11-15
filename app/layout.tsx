import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dewkind — Everyday skincare, clearly explained',
  description: 'A fictional Nigerian skincare storefront concept for simple, clearly explained routines.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
