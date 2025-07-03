import React from "react";
import PageHeader from "../../components/common/PageHeader";
import FooterOne from "../../layout/Footer/FooterOne";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import TechTab from "../../components/tabs/TechTab";
import ServicePromo from "../../components/promo/ServicePromo";

const Services = () => {
  return (
    <Layout>
      <Navbar navDark />
      <PageHeader
        title="Empower Your Business With Our Comprehensive IT Solutions"
        desc="Welcome to Big-O Technologies — your trusted partner for innovative IT solutions and digital transformation.
         At Big-O, we’re driven by a passion for technology that helps businesses thrive, grow, and stay ahead."
      />
        <ServicePromo />
      <FooterOne />
    </Layout>
  );
};

export default Services;
