import {Geist, Geist_Mono} from 'next/font/google';
import "./globals.css"
import { NextIntlClientProvider } from 'next-intl';
import Navbar from '@/components/navbar/Navbar';
import { getLocale, getMessages } from 'next-intl/server';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale(); 
  const messages = await getMessages();
  return (
    <html lang="locale">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <div className='w-full flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8'>
              {children}
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

