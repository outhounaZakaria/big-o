import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/services/Services";
import ScrollToTop from "./components/common/ScrollToTop";
import HomeSoftApplication from "./themes/index5/HomeSoftApplication";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

//bootstrap
import "bootstrap/dist/js/bootstrap.bundle";

//Modal Video
import "react-modal-video/scss/modal-video.scss";

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
          <Route path="/home-fifteen"  element={<HomeFifteen />} />
           start 16 number home page           <Route path="/quiety-insurance" element={<QuietyInsurance />} />
          <Route path="/sass-marketing" element={<SassMarketingHome />} />
          <Route path="/crm-home" element= {<CrmHome />} />
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
