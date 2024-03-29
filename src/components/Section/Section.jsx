import { Container } from 'components/Container';
import { StyledSection, SectionTitle } from './Section.styled';

export const Section = ({ id, title, children }) => (
  <StyledSection id={id}>
    <Container>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  </StyledSection>
);
