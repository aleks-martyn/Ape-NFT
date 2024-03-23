import { useMediaQuery } from 'react-responsive';
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
  Link,
  LinkLabel,
  Paragraph,
} from './Hero.styled';

export const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isMinTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMaxTablet = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <StyledSection>
      <StyledContainer>
        <Text>diD yOu seE iT ?</Text>

        <SectionTitle>
          <span>YACHT</span>
          <span>APES</span>
        </SectionTitle>

        <Text>Apes aRe eveRywhere</Text>

        {isMobile && <Image src={SmallImg} alt="Hero Ape" />}
        {isMinTablet && isMaxTablet && <Image src={MiddleImg} alt="Hero Ape" />}
        {isDesktop && <Image src={BigImg} alt="Hero Ape" />}

        <InnerWrap>
          <Link href='#mint'>
            <LinkLabel>MEET APES</LinkLabel>
          </Link>

          <Paragraph>
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </Paragraph>
        </InnerWrap>
      </StyledContainer>
    </StyledSection>
  );
};
