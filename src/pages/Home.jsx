import HeroBanner from "../components/HeroBanner/HeroBanner";
import Services from "../components/Services/Services";
import Roadmap from "../components/Roadmap/Roadmap";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <HeroBanner />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
