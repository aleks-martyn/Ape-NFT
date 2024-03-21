import { Container } from 'components/Container';
import { StyledSection, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => (
  <StyledSection>
    <Container>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  </StyledSection>
);
