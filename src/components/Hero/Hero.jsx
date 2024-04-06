import { useMediaQuery } from 'react-responsive';
import textContent from '../../text-content.json';
import SmallImg from '../../images/hero-mob.png';
import MiddleImg from '../../images/hero-tab.png';
import BigImg from '../../images/hero-desk.png';
import {
  StyledSection,
  StyledContainer,
  SectionTitle,
  Text,
  Image,
  InnerWrap,
  StyledLink,
  LinkLabel,
  Paragraph,
} from './Hero.styled';

export const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isMinTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMaxTablet = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

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

        {isMobile && <Image src={SmallImg} alt="Hero Ape" />}
        {isMinTablet && isMaxTablet && <Image src={MiddleImg} alt="Hero Ape" />}
        {isDesktop && <Image src={BigImg} alt="Hero Ape" />}

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
