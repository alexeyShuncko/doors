'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import doorImg from '../public/door.png';

export const MyHeader = () => {
  const pathname = usePathname();

  return (
    <header>
      <Link href={'/'}>
        <div className="logo">
          <Image src={doorImg} height={40} width={20} alt="Дверь" />
          <span>
            Двери<br></br> Грузии
          </span>
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={'/'} className={pathname == '/' ? 'activeLink' : ''}>
              Главная
            </Link>
          </li>
          <li>
            <Link
              href={'/catalogs'}
              className={pathname === '/catalogs' ? 'activeLink' : ''}>
              Каталоги
            </Link>
          </li>
          <li>
            <Link
              href={'/about'}
              className={pathname === '/about' ? 'activeLink' : ''}>
              О нас
            </Link>
          </li>
          <li>
            <Link
              href={'/contacts'}
              className={pathname === '/contacts' ? 'activeLink' : ''}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
