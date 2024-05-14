import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Lorem Ipsum 1',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    title: 'Lorem Ipsum 2',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    title: 'Lorem Ipsum 3',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        <Heading as="h3">{title}</Heading>
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
