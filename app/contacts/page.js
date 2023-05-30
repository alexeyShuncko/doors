'use client';

import s from './page.module.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const metadata = {
  title: 'Контакты | Двери Грузии',
};

export default function Contacts() {
  const def = {
    center: [41.693083, 44.801561],
    zoom: 14,
  };

  return (
    <div>
      <h1 className={s.title}>Контакты</h1>
      <ul className={s.contactBlock}>
        <li>
          <div className={s.item}>
            <h3>Телефоны:</h3>
            <ul>
              <li className={s.firstLi}>+995-032-1234455</li>
              <li>+995-032-1112233</li>
            </ul>
          </div>
          <div>
            <h3>Время работы:</h3>
            <ul>
              <li className={s.firstLi}>пн-пт: 10:00 - 20:00</li>
              <li>сб-вс: 11:00 - 18:00</li>
            </ul>
          </div>
        </li>
        <li>
          <div className={s.item}>
            <h3>Электронная почта:</h3>
            <ul>
              <li className={s.firstLi}>dveri@mail.ru</li>
              <li>topdverigruzii@mail.ru</li>
            </ul>
          </div>
          <div>
            <h3>Адреса магазинов:</h3>
            <ul>
              <li className={s.firstLi}>
                Тбилиси, проспект Шота Руставели, 16
              </li>
              <li>Тбилиси, улица Николая Бараташвили, 4</li>
            </ul>
          </div>
        </li>
        <li>
          <YMaps
            preload
            query={{
              apikey: '53dca892-14fc-4fba-94d9-e871421fff5e',
              load: 'package.full',
            }}>
            <Map defaultState={def} width={480} height={360}>
              <Placemark geometry={[41.696846, 44.804589]} />
              <Placemark geometry={[41.699317, 44.79698]} />
            </Map>
          </YMaps>
        </li>
      </ul>
    </div>
  );
}
