import { scroller } from 'react-scroll';
import { ImageSet } from 'components/ImageSet';
import textContent from '../../text-content.json';
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

  const handleKeyDown = event => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      scroller.scrollTo('mint', { smooth: true, duration: 500 });
    }
  };

  const onFocusHandler = () =>
    window.addEventListener('keydown', handleKeyDown);

  const onBlurHandler = () =>
    window.removeEventListener('keydown', handleKeyDown);

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
          <StyledLink
            to="mint"
            smooth={true}
            duration={500}
            tabIndex={0}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
          >
            <LinkLabel>MEET APES</LinkLabel>
          </StyledLink>

          <Paragraph>{thirdText}</Paragraph>
        </InnerWrap>
      </StyledContainer>
    </StyledSection>
  );
};
