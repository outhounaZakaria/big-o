import PageMeta from "../../components/common/PageMeta";
import HeroSixteen from "../../components/quietyInsurance/HeroSixteen";
import InsuranceAchievement from "../../components/quietyInsurance/InsuranceAchievement";
import InsuranceBlog from "../../components/quietyInsurance/InsuranceBlog";
import InsuranceContact from "../../components/quietyInsurance/InsuranceContact";
import InsuranceGallery from "../../components/quietyInsurance/InsuranceGallery";
import InsuranceReview from "../../components/quietyInsurance/InsuranceReview";
import InsuranceService from "../../components/quietyInsurance/InsuranceService";
import InsuranceSubscription from "../../components/quietyInsurance/InsuranceSubscription";
import InsuranceTeam from "../../components/quietyInsurance/InsuranceTeam";
import Footer from "../../layout/Footer/Footer";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";

const QuietyInsurance = () => {
  return (
    <>
      <Layout>
        <PageMeta title="Quiety - QuetyInsurance" />
        <Navbar insurance />
        <HeroSixteen />
        <InsuranceService />
        <InsuranceGallery />
        <InsuranceAchievement />
        <InsuranceContact />
        <InsuranceTeam />
        <InsuranceReview />
        <InsuranceSubscription />
        <InsuranceBlog />
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

export default QuietyInsurance;
