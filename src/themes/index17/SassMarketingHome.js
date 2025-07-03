import HeroSeventeen from "../../components/sassMarketing/HeroSeventeen";
import SassMarketingAbout from "../../components/sassMarketing/SassMarketingAbout";
import SassMarketingBusiness from "../../components/sassMarketing/SassMarketingBusiness";
import SassMarketingFaq from "../../components/sassMarketing/SassMarketingFaq";
import SassMarketingFeature from "../../components/sassMarketing/SassMarketingFeature";
import SassMarketingIntregation from "../../components/sassMarketing/SassMarketingIntregation";
import SassMarketingPartner from "../../components/sassMarketing/SassMarketingPartner";
import SassMarketingPlatform from "../../components/sassMarketing/SassMarketingPlatform";
import SassMarketingPrice from "../../components/sassMarketing/SassMarketingPrice";
import SassMarketingSubscription from "../../components/sassMarketing/SassMarketingSubscription";
import SassMarketingTestimonial from "../../components/sassMarketing/SassMarketingTestimonial";
import Footer from "../../layout/Footer/Footer";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";

const SassMarketingHome = () => {
  return (
    <>
      <Layout classOpt="bg-soft-blue">
        <Navbar />
        <HeroSeventeen />
        <SassMarketingFeature />
        <SassMarketingBusiness />
        <SassMarketingPlatform />
        <SassMarketingAbout />
        <SassMarketingPrice />
        <SassMarketingIntregation />
        <SassMarketingTestimonial swiperBgClass="bg-white" />
        <SassMarketingSubscription />
        <SassMarketingFaq />
        <SassMarketingPartner />
        <Footer
          style={{
            background:
              "url('assets/img/page-header-bg.svg')no-repeat bottom right",
          }}
        />
      </Layout>
    </>
  );
};

export default SassMarketingHome;
