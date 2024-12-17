import HeroSection from "./components/01_HeroSection";
import Services from "./components/02_Services";
import Destinations from "./components/03_Destinations";
import Tickets from "./components/04_Tickets";
import Testimonials from "./components/05_Testimonials";
import Logo from "./components/06_Logo";
import Subscription from "./components/07_Subscription";
import Footer from "./components/08_Footer";



export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Destinations />
      <Tickets />
      <Testimonials />
      <Logo />
      <Subscription />
      <Footer />
    </>
  );
}
