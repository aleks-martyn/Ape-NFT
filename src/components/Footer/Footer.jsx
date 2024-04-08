import { Container } from 'components/Container';
import textContent from '../../text-content.json';
import { StyledFooter, Text } from './Footer.styled';

export const Footer = () => {
  const {
    footer: { text },
  } = textContent;

  return (
    <StyledFooter>
      <Container>
        <Text>{text}</Text>
      </Container>
    </StyledFooter>
  );
};
