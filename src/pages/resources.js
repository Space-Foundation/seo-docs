// page for Resources for SEO

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function Resources() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Resources for SEO`} description="Resources for SEO">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Resources for SEO</h1>
          <p className="hero__subtitle">Resources for SEO</p>
        </div>
      </header>
      <main>
        <div className="container">
          <h1>Resources for SEO</h1>
          <p>Resources for SEO</p>
        </div>
      </main>
    </Layout>
  );
}

export default Resources;
