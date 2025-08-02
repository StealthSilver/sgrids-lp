import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import LogoTicker from "@/components/sections/LogoTicker";
import Advantages from "@/components/sections/Advantages";
import Cta from "@/components/sections/CTA";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats/>
      <LogoTicker/>
      <About/>
      <Services />
      <Advantages/>
      <Cta/>
      <Footer />
    </main>
  );
}
