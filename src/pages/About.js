import React from 'react';
import AboutPageHero from '../components/about/AboutPageHero';
import PageMeta from '../components/common/PageMeta';
import FooterOne from '../layout/Footer/FooterOne';
import Navbar from '../layout/Header/Navbar';
import Layout from '../layout/Layout';
import FeatureImgSix from "../components/features/FeatureImgSix";
import WorkProcessFour from "../components/work-process/WorkProcessFour";
import SoftwareCompanyAbout from "../components/softwareCompanyHome/SoftwareCompanyAbout";

const About = () => {
  return (
    <Layout>
      <PageMeta title='About us - Software &amp; IT Solutions HTML Template' />
      <Navbar classOption='navbar-light'/>
      <AboutPageHero />
        <SoftwareCompanyAbout />
        <FeatureImgSix />
        <WorkProcessFour />
      <FooterOne />
    </Layout>
  );
};

export default About;
