import textContent from '../../text-content.json';
import { ImageSet } from 'components/ImageSet';
import { images } from 'aboutImageSet';
import { Container } from 'components/Container';
import { Banner } from 'components/Banner';
import { useMediaQuery } from 'react-responsive';
import {
  StyledSection,
  Wrapper,
  SectionTitle,
  Span,
  FirstTextWrap,
  FirstText,
  LastString,
  SecondTextWrap,
  SecondText,
  CrossIcon,
  BannerWrap,
} from './AboutSection.styled';

export const AboutSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const Break = () => <br />;

  const {
    about: { firstText, firstTextLastRow, secondText },
  } = textContent;

  return (
    <StyledSection id="about">
      <Container>
        <Wrapper>
          <SectionTitle>
            a Story that started with{' '}
            <Span>
              one simple
              {isMobile && <Break />} ape
            </Span>
          </SectionTitle>

          <FirstTextWrap>
            <FirstText>{firstText}</FirstText>
            <LastString>{firstTextLastRow}</LastString>
          </FirstTextWrap>

          <SecondTextWrap>
            <CrossIcon />

            <SecondText>{secondText}</SecondText>
          </SecondTextWrap>

          <ImageSet
            id="about"
            pictures={images}
            alt="Ape in a cap"
            loading="lazy"
          />
        </Wrapper>
      </Container>

      <BannerWrap>
        <Banner />

        <Banner />
      </BannerWrap>
    </StyledSection>
  );
};
