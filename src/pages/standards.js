// page for Standards for SEO

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function Standards() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Standards for SEO`} description="Standards for SEO">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Standards for SEO</h1>
          <p className="hero__subtitle">Standards for SEO</p>
        </div>
      </header>
      <main>
        <div className="container">
          <h1>Standards for SEO</h1>
          <p>Standards for SEO</p>
        </div>
      </main>
    </Layout>
  );
}

export default Standards;
