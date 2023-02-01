import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is SEO?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Search Engine Optimization (SEO) is a critical part of any website.  SEO is the process of optimizing your website to rank higher in search engines like Google, Bing, and Yahoo.  SEO is a long-term strategy that can help your website get more traffic and increase your sales.
      </>
    ),
  },
  {
    title: 'Why is SEO important?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       SEO is important because it helps your website get more traffic.  The more traffic your website gets, the more likely you are to make sales.  SEO is also important because it helps your website rank higher in search engines.  The higher your website ranks, the more likely you are to get traffic from search engines.
      </>
    ),
  },
  {
    title: 'How can I learn SEO?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        You can learn our SEO Standards by reading our <a href="#">SEO Standards</a> page.  You can also learn SEO by reading our <a href="#">SEO Tutorials</a> page.  You can also learn SEO by reading our <a href="#">SEO Guides</a> page.
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
