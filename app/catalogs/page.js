import Image from 'next/image';
import s from './page.module.css';
import door1 from '../../public/door1.png';
import door2 from '../../public/door2.png';
import door3 from '../../public/door3.png';
import door4 from '../../public/door4.png';

export const metadata = {
  title: 'Каталоги | Двери Грузии',
};

export default function Catalogs() {
  return (
    <div>
      <h1 className={s.title}>Каталоги</h1>
      <ul className={s.listCollections}>
        <li>
          <a href="https://doors-dun.vercel.app/catalog.pdf" download>
            <div className={s.imgCont}>
              <Image
                src={door1}
                alt="Дверь"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <h3>Коллекция 1</h3>
          </a>
        </li>
        <li>
          <a href="https://doors-dun.vercel.app/catalog.pdf" download>
            <div className={s.imgCont}>
              <Image
                src={door2}
                alt="Дверь"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3>Коллекция 2</h3>
          </a>
        </li>
        <li>
          <a href="https://doors-dun.vercel.app/catalog.pdf" download>
            <div className={s.imgCont}>
              <Image
                src={door3}
                alt="Дверь"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3>Коллекция 3</h3>
          </a>
        </li>
        <li>
          <a href="https://doors-dun.vercel.app/catalog.pdf" download>
            <div className={s.imgCont}>
              <Image
                src={door4}
                alt="Дверь"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3>Коллекция 4</h3>
          </a>
        </li>
      </ul>
    </div>
  );
}
