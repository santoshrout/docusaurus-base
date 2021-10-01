import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <section>
        <div className="container padding">
          <div className="row">
            <div className="col col--6">
              <h2 className="home"> Artificial Intelligence,<span  className='orange-text'> Machine Learning & </span>Data Science</h2>
              <p className="home">We will help you build highly smart and scalable applications by leveraging the power of Data and Cloud. </p>
              <a className="button button--primary" href="https://m.me/saaragh">Talk to us</a>
            </div>
            <div className="col col--6 first_img"><img src="/img/saaragh_home.png" alt="Home"/></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container padding">
          <div className="row">
            <div className="col col--12">
              <h2 className="home home-next"> Data Analytics<span  className='orange-text'> & Visualization </span></h2>
              <p className="home home-next">Get actionable insights from your data with Data Analytics and Visualization using tools like Google Data Studio, Microsoft PowerBI, D3.js, Chart.js, and Highcharts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container padding">
        <h2 className="heading-text" align="center"> Our <span className='orange-text'>Services</span> </h2>
        <div className="row">
          <div className="card card_home col">
            <Link to="ai-ml-ds">
              <img className="image" src="/img/saaragh_artificial_intelligence_machine_learning_data_science.svg" alt="Artificial Intelligence, Machine Learning and Data Science" />
            </Link> 
          </div>
          
          <div className="card card_home col">
            <Link to="data-analytics">
              <img className="image" src="/img/saaragh_data_analytics.png" alt="Data Analytics & Visualization" />
            </Link> 
          </div>
          
          <div className="card card_home col">
            <Link to="erp-solutions">
              <img className="image" src="/img/saaragh_erp_solution_odoo.png" alt="ERP Solution - Odoo"/>
            </Link>
          </div>
          
          <div className="card card_home col">
            <Link to="product-engineering">
              <img className="image" src="/img/saaragh_product_engineering.svg" alt="Product Engineering" />
            </Link> 
          </div>
          
          <div className="card card_home col">
            <Link to="cloud-computing">
              <img className="image" src="/img/saaragh_cloud_computing.png" alt="Cloud Computing"/>
            </Link>
          </div>
        </div>
      </section>

      <section className="container padding">
        <h2 className="heading-text" align="center"> <span className='orange-text'>Technologies</span> We Use </h2>
        <div className="row">
          <div className="col col--12" align="center">
            <img src="/img/tec/saaragh_technologies.png" alt="Technologies"/>
          </div>
        </div>
      </section>

      <section>
        <div className="container padding">
          <h2 className="heading-text" align="center"> Our <span className='orange-text'>Clients</span> </h2>
          <div className="row">
            <div className="col col--3">
              <div className="service-img-wrapper">
                <img className="image" src="/img/clients/konica.png" alt="KONICA MINOLTA"/>
              </div>
            </div>
            
            <div className="col col--3">
              <div className="service-img-wrapper">
                <img className="image" src="/img/clients/nmt.png" alt="NEW MEDIA TECHNOLOGY"/>
              </div>
            </div>

            <div className="col col--3">
              <div className="service-img-wrapper">
                <img className="image" src="/img/clients/risk.png" alt="() riscology *"/>
              </div>
            </div>

            <div className="col col--3">
              <div className="service-img-wrapper">
                <img className="image" src="/img/clients/bord.png" alt="BORDLive"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col col--3">
              <div className="service-img-wrapper">
                <img className="image" src="/img/clients/city.png" alt="CityTours"/>
              </div>
            </div>

            
            <div className="col col--3">
              <div className="service-img-wrapper">
                <img className="image" src="/img/clients/oryid.png"  alt="oryid solutions"/>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Saaragh helps businesses with Artificial Intelligence, Machine Learning, Data Science, Data Analytics, and Cloud Computing Solutions">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
