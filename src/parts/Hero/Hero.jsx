import textContent from '../../text-content.json';
import { ImageSet } from 'components/ImageSet';
import { images } from 'heroImageSet';
import {
  StyledSection,
  StyledContainer,
  SectionTitle,
  Text,
  InnerWrap,
  StyledLink,
  LinkLabel,
  Paragraph,
} from './Hero.styled';

export const Hero = () => {
  const {
    hero: { firstText, secondText, thirdText },
  } = textContent;

  return (
    <StyledSection>
      <StyledContainer>
        <Text>{firstText}</Text>

        <SectionTitle>
          <span>YACHT</span>
          <span>APES</span>
        </SectionTitle>

        <Text>{secondText}</Text>

        <ImageSet id="hero" pictures={images} alt="Hero Ape" loading="eager" />

        <InnerWrap>
          <StyledLink to="mint" smooth={true} duration={500}>
            <LinkLabel>MEET APES</LinkLabel>
          </StyledLink>

          <Paragraph>{thirdText}</Paragraph>
        </InnerWrap>
      </StyledContainer>
    </StyledSection>
  );
};
