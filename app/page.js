import Image from 'next/image';
import s from './page.module.css';
import Link from 'next/link';
import photo1 from '../public/interier.webp';
import photo2 from '../public/2.jpg';
import photo3 from '../public/3.webp';

export default function Home() {
  return (
    <div>
      <div className={s.interier}></div>
      <h4 className={s.slogan}>
        Фабрика "Двери Грузии" – крупнейший производитель межкомнатных дверей. С
        2001 года компания изготавливает межкомнатные двери с учетом передовых
        технологий. В производстве мы используем оборудование известных мировых
        брендов и европейские материалы. Наша команда следит за тенденциями в
        дизайне, воплощает их в новых коллекциях дверей. Такой подход помогает
        сочетать высокое качество, актуальный модельный ряд и держать лучшую
        цену на двери.
      </h4>
      <ul className={s.list}>
        <li>
          <div className={s.imgCont}>
            <Image
              src={photo1}
              fill={true}
              alt="Интерьер1"
              className={s.photo}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={s.text}>
            <h3>Почему же всё - таки мы?</h3>
            <div>
              Потому что знаем о дверях всё! И конечно, постоянно улучшаем свои
              знания и мастерство: посещаем семинары, участвуем в выставках и
              регулярно ездим на фабрики, что бы потрогать каждую дверь своими
              руками и убедиться в её качестве. Каждый из сотрудников нашей
              дружной команды всегда готов вам помочь. В их числе и
              профессиональная бригада установщиков!
            </div>
          </div>
        </li>
        <li className={s.secondItem}>
          <div className={s.text}>
            <h3>Вам сложно выбрать двери?</h3>
            <div>
              Мы поможем и посоветуем конкретные варианты! Потому что точно
              знаем, какая дверь лучше подойдёт в ванную, а какая в гостиную и
              какая на балкон. А так же какие стоит выбирать материалы, и как
              определиться с дизайном
            </div>
          </div>
          <div className={s.imgCont}>
            <Image
              src={photo2}
              alt="Интерьер2"
              fill={true}
              className={s.photo2}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </li>
        <li>
          <div className={s.imgCont}>
            <Image
              src={photo3}
              alt="Интерьер3"
              fill={true}
              className={s.photo}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={s.text}>
            <h3>О приятных ценах</h3>
            <div>
              Наша компания работает напрямую с производителями, среди которых
              есть как отечественные, так и зарубежные фабрики. На нашем сайте
              доступно более 250 моделей. Вы непременно сможете подобрать то,
              что точно будет вам по карману! А ещё,у нас есть{' '}
              <Link href={'/catalogs'} className={s.linkCatalogs}>
                уникальные каталоги↗
              </Link>{' '}
              с подробными описаниями и фотографиями.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
