import './globals.css';
import { Pattaya, Roboto_Serif } from 'next/font/google';
import { MyHeader } from '@/components/MyHeader';
import { MyFooter } from '@/components/MyFooter';

const pattaya = Pattaya({ subsets: ['latin'], weight: '400' });
const roboto_serif = Roboto_Serif({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Двери Грузии',
  description: 'Самые лучшие двери, которые можно только найти',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#84a084" />
        <meta name="msapplication-TileColor" content="#84a084" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={pattaya.className}>
        <MyHeader />
        <main className={roboto_serif.className}>{children}</main>
        <MyFooter />
      </body>
    </html>
  );
}
