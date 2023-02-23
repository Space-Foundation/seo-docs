// page for Standards for SEO

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import seoIcon from "/img/seo.png"
import StandardsContainer from "../components/StandardsContainer"


function Standards() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Standards for SEO`} description="Standards for SEO">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Standards for SEO</h1>
          <p className="hero__subtitle">
            The Essential Guide to SEO Standards: Best Practices and
          </p>
        </div>
      </header>
      <main>
        <div className="container pt-5">
          <h4>Guidelines for Improving Your Website's Search Engine Ranking</h4>
          <div>
            <img src={seoIcon} alt="" height="150px" />
          </div>
          <StandardsContainer/>
        </div>
      </main>
    </Layout>
  );
}

export default Standards;
