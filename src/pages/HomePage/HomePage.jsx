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
import { images } from 'collection';
import { StyledMain } from './HomePage.styled';

export default function HomePage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const { mapCards, apeDescriptions } = textContent;
  const apes = createItems(apeDescriptions, images);

  return (
    <>
      <Header />

      <StyledMain>
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
      </StyledMain>

      <Footer />
    </>
  );
}
