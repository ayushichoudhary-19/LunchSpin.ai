import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-grotesque',
});

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LunchSpin.ai - What to eat or cook?',
  description: 'Get personalized food suggestions or recipes based on your cravings and ingredients!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bricolage.variable} bg-gray-50 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
