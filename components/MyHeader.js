'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import doorImg from '../public/door.png';

export const MyHeader = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const fn = () => {
      setIsHidden(true);
    };
    if (isHidden === false) {
      document.addEventListener('click', fn);
    }
    return () => document.removeEventListener('click', fn);
  }, [isHidden]);

  const pathname = usePathname();

  return (
    <header>
      <Link href={'/'}>
        <div className="logo">
          <div className="containerImage">
            <Image
              src={doorImg}
              fill={true}
              alt="Дверь"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <span>
            Двери<br></br> Грузии
          </span>
        </div>
      </Link>
      <nav>
        <ul className="listMenu">
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
      </nav>
      <div className="hiddenMenuBlock" onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? (
          <div className="hiddenMenu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <ul className="listMenuHidden">
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
        )}
      </div>
    </header>
  );
};
