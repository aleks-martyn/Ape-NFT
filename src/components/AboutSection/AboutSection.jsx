import { Container } from 'components/Container';
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
  BanerTextWrap,
  BanerText,
} from './AboutSection.styled';

const banerSlogans = ['Destroy stereotypes', 'HAVE NO LIMITS', 'Break rules'];

export const AboutSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isMinTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMaxTablet = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const Break = () => <br />;

  const getCrossDimension = screenDimension =>
    screenDimension ? '36px' : '24px';

  const crossDimension = getCrossDimension(isDesktop);

  return (
    <StyledSection>
      <Container>
        <Wrapper>
          <SectionTitle id="about">
            a Story that started with{' '}
            <Span>
              one simple
              {isMobile && Break()} ape
            </Span>
          </SectionTitle>

          <FirstTextWrap>
            <FirstText>
              WHO GOT FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW
              THE IDEA OF ESCAPING AND DYNAMIC
            </FirstText>
            <LastString>JOURNEY ON THE YACHT</LastString>
          </FirstTextWrap>

          <SecondTextWrap>
            <CrossIcon width={crossDimension} height={crossDimension} />

            <SecondText>
              EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS
              ARE RANDOMLY GENERATED BY USERS
            </SecondText>
          </SecondTextWrap>

          {isMobile && <Image src={SmallImg} alt="Ape in a cap" />}
          {isMinTablet && isMaxTablet && (
            <Image src={MiddleImg} alt="Ape in a cap" />
          )}
          {isDesktop && <Image src={BigImg} alt="Ape in a cap" />}
        </Wrapper>
      </Container>

      <BannerWrap>
        {banerSlogans.map((slogan, index) => (
          <BanerTextWrap key={index}>
            <BanerText>{slogan}</BanerText>

            <CrossIcon width="36px" height="36px" />
          </BanerTextWrap>
        ))}
      </BannerWrap>
    </StyledSection>
  );
};
