import { Container } from 'components/Container';
import Img from '../../images/about-desk.png';
import {
  StyledSection,
  SectionTitle,
  Span,
  FirstTextWrap,
  FirstText,
  LastString,
  SecondTextWrap,
  SecondText,
  Image,
  BannerWrap,
  BanerText,
} from './AboutSection.styled';

export const AboutSection = () => {
  return (
    <StyledSection>
      <Container>
        <SectionTitle id='about'>
          a Story that started with <Span>one simple ape</Span>
        </SectionTitle>

        <FirstTextWrap>
          <FirstText>
            WHO GOT FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW
            THE IDEA OF ESCAPING AND DYNAMIC
          </FirstText>
          <LastString>JOURNEY ON THE YACHT</LastString>
        </FirstTextWrap>

        <SecondTextWrap>
          <SecondText>
            EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS
            ARE RANDOMLY GENERATED BY USERS
          </SecondText>
        </SecondTextWrap>

        <Image src={Img} alt="ASecondTexte in a cap" />
      </Container>

      <BannerWrap>
        <BanerText>HAVE NO LIMITS</BanerText>
        
      </BannerWrap>
    </StyledSection>
  );
};
