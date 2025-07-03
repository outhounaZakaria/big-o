import Footer from "../../layout/Footer/Footer";
import Layout from "../../layout/Layout";
import CreativeAgencyDesignShowcase from "../../components/creativeAgencyOne/CreativeAgencyDesignShowcase";
import CreativeAgencyOneAddPlanner from "../../components/creativeAgencyOne/CreativeAgencyOneAddPlanner";
import CreativeAgencyOneAward from "../../components/creativeAgencyOne/CreativeAgencyOneAward";
import CreativeAgencyOneGoal from "../../components/creativeAgencyOne/CreativeAgencyOneGoal";
import CreativeAgencyOneHero from "../../components/creativeAgencyOne/CreativeAgencyOneHero";
import CreativeAgencyOneService from "../../components/creativeAgencyOne/CreativeAgencyOneService";
import CreativeAgencyOneSupport from "../../components/creativeAgencyOne/CreativeAgencyOneSupport";
import CreativeAgencyOneTechnology from "../../components/creativeAgencyOne/CreativeAgencyOneTechnology";

import CreativeAgencyOneBlog from "../../components/creativeAgencyOne/CreativeAgencyOneBlog";
import CreativeAgencyTestimonial from "../../components/creativeAgencyOne/CreativeAgencyTestimonial";
import Navbar from "../../layout/Header/Navbar";

const CreativeAgencyOne = () => {
  return (
    <Layout>
      <Navbar navDark creativeAgencyOne />
      <CreativeAgencyOneHero />
      <CreativeAgencyOneService />
      <CreativeAgencyOneTechnology />
      <CreativeAgencyOneGoal />
      <CreativeAgencyOneSupport />
      <CreativeAgencyOneAward />
      <CreativeAgencyDesignShowcase />
      <CreativeAgencyOneAddPlanner />
      <CreativeAgencyTestimonial />
      <CreativeAgencyOneBlog />
      <Footer
        style={{
          background:
            "url('assets/img/page-header-bg.svg')no-repeat bottom right",
        }}
      />
    </Layout>
  );
};

export default CreativeAgencyOne;
