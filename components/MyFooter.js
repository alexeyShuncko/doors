'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MyFooter = () => {
  const pathname = usePathname();
  return (
    <footer>
      <div className="lists">
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
              О компании
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
        <ul>
          <li>
            <a href="tel:+995-032-1234455" target="_blank" rel="noreferrer">
              +995-032-1234455
            </a>
          </li>
          <li>
            <a href="tel:+995-032-1112233" target="_blank" rel="noreferrer">
              +995-032-1112233
            </a>{' '}
          </li>
          <li>dveri@mail.ru</li>
          <li>topdverigruzii@mail.ru</li>
          <li>Тбилиси, проспект Шота Руставели, 16</li>
        </ul>
      </div>
      <div className="copy">&copy; Двери Грузии</div>
    </footer>
  );
};

export { MyFooter };
