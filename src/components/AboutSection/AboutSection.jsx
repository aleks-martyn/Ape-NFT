import textContent from '../../text-content.json';
import { Container } from 'components/Container';
import { Banner } from 'components/Banner';
import { useMediaQuery } from 'react-responsive';
import SmallImg from '../../images/about-mob.png';
import MiddleImg from '../../images/about-tab.png';
import BigImg from '../../images/about-desk.png';
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
  Image,
  BannerWrap,
} from './AboutSection.styled';

export const AboutSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isMinTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMaxTablet = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const Break = () => <br />;

  const getCrossDimension = screenDimension =>
    screenDimension ? '36px' : '24px';

  const crossDimension = getCrossDimension(isDesktop);

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
              {isMobile && Break()} ape
            </Span>
          </SectionTitle>

          <FirstTextWrap>
            <FirstText>{firstText}</FirstText>
            <LastString>{firstTextLastRow}</LastString>
          </FirstTextWrap>

          <SecondTextWrap>
            <CrossIcon width={crossDimension} height={crossDimension} />

            <SecondText>{secondText}</SecondText>
          </SecondTextWrap>

          {isMobile && <Image src={SmallImg} alt="Ape in a cap" />}
          {isMinTablet && isMaxTablet && (
            <Image src={MiddleImg} alt="Ape in a cap" />
          )}
          {isDesktop && <Image src={BigImg} alt="Ape in a cap" />}
        </Wrapper>
      </Container>

      <BannerWrap>
        <Banner />

        <Banner />
      </BannerWrap>
    </StyledSection>
  );
};
