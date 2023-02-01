// page for guides for SEO

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function Guides() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
        title={`Guides for SEO`}
        description="Guides for SEO">
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
            <h1 className="hero__title">Guides for SEO</h1>
            <p className="hero__subtitle">Guides for SEO</p>
            </div>
        </header>
        <main>
            <div className="container">
            <h1>Guides for SEO</h1>
            <p>Guides for SEO</p>
            </div>
        </main>
        </Layout>
    );
    }

export default Guides;

