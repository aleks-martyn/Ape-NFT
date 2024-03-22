import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { AboutSection } from 'components/AboutSection';
import { Section } from 'components/Section';
import { Footer } from 'components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Section id="m-map" title="MIND map" />
        <Section id="faq" title="FAQ" />
        <Section id="arts" title="COLLECTION" />
        <Section id="mint" title="Are you in?" />
      </main>
      <Footer />
    </>
  );
}
