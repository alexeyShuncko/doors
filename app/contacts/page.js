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
              <li className={s.firstLi}>
                <a href="tel:+995-032-1234455" target="_blank" rel="noreferrer">
                  +995-032-1234455
                </a>
              </li>
              <li>
                <a href="tel:+995-032-1112233" target="_blank" rel="noreferrer">
                  +995-032-1112233
                </a>
              </li>
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
              <li className={s.firstLi}>
                <a href="mailto:dveri@mail.ru" target="_blank">
                  dveri@mail.ru
                </a>
              </li>
              <li>
                <a href="mailto:topdverigruzii@mail.ru" target="_blank">
                  topdverigruzii@mail.ru
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Адреса магазинов:</h3>
            <ul>
              <li className={s.firstLi}>
                <a
                  href="https://yandex.by/maps/10277/tbilisi/house/YE0YcQ5mQE0HQFprfXp4eH9iYw==/?ll=44.796980%2C41.699317&z=16.49"
                  target="_blank">
                  Тбилиси, проспект Шота Руставели, 16
                </a>
              </li>
              <li>
                <a
                  href=" https://yandex.by/maps/10277/tbilisi/house/YE0YfgdkTE0OQFprfXp4d3RnYg==/?ll=44.804589%2C41.696847&z=16.49"
                  target="_blank">
                  Тбилиси, улица Николая Бараташвили, 4
                </a>
              </li>
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
