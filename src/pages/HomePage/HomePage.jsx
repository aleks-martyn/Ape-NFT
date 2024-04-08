import { useMediaQuery } from 'react-responsive';
import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { AboutSection } from 'components/AboutSection';
import { Section } from 'components/Section';
import { Footer } from 'components/Footer';
import { MindMap } from 'components/MindMap';
import { Slider } from 'components/Slider';
import { CollectionSlider } from 'components/CollectionSlider';
import { Mint } from 'components/Mint';
import { QuestionList } from 'components/FaqSection';
import textContent from '../../text-content.json';
import { createItems } from 'utils/createItems';

import img1 from '../../images/collection-card1.jpg';
import img2 from '../../images/collection-card2.jpg';
import img3 from '../../images/collection-card3.jpg';
import img4 from '../../images/collection-card4.jpg';
import img5 from '../../images/collection-card5.jpg';
import img6 from '../../images/collection-card6.jpg';
import img7 from '../../images/collection-card7.jpg';
import img8 from '../../images/collection-card8.jpg';

export default function HomePage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const { mapCards, apeDescriptions } = textContent;
  const apes = createItems(apeDescriptions, images);

  return (
    <>
      <Header />

      <main>
        <Hero />

        <AboutSection />

        <Section id="m-map" title="MIND map">
          {isMobile && <Slider items={mapCards} />}
          {isTablet && <MindMap items={mapCards} />}
        </Section>

        <Section id="faq" title="FAQ">
          <QuestionList />
        </Section>

        <Section id="arts" title="COLLECTION">
          <CollectionSlider items={apes} />
        </Section>

        <Section id="mint" title="Are you in?">
          <Mint />
        </Section>
      </main>

      <Footer />
    </>
  );
}
