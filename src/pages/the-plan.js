import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import text from '../i18n/da';
import styles from './index.module.css';
import Separator from '../components/Separator';
import SEO from '../components/SEO';

const ThePlan = () => {
  return (
    <Layout>
      <SEO title="Mere om planen" description="" />
      <section className={[styles.top, 'green', 'separator-bottom'].join(' ')}>
        <div className="container-large">
          <h1>{text.moreAboutThePlan}</h1>
        </div>
      </section>
      <section>
        <Separator variant={1} />
        <div className="container-small">
          <ReactMarkdown source={text.plan} />
        </div>
      </section>
    </Layout>
  );
};

export default ThePlan;
