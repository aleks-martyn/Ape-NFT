import { Container } from 'components/Container';
import { StyledSection, SectionTitle } from './Section.styled';

export const Section = ({ id, title, children }) => (
  <StyledSection>
    <Container>
      <SectionTitle id={id}>{title}</SectionTitle>
      {children}
    </Container>
  </StyledSection>
);
