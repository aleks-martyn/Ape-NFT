import Pic from '../../images/hero-desk.png';
import {
  StyledSection,
  StyledContainer,
  Wrap,
  SectionTitle,
  Text,
  Image,
  InnerWrap,
  Button,
  Span,
  Paragraph,
} from './Hero.styled';

export const Hero = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <Wrap>
          <Text>diD yOu seE iT ?</Text>

          <SectionTitle>
            <span>YACHT</span>
            <span>APES</span>
          </SectionTitle>

          <Text>Apes aRe eveRywhere</Text>

          <Image src={Pic} alt="Hero Ape" />

          <InnerWrap>
            <Button>
              <Span>MEET APES</Span>
            </Button>

            <Paragraph>
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </Paragraph>
          </InnerWrap>
        </Wrap>
      </StyledContainer>
    </StyledSection>
  );
};
