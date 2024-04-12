import textContent from '../../text-content.json';
import { Container } from 'components/Container';
import { Banner } from 'components/Banner';
import { useMediaQuery } from 'react-responsive';
import SmallImg from '../../images/about-mob.png';
import SmallImgX2 from '../../images/about-mob@2x.png';
import SmallImgX3 from '../../images/about-mob@3x.png';
import MiddleImg from '../../images/about-tab.png';
import MiddleImgX2 from '../../images/about-tab@2x.png';
import MiddleImgX3 from '../../images/about-tab@3x.png';
import BigImg from '../../images/about-desk.png';
import BigImgX2 from '../../images/about-desk@2x.png';
import BigImgX3 from '../../images/about-desk@3x.png';
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

          <picture>
            <source
              srcSet={`${BigImg} 1x, ${BigImgX2} 2x, ${BigImgX3} 3x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${MiddleImg} 1x, ${MiddleImgX2} 2x, ${MiddleImgX3} 3x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${SmallImg} 1x, ${SmallImgX2} 2x, ${SmallImgX3} 3x`}
              media="(max-width: 767px)"
            />
            <Image loading="lazy" src={SmallImg} alt="Ape in a cap" />
          </picture>
        </Wrapper>
      </Container>

      <BannerWrap>
        <Banner />

        <Banner />
      </BannerWrap>
    </StyledSection>
  );
};
