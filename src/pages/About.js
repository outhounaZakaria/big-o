import React from 'react';
import AboutPageHero from '../components/about/AboutPageHero';
import OurStory from '../components/about/OurStory';
import PageMeta from '../components/common/PageMeta';
import CtaTwo from '../components/cta/CtaTwo';
import FeatureImgThree from '../components/features/FeatureImgThree';
import Team from '../components/team/Team';
import TestimonialTwo from '../components/testimonial/TestimonialTwo';
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
      <Navbar classOption='navbar-light' />
      <AboutPageHero />
        <SoftwareCompanyAbout />
        <FeatureImgSix />
        <WorkProcessFour />
      <FooterOne />
    </Layout>
  );
};

export default About;
