import { useMediaQuery } from 'react-responsive';
import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { AboutSection } from 'components/AboutSection';
import { Section } from 'components/Section';
import { Footer } from 'components/Footer';
import { MindMap } from 'components/MindMap';
import { Slider } from 'components/Slider';

export default function HomePage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      <Header />

      <main>
        <Hero />

        <AboutSection />

        <Section id="m-map" title="MIND map">
          {isMobile && <Slider />}
          {isTablet && <MindMap />}
        </Section>

        <Section id="faq" title="FAQ" />

        <Section id="arts" title="COLLECTION" />

        <Section id="mint" title="Are you in?" />
      </main>

      <Footer />
    </>
  );
}
