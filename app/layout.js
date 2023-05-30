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
      <body className={pattaya.className}>
        <MyHeader />
        <main className={roboto_serif.className}>{children}</main>
        <MyFooter />
      </body>
    </html>
  );
}
