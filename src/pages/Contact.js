import React from "react";
import PageHeader from "../components/common/PageHeader";
import PageMeta from "../components/common/PageMeta";
import ContactBox from "../components/contact/ContactBox";
import ContactFormTwo from "../components/contact/ContactFormTwo";
import FooterOne from "../layout/Footer/FooterOne";
import Navbar from "../layout/Header/Navbar";
import Layout from "../layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <PageMeta title="Contact-Software &amp; IT Solutions HTML Template" />
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Contact Us"
        desc="Let’s discuss how Big-O Technologies can help your business grow.
        Get in touch for consultations, collaborations, or support."
      />
      <ContactBox />
      <FooterOne
        style={{
          background:
            "url('assets/img/page-header-bg.svg')no-repeat bottom right",
        }}
      />
    </Layout>
  );
};

export default Contact;
