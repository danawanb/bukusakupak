import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bakso',
    Svg: require('@site/static/img/image1.svg').default,
    description: (
      <>
          <b>Bakso </b> adalah produk pangan yang terbuat dari bahan utama daging yang dilumatkan, dicampur dengan bahan lain, dibentuk bulatan,
          dan selanjutnya direbus (Tazwir 1992).
      </>
    ),
  },
  {
    title: 'Tongseng',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          <b> Tongseng</b>  adalah sejenis gulai dengan bumbu yang lebih "tajam". Perbedaan yang lebih jelas adalah pada penggunaan dagingnya.
          Tongseng dibuat dengan menggunakan daging yang masih melekat pada tulang, terutama tulang iga dan tulang belakang.
      </>
    ),
  },
  {
    title: 'Sate Maranggi',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Sate Maranggi adalah satu dari sekian banyak khazanah kuliner Indonesia yang sudah mendunia.
          Citarasa yang khas, tekstur yang empuk, menjadi salah-satu alasan Sate Maranggi menjadi kuliner yang populer
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
