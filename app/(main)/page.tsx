import { Navigation } from '../../components/Navigation';
import { Hero } from '../../components/Hero';
import { Services } from '../../components/Services';
import { Projects } from '../../components/Projects';
import { Capabilities } from '../../components/Capabilities';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <Capabilities />
      <Contact />
      <Footer />
    </div>
  );
}
