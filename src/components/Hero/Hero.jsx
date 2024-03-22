import Img from '../../images/hero-desk.png';
import {
  StyledSection,
  StyledContainer,
  SectionTitle,
  Text,
  Image,
  InnerWrap,
  Button,
  BtnLabel,
  Paragraph,
} from './Hero.styled';

export const Hero = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <Text>diD yOu seE iT ?</Text>

        <SectionTitle>
          <span>YACHT</span>
          <span>APES</span>
        </SectionTitle>

        <Text>Apes aRe eveRywhere</Text>

        <Image src={Img} alt="Hero Ape" />

        <InnerWrap>
          <Button type="button">
            <BtnLabel>MEET APES</BtnLabel>
          </Button>

          <Paragraph>
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </Paragraph>
        </InnerWrap>
      </StyledContainer>
    </StyledSection>
  );
};
