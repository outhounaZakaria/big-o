import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSassOne from "./themes/index1/HomeSassOne";
import HomeSassTwo from "./themes/index2/HomeSassTwo";
import Services from "./pages/services/Services";
import SingleService from "./pages/services/SingleService";
import Login from "./pages/onboard/Login";
import NotFoundScreen from "./components/others/NotFoundScreen";
import HomeDesktopApp from "./themes/index3/HomeDesktopApp";
import PasswordReset from "./pages/onboard/PasswordReset";
import Pricing from "./pages/Pricing";
import ScrollToTop from "./components/common/ScrollToTop";
import HomeAppLanding from "./themes/index4/HomeAppLanding";
import HomeSoftApplication from "./themes/index5/HomeSoftApplication";
import HomeStartup from "./themes/index6/HomeStartup";
import HomeDataAnalysis from "./themes/index7/HomeDataAnalysis";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import Integrations from "./pages/integration/Integrations";
import IntegrationSingle from "./pages/integration/IntegrationSingle";
import Blogs from "./pages/blog/Blogs";
import SingleBlog from "./pages/blog/SingleBlog";
import Career from "./pages/career/Career";
import CareerSingle from "./pages/career/CareerSingle";
import HelpCenter from "./pages/help-center/HelpCenter";
import SingleHelpCenter from "./pages/help-center/SingleHelpCenter";
import Signup from "./pages/onboard/Signup";
import RequestDemo from "./pages/RequestDemo";
import HomeAppTwo from "./themes/index8/HomeAppTwo";
import HomeNine from "./themes/index9/HomeNine";
import HomeTen from "./themes/index10/HomeTen";
import SingleProduct from "./pages/product/SingleProduct";
import SinglePortfolio from "./pages/SinglePortfolio";
import HomeEleven from "./themes/index11/HomeEleven";
import HomeTwelve from "./themes/index12/HomeTwelve";
import HomeThirteen from "./themes/index13/HomeThirteen";
import HomeFourteen from "./themes/index14/HomeFourteen";
import HomeFifteen from "./themes/index15/HomeFifteen";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

//bootstrap
import "bootstrap/dist/js/bootstrap.bundle";

//Modal Video
import "react-modal-video/scss/modal-video.scss";
import QuietyInsurance from "./themes/index16/QuietyInsurance";
import SassMarketingHome from "./themes/index17/SassMarketingHome";
import CrmHome from "./themes/index18/CrmHome";
import HelpDesk from "./themes/index19/HelpDesk";
import DigitalAgency from "./themes/index20/DigitalAgency";
import SoftwareCompany from "./themes/index21/SoftwareCompany";
import CreativeAgencyOne from "./themes/index22/CreativeAgencyOne";
import DigitalMarketingAgency from "./themes/index23/DigitalMarketingAgency";
import DesignAgencyOne from "./themes/index24/DesignAgencyOne";
import DesignAgencyTwo from "./themes/index25/DesignAgencyTwo";
import AgencyHomeNew from "./themes/index26/AgencyHomeNew";
import CreativeAgencyTwo from "./themes/index27/CreativeAgencyTwo";
import RiskManagment from "./themes/index28/RiskManagment";
import ItCompany from "./themes/index29/ItCompany";
import AiHome from "./themes/index30/AiHome";
import AiContentGenerator from "./themes/index31/AiContentGenerator";
import AiContentMarketing from "./themes/index32/AiContentMarketing";
import AiImageGeneration from "./themes/index33/AiImageGeneration";
import CorporateAgency from "./themes/index35/CorporateAgency";
import CreativeAgencyNew from "./themes/index36/CreativeAgencyNew";
import PaymentGatewayNew from "./themes/index34/PaymentGatewayNew";
import MarketplaceAgency from "./themes/index37/MarketplaceAgency";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeSoftApplication />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />

          {/*<Route path="/home-soft-app" element={<HomeSassOne />} />
          <Route path="/home-sass-two" element={<HomeSassTwo />} />
          <Route path="/home-desktop-app" element={<HomeDesktopApp />} />
          <Route path="/home-app-landing" element={<HomeAppLanding />} />
          <Route path="/home-startup" element={<HomeStartup />} />
          <Route path="/home-data-analysis" element={<HomeDataAnalysis />} />
          <Route path="/app-landing-two" element={<HomeAppTwo />} />
          <Route path="/home-nine" element={<HomeNine />} />
          <Route path="/home-ten" element={<HomeTen />} />*/}

         {/* <Route path="/home-eleven" element={<HomeEleven />} />
          <Route path="/home-twelve" element={<HomeTwelve />} />
          <Route path="/home-thirteen" element={<HomeThirteen />} />
          <Route path="/home-fourteen" element={<HomeFourteen />} />
          <Route path="/home-fifteen" element={<HomeFifteen />} />
           start 16 number home page
          <Route path="/quiety-insurance" element={<QuietyInsurance />} />
          <Route path="/sass-marketing" element={<SassMarketingHome />} />
          <Route path="/crm-home" element={<CrmHome />} />
          <Route path="/help-desk" element={<HelpDesk />} />
          <Route path="/digital-agency" element={<DigitalAgency />} />*/}

         {/* <Route path="/software-company" element={<SoftwareCompany />} />
          <Route path="/creative-agency-one" element={<CreativeAgencyOne />} />
          <Route
            path="/digital-marketing-agency"
            element={<DigitalMarketingAgency />}
          />
          <Route path="/design-agency-one" element={<DesignAgencyOne />} />
          <Route path="/design-agency-two" element={<DesignAgencyTwo />} />

          <Route path="/agency-home-new" element={<AgencyHomeNew />} />
          <Route path="/creative-agency-two" element={<CreativeAgencyTwo />} />
          <Route path="/risk-managment" element={<RiskManagment />} />
          <Route path="/it-company" element={<ItCompany />} />
          <Route path="/ai-company" element={<AiHome />} />

          <Route
            path="/ai-content-generator"
            element={<AiContentGenerator />}
          />
          <Route
            path="/ai-content-marketing"
            element={<AiContentMarketing />}
          />
          <Route path="/ai-image-generation" element={<AiImageGeneration />} />
          <Route path="/payment-gateway-new" element={<PaymentGatewayNew />} />
          <Route path="/corporate-agency" element={<CorporateAgency />} />
          <Route path="/creative-agency-new" element={<CreativeAgencyNew />} />
          <Route path="/marketplace-agency" element={<MarketplaceAgency />} />

          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/portfolio-single" element={<SinglePortfolio />} />
          <Route path="/single-service" element={<SingleService />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-single" element={<SingleBlog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career-single" element={<CareerSingle />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/help-center-single" element={<SingleHelpCenter />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/integration-single" element={<IntegrationSingle />} />
          <Route path="/404" element={<NotFoundScreen />} />
          <Route path="*" element={<NotFoundScreen />} />*/}
        </Routes>
      </Router>
    </>
  );
}

export default App;
