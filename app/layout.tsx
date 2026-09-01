import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luxury Hotel Management | Premium Accommodations',
  description: 'Experience luxury and comfort at our premium hotel. Book your stay today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
