import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import FeatureImgSeven from '../../components/features/FeatureImgSeven';
import HeroFive from './HeroFive';
import PromoTwo from '../../components/promo/PromoTwo';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import FeatureOne from "../../components/features/FeatureOne";

const HomeSoftApplication = () => {
  return (
    <Layout extraClass='overflow-hidden'>
      <PageMeta title='Big-O Technologies' />
      <Navbar />
      <HeroFive />
      <PromoTwo />
        <FeatureOne />
      <FeatureImgSeven />
      <FooterOne
        style={{
          background:
            "url('assets/img/page-header-bg.svg')no-repeat bottom right",
        }}
      />
    </Layout>
  );
};

export default HomeSoftApplication;
