// page for Tutorials for SEO

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function Tutorials() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Tutorials for SEO`} description="Tutorials for SEO">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Tutorials for SEO</h1>
          <p className="hero__subtitle">Tutorials for SEO</p>
        </div>
      </header>
      <main>
        <div className="container">
          <h1>Tutorials for SEO</h1>
          <p>Tutorials for SEO</p>
        </div>
      </main>
    </Layout>
  );
}

export default Tutorials;
