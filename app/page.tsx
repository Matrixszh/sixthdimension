import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSlider from "./components/HomeSlider";
import LatestProjects from "./components/LatestProjects";
import ServicesSection from "./components/SevicesSection";
import Showcase from "./components/Showcase";

export default function Home() {
  return (
  <div className="overflow-hidden">
    <Header />
    <HomeSlider />
    <About />
    <ServicesSection />
    <Showcase />
    <LatestProjects />
    <Contact />
    <Footer />
  </div>
);
}
