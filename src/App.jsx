import "./App.css";
import Banner from "./components/banner/Banner";
import Business from "./components/business/Business";
import Footer from "./components/footer/Footer";
import GlobalGrowth from "./components/globalGrowth/GlobalGrowth";
import Guiding from "./components/guiding/Guiding";
import Investor from "./components/investor/Investor";
import LatestInsights from "./components/latestInsights/LatestInsights";
import Navbar from "./components/navbar/Navbar";
import Newest from "./components/newest/Newest";
import TestimonialSlider from "./components/testimonialSlider/TestimonialSlider";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Banner />
        <GlobalGrowth />
        <Business />
        <Investor />
        <TestimonialSlider />
        <Guiding />
        <LatestInsights />
        <Newest />
        <Footer />
      </div>
    </>
  );
}

export default App;
